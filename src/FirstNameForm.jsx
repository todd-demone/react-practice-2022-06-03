import { useState } from 'react';

function FirstNameForm(props) {
  const { addFirstName } = props;

  const [firstName, setFirstName] = useState('');

  function handleChange(e) {
    setFirstName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addFirstName(firstName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Add/edit your first name:</label><br />
      <input type="text" id="firstName" name="firstName" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FirstNameForm;