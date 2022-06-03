import useData from './hooks/useData';
import FirstNameForm from './FirstNameForm';
import Button from './Button';

function App() {
  const { person, addFirstName, addOneYear, changeHungerStatus } = useData();

  return (
    <div>
      <h1>Name, Age and Hunger Tracker</h1>
      <FirstNameForm addFirstName={addFirstName} />
      <p>{person.firstName ? `Hello, ${person.firstName}.` : ''}</p>
      <Button handleClick={addOneYear} buttonText={ "Add one year to your age:" } />
      <p>You are {person.age} years old.</p>
      <Button handleClick={changeHungerStatus} buttonText={ "Change your hunger status:" } />
      <p>You are {person.hungry ? "hungry" : "not hungry"}.</p>
    </div>
  );
}

export default App;
