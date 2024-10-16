import React from "react";
import Person from "./Person";

function NameList() {
  const person = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 28 },
    { id: 4, name: "Bob Brown", age: 35 },
    { id: 5, name: "Charlie Davis", age: 22 },
  ];
//   // instead of write this better approach is write it in separate js file
//   const personList = person.map(person=><h2> I am {person.name} age {person.age}</h2>) 
//   return <div>{personList}</div>;
const personList = person.map(person =><Person key= {person.id} person ={person}></Person>) // react use key attribute for whixch item is change , added or updated in list 
return <div>{personList}</div>
}
export default NameList;
