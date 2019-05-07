# **Final Project Deliverables and Research Summary - COMS 6156** 

## Presenter: Adiza Awwal
## _Topics in Software Engineering_ - **Professor. Gail Kaiser**
## **video justification:** I do not have Xcode installed on my machine.
##  **vocabulary:** A low-code development platform (LCDP) is software that provides an environment programmers use to create application software through graphical user interfaces and configuration instead of traditional computer programming.

### **Midterm Research Project:** The impact on software system maintainability using low-code

#### Findings:
1. Overall, low-code showed that it increases developers
perceived productivity or remains on par with traditional programming. 
2. Additionally,
low-code product quality remains comparable to traditional programming. 

3. Lastly,low-code perceives to be less maintainable or equally as maintainable to traditional
programming.

## **Final Project Research Intention**:
### I would like to investigate application development process for traditional programming in comparison to low-code development. 

## **Development Platforms:**
* Microsoft PowerApps 
* React Native with Expo

## Contextual Considerations:

* Low Code development is often targeted towards non-technical industry professionals, "citizen developers" (e.g. corporate IT professionals) and non-technical facing people in general

* My applications are business oriented and should be viewed as internal applications within a corporate setting.


Research Questions and Assessment:
1.  What are the limitations of low code platforms?
2. In what instances should low code be prefered over traditional techniques?
3. How does low code impact the life cycle of software development?

# Project Details

Project Demo:
This is the link to my final project video demonstration. I did not experience any issues with my demo pertaining to the applications themselves.
https://vimeo.com/333589190

Code Delivery:
All project deliverables and necessary information to run and view the React Native application is in the following repository:
https://github.com/adiza/coms6156

Documentation so that someone outside this class could 1. run anything executable, and 2. further develop any software produced can be found in the README.md file contained in my GitHub repository
## All Previous Project Assignments Included in Repository
Also, all milestone assignments are contained within the **“milestone_assignments”** directory in the above repository (i.e. preliminary proposal, revised proposal, progress report, final report)

All open-source code referenced for React-Native Application:
In order to build my Employment Satisification survey, I used a package called react-native-simple-survey. This allowed me to build a survey screen using a JSON object storing the questions. I used the creator’s ExampleApp as a template and reference.
Documentation:
https://www.npmjs.com/package/react-native-simple-survey
Creator’s Github Repository:
https://github.com/devlinb/react-native-simple-survey

Low-Code Application Access:
Ashna should have access to my low-code application. She should have user access and be able to access the application through her student portal logging in through her Columbia email.
Once logged in, I Ashna should be able to view the project once she logs in or through this sharable link: https://web.powerapps.com/apps/ba7425ca-1cf1-4ac1-a9b3-2d6cc16711e0


Building in React Native:
In order to make my app, I used Expo instead of an emulator (i.e. Xcode)
https://expo.io/

## Documentation Sufficient To Build Project
1. In order to ensure the application can be correctly built, one must install both node.js and the necessary dependencies. Depdending on your operating system please first go to the node.js website and install the necessary version for your machine.
Instructions are here: https://nodejs.org/en/download/. If node is already installed on your machine please skip this step.


2. All necessary depdencies are listed in the project/package.json file. Once inside the COMS6156 directory please following the command line instructions below.

cd project

npm install

3. The application directory is initialized using Expo. Expo is an emulator application for iOS and Android development. Please install Expo on your local machine using the command

npm install -g expo-cli

4. Then install the Expo application on your mobile device by going to the Expo website https://expo.io/ and downloads the mobile application for your phone.

## Documentation Sufficient To Run Project

5. After the mobile application is installed on your phone please run the command below inside the projects directory and follow Expo directions contained within the browser to view the application

expo start

6. That's it! You're done!