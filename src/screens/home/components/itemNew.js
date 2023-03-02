import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import EyeIcon from 'react-native-vector-icons/Entypo';

const ProductItemNew = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.boxItemTrend}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.imageItem}
                />
                <View style={styles.txtItem}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <View style={styles.itemViewer}>
                        <EyeIcon
                            name={"eye"}
                            color={Color.white}
                            size={20}
                        />
                        <Text style={styles.txtViewer}>{item.viewer}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItemNew

const styles = StyleSheet.create({
    boxItemTrend: {
        height: 100,
        marginTop: 5,
        marginHorizontal: 20,
        padding: 5,
        backgroundColor: Color.opacityWhite,
        borderRadius: 10,
        flexDirection: 'row'
    },
    imageItem: {
        height: '100%',
        width: 100,
        borderRadius: 10,
    },
    itemViewer: {
        flexDirection: 'row',
    },
    txtItem: {
        justifyContent: 'center',
        paddingLeft: 10,
    },
    txtName: {
        fontSize: 20,
        color: Color.white,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    txtTitle: {
        fontSize: 16,
        color: Color.white,
        opacity: 0.8,
        marginBottom: 5,
    },
    txtViewer: {
        fontSize: 14,
        color: Color.white,
        opacity: 0.8,
        marginLeft: 5
    }
})