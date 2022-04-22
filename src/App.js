import ToDo from "./components/ToDo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  function closeModalHandler() {
    const backdrop = document.querySelector(".backdrop");
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show");
    backdrop.classList.toggle("show");
  }

  return (
    <div>
      <Backdrop/>
      <Modal clicked={closeModalHandler} />
      <h1>My ToDos</h1>
      <ToDo text="Learn React" />
      <ToDo text="Master React" />
      <ToDo text="Explore the full React course" />
    </div>
  );
}

export default App;
