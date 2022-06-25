//declaring
class HelloWebComponent extends HTMLElement {
    constructor() {
      super();
      console.log("Within Hello World Web Component !");
    }
  }
  
  //define
  customElements.define("uc-helloworld", HelloWebComponent);
  