import { FlatList } from 'react-native'
import React from 'react'

const FlatListCustom = ({
    scrollIndicator,
    data,
    keyExtractor,
    contentContainerStyle,
    horizontal,
    renderItem,
    snapToInterval,
    decelerationRate,
    bounces,
    onScroll,
    scrollEventThrottle
}) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={scrollIndicator}
            data={data}
            keyExtractor={keyExtractor}
            contentContainerStyle={contentContainerStyle}
            horizontal={horizontal}
            renderItem={renderItem}
            snapToInterval={snapToInterval}
            decelerationRate={decelerationRate}
            bounces={bounces}
            onScroll={onScroll}
            scrollEventThrottle={scrollEventThrottle}
        />
    )
}

export default FlatListCustom
