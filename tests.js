// ********************************** CHECKBOXES **********************************
// check if checkbox value is checked (read only property):
form.checkbox("favorite_food").pizza.checked;
// set checkbox fields:
form.checkbox("favorite_food").pizza.check();
form.checkbox("favorite_food").pizza.uncheck();
// you can also
form.checkbox("favorite_food").pizza.check().uncheck().set(true);
// fields label (read/write property):
form.checkbox("favorite_food").pizza.label;
form.checkbox("favorite_food").pizza.label = "new label";
// checkbox fields:
form.checkbox("favorite_food").getValues();
/* return {
    pizza: true,
    salami: false,
    sandwich: false } */
// you can also
/* form.checkbox("favorite_food").getValues().pizza = false; */
// check/uncheck all:
form.checkbox("favorite_food").checkAll();
form.checkbox("favorite_food").uncheckAll();

// ********************************** TEXTS **********************************

// set get values
form.inputText("apellido").set("new value");
form.inputText("apellido").get();
// get/set label
form.inputText("apellido").label;
form.inputText("apellido").label = "new label";
// get/set placeholder
form.inputText("apellido").placeholder;
form.inputText("apellido").placeholder = "new label";

// ************ MIXED (inputs, checkboxes, options mixed) ************

form.mixedField("pronoun").getValues();
/* return {
  mr: true,
  ms: false,
  other: '' } */
form.mixedField("pronoun").checkboxes().select("pronoum_ms");
