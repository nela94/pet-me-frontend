import React from 'react'
import '../Pet.css'

class AdoptedPetCard extends React.Component {


  render(){

    return(

              <div className="card">
                 <div className="card-img embed-responsive embed-responsive-1by1">
                    <div className="embed-responsive-item">
                       <img src={this.props.pet.img_full} alt="card-title" />
                    </div>
                 </div>
                 <div className="card-body">
                    <h1 className="card-title">{this.props.pet.name}</h1>
                    <p className="card-text">{this.props.pet.description}</p>
                 </div>
              </div>

    )
  }
}


export default AdoptedPetCard
