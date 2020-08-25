import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value),
            setValue('') 
        } else {
            Alert.alert('field is empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="add your task"
                autoCorrect={false}
                autoCapitalize="none"
            
            />
            <Button title="add" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        padding: 10,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'

    }
})