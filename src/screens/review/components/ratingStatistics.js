import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-stock-star-rating'
import { LinearProgress } from 'react-native-elements';

const RatingStatistics = ({ reviewProductId }) => {
    var fivestarRating = reviewProductId.filter(function (item) {
        return item.rating_value == "5"
    });

    var fourstarRating = reviewProductId.filter(function (item) {
        return item.rating_value == "4"
    });

    var threestarRating = reviewProductId.filter(function (item) {
        return item.rating_value == "3"
    });

    var twostarRating = reviewProductId.filter(function (item) {
        return item.rating_value == "2"
    });

    var onestarRating = reviewProductId.filter(function (item) {
        return item.rating_value == "1"
    });

    return (
        <View style={styles.boxStar}>
            <View style={styles.boxRatingStatistics}>
                <Rating stars={5} maxStars={5} size={15} />
                <LinearProgress
                    style={styles.energyBar}
                    value={fivestarRating.length / 10}
                    variant="determinate"
                    color="red"
                />
            </View>
            <View style={styles.boxRatingStatistics}>
                <Rating stars={4} maxStars={5} size={15} />
                <LinearProgress
                    style={styles.energyBar}
                    value={fourstarRating.length / 10}
                    variant="determinate"
                    color="red"
                />
            </View>
            <View style={styles.boxRatingStatistics}>
                <Rating stars={3} maxStars={5} size={15} />
                <LinearProgress
                    style={styles.energyBar}
                    value={threestarRating.length / 10}
                    variant="determinate"
                    color="red"
                />
            </View>
            <View style={styles.boxRatingStatistics}>
                <Rating stars={2} maxStars={5} size={15} />
                <LinearProgress
                    style={styles.energyBar}
                    value={twostarRating.length / 10}
                    variant="determinate"
                    color="red"
                />
            </View>
            <View style={styles.boxRatingStatistics}>
                <Rating stars={1} maxStars={5} size={15} />
                <LinearProgress
                    style={styles.energyBar}
                    value={onestarRating.length / 10}
                    variant="determinate"
                    color="red"
                />
            </View>
        </View>
    )
}

export default RatingStatistics

const styles = StyleSheet.create({
    boxStar: {
        marginTop: 17,
        flex: 1
    },
    boxRatingStatistics: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    energyBar: {
        flex: 1,
        height: 10,
        width: 100,
        borderRadius: 50,
        marginTop: 4,
        marginLeft: 10
    }
})