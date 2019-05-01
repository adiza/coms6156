import React, { Component} from "react";
import { Alert, Platform, StyleSheet, View, WebView, Text, Button} from "react-native";
import SurveyScreen from "./SurveyScreen"

import { createStackNavigator, createAppContainer } from 'react-navigation';

class SampleVideo extends Component {



  render() {
    return (
      <View style={{ height: 300 }}>
      <Text style={{ fontSize: 30, position: "relative" }}>Please watch this informative video!</Text>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/0iayQ1xPsnc" }}

        />
        <Button
          onPress={() => this.props.navigation.navigate('Survey')}
          title="Continue with Survey!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      
    );
  }
}
const RootStack = createStackNavigator(
  {
    Video: SampleVideo,
  },
  {
    Survey: SurveyScreen
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}