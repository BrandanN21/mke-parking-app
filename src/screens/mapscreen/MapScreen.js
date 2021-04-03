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
               // N Oakland Ave & E Edgewood Ave to N Lake Dr & E Edgewood Ave(RED)
                    coordinates={[
                        { latitude: 43.081901,  longitude: -87.887604 }, //point A- E Edgewood Ave & N Oakland Ave
                        { latitude: 43.081899, longitude: -87.872835 } // point B- E Edgewood Ave & N Lake Dr 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Edgewood Ave & N Lake Dr to E Edgewood Ave & N Oakland Ave (GREEN)
                coordinates={[
                    { latitude: 43.081952, longitude: -87.872848 }, //point A- E Edgewood Ave & N Lake Dr
                    { latitude: 43.081979,  longitude: -87.887604 }, //point A- E Edgewood Ave & N Oakland Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // E Edgewood Ave & N Oakland Ave to N Oakland Ave & E North Ave   (GREEN)
                    coordinates={[
                        { latitude: 43.081901,  longitude: -87.887604 }, //point A- E Edgewood Ave & N Oakland Ave
                        { latitude: 43.060105, longitude: -87.888062 } // point B- N Oakland Ave & E North Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Edgewood Ave & N Lake Dr to N Lake Dr & E Newport Ave (GREEN)
                coordinates={[
                    { latitude: 43.081952, longitude: -87.872848 }, //point A- E Edgewood Ave & N Lake Dr
                    { latitude: 43.079444,  longitude: -87.872573 }, //point A- N Lake Dr & E Newport Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                // E Edgewood Ave & N Lake Dr to N Lake Dr & E Newport Ave (RED)
                coordinates={[
                    { latitude: 43.081903, longitude: -87.872752}, //point A- E Edgewood Ave & N Lake Dr
                    { latitude: 43.079442,  longitude: -87.872491 }, //point A- N Lake Dr & E Newport Ave
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                 <Polyline
                // N Lake Dr & E Newport Ave & N Lake Dr to E Park Pl (RED)
                    coordinates={[
                        { latitude: 43.079442,  longitude: -87.872491 }, //point A- N Lake Dr & E Newport Ave
                        { latitude: 43.067315,  longitude: -87.873417 } // point B- E Park Pl & N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // Locust Street & N Lake Dr to N Cambridge Ave (RED)
                    coordinates={[
                        { latitude: 43.070945, longitude: -87.872268}, //point A- E Locust Street
                        { latitude: 43.071064,  longitude: -87.891480 } // point B- N Cambridge Ave 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E North Ave & N Cambridge Ave to E North Ave & N Lake Dr (RED)
                    coordinates={[
                        { latitude: 43.060120, longitude: -87.891923}, //point A- E North Ave & N Cambridge Ave
                        { latitude: 43.060090,  longitude: -87.88116 } // point B- E North Ave & N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E North Ave & N Lake Dr to N Lake Dr (RED)
                    coordinates={[
                        { latitude: 43.060090,  longitude: -87.88116}, //point A- E North Ave & N Lake Dr
                        { latitude: 43.059989,  longitude: -87.880417} // point B- E North Ave & N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E North Ave & N Lake Dr to E Park Pl & N Lake Dr (GREEN)
                    coordinates={[
                        { latitude: 43.060049,  longitude: -87.880461}, //point A- E North Ave & N Lake Dr
                        { latitude: 43.067315,  longitude: -87.873417 } // point B- E Park Pl & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // N Lake Dr to N Lake Dr (RED)
                    coordinates={[
                        { latitude: 43.059989,  longitude: -87.880417}, //point A- E North Ave & N Lake Dr
                        { latitude: 43.062409,  longitude: -87.878102} // point B- N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E North Ave & N Cambridge Ave to N Cambridge Ave & E Thomas Ave (GREEN)
                    coordinates={[
                        { latitude: 43.060145, longitude: -87.891707 }, //point A- E North Ave & N Cambridge Ave
                        { latitude: 43.061239,  longitude: -87.891667 } // point B- N Cambridge Ave & E Thomas Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E North Ave & N Cambridge Ave to E North Ave & N Newhall St(GREEN)
                    coordinates={[
                        { latitude: 43.060145, longitude: -87.891707 }, //point A- E North Ave & N Cambridge Ave
                        { latitude: 43.060140,  longitude: -87.890489 } // point B- E North Ave & N Newhall St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // E North Ave & N Newhall St to N Newhall St (GREEN)
                    coordinates={[
                        { latitude: 43.060140,  longitude: -87.890489 }, //point A- E North Ave & N Newhall St
                        { latitude: 43.063089,  longitude: -87.890430 } // point B- N Newhall St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // E North Ave & N Newhall St to N Newhall St (GREEN)
                    coordinates={[
                        { latitude: 43.063089,  longitude: -87.890430 }, //point A- N Newhall St
                        { latitude: 43.063772,  longitude: -87.890570 } // point B- N Newhall St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // N Newhall St to N Newhall St & E Bradford Ave (GREEN)
                coordinates={[
                    { latitude: 43.063772,  longitude: -87.890570 }, //point A- N Newhall St
                    { latitude: 43.063760,  longitude: -87.890868 } // point B- N Newhall St & E Bradford Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // E Belleview Pl & N Newhall St to E Belleview Pl & N Hackett Ave (GREEN)
                coordinates={[
                    { latitude: 43.066128,  longitude: -87.891298 }, //point A- E Belleview Pl & N Newhall St
                    { latitude: 43.066059,  longitude: -87.877921} // point B- E Belleview Pl & N Hackett Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E Belleview Pl & N Newhall St to E Belleview Pl & N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.066059,  longitude: -87.877921}, //point A- E Belleview Pl & N Hackett Ave
                    { latitude: 43.063801,  longitude: -87.873634} // point B- E Belleview Pl & N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // E Belleview Pl & N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.063801,  longitude: -87.873634}, //point A- E Belleview Pl & N Wahl Ave
                    { latitude: 43.064518,  longitude: -87.873037} // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // 1st point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.064518,  longitude: -87.873037}, //point A- N Wahl Ave
                    { latitude: 43.065032,  longitude: -87.872850} // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 2nd point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.065032,  longitude: -87.872850}, //point A- N Wahl Ave
                    { latitude: 43.065646,  longitude: -87.872788} // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                // 3rd point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.065646,  longitude: -87.872788}, //point A- N Wahl Ave
                    { latitude: 43.066434,  longitude: -87.872932 } // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                // 4th point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.066434,  longitude: -87.872932}, //point A- N Wahl Ave
                    { latitude: 43.067281,  longitude: -87.873299 } // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 5th point- N Wahl Ave to N Wahl Ave & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.067281,  longitude: -87.873299 }, //point A- N Wahl Ave
                    { latitude: 43.067319,  longitude: -87.873385 } // point B- N Wahl Ave & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
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