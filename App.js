//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackComponent} from 'react-native';
// keyboard object dismisses the keyboard 
import Header from './components/Header';
import TodoItem from './components/ToDoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

   
  const handleClick = (key) => {
    //console.log(key)
    const deleteTodo = todos.filter(todo => todo.key != key);
    setTodos(deleteTodo)
}

const submitHandler = (textArg) => {
 
  if(textArg.length > 3 ) {
    const newText = [{text: textArg, key: Math.random().toString()}, ...todos]
    setTodos(newText);
  } else {
    Alert.alert('OOPS!' , 'todos must be over over 3 chars long', [
      {text: 'Understood', onPress: () => console.log('alert closed')}
    ]);
  } 
}

  
  return (
<TouchableWithoutFeedback onPress={() => {
  Keyboard.dismiss();
  console.log('dismissed keyboard'); // listen to touch event

}}>
    <View style={styles.container}>
        {/* header */} 
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandlerProp={submitHandler}/>
          {/* to form */} 
          <View style={styles.list}>
              <FlatList 
                 data={todos}
                 renderItem={({item}) => (
                     <TodoItem itemProp={item} handleClickProp={handleClick} />
                 )}
              />
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
} // end of App Comp

const styles = StyleSheet.create({
  container: {
    // flex-direction is already column 
 
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
   
  flex: 1,
    padding: 40,
    borderWidth: 1,
    borderColor: '#000',
  },
  list: {
    flex: 4,
    // borderWidth: 1,
    // borderColor: '#FF0000',
    marginTop: 20
  }
});
// flex doesnt push it off the screen 
// view is like a container for things that belong together 
