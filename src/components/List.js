import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// reducer function

const reducer = (state, action) => {

  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {...state,people: newPeople,isModalOpen: true,modalContent: "item added",}}

  if (action.type === "NO_VALUE") {
    return {...state,isModalOpen: true,modalContent: "please enter value",}}


  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false }}

  if (action.type === "REMOVE_ITEM") {
      const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    })
    return { ...state, people: newPeople ,isModalOpen: true,modalContent: "delete item",};}


  throw new Error("no matching type Found");
};

const defaultState = { //state===defaultState
  

  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: Math.floor(Math.random() * 10000), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
