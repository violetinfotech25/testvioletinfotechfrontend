import { createChatBotMessage } from "react-chatbot-kit";
import WebsiteOptionsWidget from "../components/widgets/WebsiteOptionsWidget";
import PackagesWidget from "../components/widgets/PackagesWidget";

const config = {
  botName: "SupportBot",
  initialMessages: [
    createChatBotMessage("Hello! How can I help you today?", {}),
  ],
  widgets: [
    {
      widgetName: "websiteOptionsWidget",
      widgetFunc: (props: any) => <WebsiteOptionsWidget {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "packagesWidget",
      widgetFunc: (props: any) => <PackagesWidget {...props} />,
    },
  ],
};

export default config;