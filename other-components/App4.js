//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';


export default function App() {
  const [people,setPeople]=useState([
    {name:'shaun', id:'1'},
    {name:'yoshi', id:'2'},
    {name:'mario', id:'3'},
    {name:'luigi',id:'4'},
    {name:'peach', id:'5'},
    {name:'toad', id:'6'},
    {name:'bower', id:'7'},

  ]);
  const pressHandler = (id) => {
      console.log(setPeople)
      
      //const newPeople = people.filter(person => person.id != id) 
      //setPeople(newPeople);
      // same as above 
      setPeople((prevPeople) => {
        console.log(prevPeople) // 7 of the object
        prevPeople.filter(person => person.id != id);
      })
  }
  
  
  // now we need the key property because when we output lists inside react, react needs to keep track of the different elements that we output and we use that key property for each one of those elements  
// scrollView = if we want something to be scrollable we then have to surround the it with a scroll view component to say whatever is inside this component we want the user to be able to scroll through this 
// <FlatList /> data prop  , flatlist automatically looks for key property, benifit of FlatList is it behaves like a easyloader as well so better performs 
  return (
    <View style={styles.container}>
     
      <FlatList
      numColumns={2} // how many columns on each properties 
      keyExtractor={(item) => item.id} //change key to id 
       data={people} 
       renderItem={({item}) => (
        <TouchableHighlight onPress={() => pressHandler(item.id)}>
         <Text style={styles.item}>{item.name}</Text>
         </TouchableHighlight>
       )}

      />
      
      {/* <ScrollView>
         {
           people.map(item => (
             
                <View key={item.key}>
                 <Text style={styles.item}>{item.name}</Text> 
                </View>
             )
           )
         }
         </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  item: {
    margin: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24, 
    marginHorizontal: 10,
    marginTop: 24
  }
});
