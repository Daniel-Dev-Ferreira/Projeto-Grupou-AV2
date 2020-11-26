import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, FlatList, KeyboardAvoidingView, Alert } from 'react-native'
import firebase, { firestore } from '../../../services/firebase';
import MessageItem from '../../component/MessageItem';
import MessageFieldView from '../../component/MessageFieldView';
import { Container } from './styles';
import DismissKeyboard from '../../component/DismissKeyboard';


function ChatScreen({ route, navigation }) {
    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState('')
    const [isJoined, setIsJoined] = useState(false)

    const { item } = route.params
    const userID = firebase.auth().currentUser.uid

    useEffect(() => {
        console.log(item)
        getUserJoinedAlreadyOrNot()
        getMessages()
    }, [])

    function getUserJoinedAlreadyOrNot() {
        firestore.collection("members").doc(item.groupID).collection("member").where("userID", "==", userID)
            .get().then(function (querySnapshot) {
                if (querySnapshot.size > 0) {
                    querySnapshot.forEach(function (doc) {
                        if (doc.data() != null) {
                            setIsJoined(true)
                        } else {
                            setIsJoined(false)
                            showAlertToJoinGroup()
                        }
                    })
                } else {
                    showAlertToJoinGroup()
                }
            }).catch(function (error) {
                console.log("Error getting documents: ", error)
            })
    }

    function showAlertToJoinGroup() {
        alert(
            'teste'
            [{
                text: 'Yes', onPress: () => {
                    joinGroup()
                }
            }, {
                text: 'No', onPress: () => {

                }
            }
            ],
            { cancelable: false }
        )
    }

    function joinGroup() {
        const groupMemberRef = firestore.collection("members").doc(item.groupID).collection('member').doc()
        groupMemberRef.set({
            userID: userID,
        }).then(function (docRef) {
            setIsJoined(true)
            alert('teste')
            setMessage('')
        }).catch(function (error) {
            setIsJoined(false)
            alert('teste')
        })
    }

    function getMessages() {
        const db = firestore
        var messages = []

        db.collection("message").doc(item.groupID).collection("messages")
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        messages.push(change.doc.data())

                    }
                    setMessageList(messages)
                })
            })
    }

    function sendMessagesToChat() {
        const messageRef = firestore.collection("message").doc(item.groupID).collection("messages").doc()
        const userEmail = firebase.auth().currentUser.email

        messageRef.set({
            messageID: messageRef.id,
            message: message,
            senderId: userID,
            senderEmail: userEmail
        }).then(function (docRef) {
            setMessage('')
        }).catch(function (error) {
            alert(error.message)
            
        })

    }



    return (
       
        <DismissKeyboard>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}
                 >
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={messageList}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {

                                }}>

                                    <MessageItem item={item} />
                                </TouchableOpacity>
                            )
                        }}
                    />

                    <View style={styles.messageFieldView}>
                        <MessageFieldView term={message}
                            placeHolder={"sua mensagem"}
                            onTermChange={message => setMessage(message)}
                            onSubmit={sendMessagesToChat}
                        >

                        </MessageFieldView>

                    </View>



                </View>

            </KeyboardAvoidingView>
            </DismissKeyboard>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#6495ED',
        padding: 10,
        paddingBottom: 25
    },
    flatList: {
        marginBottom: 10,
        flex: 0.9,
    },
    messageFieldView: {
        height: 50,

    }
})

export default ChatScreen