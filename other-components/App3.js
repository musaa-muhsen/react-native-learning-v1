//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
console.log(StyleSheet);

export default function App() {
  const [person, setPerson] = useState({name: 'jilly', age: 40});
// onChangeText is part of TextInput component 

console.log(person)
  return (
    <View style={styles.container}>
         
         <Text>Enter name:</Text>
         <TextInput 
             multiline
             style={styles.input} 
             placeholder="e.g John Doe"
             onChangeText={nameVal => {              
                  setPerson({...person, name: nameVal})
              }}
             />
           <TextInput
             keyboardType="numeric"
             style={styles.input}
             placeholder="e.g. 99"
             onChangeText={ageVal => { 
              setPerson({...person, age: ageVal})
             }}
            />  
         <Text>My name is {person.name} and my age is {person.age}</Text>
            
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    }
});

