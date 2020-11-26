import React, {useLayoutEffect, useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { 
    Container,
    ContainerTitulo,
    ContainerItens,
    ImageIcon2,
    GroupText,
    Text,
    ButtonWithBackground,
    ImageIcon
} from './styles';

import GroupItem from '../../component/GroupsItems';

import firebase, { firestore } from '../../../services/firebase';
import { withTheme } from 'styled-components';

const Groups = ({navigation}) => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getChats()
    }, [])

    function getChats() {
        const db = firestore
        var groupArray = []

        db.collection("groups")
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type == "added") {
                       groupArray.push(change.doc.data())
                    }
                    setGroups(groupArray)
                })
            })

    }

    return (
        <Container>
            <ContainerTitulo>
                <Text>Criar um novo Grupo</Text>
                <ButtonWithBackground onPress = {() => {
                    navigation.navigate('screenAddGroup')
                }}>
                    <ImageIcon source={require('../../../assets/add.png')}/>
                </ButtonWithBackground>
            </ContainerTitulo>

            <View style={styles.container}>
            <FlatList
                data={groups}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{borderBottomWidth: 1, borderColor: 'white'}} onPress={() => {
                            navigation.navigate('screenChat', {
                                item
                            })
                        }}>
                            <GroupItem item={item}></GroupItem>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>
        </View>

            
        </Container>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ED',
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Groups;