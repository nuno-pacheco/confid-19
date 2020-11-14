import React from 'react'; 
import Translate from 'react-translate-component';
import ReactPlayer from "react-player"


class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet() {
      const greetingMessage = this.createChatBotMessage(<Translate content="greet"/>)
      this.updateChatbotState(greetingMessage)
    }

    forNothing(){
      const yourWelcomeMessage = this.createChatBotMessage(<Translate content="yourWelcome"/>)
      this.updateChatbotState(yourWelcomeMessage)
    } 

    undefined(){
      const undefinedMessage = this.createChatBotMessage(<Translate content="undefined"/>)
      this.updateChatbotState(undefinedMessage)
    }

    confort1(){
        const confort1Message = this.createChatBotMessage(<Translate content="confort1"/>)
        this.updateChatbotState(confort1Message)
    }

    confort2(){
        const confort2Message = this.createChatBotMessage(<Translate content="confort2"/>)
        this.updateChatbotState(confort2Message)
    }

    motivational(){
      const motivationalSpeach = this.createChatBotMessage(<ReactPlayer url="https://www.youtube.com/watch?v=UCt8m4DSz10" width='100%' height="100%"/>) 
      this.updateChatbotState(motivationalSpeach)
    }

    handleMusicList = () => {
      const message = this.createChatBotMessage(
        <Translate content="musicListMessage"/>,
        {
          widget: "musicList",
        }
      )
      this.updateChatbotState(message);
    }
    
    handleMindfulnessClass = () => {
      const message = this.createChatBotMessage(
        <Translate content="mindfulnessMessage"/>,
        {
          widget: "mindfulessClass",
        }
      )
      this.updateChatbotState(message);
    } 

    handleSymptomsList = () => {
        const message = this.createChatBotMessage(
          <Translate content="symptomMessage"/>,
          {
            widget: "symptomsLinks",
          }
        );
        this.updateChatbotState(message);
    };

    handlePreventionList = () => {
        const message = this.createChatBotMessage(
          <Translate content="preventionMessage" />,
          {
            widget: "preventionLinks",
          }
        );
    
        this.updateChatbotState(message);
    };

    handleVaccineList = () => {
      const message = this.createChatBotMessage(
        <Translate content="vaccineMessage"/>,
        {
          widget: "vaccineLinks",
        }
      );
  
      this.updateChatbotState(message);
  };


    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider