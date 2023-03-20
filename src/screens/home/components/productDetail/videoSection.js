import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Color from "📂common/color"
import PlayIcon from 'react-native-vector-icons/Entypo';
import YoutubePlayer from "react-native-youtube-iframe";

const VideoSection = ({ productDetail }) => {
    const [playVideo, setPlayVideo] = useState(false)
    const imgEmpty = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziworbvlic7AHSQtFx32ezenB4DlBApFo9g&usqp=CAU"
    
    return (
        <View style={styles.containerVideo}>
            <ImageBackground
                source={{ uri: productDetail ? productDetail.image : imgEmpty }}
                style={styles.thumbNail}>
                <TouchableOpacity
                    style={styles.btnPlay}
                    onPress={() => setPlayVideo(true)}>
                    <PlayIcon
                        name={"controller-play"}
                        color={Color.white}
                        size={30}
                    />
                </TouchableOpacity>
            </ImageBackground>
            {playVideo &&
                <View style={styles.videoStyle}>
                    <YoutubePlayer
                        height={"100%"}
                        width={"100%"}
                        play={true}
                        videoId={productDetail ? productDetail.video : ""}
                    />
                </View>
            }
        </View>
    )
}

export default VideoSection

const styles = StyleSheet.create({
    containerVideo: {
        height: 220,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: Color.grey
    },
    thumbNail: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnPlay: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: Color.red
    },
    videoStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: Color.black,
    }
})