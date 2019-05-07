import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';

const questionlist = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the React Native Simple Survey Example app! Tap next to continue'
    },
    {
        questionType: 'TextInput',
        questionText: 'Simple Survey supports free form text input',
        questionId: 'favoriteColor',
        placeholderText: 'Tell me your favorite color!',
    }]

    export default class SurveyQuestions extends Component {



        static navigationOptions = () => {
            return {
                headerStyle: {
                    backgroundColor: "rgb(105,105,105)",
                    height: 50,
                    elevation: 10,
                },
                headerTintColor: '#fff',
                headerTitle: 'COMS 6156 - Final Project Research App',
                headerTitleStyle: {
                    flex: 1,
                }
            };
        }

        constructor(props) {
            super(props);
            this.state = { backgroundColor: "rgb(220,220,220)" };
        }
        onSurveyFinished() {
            //this.props.navigation.navigate('SampleVideo', { surveyAnswers: answersAsObj });
        }


    }