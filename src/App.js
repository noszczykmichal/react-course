import ToDo from "./components/ToDo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

import {useState} from 'react';

function App() {
  const [modalIsOpen, setModalIsOpen]= useState(false);

  function closeModalHandler() {
    setModalIsOpen((modalIsOpen)=> modalIsOpen= !modalIsOpen)    
  }

  let showModal= modalIsOpen && (<div>
    <Backdrop clicked={closeModalHandler}/>
      <Modal clicked={closeModalHandler} />
  </div>)

  return (
    <div>
     {showModal}
      <h1>My ToDos</h1>
      <ToDo text="Learn React" clicked={closeModalHandler}/>
      <ToDo text="Master React" clicked={closeModalHandler}/>
      <ToDo text="Explore the full React course" clicked={closeModalHandler}/>
    </div>
  );
}

export default App;

