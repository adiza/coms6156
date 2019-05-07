import {createStackNavigator,createAppContainer} from 'react-navigation';
import FinishedSurvey from './screens/FinishedSurvey';
import SurveyScreen from './screens/SurveyScreen';
//import SampleVideo from './screens/SampleVideo';


import React, { Component} from "react";
import { Alert, Platform, StyleSheet, View, WebView, Text, Button} from "react-native";


class SampleVideo extends Component {



  render() {
    return (
      <View style={{ height: 450, backgroundColor: 'navy'}}>
      <Text style={{ fontFamily: "Georgia", fontSize: 30, position: "relative", textAlign: "center", color: "olivedrab"}}>Please watch this informative video</Text>
        <WebView
        
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={{width: 375, height: 300, justifyContent: 'center'}}
          source={{ uri: "https://www.youtube.com/watch?v=pzk_3edRgTY" }}

        />
        <Button
          onPress={() => this.props.navigation.navigate('Finished')}
          title="Continue to End!"
          color="olivedrab"
          accessibilityLabel="Learn more about this purple button"
          style={{}}
        />
      </View>
      
    );
  }
}


const stack = createStackNavigator({

  Survey: {
    screen: SurveyScreen
},
SampleVideo: {
  screen: SampleVideo
},

  Finished: {
    screen: FinishedSurvey
},




});

const AppContainer = createAppContainer(stack);

export default AppContainer
