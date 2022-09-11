export class Checkbox {
  #_checkboxEl;
  #_labelElement;

  constructor(checkboxElement, labelElement) {
    this.#_checkboxEl = checkboxElement;
    this.#_labelElement = labelElement;
  }

  get checked() {
    return this.#_checkboxEl.checked;
  }

  set checked(newValue) {
    this.#_checkboxEl.checked = newValue;
  }

  get label() {
    return this.#_labelElement.outerText;
  }

  set label(newValue) {
    return (this.#_labelElement.textContent = newValue);
  }

  toggle() {
    this.#_checkboxEl.checked = !this.#_checkboxEl.checked;
    return this;
  }

  check() {
    this.checked = true;
    return this;
  }

  uncheck() {
    this.checked = false;
    return this;
  }
}
