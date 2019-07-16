import React from 'react';

class Modal extends React.Component {

  modalOff = () => {
    document.getElementsByClassName("modalPractice")[0].style.display = "none"
  }

  render(){
    return(
      <div className="modalPractice">
      <p className="change_link button">
        Wrong Password or Username Please Try Again
        <input type="button" onClick={this.modalOff} value="exit" />
      </p>

      </div>

    )
  }
}

export default Modal
