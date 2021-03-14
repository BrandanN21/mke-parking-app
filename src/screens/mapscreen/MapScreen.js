import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Polyline } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const MapScreen = () => {
    return (
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
        padding: "2%",
        fontSize:  33,
        top: '50%'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    view: {
        position: 'relative'
        
    }

})
export default MapScreen;