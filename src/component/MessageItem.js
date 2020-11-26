import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import firebase, { firestore } from '../../services/firebase';


function MessageItem({ item }) {
    const userID = firebase.auth().currentUser.uid

    function messageView() {
        if (userID === item.senderId) {
            return (
                <View style={styles.othersMessageContainerView}>
                    <Text style={[styles.senderName, { textAlign: 'right' }]} >{item.senderEmail}</Text>
                    <Text style={[styles.message, { textAlign: 'right' }]}>{item.message}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.myMessageContainerView}>
                    <Text style={styles.senderName}> {item.senderEmail}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            )
        }
    }

    return(
        messageView()
    )
}

const styles = StyleSheet.create({
    othersMessageContainerView: {
        width: 300,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginLeft: 25,
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    myMessageContainerView: {
        width: 300,
        backgroundColor: 'gray',
        borderRadius: 5,
        margin: 5,
        padding: 10
    },
    senderName: {
        color: 'yellow',
        fontSize: 14,
        fontWeight: 'bold'
    },

    message: {
        color: 'white',
        fontSize: 14
    }
})


export default MessageItem