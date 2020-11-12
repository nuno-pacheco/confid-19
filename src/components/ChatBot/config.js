import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AnswersOptions from "./answersOptions";
import LinkList from "./LinkList";

const config = {
  botName: "Mary",
  initialMessages: [createChatBotMessage(`Hi, I'm here to help. What do you want to ask?`, {
    widget: "answersOptions",
  }),
  ],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4044FD",  
    },
    chatButton: {
      backgroundColor: "#E4615E",
    },
  },

  widgets: [
    {
      widgetName: "answersOptions",
      widgetFunc: (props) => <AnswersOptions {...props} />,
    },
    {
      widgetName: "symptomsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "How to proceed",
            url: "https://www.cdc.gov/coronavirus/2019-ncov/downloads/sick-with-2019-ncov-fact-sheet.pdf",
            id: 1,
          },
          {
            text: "When to Quarantine",
            url: "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html",
            id: 2,
          },
        ]
      }
    },
    {
      widgetName: "preventionLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "How to prevent",
            url: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html",
            id: 1,
          },
          {
            text: "Recomended Masks",
            url: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html",
            id: 2,
          },
        ]
      }
    },
    {
      widgetName: "musicList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Music to Relax",
            url: "https://www.youtube.com/watch?v=2OEL4P1Rz04",
            id: 1,
          },
        ]
      }
    },
    {
      widgetName: "mindfulessClass",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Do some Mindfulness",
            url: "https://www.youtube.com/watch?v=-2zdUXve6fQ",
            id: 1,
          },
        ]
      }
    },



  ],
}

export default config