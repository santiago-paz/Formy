import { Checkbox } from "./checkbox.js";
import { InputText } from "./input_text.js";
export class Formy {
  #_form;

  /**
   * Create a form
   * @param {string} id The data-formy-id attribute value.
   */
  constructor(id) {
    this.#_form = document.querySelector(`[data-formy-id="${id}"]`);
  }

  /**
   * @typedef {Object} CheckboxesResponse
   *  @property {Object.<string, Checkbox>}
   *  @property {() => Object.<string, boolean>} getValues The checkboxes values
   *  @property {() => CheckboxesResponse} checkAll Check all checkboxes
   *  @property {() => CheckboxesResponse} uncheckAll Uncheck all checkboxes
   *
   * @param {string} name
   * @returns {CheckboxesResponse}
   */
  checkboxes(name) {
    const _checkboxes = this.#_form.querySelectorAll(
        `[type="checkbox"][name="${name}"]`
      ),
      response = {};

    for (const _checkbox of _checkboxes) {
      Object.defineProperty(response, _checkbox.id, {
        value: new Checkbox(
          _checkbox,
          this.#_form.querySelector(`label[for="${_checkbox.id}"]`)
        ),
      });
    }

    function getValues() {
      const values = {};
      for (const _checkbox of _checkboxes) {
        Object.defineProperty(values, _checkbox.id, {
          value: _checkbox.checked,
        });
      }
      return values;
    }

    function checkAll() {
      for (const _checkbox of _checkboxes) {
        _checkbox.checked = true;
      }
      return this;
    }

    function uncheckAll() {
      for (const _checkbox of _checkboxes) {
        _checkbox.checked = false;
      }
      return this;
    }

    return Object.assign(response, { getValues, checkAll, uncheckAll });
  }

  /**
   * @param {string} name
   * @returns {InputText}
   */
  inputText(name) {
    return new InputText(
      this.#_form.querySelector(`[type="text"][name="${name}"]`),
      this.#_form.querySelector(`label[for="${name}"]`)
    );
  }
}
