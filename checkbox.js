export class Checkbox {
  #_checkbox;

  constructor(checkboxElement) {
    this.#_checkbox = checkboxElement;
  }

  get checked() {
    return this.#_checkbox.checked;
  }

  set checked(newValue) {
    this.#_checkbox.checked = newValue;
  }

  toggle() {
    this.#_checkbox.checked = !this.#_checkbox.checked;
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
