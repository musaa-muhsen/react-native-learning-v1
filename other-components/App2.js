//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
console.log(StyleSheet);

export default function App() {
  const [name, setName] = useState('john');
  const [person, setPerson] = useState({name: 'mario', age: 40});

  const clickHandler = () => {
    setName('tom');
    setPerson({name: 'luigi', age: 45});
  }

  return (
    <View style={styles.container}>
         <Text>My name is {name}</Text>
         <Text>My name is {person.name} and my age is {person.age}</Text>
         <View style={styles.buttonContainer}>
             <Button title="update state" onPress={ clickHandler}/>
         </View>
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
  buttonContainer: {
    marginTop: 20
  }

});

/*
how react native works 
similar to normal react so create an app by building a component tree 
react native provides us with a bunch of components out of the box 
that we can use to make our own layouts like a text component or 
a view component etc 
react native takes these components and it compiles them into native code 
and widgets that work on andriod and ios so that we can see them in our 
real device or some kind of emulator 
now theres not that many core components but you can easily expand on those core components to create custom ones like buttons or cards 
 expo cli abstracts away from the native code and it makes it much simpler to get up and running with native especially if you're new to it basically acts as like a wrapper around our app which is going to provide us with a simplified app development workflow good for working with the camera etc 
because of the abstration of expo its less flexibilty 
react native cli doesnt abstract away from the native code and requires a bit more configuration and effort 
react native cli app this way it's considered to be a pure react native app because it contains additional utility features or configuation and it consists only that the bare essentials and that means you're going to have to import other libraries to achieve different things like working with the camera and you would'nt have to do that if your were using expo        
behind the scenes expo servers are hostings our app and then the mobile is connecting to those servers so that we can preview that app on our own device   
AVD andriod virtual devices 
babel is a compiler which allows us to use modern javascript 
control c to exit command line and npm start or expo start 
<View></View> is like a div to wrap elements 
<Text></Text> we use the text component to output any text 
also style = {styles.container} 

StyleSheet.create({
  container: {
    flex: 1
  }
});

react native emulates the idea of css as ios and andriod devices do not suport css, so what react native does is kind of emulate the idea of css to something were more familiar with and then takes all those properties and converts it into a way that mobiles to understand 
hooks give us a way to use special functions to tap into certain features in the react library

rr 
*/