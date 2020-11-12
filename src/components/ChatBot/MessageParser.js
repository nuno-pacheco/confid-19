class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
        // Saudations
        if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("hi")) {
          this.actionProvider.greet()
          }
        // Bad Feelings
        if (lowerCaseMessage.includes("tired")) {
        this.actionProvider.confort1()
        }

        if (lowerCaseMessage.includes("frustration")) {
        this.actionProvider.confort2()
        }

        if (lowerCaseMessage.includes("frustrated")) {
        this.actionProvider.confort2()
        }
        // Provide Resources
        if (lowerCaseMessage.includes("stress")) {
        this.actionProvider.handleMusicList();
        }

        if (lowerCaseMessage.includes("stress")) {
          this.actionProvider.handleMindfulnessClass();
          }

        if (lowerCaseMessage.includes("symptoms")) {
        this.actionProvider.handleSymptomsList();
        }

        if (lowerCaseMessage.includes("prevention")) {
            this.actionProvider.handlePreventionList();
        }

        if (lowerCaseMessage.includes("prevent")) {
          this.actionProvider.handlePreventionList();
      }


    }
}
  
  export default MessageParser