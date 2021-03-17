import { StyleSheet } from 'react-native'

const buttons = StyleSheet.create({
    primary: {
        backgroundColor: '#FFF',
        color: '#18224B',
        width: "65%",
        borderRadius: 25,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%'
    }, 
    primaryText: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  33,
        color: '#18224B'
    }, 
    secondary: {
        backgroundColor: '#18224B',
        color: '#18224B',
        width: "65%",
        borderRadius: 25,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%'
    }, 
    secondaryText:{
        textAlign: 'center',
        fontWeight: 'normal',
        padding: "2%",
        fontSize:  25,
        color: '#FFF'
    },
    night: {
        backgroundColor: '#FFF',
        color: '#18224B',
        width: "50%",
        borderRadius: 25,
        marginLeft: '0%',
        marginRight: '10%',
        marginBottom: '15%'
    },
    day: {
        backgroundColor: '#18224B',
        color: '#18224B',
        width: "50%",
        borderRadius: 25,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '15%',
        left: '30%'
    }
})

export { buttons }