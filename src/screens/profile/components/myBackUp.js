import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const MyBackUp = () => {
    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'Four Item',
        },
    ];
    return (
        <View
            style={styles.container}>
            {DATA.map((item, i) => (
                <View key={item.id}>
                    <TouchableOpacity
                        style={styles.backupItem}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

export default MyBackUp

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between',
    },
    backupItem: {
        width: 130,
        height: 150,
        marginVertical: 0.5,
        backgroundColor: 'pink',
    }
})