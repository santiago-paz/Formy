import { Formy } from "./formy.js";

const form = new Formy("testing_form");
form.checkboxes("favorite_food").sandwich.checked = true;

