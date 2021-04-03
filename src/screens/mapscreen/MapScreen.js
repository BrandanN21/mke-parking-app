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
                        { latitude: 43.081910, longitude: -87.872780 } // point B- E Edgewood Ave & N Lake Dr 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Edgewood Ave & N Lake Dr to E Edgewood Ave & N Oakland Ave (GREEN)
                coordinates={[
                    { latitude: 43.081952, longitude: -87.872848 }, //point A- E Edgewood Ave & N Lake Dr
                    { latitude: 43.081979,  longitude: -87.887604 }, //point B- E Edgewood Ave & N Oakland Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // E Edgewood Ave & N Oakland Ave to N Oakland Ave & E North Ave (GREEN)
                    coordinates={[
                        { latitude: 43.081901,  longitude: -87.887604 }, //point A- E Edgewood Ave & N Oakland Ave
                        { latitude: 43.060105, longitude: -87.888062 } // point B- N Oakland Ave & E North Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                    {/*   
                    
                    1 through 8 points along N Lake Dr (RED)
                    
                    */}
                
                <Polyline
                // 1st point- E Edgewood Ave & N Lake Dr to N Lake Dr & E Newport Ave (RED)
                coordinates={[
                    { latitude: 43.081921, longitude: -87.872786}, //point A- E Edgewood Ave & N Lake Dr
                    { latitude: 43.079442,  longitude: -87.872491 }, //point B- N Lake Dr & E Newport Ave
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                 <Polyline
                // 2nd point- N Lake Dr & E Newport Ave to N Lake Dr (RED)
                    coordinates={[
                        { latitude: 43.079442,  longitude: -87.872491 }, //point A- N Lake Dr & E Newport Ave
                        { latitude: 43.078333,  longitude: -87.87235 } // point B- N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 3rd point- N Lake Dr to N Lake Dr (RED)
                    coordinates={[
                        { latitude: 43.078333,  longitude: -87.87235 }, //point A- N Lake Dr
                        { latitude: 43.076171,  longitude: -87.872067 } // point B- N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 4th point- N Lake Dr to N Lake & N Lincoln Memorial Dr(RED)
                    coordinates={[
                        { latitude: 43.076171,  longitude: -87.872067 }, //point A- N Lake Dr
                        { latitude: 43.074531,  longitude: -87.871843 } // point B- N Lake Dr & N Lincoln Memorial Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //5th point- N Lake Dr to N Lake & N Lincoln Memorial Dr(RED)
                    coordinates={[
                        { latitude: 43.074531,  longitude: -87.871843 }, //point A- N Lake Dr & N Lincoln Memorial Dr
                        {latitude: 43.074418,  longitude: -87.871924} // point B- N Lake Dr 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>
                

             <Polyline
                // 6th point- E Kenwood Blvd & N Lincoln Memorial Dr to E Locust St & N Lake Dr (RED)
                    coordinates={[
                        { latitude: 43.074418,  longitude: -87.871924}, //point A- E Kenwood Blvd & N Lincoln Memorial Dr
                        { latitude: 43.070939,  longitude: -87.872291 } // point B- E Locust St & N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>  


                <Polyline
                // 7th point- N Lake Dr & N Lincoln Memorial Dr to N Lake Dr & E Newberry Blvd (RED)
                    coordinates={[
                        { latitude: 43.070945, longitude: -87.872268}, //point A- N Lake Dr & N Lincoln Memorial Dr
                        { latitude: 43.069428,  longitude: -87.872709 } // point B- N Lake Dr & E Newberry Blvd 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


               <Polyline
                //8th point- N Lake Dr & E Newberry Blvd to N Lake Dr & E Park Pl  (RED)
                    coordinates={[
                        { latitude: 43.069428,  longitude: -87.872709 }, //point A-N Lake Dr & E Newberry Blvd 
                        { latitude: 43.067316,  longitude: -87.873403} // point B- E Park Pl & N Lake Dr
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                    {/*   

                    BEGINNING OF
                    1 through 10 points along N Lake Dr (GREEN)
                    
                    */}

                <Polyline
                // 1st point- E Edgewood Ave & N Lake Dr to N Lake Dr & E Newport Ave (GREEN)
                coordinates={[
                    { latitude: 43.081952, longitude: -87.872848 }, //point A- E Edgewood Ave & N Lake Dr
                    { latitude: 43.079444,  longitude: -87.872573 }, //point B- N Lake Dr & E Newport Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                 <Polyline
                // 2nd point- N Lake Dr & E Newport Ave to N Lake Dr (GREEN)
                    coordinates={[
                        { latitude: 43.079444,  longitude: -87.872573 }, //point A- N Lake Dr & E Newport Ave
                        { latitude: 43.078360,  longitude: -87.872449 } // point B- N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 3rd point- N Lake Dr to N Lake Dr (GREEN)
                    coordinates={[
                        {  latitude: 43.078360,  longitude: -87.872449 }, //point A- N Lake Dr
                        { latitude: 43.075989,  longitude: -87.872229} // point B- N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 4th point- N Lake Dr to N Lake & N Lincoln Memorial Dr (GREEN)
                    coordinates={[
                        { latitude: 43.075989,  longitude: -87.872229}, //point A- N Lake Dr
                        { latitude: 43.074577,  longitude: -87.872036 } // point B- N Lake Dr & N Lincoln Memorial Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //5th point- N Lake Dr to N Lake & N Lincoln Memorial Dr (GREEN)
                    coordinates={[
                        { latitude: 43.074577,  longitude: -87.872036 }, //point A- N Lake Dr & N Lincoln Memorial Dr
                        { latitude: 43.074432,  longitude: -87.872001} // point B- N Lake Dr 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>
                

                <Polyline
                // 6th point- E Kenwood Blvd & N Lincoln Memorial Dr to N Lake Dr (GREEN)
                    coordinates={[
                        { latitude: 43.074432,  longitude: -87.872001}, //point A- E Kenwood Blvd & N Lincoln Memorial Dr
                        { latitude: 43.071622,  longitude: -87.872299 } // point B- N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>  


                <Polyline
                // 7th point- N Lake Dr to E Locust St & N Lake Dr (GREEN)
                    coordinates={[
                        { latitude: 43.071622,  longitude: -87.872299 }, //point A- N Lake Dr
                        { latitude: 43.070931,  longitude: -87.872333 } // point B- E Locust St & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>  

               <Polyline
                // 8th point- E Locust St & N Lake Dr to N Lake Dr & E Newberry Blvd (GREEN)
                    coordinates={[
                        { latitude: 43.070931,  longitude: -87.872333}, //point A- N Lake Dr & N Lincoln Memorial Dr
                        {  latitude: 43.069133,  longitude: -87.872887 } // point B- N Lake Dr & E Newberry Blvd 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

               <Polyline
                // 9th point- N Lake Dr & E Newberry Blvd to N Lake Dr (GREEN)
                    coordinates={[
                        {  latitude: 43.069133,  longitude: -87.872887}, //point A-N Lake Dr & E Newberry Blvd 
                        { latitude: 43.067326,  longitude: -87.873455} // point B- N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // 10th point- N Lake Dr to N Lake Dr & E Park Pl  (GREEN)
                    coordinates={[
                        {  latitude: 43.067326,  longitude: -87.873455}, //point A- N Lake Dr
                        { latitude: 43.067280,  longitude: -87.873449} // point B- E Park Pl & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 
                    {/*   

                    END OF
                    1 through 10 points along N Lake Dr (GREEN)
                    
                    */} 


                <Polyline
                // E Locust Street & N Lake Dr to N Cambridge Ave (RED)
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
                // N Maryland Ave & N Farwell Ave to N Maryland Ave & N Prospect Ave (RED)
                    coordinates={[
                        { latitude: 43.062496,  longitude: -87.883044 }, //point A- N Maryland Ave & N Farwell Ave
                        { latitude: 43.060995,  longitude: -87.883033 } // point B- N Maryland Ave & N Prospect Ave
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // N Maryland Ave & E Kenwood Blvd to N Maryland Ave & N Prospect Ave (GREEN)
                    coordinates={[
                        { latitude: 43.074517,  longitude: -87.882917 }, //point A- N Maryland Ave & E Kenwood Blvd 
                        { latitude: 43.060826,  longitude: -87.883146 } // point B- N Maryland Ave & N Prospect Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 



                <Polyline
                // N Maryland Ave & E Kenwood Blvd to N Maryland Ave & E Edgewood Ave (GREEN)
                    coordinates={[
                        { latitude: 43.074517,  longitude: -87.882917 }, //point A- N Maryland Ave & E Kenwood Blvd 
                        { latitude: 43.081903,  longitude: -87.882727 } // point B- N Maryland Ave & E Edgewood Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // N Maryland Ave & E Kenwood Blvd to N Maryland Ave & E Edgewood Ave (RED)
                    coordinates={[
                        { latitude: 43.074558,  longitude: -87.882849 }, //point A- N Maryland Ave & E Kenwood Blvd 
                        { latitude: 43.081902,  longitude: -87.882647 } // point B- N Maryland Ave & E Edgewood Ave 
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 


                <Polyline
                // N Maryland Ave & E Kenwood Blvd to E Kenwood Blvd & N Lincoln Memorial Dr (RED)
                    coordinates={[
                        { latitude: 43.074558,  longitude: -87.882849 }, //point A- N Maryland Ave & E Kenwood Blvd 
                        { latitude: 43.074595,  longitude: -87.872151 } // point B- E Kenwood Blvd & N Lincoln Memorial Dr
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
                // 1st point- E Belleview Pl & N Wahl Ave to N Wahl Ave (GREEN)
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