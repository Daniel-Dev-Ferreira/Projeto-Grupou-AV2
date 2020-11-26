import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


function GroupsItem({ item }) {
    return (
        <View>
            <View style={styles.container}>
                <Image source={require('../../assets/team.png')} style = {styles.Image} />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.groupTitle}>{item.groupName}</Text>
                    <Text style={styles.groupMembers}>{item.groupMembers}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: 350,
        margin: 10
    },
    descriptionContainer: {
        margin: 5
    },
    Image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        shadowColor: "gray",
        shadowRadius: 2,
    },
    groupTitle: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    groupMembers: {
        color: "teal",
        fontSize: 14
    },
    separator: {
        height: 0.5,
        width: "100%",
        backgroundColor: "blue"
    }
})

export default GroupsItem