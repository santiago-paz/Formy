export class InputText {
  #_inputTextEl;
  #_labelElement;

  constructor(inputTextElement, labelElement) {
    this.#_inputTextEl = inputTextElement;
    this.#_labelElement = labelElement;
  }

  set value(newValue) {
    this.#_inputTextEl.value = newValue;
  }

  get value() {
    return this.#_inputTextEl.value.toString();
  }

  get label() {
    return this.#_labelElement.firstChild.data;
  }

  set label(newValue) {
    return (this.#_labelElement.firstChild.data = newValue);
  }

  get placeholder() {
    return this.#_inputTextEl.getAttribute("placeholder");
  }

  set placeholder(newValue) {
    this.#_inputTextEl.setAttribute("placeholder", newValue);
  }
}
