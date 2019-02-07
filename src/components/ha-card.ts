import "@polymer/paper-styles/element-styles/paper-material-styles";
import {
  html,
  TemplateResult,
  PropertyDeclarations,
  LitElement,
} from "lit-element";

class HaCard extends LitElement {
  protected render(): TemplateResult | void {
    return html`
      <style include="paper-material-styles">
        :host {
          box-shadow: var(--paper-material-elevation-1_-_box-shadow);
          display: block;
          border-radius: var(--ha-card-border-radius, 2px);
          transition: all 0.3s ease-out;
          background: var(--ha-card-background, var(--paper-card-background-color, white));
          color: var(--primary-text-color);
        }
        .header {
          font-family var(--paper-font-headline_-_font-family);
          font-size var(--paper-font-headline_-_font-size);
          font-weight var(--paper-font-headline_-_font-weight);
          letter-spacing var(--paper-font-headline_-_letter-spacing);
          line-height var(--paper-font-headline_-_line-height);
          -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
          text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
          opacity: var(--dark-primary-opacity);
          padding: 24px 16px 16px;
        }
      </style>

      <template is="dom-if" if="${this.header}">
        <div class="header">${this.header}</div>
      </template>
      <slot></slot>
    `;
  }

  static get properties(): PropertyDeclarations {
    return {
      header: String,
    };
  }
}

customElements.define("ha-card", HaCard);
