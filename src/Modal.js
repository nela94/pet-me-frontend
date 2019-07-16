import React from 'react';

class Modal extends React.Component {
  render(){
    return(
      <div className="modalPractice">
      <p className="change_link button">
        Wrong Password or Username Please Try Again
        <input type="button" value="exit" />
      </p>

      </div>

    )
  }
}

export default Modal
