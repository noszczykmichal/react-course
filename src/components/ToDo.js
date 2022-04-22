import React from "react";

function ToDo(props) {
  function deleteHandler(){
      const backdrop=document.querySelector('.backdrop');
      const modal=document.querySelector('.modal');
      backdrop.classList.add('show');
      modal.classList.add('show');
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
