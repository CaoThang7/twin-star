import { StyleSheet, View } from 'react-native'
import React from 'react'
import UserMarkItem from './userMarkItem'
import RightSwipeItem from './rightSwipeItem'
import FlatListCustom from '📂components/flatlist'
import { deleteMarkById } from '📂redux/slices/mark'
import { useDispatch } from "react-redux"

const MyMovieList = ({ userMark, setUserMark, authToken }) => {
    const dispatch = useDispatch();

    const deleteMark = (item) => {
        const id = item._id
        const tempData = userMark;
        const selectedData = tempData.filter((item) => {
            return item._id !== id;
        })
        setUserMark(selectedData)
        dispatch(deleteMarkById({ id, authToken }))
    }

    return (
        <View style={styles.container}>
            <FlatListCustom
                scrollIndicator={false}
                data={userMark}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.contentContainerStyle}
                decelerationRate={0}
                bounces={false}
                renderItem={({ item }) =>
                    <UserMarkItem
                        item={item}
                        rightSwipe={() => (<RightSwipeItem onPress={() => deleteMark(item)} />)}
                    />
                }
            />
        </View>
    )
}

export default MyMovieList

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        marginHorizontal: 15,
    },
    contentContainerStyle: {
        marginHorizontal: 0,
    },
})