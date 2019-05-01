import {createStackNavigator,createAppContainer} from 'react-navigation';
import FinishedSurvey from './screens/FinishedSurvey';
import SurveyScreen from './screens/SurveyScreen';
//import SampleVideo from './screens/SampleVideo';


import React, { Component} from "react";
import { Alert, Platform, StyleSheet, View, WebView, Text, Button} from "react-native";


class SampleVideo extends Component {



  render() {
    return (
      <View style={{ height: 300 }}>
      <Text style={{ fontSize: 30, position: "relative", textAlign: "center" }}>Please watch this instructional tutorial to continue with Survey!</Text>
        <WebView
        
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={{}}
          source={{ uri: "https://www.youtube.com/watch?v=pzk_3edRgTY" }}

        />
        <Button
          onPress={() => this.props.navigation.navigate('Survey')}
          title="Continue with Survey!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{}}
        />
      </View>
      
    );
  }
}


const stack = createStackNavigator({
    SampleVideo: {
        screen: SampleVideo
    },

    Survey: {
        screen: SurveyScreen
    },

    Finished: {
        screen: FinishedSurvey
    }
});

const AppContainer = createAppContainer(stack);

export default AppContainer
