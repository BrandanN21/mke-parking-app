import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'

export default function AccountScreen() {
    return (
        <View>
            <TouchableHighlight
            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
            >
                <Image source={require("../../../assets/persona.jpg")}
                style={styles.profileImg} />
            </TouchableHighlight>
            <Text style={styles.text}>Katlyne Featherstone</Text>
        </View>
    )
}


// styles for account page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        top: '50%'
    },
    profileImgContainer: {
        marginLeft: '35%',
        top: '40%',
        height: 160,
        width: 160,
        borderRadius: 80,
      },
      profileImg: {
        resizeMode: "cover",
        height: 160,
        width: 160,
        borderRadius: 80,
      },

})