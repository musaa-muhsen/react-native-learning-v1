import React , {useState} from 'react';
import { StyleSheet, Text,View ,TextInput, Button} from 'react-native';

const AddTodo = (props) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }
    //  same as onChangeText={(val) => changeHandler(val)}
    const submitHandle = props.submitHandlerProp;
    //console.log(props);
    return ( 
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandle(text)} title='add todo' color="coral"/>
        </View>
     );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})



 
export default AddTodo;