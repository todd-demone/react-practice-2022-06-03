import { useState } from 'react';

function useData() {
  const [person, setPerson] = useState({
    firstName: '',
    age: 0,
    hungry: true
  });

  function addFirstName(newFirstName) {
    setPerson({
      ...person,
      firstName: newFirstName
    });
  };

  function editFirstName(newFirstName) {
    setPerson({
      ...person,
      firstName: newFirstName
    });
  };

  function addOneYear() {
    setPerson({
      ...person,
      age: person.age + 1
    });
  }

  function changeHungerStatus() {
    setPerson({
      ...person,
      hungry: !person.hungry
    })
  }

  return { person, addFirstName, editFirstName, addOneYear, changeHungerStatus };
};

export default useData;