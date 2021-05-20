import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'

const PersonContext = React.createContext();


const ContextApi = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { id: Math.floor(Math.random() * 10000), person };

    setPerson({ ...person, newPerson });
    setPeople([...people, newPerson]);
    setPerson("");
  };

  const handleDelete = (id) => {
    const newPerson = people.filter((person) => person.id !== id);

    setPeople([...newPerson]);
  };

  return (
   <PersonContext.Provider value={handleDelete} >
        <div>
      <h1>Context Api</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={person}
          onChange={(e) => {
            setPerson(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <hr />
      <People people={people} />
    </div>
   </PersonContext.Provider>
  );
};






const People = ({ people }) => {
  return (
    <>
      {people.map((value) => {
        return <Person value={value}  />;
      })}
    </>
  );
};

const Person = ({ value }) => {
    const deleteData=useContext(PersonContext)
  return (
    <>
      <div key={value.id}>
        <li>
          {value.person}
          <button
            onClick={() => {
                deleteData(value.id);
            }}
          >
            delete
          </button>
          <Link to={`/person/${value.id}`}>Learn More</Link>
          
        </li>
        <hr />
      </div>
    </>
  );
};

export default ContextApi;
