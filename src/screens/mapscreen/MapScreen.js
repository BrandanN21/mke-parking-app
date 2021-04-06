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


                {/* 
                Added these points

                 */}
                <Polyline
                // E Edgewood Ave & N Cramer St to N Cramer St & E North Ave (GREEN)
                coordinates={[
                    { latitude: 43.081954, longitude: -87.886434 }, //point A- E Edgewood Ave & N Cramer St
                    { latitude: 43.060143,  longitude: -87.886830 }, //point B- N Cramer St & E North Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Kenwood Blvd & N Murray Ave to N Murray Ave & E North Ave (GREEN)
                coordinates={[
                    { latitude: 43.074553, longitude: -87.885417  }, //point A- E Kenwood Blvd & N Murray Ave
                    { latitude: 43.060121,  longitude: -87.885637 }, //point B- N Murray Ave & E North Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                // E Kenwood Blvd & N Frederick Ave to N Frederick Ave & N Farwell Ave (GREEN)
                coordinates={[
                    { latitude: 43.074590, longitude: -87.884164 }, //point A- E Kenwood Blvd & N Frederick Ave
                    { latitude: 43.064322,  longitude: -87.884314 }, //point B- N N Frederick Ave & N Farwell Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Kenwood Blvd & N Farwell Ave to N Farwell Ave & E Bradford Ave (GREEN)
                coordinates={[
                    { latitude: 43.074614, longitude: -87.881659 }, //point A- E Kenwood Blvd &  N Farwell Ave
                    { latitude: 43.063718,  longitude: -87.881821}, //point B- N Farwell Ave & E Bradford Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>



                <Polyline
                // N Farwell Ave & E Bradford Ave N Farwell Ave to N Farwell Ave & E North Ave (GREEN)
                coordinates={[
                    { latitude: 43.063709, longitude: -87.881988 }, //point A- N Farwell Ave & E Bradford Ave
                    { latitude: 43.060117,  longitude: -87.885453 }, //point B- N Farwell Ave & E North Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Prospect Ave & E Bradford Ave to N Prospect Ave & E North Ave (GREEN)
                coordinates={[
                    { latitude: 43.063706, longitude: -87.880287 }, //point A- N Prospect Ave & E Bradford Ave 
                    { latitude: 43.060129,  longitude: -87.883705 }, //point B- N Prospect Ave & E North Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Prospect Ave & E Bradford Ave to N Prospect Ave & E Kenwood Blvd (GREEN)
                coordinates={[
                    { latitude: 43.063720, longitude: -87.880585 }, //point A- N Prospect Ave & E Bradford Ave 
                    { latitude: 43.074588,  longitude: -87.880435 }, //point B- N Prospect Ave & E Kenwood Blvd
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Stowell Ave & E Kenwood Blvd to N Stowell Ave & E Bradford Ave (GREEN)
                coordinates={[
                    { latitude: 43.074571, longitude: -87.879207 }, //point A- N Stowell Ave & E Kenwood Blvd
                    { latitude: 43.063707, longitude: -87.879345 }, //point B- N Stowell Ave & E Bradford Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Oakland Ave & E Webster Pl to E Webster Pl & N Downer Ave (GREEN)
                coordinates={[
                    { latitude: 43.074571, longitude: -87.879207 }, //point A- N Oakland Ave & E Webster Pl
                    { latitude: 43.063707, longitude: -87.879345 }, //point B- Webster Pl & N Downer Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 1 side of Newberry Street- N Oakland Ave & E Newberry Blvd to E Newberry Blvd & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.069445, longitude: -87.887918 }, //point A- N Oakland Ave & E Newberry Blvd
                    { latitude: 43.069381, longitude: -87.872810 }, //point B- E Newberry Blvd & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // Other side of Newberry Street- N Oakland Ave & E Newberry Blvd to E Newberry Blvd & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.069220, longitude: -87.887920 }, //point A- N Oakland Ave & E Newberry Blvd
                    { latitude: 43.069165, longitude: -87.872864}, //point B- E Newberry Blvd & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //N Bartlett Ave & E Thomas Ave to E Thomas Ave & N Farwell Ave (GREEN)
                coordinates={[
                    { latitude: 43.061350, longitude: -87.889291 }, //point A- N Bartlett Ave & E Thomas Ave
                    { latitude: 43.061320, longitude: -87.884316 }, //point B- E Thomas Ave & N Farwell Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //  E Greenwich Ave & N Oakland Ave to E Greenwich Ave & N Farwell Ave (GREEN)
                coordinates={[
                    { latitude: 43.062534, longitude: -87.888037 }, //point A- E Greenwich Ave & N Oakland Ave
                    { latitude: 43.062531, longitude: -87.883099 }, //point B- E Greenwich Ave & N Farwell Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                //  E Linnwood Ave & N Cambridge Ave to E Linnwood Ave & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.072841, longitude: -87.891541 }, //point A- E Linnwood Ave & N Cambridge Ave
                    { latitude: 43.072756, longitude: -87.872135 }, //point B- E Linnwood Ave & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //  E Hartford Ave & N Cambridge Ave to E Hartford Ave & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.077647, longitude: -87.891444 }, //point A- E Hartford Ave & N Cambridge Ave
                    { latitude: 43.077630, longitude: -87.872315 }, //point B- E Hartford Ave & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //  1st point- E Hampshire St & N Cramer St to E Hampshire St & N Newhall St (GREEN)
                coordinates={[
                    { latitude: 43.075643, longitude: -87.886605 }, //point A- E Hampshire St & N Cramer St
                    { latitude: 43.075681, longitude: -87.890236 }, //point B- E Hampshire St & N Newhall St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 2nd point- E Hampshire St & N Newhall St to E Hampshire St (GREEN)
                coordinates={[
                    { latitude: 43.075681, longitude: -87.890236 }, //point A- E Hampshire St & N Newhall St
                    { latitude: 43.075781, longitude: -87.890818 }, //point B- E Hampshire St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 3rd point- E Hampshire St to E Hampshire St & N Cambridge Ave  (GREEN)
                coordinates={[
                    { latitude: 43.075781, longitude: -87.890818 }, //point A- E Hampshire St 
                    { latitude: 43.075812, longitude: -87.891501 }, //point B- E Hampshire St & N Cambridge Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //  E Newport Ave & N Cambridge Ave to E Newport Ave & N Maryland Ave (GREEN)
                coordinates={[
                    { latitude: 43.079467, longitude: -87.891227 }, //point A- E Newport Ave & N Cambridge Ave
                    { latitude: 43.079425, longitude: -87.882768  }, //point B- E Newport Ave & N Maryland Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                //  E Providence Ave & N Cambridge Ave to E Providence Ave & N Oakland Ave (GREEN)
                coordinates={[
                    { latitude: 43.081481, longitude: -87.890600 }, //point A- E Providence Ave & N Cambridge Ave
                    { latitude: 43.081472, longitude: -87.887675 }, //point B- E Providence Ave & N Oakland Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Summit Ave & N Downer Ave to N Summit Ave & E Park Pl (GREEN)
                coordinates={[
                    { latitude: 43.064381, longitude: -87.878058 }, //point A- N Summit Ave & N Downer Ave 
                    { latitude: 43.067320, longitude: -87.875104 }, //point B- N Summit Ave & E Park Pl
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Hackett Ave & N Downer Ave to N Hackett Ave & E Park Pl (GREEN)
                coordinates={[
                    { latitude: 43.066072, longitude: -87.878005 }, //point A- N Hackett Ave & N Downer Ave 
                    { latitude: 43.067336, longitude: -87.876881 }, //point B- N Hackett Ave & E Park Pl
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Thomas Ave & N Frederick Ave to N Frederick Ave & E Belleview Pl (GREEN)
                coordinates={[
                    { latitude: 43.061320, longitude: -87.884316 }, //point A- E Thomas Ave & N Frederick Ave
                    { latitude: 43.066108, longitude: -87.884272 }, //point B- N Frederick Ave & E Belleview Pl
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

             
                <Polyline
                // E Webster Pl & N Oakland Ave to E Webster Pl & N Downer Ave (GREEN)
                coordinates={[
                    { latitude: 43.064933, longitude: -87.88808}, //point A- E Webster Pl & N Oakland Ave
                    { latitude: 43.064911, longitude: -87.878076}, //point B- E Webster Pl & N Downer Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Newhall St & E Providence Ave to E Locust Street & N Newhall St (GREEN)
                coordinates={[
                    { latitude: 43.081458, longitude: -87.890131}, //point A- N Newhall St & E Providence Ave
                    { latitude: 43.071065, longitude: -87.890353}, //point B- E Locust Street & N Newhall St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Bartlett Ave & E Providence Ave to E Locust St & N Bartlett Ave (GREEN)
                coordinates={[
                    { latitude: 43.081472, longitude: -87.888915}, //point A- N Bartlett Ave & E Providence Ave
                    { latitude: 43.071053, longitude: -87.889165}, //point B- E Locust Street & N Bartlett Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>
                

                <Polyline
                // 1st point- N Cambridge Ave to N Cambridge Ave (GREEN)
                coordinates={[
                    { latitude: 43.081451, longitude: -87.890663}, //point A- N Cambridge Ave
                    { latitude: 43.078641, longitude: -87.891391}, //point B- N Cambridge Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 2nd point- N Cambridge Ave to E Locust St & N Cambridge Ave (GREEN)
                coordinates={[
                    { latitude: 43.078641, longitude: -87.891391}, //point A- N Cambridge Ave
                    { latitude: 43.071087, longitude: -87.891528}, //point B- E Locust Street & N Cambridge Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>
              

                <Polyline
                // E Edgewood Ave & East River Park Ct to East River Park Ct (GREEN)
                coordinates={[
                    { latitude: 43.081949, longitude: -87.887637}, //point A- E Edgewood Ave & East River Park Ct
                    { latitude: 43.081960, longitude: -87.888182}, //point B- East River Park Ct
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Newport Ave & N Murray Ave to E Edgewood Ave & N Murray Ave (GREEN)
                coordinates={[
                    { latitude: 43.079439, longitude: -87.885287}, //point A- E Newport Ave & N Murray Ave
                    { latitude: 43.081890, longitude: -87.885193 }, //point B- E Edgewood Ave & N Murray Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Newport Ave & N Frederick Ave to E Edgewood Ave & N Frederick Ave (GREEN)
                coordinates={[
                    { latitude: 43.081964, longitude: -87.883973 }, //point A- E Newport Ave & N Frederick Ave
                    { latitude: 43.079425, longitude: -87.884023 }, //point B- E Edgewood Ave & N Frederick Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Edgewood Ave & N Hackett Ave to E Park Pl & N Hackett Ave (GREEN)
                coordinates={[
                    { latitude: 43.081931, longitude: -87.876564 }, //point A- E Edgewood Ave & N Hackett Ave
                    { latitude: 43.067331, longitude: -87.876889 }, //point B- E Park Pl & N Hackett Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>
        

                <Polyline
                // E Edgewood Ave & N Summit Ave to E Park Pl & N Summit Ave (GREEN)
                coordinates={[
                    { latitude: 43.081935, longitude: -87.875418 }, //point A- E Edgewood Ave & N Summit Ave
                    { latitude: 43.067331, longitude: -87.875727 }, //point B- E Park Pl & N Summit Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Edgewood Ave & N Shepard Ave to E Park Pl & N Shepard Ave (GREEN)
                coordinates={[
                    { latitude: 43.081925, longitude: -87.874266 }, //point A- E Edgewood Ave & N Shepard Ave
                    { latitude: 43.067317, longitude: -87.874587 }, //point B- E Park Pl & N Shepard Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Hartford Ave & N Marietta Ave to E Newberry Blvd & N Marietta Ave (GREEN)
                coordinates={[
                    { latitude: 43.077619, longitude: -87.873220 }, //point A- E Hartford Ave & N Marietta Ave
                    { latitude: 43.069394, longitude: -87.873424 }, //point B- E Newberry Blvd & N Marietta Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Hampshire St & N Downer Ave to E Hampshire St & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.075639, longitude: -87.877898 }, //point A- E Hampshire St & N Downer Ave
                    { latitude: 43.075652, longitude: -87.872139 }, //point B- E Hampshire St & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // E Newport Ave & N Downer Ave to E Newport Ave & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.079435, longitude: -87.877803}, //point A- E Newport Ave & N Downer Ave
                    { latitude: 43.079422, longitude: -87.872531 }, //point B- E Newport Ave & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Oakland Ave & E Hartford Ave to E Hartford Ave & N Downer Ave (RED)
                coordinates={[
                    { latitude: 43.077604, longitude: -87.877759}, //point A- N Oakland Ave & E Hartford Ave
                    { latitude: 43.077630, longitude: -87.887699 }, //point B- E Hartford Ave & N Downer Ave
                    ]}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 1st point- E Newport Ct & N Lake Dr to E Newport Ct (GREEN)
                coordinates={[
                    { latitude: 43.078909, longitude: -87.872393 }, //point A- E Newport Ct & N Lake Dr 
                    { latitude: 43.078906, longitude: -87.871929 }, //point B- E Newport Ct
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 2nd point- E Newport Ct to E Newport Ct (GREEN)
                coordinates={[
                    { latitude: 43.078906, longitude: -87.871929 }, //point A- E Newport Ct  
                    { latitude: 43.078700, longitude: -87.871030 }, //point B- E Newport Ct
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Windermere Ct & E Hartford Ave to N Windermere Ct (GREEN)
                coordinates={[
                    { latitude: 43.077622, longitude: -87.873728 }, //point A- N Windermere Ct & E Hartford Ave
                    { latitude: 43.078028, longitude: -87.873726 }, //point B- N Windermere Ct
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // N Newhall Ln & E Bradford Ave to N Newhall Ln (GREEN)
                coordinates={[
                    { latitude: 43.063781, longitude: -87.889865 }, //point A-  N Newhall Ln & E Bradford Ave
                    { latitude: 43.062840, longitude: -87.889870 }, //point B-  N Newhall Ln
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
                        { latitude: 43.059989,  longitude: -87.880417} // point B- N Lake Dr
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


                    {/*   

                    BEGINNING OF
                    1 through 6 points along N Wahl Ave (GREEN)
                    
                    */} 

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
                // 2nd point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.064518,  longitude: -87.873037}, //point A- N Wahl Ave
                    { latitude: 43.065032,  longitude: -87.872850} // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 3rd point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.065032,  longitude: -87.872850}, //point A- N Wahl Ave
                    { latitude: 43.065646,  longitude: -87.872788} // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                // 4th point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.065646,  longitude: -87.872788}, //point A- N Wahl Ave
                    { latitude: 43.066434,  longitude: -87.872932 } // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                <Polyline
                // 5th point- N Wahl Ave to N Wahl Ave (GREEN)
                coordinates={[
                    { latitude: 43.066434,  longitude: -87.872932}, //point A- N Wahl Ave
                    { latitude: 43.067281,  longitude: -87.873299 } // point B- N Wahl Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
                // 6th point- N Wahl Ave to N Wahl Ave & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.067281,  longitude: -87.873299 }, //point A- N Wahl Ave
                    { latitude: 43.067319,  longitude: -87.873385 } // point B- N Wahl Ave & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                 {/*   

                    END OF
                    1 through 6 points along N Wahl Ave (GREEN)
                    
                */} 




                   {/*   

                    BEGINNING OF
                    1 through  points along N Wahl Ave (GOING SOUTH- GREEN)
                    
                */} 

                <Polyline
                // 1st point- E Belleview Pl & N Wahl Ave to N Wahl Ave & E Bradford Ave (GREEN)
                coordinates={[
                    { latitude: 43.063801,  longitude: -87.873634}, //point A- E Belleview Pl & N Wahl Ave
                    { latitude: 43.062199,  longitude: -87.875253} // point B- N Wahl Ave & E Bradford Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // 2nd point- N Wahl Ave & E Bradford Ave to N Wahl Street(GREEN)
                coordinates={[
                    { latitude: 43.062199,  longitude: -87.875253}, //point A- N Wahl Ave & E Bradford Ave
                    { latitude: 43.060751,  longitude: -87.876575} // point B- N Wahl Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // 3rd point- N Wahl Ave to N Wahl Street(GREEN)
                coordinates={[
                    { latitude: 43.060751,  longitude: -87.876575}, //point A- N Wahl Ave e
                    { latitude: 43.060394,  longitude: -87.877392} // point B- N Wahl Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline> 

                <Polyline
                // 4th point- N Wahl Ave to N Wahl Street (GREEN)
                coordinates={[
                    { latitude: 43.060394,  longitude: -87.877392}, //point A- N Wahl Ave
                    { latitude: 43.060271,  longitude: -87.878458 } // point B- N Wahl Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>

                {/*   

                   END OF
                    1 through 4 points along N Wahl Ave (GOING SOUTH- GREEN)
                    
                */} 

                <Polyline
               // N Wahl Ave & N Terrace Ave to N Terrace Ave & E North Ave (GREEN)
                coordinates={[
                    { latitude: 43.066046,  longitude: -87.872856}, //point A- N Wahl Ave & N Terrace Ave
                    { latitude: 43.059357,  longitude: -87.879354 } // point B- N Terrace Ave & E North Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // E Bradford Ave & N Lake Dr to E Bradford Ave & N Wahl St (GREEN)
                coordinates={[
                    { latitude: 43.063654,  longitude: -87.878060}, //point A- E Bradford Ave & N Lake Dr
                    { latitude: 43.062179,  longitude: -87.875250 } // point B- E Bradford Ave & N Wahl St
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                
                <Polyline
               // E Park Pl to E Park Pl & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.067393,  longitude: -87.890998}, //point A- E Park Pl
                    { latitude: 43.067321,  longitude: -87.873545 } // point B- E Park Pl & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // E Park Pl & N Newhall St to N Newhall St & E Webster Pl (GREEN)
                coordinates={[
                    { latitude: 43.067397,  longitude: -87.890416}, //point A- E Park Pl & N Newhall St
                    { latitude: 43.064935,  longitude: -87.890403 } // point B- N Newhall St & E Webster Pl 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // N Newhall St & E Webster Pl to N Newhall St (GREEN)
                coordinates={[
                    { latitude: 43.064935,  longitude: -87.890403}, //point A- N Newhall St & E Webster Pl 
                    { latitude: 43.063759,  longitude: -87.890117 } // point B- N Newhall St 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // N Newhall St to N Newhall St & E Bradford Ave (GREEN)
                coordinates={[
                    { latitude: 43.063759,  longitude: -87.890117}, //point A- N Newhall St 
                    { latitude: 43.063654,  longitude: -87.878060 } // point B- N Newhall St & E Bradford Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // N Lake Dr & N Downer Ave to N Downer Ave & E Edgewood Ave (GREEN)
                coordinates={[
                    { latitude: 43.062485,  longitude: -87.878100}, //point A- N Lake Dr & N Downer Ave 
                    { latitude: 43.081969,  longitude: -87.877718 } // point B- N Downer Ave & E Edgewood Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // E Kenwood Blvd & N Cambridge Ave to E Kenwood Blvd & N Maryland Ave (GREEN)
                coordinates={[
                    { latitude: 43.074699,  longitude: -87.891543}, //point A- E Kenwood Blvd & N Cambridge Ave
                    { latitude: 43.074652,  longitude: -87.882841 } // point B- E Kenwood Blvd & N Maryland Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // E Kenwood Blvd & N Maryland Ave to E Kenwood Blvd & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.074652,  longitude: -87.882841}, //point A- E Kenwood Blvd & N Maryland Ave 
                    { latitude: 43.074652,  longitude: -87.872053 } // point B- E Kenwood Blvd & N Lake Dr 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               // N Newhall St & E Webster Pl to E Webster Pl & N Bartlett Ave (GREEN)
                coordinates={[
                    { latitude: 43.064968,  longitude: -87.890418 }, //point A- N Newhall St & E Webster Pl 
                    { latitude: 43.064959,  longitude: -87.889232 } // point B- E Webster Pl & N Bartlett Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               //  N Bartlett Ave & East Riverside Pl to N Bartlett Ave & E Thomas Ave (GREEN)
                coordinates={[
                    { latitude: 43.068785,  longitude: -87.889175 }, //point A- N Bartlett Ave & East Riverside Pl 
                    { latitude: 43.061209,  longitude: -87.889301} // point B- N Bartlett Ave & E Thomas Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               //  N Bartlett Ave & East Riverside Pl to East Riverside Pl & N Oakland Ave (GREEN)
                coordinates={[
                    {  latitude: 43.068785,  longitude: -87.889175 }, //point A- N Bartlett Ave & East Riverside Pl 
                    { latitude: 43.068783,  longitude: -87.887902} // point B- East Riverside Pl & N Oakland Ave
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               //  N Bartlett Ave & E North Ave to N Bartlett Ave & E North Ave (GREEN)
                coordinates={[
                    { latitude: 43.060164,  longitude: -87.889322}, //point A- N Bartlett Ave & E North Ave 
                    { latitude: 43.060714,  longitude: -87.889339} // point B- N Bartlett Ave & E North Ave 
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={4}
                >
                </Polyline>


                <Polyline
               //  N Newhall St & E North Ave to E North Ave & N Lake Dr (GREEN)
                coordinates={[
                    { latitude: 43.060152,  longitude: -87.890488}, //point A- N Newhall St & E North Ave 
                    { latitude: 43.060096,  longitude: -87.880444} // point B- E North Ave & N Lake Dr
                    ]}
                    strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
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