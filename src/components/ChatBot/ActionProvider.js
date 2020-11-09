class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, dear.")
      this.updateChatbotState(greetingMessage)
    }

    confort1(){
        const confort1Message = this.createChatBotMessage("It is being tough for everyone, but one day it will pass.")
        this.updateChatbotState(confort1Message)
    }

    confort2(){
        const confort2Message = this.createChatBotMessage("Try to stay calm, cometimes sharing with someone close to us what we are feeling helps us to relieve.")
        this.updateChatbotState(confort2Message)
    }
    
    handleSymptomsList = () => {
        const message = this.createChatBotMessage(
          "I've got the following resources for you about Coronavirus Symptoms:",
          {
            widget: "symptomsLinks",
          }
        );
    
        this.updateChatbotState(message);
    };

    handlePreventionList = () => {
        const message = this.createChatBotMessage(
          "I've got the following resources for you about Coronavirus Prevention:",
          {
            widget: "preventionLinks",
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