import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class FinishedSurvey extends Component {
    render() {


        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.bigtext}> Feedback Survey Completed!</Text>
                </View>
                <Text style={styles.subtitle}>Thank you for completing the quiz. Adiza Inc appreciates your feedback.</Text>
                <Image source={require("./../assets/rn-school-logo.png")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'

    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'green',
        elevation: 20,
        borderRadius: 10,
    },
    bigtext: {
        fontFamily: 'Georgia',
        color: 'white',
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: 'green',
        fontWeight: 'bold',
        textAlign: "center"
        
    },
    subtitle: {
        fontFamily: 'Georgia',
        color: 'white',
        marginBottom: 20,
        fontSize: 15,
        backgroundColor: 'green',
        textAlign: 'center'
        
        
    }
});
