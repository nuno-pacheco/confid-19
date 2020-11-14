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
        if (lowerCaseMessage.includes("olá")) {
          this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("thanks")) {
          this.actionProvider.forNothing()
        }

        if (lowerCaseMessage.includes("obrigada")) {
          this.actionProvider.forNothing()
        }

        if (lowerCaseMessage.includes("obrigado")) {
          this.actionProvider.forNothing()
        }

        // Bad Feelings
        if (lowerCaseMessage.includes("tired")) {
        this.actionProvider.confort1()
        }

        if (lowerCaseMessage.includes("cansado")) {
          this.actionProvider.confort1()
          }

        if (lowerCaseMessage.includes("frustration")) {
        this.actionProvider.confort2()
        }

        if (lowerCaseMessage.includes("frustrated")) {
        this.actionProvider.confort2()
        }

        if (lowerCaseMessage.includes("frustrado")) {
          this.actionProvider.confort2()
          }

        if (lowerCaseMessage.includes("frustração")) {
          this.actionProvider.confort2()
          }

        if (lowerCaseMessage.includes("motivated")) {
          this.actionProvider.motivational()
        }

        if (lowerCaseMessage.includes("motivate")) {
          this.actionProvider.motivational()
        }

        if (lowerCaseMessage.includes("motivado")) {
          this.actionProvider.motivational()
        }

        // Provide Resources
        if (lowerCaseMessage.includes("stress")) {
        this.actionProvider.handleMusicList();
        }

        if (lowerCaseMessage.includes("stressado")) {
          this.actionProvider.handleMusicList();
          }

        if (lowerCaseMessage.includes("stress")) {
          this.actionProvider.handleMindfulnessClass();
          }

          if (lowerCaseMessage.includes("stressado")) {
            this.actionProvider.handleMindfulnessClass();
            }

        if (lowerCaseMessage.includes("symptoms")) {
        this.actionProvider.handleSymptomsList();
        }

        if (lowerCaseMessage.includes("sintomas")) {
          this.actionProvider.handleSymptomsList();
          }

        if (lowerCaseMessage.includes("prevention")) {
            this.actionProvider.handlePreventionList();
        }

        if (lowerCaseMessage.includes("prevenção")) {
          this.actionProvider.handlePreventionList();
        }

        if (lowerCaseMessage.includes("prevent")) {
          this.actionProvider.handlePreventionList();
        }

        if (lowerCaseMessage.includes("prevenir")) {
          this.actionProvider.handlePreventionList();
        }

        if (lowerCaseMessage.includes("vaccine")) {
          this.actionProvider.handleVaccineList();
        }

        if (lowerCaseMessage.includes("vacina")) {
          this.actionProvider.handleVaccineList();
        }

        if (lowerCaseMessage.includes("vacinação")) {
          this.actionProvider.handleVaccineList();
        }
  
    }
}
  
  export default MessageParser