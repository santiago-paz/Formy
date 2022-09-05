import { Checkbox } from "./checkbox.js";

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
   *
   * @param {string} name
   * @returns {Object.<string, Checkbox>}
   */
  checkboxes(name) {
    const _checkboxes = this.#_form.querySelectorAll(
        `[type="checkbox"][name="${name}"]`
      ),
      response = {};

    for (const _checkbox of _checkboxes) {
      Object.defineProperty(response, _checkbox.id, {
        value: new Checkbox(_checkbox),
      });
    }

    return response;
  }
}
