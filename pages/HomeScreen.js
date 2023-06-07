import { View, Text, ScrollView, Button, TouchableOpacity, Pressable, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import pb from "../libs/pocketbase";
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("");
  const [adminMenu, setAdminMenu] = useState(false);
  const userId = pb.authStore.model.id;
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      const data = await pb.collection("nfts").getFullList();
      setItems([...data]);
      if (userId === "bre3usmbzeg22e4") {
        setAdminMenu(true);
      }
    };
    if (!isFocused) return;
    getUser();
    getData();
  }, [isFocused]);

  const getUser = async () => {
    const record = await pb.collection("users").getOne(userId);
    setUser(record);
  };

  const handleLogout = async () => {
    await pb.authStore.clear();
    navigation.navigate("Login");
  };

  //   const handleDelete = async(id) => {
  //     await pb.collection('nfts').delete(id);
  //   }

  const openGame = () => {
    navigation.navigate("Question");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {adminMenu && <Button title="Add NFT" onPress={() => navigation.navigate("Admin")} />}
        <Button title="Logout" onPress={handleLogout} />
        <View>
          <Pressable //Button
            onPress={openGame} //Navigate Here
            style={{
              padding: 10,
              marginLeft: 50,
              marginRight: 50,
              marginTop: 20,
              borderRadius: 50,
              backgroundColor: "#FAD30F"
            }}
          >
            {<Text style={{ textAlign: "center" }}>PlayGame</Text>}
          </Pressable>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "right", paddingRight: 20 }}>
          MBA count : {user.coin}
        </Text>
      </View>

      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {items.map(({ id, name, url, price }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", { id, url, name, price })}>
              <Card key={id} id={id} name={name} url={url} price={price} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;
