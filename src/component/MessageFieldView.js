import React from 'react'
import { TextInput, Text, StyleSheet, View, Button } from 'react-native'



const MessageFieldView = ({ term, placeHolder, onTermChange, onValidateTextField, error, onSubmit, isJoined }) => {
    return (
        <View style={styles.containerView}>
            <View style={styles.fieldView}>
                <TextInput
                    autoCorrect={false}
                    style={styles.textField}
                    placeholder={placeHolder}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onValidateTextField}
                />
                <Button title = {"Enviar"} color = {"green"} onPress = {onSubmit}/>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: 'white',
        width: 300,
        flex: 1,
        justifyContent: 'space-between',
    },
    fieldView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green'

    },
    textField: {
        fontSize: 14,
        flex: 1,
        height: 50,
        marginRight: 10,
        paddingLeft: 10,
        width: '75%',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    Button: {
        flex: 1,
        alignSelf: 'center',
        width: '27%',
        height: '100%',
    }
})

export default MessageFieldView
