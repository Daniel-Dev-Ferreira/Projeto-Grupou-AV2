import React, {useState, useEffect} from 'react';
import firebase, {firestore} from '../../../services/firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { 
    Container,
    Text,
    Input,
    InputTexto,
    ButtonComponent,
    ContainerBotoes,
    ButtonText
} from './styles';



const AddGroup = ({ navigation }) => {

    const [groupName, setGroupName] = useState('')

    function createGroupToFireBase() {
        
        const groupsRef = firestore.collection("groups").doc()
        const userID = firebase.auth().currentUser.uid
    
        groupsRef.set({
            groupID: groupsRef.id,
            groupName: groupName,
            userID: userID,
        }).then(function (docRef) { 
            console.log('Document written with ID:', groupsRef.id)
            addMembersOfChatToFirebase(groupsRef.id, userID)
    
        }).catch(function (error) {
            alert(error.message)
            console.error("error adding document: ", error)
        })
    }

    function addMembersOfChatToFirebase(groupId, userID) {
        const membersRef = firestore.collection("members").doc(groupId).collection('member').doc()
        membersRef.set({
            userID: userID
        }).then(function (docRef){
            navigation.goBack()
        })
        .catch(function (error) {
            console.error("Error adding document: ", error)
        })
    }

    performCreateGroup =() =>{
        
        return  createGroupToFireBase();
        
    }

    return (
        <Container>
            <InputTexto>Nome do Grupo:</InputTexto>
            <Input
                placeholder={"Informe o nome do Grupo"}
                value={groupName}
                onChangeText={ text => {setGroupName(text)}}
            />

        <ContainerBotoes>    
            <ButtonComponent onPress={performCreateGroup}>
                <ButtonText>Criar</ButtonText>
            </ButtonComponent>
        </ContainerBotoes>

    <Text>{groupName}</Text>
        </Container>

    );
}

export default AddGroup;