import { useState } from 'react';
import data from './data';
import Person from './Person';

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAllPeople = () => {
    setPeople((currentState) => {
      return [];
    });
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return <Person details={person} />;
        })}
        <button type="button" className="btn" onClick={clearAllPeople}>
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
