import { useState } from 'react';
import data from './data';
import List from './List';

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
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={clearAllPeople}
        >
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
