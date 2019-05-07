import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the Employee Satisfaction & Retainment Feedback-Questionnaire'
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'What is your official title of employment?',
        questionId: 'favoriteNumber',
        placeholderText: '',
        options: [
            {
                optionText: 'Manager',
                value: 'Manager'
            },
            {
                optionText: 'Teacher',
                value: 'Teacher'
            },
            {
                optionText: 'Business Technology Associate',
                value: 'BTA'
            },
            {
                optionText: 'Data Scientist',
                value: 'Data Scientist'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            "How would you describe the company's work culture?",
        questionId: 'favoritePet',
        options: [
            {
                optionText: 'very unhealthy',
                value: 'dog'
            },
            {
                optionText: 'unhealthy',
                value: 'cat'
            },
            {
                optionText: 'moderately unhealthy',
                value: 'ferret'
            },
            {
                optionText: 'healthy',
                value: 'snake'
            },
            {
                optionText: 'moderately healthy',
                value: 'guinea'
            },
            {
                optionText: 'very healthy',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            "Please rate your satisfication with the company's work life balance on a scale from (1 - 5) ?",
        questionId: 'favoriteFoods',
        options: [
            {
                optionText: '5',
                value: 'sticky rice dumplings'
            },
            {
                optionText: '4',
                value: 'pad thai'
            },
            {
                optionText: '3',
                value: 'steak and eggs'
            },
            {
                optionText: '2',
                value: 'tofu'
            },
            {
                optionText: '1',
                value: 'ice crem'
            }
        ]
    },
    {
        questionType: 'TextInput',
        questionText: 'Required: Hypothetically, if you were to quit tomorrow, what would your reason be?',
        questionId: 'favoriteColor',
        placeholderText: "Easter Egg: Tell me your favorite color and I'll change the backdrop!",
    },
    {
        questionType: 'Info',
        questionText: "Thank you for cooperating! That's all for the questionnaire. Please wrap up with an informative video"
    },
];

export default class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: 'olivedrab',
                height: 50,
                elevation: 10,
                color: 'slategray'
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
        this.state = { backgroundColor: "navy" };
    }

    onSurveyFinished() {
        /** 
         *  By using the spread operator, array entries with no values, such as info questions, are removed.
         *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
         *  to the rest of your code, can be done.
         * 
         *  Answers are returned in an array, of the form 
         *  [
         *  {questionId: string, value: any},
         *  {questionId: string, value: any},
         *  ...
         *  ]
         *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
         *  to you.
         *  
         *  As an example
         *  { 
         *      questionId: "favoritePet", 
         *      value: { 
         *          optionText: "Dogs",
         *          value: "dog"
         *      }
         *  }
         *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a 
         *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
         */
        /*
        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }
        */
        this.props.navigation.navigate('SampleVideo'); //{ surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the 
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is 
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) { 
        switch (answer.questionId) {  
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        } 
    }

    renderPrevious(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 120, marginTop: 10, marginBottom: 10 }}>
                <Button
                    //color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    //backgroundColor= 'green'
                    title={'Go Back'}
                />
            </View>
        );
    }

    renderNext(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    //color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    //backgroundColor={GREEN}
                    title={'Next Question'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    //color={GREEN}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? 'rgb(255,69,0)' : "rgb(0,0,0)"}
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, placeholder, value) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={3}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            keyboardType={'numeric'}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        //selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPrevious.bind(this)}
                        renderNext={this.renderNext.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    navButtonText: {
        margin: 10,
        fontSize: 20,
        color: 'white',
        
        
        width: 'auto'
    },
    answers: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    navigationButton: {
        
        minHeight: 40,
        backgroundColor: GREEN,
        padding: 0,
        borderRadius: 100,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        //fontFamily: 'helvetica',
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});
