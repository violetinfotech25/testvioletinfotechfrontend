class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Helper to add messages
  addMessage(message: any) {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  // Greetings
  greet() {
    const message = this.createChatBotMessage(
      "👋 Welcome to Violet Infotech! How can I help you today?"
    );
    this.addMessage(message);
  }

  // Website Options
  showWebsiteOptions() {
    const message = this.createChatBotMessage("We offer different types of websites:", {
      widget: "websiteOptionsWidget",
    });
    this.addMessage(message);
  }

  // Packages
  showPackages() {
    this.showPackagesDynamic(); // Call dynamic package widget
  }

  showPackagesDynamic(prevChoice?: string) {
    let options;

    if (prevChoice === "Website") {
      options = [
        { label: "Static Website", handler: () => this.handleOption1() },
        { label: "Dynamic Website", handler: () => this.handleOption2() },
        { label: "E-commerce Website", handler: () => this.handleOption3() },
        { label: "Portfolio Website", handler: () => this.handleOption4() },
      ];
    } else if (prevChoice === "Branding") {
      options = [
        { label: "Branding Package", handler: () => this.handlePackage2() },
      ];
    } else if (prevChoice === "Digital Marketing") {
      options = [
        { label: "Digital Marketing Package", handler: () => this.handlePackage3() },
      ];
    } else {
      // Default options
      options = [
        { label: "Website Package", handler: () => this.handlePackage1() },
        { label: "Branding Package", handler: () => this.handlePackage2() },
        { label: "Digital Marketing Package", handler: () => this.handlePackage3() },
        { label: "Combo Package", handler: () => this.handlePackage4() },
      ];
    }

    const message = this.createChatBotMessage("📦 Please choose a package:", {
      widget: "packagesWidget",
      payload: { options },
    });

    this.addMessage(message);
  }

  // =========================
  // Website Handlers
  // =========================

  handleOption1() {
    const messages = [
      this.createChatBotMessage("📌 Static Website"),
      this.createChatBotMessage(
        "A static website is simple and consists of fixed content."
      ),
      this.createChatBotMessage(
        "✨ Package includes: Up to 5 pages, responsive design, basic SEO, hosting setup."
      ),
      this.createChatBotMessage("💰 Starting at ₹4,999"),
    ];
    messages.forEach((msg) => this.addMessage(msg));
  }

  handleOption2() {
    const messages = [
      this.createChatBotMessage("📌 Dynamic Website"),
      this.createChatBotMessage(
        "Dynamic websites are interactive and change content based on user interaction or backend data."
      ),
      this.createChatBotMessage(
        "✨ Package includes: CMS integration, authentication, database connectivity, custom features."
      ),
      this.createChatBotMessage("💰 Starting at ₹9,999"),
    ];
    messages.forEach((msg) => this.addMessage(msg));
  }

  handleOption3() {
    const messages = [
      this.createChatBotMessage("📌 E-commerce Website"),
      this.createChatBotMessage(
        "E-commerce websites allow you to sell products/services online."
      ),
      this.createChatBotMessage(
        "✨ Package includes: Product catalog, shopping cart, payment gateway, order tracking."
      ),
      this.createChatBotMessage("💰 Starting at ₹14,999"),
    ];
    messages.forEach((msg) => this.addMessage(msg));
  }

  handleOption4() {
    const messages = [
      this.createChatBotMessage("📌 Portfolio Website"),
      this.createChatBotMessage(
        "Portfolio websites showcase your work and achievements."
      ),
      this.createChatBotMessage(
        "✨ Package includes: Project galleries, about & contact pages, responsive design, social media links."
      ),
      this.createChatBotMessage("💰 Starting at ₹6,999"),
    ];
    messages.forEach((msg) => this.addMessage(msg));
  }

  // =========================
  // Package Handlers
  // =========================

  handlePackage1() {
    const message = this.createChatBotMessage(
      "📦 Website Package: Includes Static, Dynamic, E-commerce, and Portfolio websites tailored to your needs."
    );
    this.addMessage(message);
  }

  handlePackage2() {
    const message = this.createChatBotMessage(
      "🎨 Branding Package: Logo design, color palette, typography, and brand guidelines."
    );
    this.addMessage(message);
  }

  handlePackage3() {
    const message = this.createChatBotMessage(
      "📢 Digital Marketing Package: SEO, social media management, ads, and content marketing."
    );
    this.addMessage(message);
  }

  handlePackage4() {
    const message = this.createChatBotMessage(
      "💎 Combo Package: A complete bundle of Website + Branding + Digital Marketing at discounted rates."
    );
    this.addMessage(message);
  }
}

export default ActionProvider;