function Modal(props) {
  

  return (
    <div className="modal">
          <p>Are you sure?</p>
          <button className="btn btn--alt" onClick={props.clicked}>Cancel</button>
          <button  className="btn" onClick={props.clicked}>Confirm</button>
      </div>
  )  
}

export default Modal;
