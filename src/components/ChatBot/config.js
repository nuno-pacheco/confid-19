import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AnswersOptions from "./answersOptions";
import LinkList from "./LinkList";
import Translate from 'react-translate-component';

const config = {
  botName: "Mary",
  initialMessages: [createChatBotMessage(<Translate content="initialMessage"/>, {
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
            text: <Translate content="symptoms1"/>,
            url: "https://www.cdc.gov/coronavirus/2019-ncov/downloads/sick-with-2019-ncov-fact-sheet.pdf",
            id: 1,
          },
          {
            text: <Translate content="symptoms2"/>,
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
            text: <Translate content="prevention1"/>,
            url: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html",
            id: 1,
          },
          {
            text: <Translate content="prevention2"/>,
            url: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html",
            id: 2,
          },
        ]
      }
    },
    {
      widgetName: "vaccineLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: <Translate content="vaccine1"/>,
            url: "https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines?gclid=Cj0KCQiA-rj9BRCAARIsANB_4AAhNepvGjYyLMrbl1jSr7LdXCAmmrkUcqWYrYVoQYoSu_-LU6Ou_QEaAoiEEALw_wcB",
            id: 1,
          },
          {
            text: <Translate content="vaccine2"/>,
            url: "https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html",
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
            text: <Translate content="musicList"/>,
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
            text: <Translate content="mindfulness"/>,
            url: "https://www.youtube.com/watch?v=-2zdUXve6fQ",
            id: 1,
          },
        ]
      }
    },



  ],
}

export default config