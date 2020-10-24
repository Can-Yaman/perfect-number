import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [userInput, setUserInput] = useState("");

  const checkPerfectNumber = () => {
    const num = userInput;
    setUserInput("");
    if (num === ""){alert("You need to type a number!")}
    else{
    let number = parseFloat(num);
    let numArr = [];
    for (let i = 1; i < number; i++ ){
      if (number % i === 0 ) {
        numArr.push(i)
      }
    };    
    if(numArr.reduce((a, b) => a + b, 0) === number)
      {alert("It is a perfect number")
      }else
      {
        alert("It is not a perfect number")
      }; 

  };};
  return (
    <SafeAreaView style ={{flex:1}}>
    <View style={styles.container}>
      <Text style ={styles.hero}>Check Your Perfect Number</Text>
      <TextInput
        placeholder="Type your number.."
        keyboardType="numeric"
        style={{ width: "70%", borderColor: 'black', borderWidth: 5, padding:5,fontSize:20, textAlign:"center", margin:20 }}
        onChangeText={(text) => setUserInput(text)}
        value = {userInput}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={checkPerfectNumber}>
        <Text style={{fontSize:20}}>Check Number</Text>
      </TouchableOpacity>   
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7c7c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    margin:20,
    padding:10
  },
  buttonContainer:{
    width:"50%",
    backgroundColor:"aqua",
    margin:20,
    padding:10,
    borderRadius:10,
    alignItems:"center"
  }
});
