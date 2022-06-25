// declare
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.tooltip = null;
    this.tooltipText = "Dummy Tooltip";
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
        this.tooltipText = this.getAttribute("text");
      }
    var tooltipIcon = document.createElement("span");
    tooltipIcon.innerText = "(?)";
    tooltipIcon.addEventListener("mouseenter", this.showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this.hideTooltip.bind(this));
    //   this.appendChild(tooltipIcon); // without shadow dom
    this.style.position = "relative";
    this.shadowRoot.appendChild(tooltipIcon);
  }
  showTooltip() {
    this.tooltip = document.createElement("div");
    this.tooltip.innerText = this.tooltipText;
    this.shadowRoot.appendChild(this.tooltip);
    this.tooltip.style.position = "absolute";
    this.tooltip.style.bottom = "-20px";
    // this.tooltip.style.left = "10px";

    this.tooltip.style.padding = "2px";
    this.tooltip.style.width = "120px";
    this.tooltip.style.fontSize = "8px";
    this.tooltip.style.fontSize = "Verdana";
    this.tooltip.style.color = "white";
    this.tooltip.style.backgroundColor = "#000";
    this.tooltip.style.border = "1px solid grey";
    this.tooltip.style.borderRadius = "3px";

    this.shadowRoot.appendChild(this.tooltip);
  }
  hideTooltip() {
    this.shadowRoot.removeChild(this.tooltip);
  }
}
//define
customElements.define("uc-tooltip", Tooltip);
