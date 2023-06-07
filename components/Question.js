import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import questions from "./questions";
import pb from "../libs/pocketbase";

const Question = ({ navigation }) => {
  const [ans, setAns] = useState(false);
  const [qNum, setqNum] = useState(0);
  const [coin, setCoin] = useState(0);
  const [user, setUser] = useState("");
  const userId = pb.authStore.model.id;
  const [textResult, settextResult] = useState('');
  const [result, setresult] = useState(false);


  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const record = await pb.collection("users").getOne(userId);
    setUser(record);
  };

  const upDateCoin = async () => {
    const up = user.coin += coin
    const data = {
      coin: up,
    };
    await pb.collection("users").update(userId, data);
  }

  const check = async (checkans) => {
    let num = qNum;
    let checknum = questions.length - 1
    if (checknum == num) {
      setqNum(0);
      settextResult('Total MBA coin after play the game : ' + coin);
      setresult(true);
    } else {
      if (questions[num].ans == checkans) {
        Alert.alert("", "Correct");
        setCoin(coin + 1);
        setqNum(num + 1);
        return;
      }
      Alert.alert("", "Incorrect!!");
      setqNum(num + 1);
    }
  };
  const goback = () => {
    upDateCoin();
    console.log(coin);
    setCoin(0);
    navigation.navigate('HomePage');
  }
  return (
    <View>
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.headerQuestion}>Question</Text>
    </View>
    {result ? (
      <View>
        <Text style={[styles.headerQuestion, { fontSize: 24 }]}>{textResult}</Text>
        <View style={{ width: "100%", alignItems: "center", padding: 40 }}>
          <Button title="Go Back to Home Page" color="blue" onPress={goback} />
        </View>
      </View>
    ) : (
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30 }}>{questions[qNum]?.question}</Text>
          <Text style={{ fontSize: 20, paddingBottom: 60 }}>MBA coin : {coin}</Text>
        </View>
        <View
          style={{
           
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 6
          }}
        >
          <View style={styles.Button}>
            <Button
              title="True"
              color="green"
              onPress={() => {
                let copyAns = true;
                setAns(copyAns);
                check(copyAns);
              }}
            />
          </View>

          <View style={styles.Button}>
            <Button
              title="false"
              color="red"
              onPress={() => {
                let copyAns = false;
                setAns(copyAns);
                check(copyAns);
              }}
            />
          </View>
        </View>
      </View>
    )}
  </View>



  );
};
const styles = StyleSheet.create({
  headerQuestion: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 0,
    padding: 12,
    color: "red",
  },Button: {
    width: 150,
    paddingTop: 50,
  },
});
export default Question;
