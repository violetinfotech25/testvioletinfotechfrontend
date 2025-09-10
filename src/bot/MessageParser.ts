class MessageParser {
  actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const lower = message.toLowerCase();

    // Greetings
    if (/(hi|hello|hey|good morning|good evening)/.test(lower)) {
      this.actionProvider.greet();
      return;
    }

    // Ask about websites
    if (/(website|types of website|know about website)/.test(lower)) {
      this.actionProvider.showWebsiteOptions();
      return;
    }

    // Option 1 - Static Website
    if (/(^option 1$|static site|basic website|simple site|static)/.test(lower)) {
      this.actionProvider.handleOption1();
      return;
    }

    // Option 2 - Dynamic Website
    if (/(^option 2$|dynamic site|cms|wordpress|interactive|dynamic)/.test(lower)) {
      this.actionProvider.handleOption2();
      return;
    }

    // Option 3 - Ecommerce Website
    if (/(^option 3$|shop|store|ecommerce|buy|sell)/.test(lower)) {
      this.actionProvider.handleOption3();
      return;
    }

    // Option 4 - Portfolio Website
    if (/(^option 4$|portfolio|resume|showcase|my work|portfolioe|portflioe)/.test(lower)) {
      this.actionProvider.handleOption4();
      return;
    }

    // Ask about Packages
    if (/(packages|package details|what are the packages)/.test(lower)) {
      this.actionProvider.showPackages();
      return;
    }

    // Fallback
    const fallback = this.actionProvider.createChatBotMessage(
      "Sorry, I didn’t understand that. Can you rephrase?"
    );
    this.actionProvider.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, fallback],
    }));
  }
}

export default MessageParser;