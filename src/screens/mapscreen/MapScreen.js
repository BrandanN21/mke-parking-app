import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Polyline } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MapScreen = () => {
    return (

    <SafeAreaView style={styles.container}>
        
        
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
            latitude: 43.063757,
            longitude: -87.887930,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421}}
            showsMyLocationButton={true}
            showsUserLocation={true}
        >

                {/* test for bradford ave cordinates */}
                <Polyline
                    coordinates={[
                        { latitude: 43.063757,  longitude: -87.887930 }, //point A
                        { latitude: 43.063712, longitude: -87.883162} // point b 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>
                <Polyline
                    coordinates={[
                        { latitude: 43.066002, longitude: -87.887978}, //point a
                        { latitude: 43.063757,  longitude: -87.887930 } //point b
                    ]}
                    stokeColor="red"
                    strokeWidth={4}
                >  
                </Polyline>
        </MapView> 
        <View style={styles.scrollContainer}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>LEGEND</Text>
                <Text style={styles.text2}>
                <View style={styles.squareRed}></View> = No overnight parking on either side of the street 2:00 a.m. - 6:00 a.m. 
                from Dec. 1 to Mar 1 and during a Snow Emergency 10:00 p.m. - 6:00 a.m. Alternate side parking 
                rules apply March 2 to Nov 30, unless there is a Snow Emergency.
                {'\n'} 
                {'\n'} 
                <View style={styles.squareGreen}></View> = Parking allowed on both sides of the street for up to 48 hours with a 
                valid night parking permit and alternate side parking 10:00 p.m. - 6:00 a.m. during a Snow Emergency. 
                If a street is also red, follow red instructions December 1 to March and during Snow Emergencies.
                </Text>
            </ScrollView>
        </View>
    </SafeAreaView>
    )
}

// styles for map screen
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
        fontSize:  25,
        paddingBottom: 5,
        color: '#FFF'
    },
    text2: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 20
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    view: {
        position: 'relative'
        
    }, 
    scrollView: {
        paddingTop: 10,
        top: '0%',
        backgroundColor: 'rgba(24, 34, 75, 1)', 
        maxHeight: '25%', 
        width: '95%',
        paddingHorizontal: 10,
        borderRadius: 25,
    },
    scrollContainer:{
        flex:1,
        justifyContent: 'flex-start',
    },
    squareRed: {
        width: 15,
        height: 15,
        backgroundColor: "red",
    },
    squareGreen: {
        width: 15,
        height: 15,
        backgroundColor: "green",
    },
})
export default MapScreen;