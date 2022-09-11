import { Formy } from "./formy.js";

const form = new Formy("testing_form");

form.checkboxes("favorite_food").checkAll()

form.inputText('name').label = "Testing"

console.log(form.inputText('edad').label);