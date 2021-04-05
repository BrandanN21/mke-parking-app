import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { SectionRow, SettingsPage, NavigateRow, BaseRow, CheckRow, SwitchRow } from 'react-native-settings-view';



export default function AccountScreen() {
    return (
        <View style={styles.container}>
            <View>
                <TouchableHighlight
                style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
                >
                    <Image source={require("../../../assets/persona.jpg")}
                    style={styles.profileImg} />
                </TouchableHighlight>
                <Text style={styles.text}>Eliana Featherstone</Text>
            </View>

            <SettingsPage style={styles.settings}>
                <SectionRow>
                    <NavigateRow
                    text="Terms and conditions"
                    leftIcon={{
                        name: 'file-document',
                        type: 'material-community',
                    }}
                    onPress={() => console.log('terms')}
                    />
                    <NavigateRow
                    text="Privacy Policy"
                    leftIcon={{
                        name: 'folder-lock',
                        type: 'material-community',
                    }}
                    onPress={() => console.log('policy')}
                    />
                    <NavigateRow
                    text="Contact us"
                    leftIcon={{
                        name: 'users',
                        type: 'font-awesome',
                    }}
                    onPress={() => console.log('contact')}
                    />
                    <SwitchRow
                    text="Notifications"
                    enabled
                    leftIcon={{
                        name: 'ios-notifications',
                        type: 'ionicon',
                    }}
                    onValueChange={(isEnabled) => console.log('checked', isEnabled)}
                    />
                    <BaseRow
                    text={('version')}
                    leftIcon={{
                        name: 'tag',
                        type: 'font-awesome',
                    }}
                    rightContent={<Text>0.0.1</Text>}
                    />
                </SectionRow>
            </SettingsPage>
        </View>
    )
}


// styles for account page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        top: '0%'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        top: '30%'
    },
    profileContainer: {
        height: '100%',
        marginBottom: 15
    },
    profileImgContainer: {
        marginLeft: '33%',
        top: '25%',
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
      settings: {
          top: '10%'
      }

})