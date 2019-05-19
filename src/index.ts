import { Map } from "immutable";

const immuablePerson = Map({ name: "Alok" });
console.log(immuablePerson);
console.log(immuablePerson.toJS());

// printing without error
