import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

const Card = ({ navigation, id, name, url, price }) => {
  return (
    <SafeAreaView>
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
      
      }}
    >
      <View
        style={{
          flex:1,//Thickness Bar
          marginTop: 20,
          width: "100%",
          flexDirection: "row",
          alignItems:'center',justifyContent:'center'
        }}
      >
      </View>
      <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{paddingTop:20,paddingBottom:20}}>
          <Image
            source={{
              uri: url,
            }}
            style={{ width: 200, height: 200}}
          />
          <Text style={{fontSize:18, fontWeight:'bold'}}>Name : {name}</Text>
          <Text style={{fontSize:18, fontWeight:'bold'}}>Price : {price}</Text>
        </View>
      </ScrollView>
      </SafeAreaView>
    </View>
    </SafeAreaView>
  );
};

export default Card;

