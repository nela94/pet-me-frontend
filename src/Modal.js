import React from 'react';

class Modal extends React.Component {

  modalOff = () => {
    document.getElementsByClassName("modal")[0].style.display = "none"
  }

  render(){
    return(

      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Sorry Try Again!<span role="img" aria-label="emoji">❤️</span></h2>
            </div>
            <div class="modal-body">
              <p>Your username or password is incorrect.</p>
            </div>
            <div class="modal-footer">
              <button type="button" onClick={this.modalOff} class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
