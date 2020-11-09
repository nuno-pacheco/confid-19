class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("tired")) {
        this.actionProvider.confort1()
        }

        if (lowerCaseMessage.includes("frustration")) {
        this.actionProvider.confort2()
        }

        if (lowerCaseMessage.includes("frustrated")) {
        this.actionProvider.confort2()
        }

        if (lowerCaseMessage.includes("symptoms")) {
        this.actionProvider.handleSymptomsList();
        }

        if (lowerCaseMessage.includes("prevention")) {
            this.actionProvider.handlePreventionList();
        }


    }
}
  
  export default MessageParser