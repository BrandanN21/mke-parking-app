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
               
               <Polyline
               // Maryland Ave & Edgewood Ave to N Lake Dr
                    coordinates={[
                        { latitude: 43.081926,  longitude: -87.882356 }, //point A
                        { latitude: 43.081899, longitude: -87.872835 } // point b 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //1st point- Edgewood Ave & N Lake Dr to E Park Pl
                    coordinates={[
                        { latitude: 43.081919, longitude: -87.872767 }, //point A- Edgewood Ave & N Lake Dr
                        { latitude: 43.07895,  longitude: -87.872529 } // point B- Downer Woods & N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                 <Polyline
                // 2nd point- Edgewood Ave & N Lake Dr to E Park Pl
                    coordinates={[
                        { latitude: 43.07895, longitude: -87.872529}, //point A- Downer Woods & N Lake Dr
                        { latitude: 43.067423,  longitude: -87.873343 } //point B- E Park Pl 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>



                <Polyline
                // 1st point- Locust Street & N Lake Dr to N Humboldt Blvd
                    coordinates={[
                        { latitude: 43.070945, longitude: -87.872268}, //point A- E Locust Street
                        { latitude: 43.071064,  longitude: -87.891480 } // point B- Riverside Park 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

               
                <Polyline
                // 2nd point- Locust Street & N Lake Dr to N Humboldt Blvd
                    coordinates={[
                        { latitude: 43.071064,  longitude: -87.891480 }, // point A- Riverside Park 
                        {latitude: 43.071098, longitude: -87.897662} //point A- N Humboldt Blvd
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

               
                {/* test for bradford ave cordinates
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
                </Polyline> */}
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