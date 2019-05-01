import React from 'react'
import '../Pet.css'
// import { connect } from 'react-redux'
// import { creatingMatches } from '../actions/allActions'
// import Cards, { Card } from 'react-swipe-card'


class Petcard extends React.Component {


  render(){
    let photos = []

    if (this.props.origin === "petContainer"){
      photos = this.props.pet.photos.map(photo => {
        return photo.small && photo.medium && photo.large && photo.full
      })
    }
    return(
        // <div className="card">
        //     <img className="image" src={photos} />
        //     <header className="header">
        //       <h2 className="subtitle">Dog Age: {this.props.pet.age}</h2>
        //       <h1 className="title">{this.props.pet.name}</h1>
        //     </header>
        //     <section className="content">
        //     {this.props.pet.description}
        //     </section>
        //   </div>
        <div>
            {this.props.origin === "petContainer" ?
              <div className="card">
                 <div className="card-img embed-responsive embed-responsive-1by1">
                    <div className="embed-responsive-item">
                       <img src={photos} alt="card-title" />
                    </div>
                 </div>
                 <div className="card-body">
                    <h1 className="card-title">{this.props.pet.name}</h1>
                    <p className="card-text">{this.props.pet.description}</p>
                    <button onClick={() => this.props.handleOnClick(this.props.pet)} className="btn btn-primary">Add to your list!</button>
                 </div>
              </div>
              :
              <div className="card">
                 <div className="card-img embed-responsive embed-responsive-1by1">
                    <div className="embed-responsive-item">
                       <img src={this.props.pet.img_full} alt="card-title" />
                    </div>
                 </div>
                 <div className="card-body">
                    <h1 className="card-title">{this.props.pet.name}</h1>
                    <p className="card-text">{this.props.pet.description}</p>
                    <button onClick={() => this.props.handleOnClick(this.props.pet)} className="btn btn-primary">Adopt this cutie!</button>
                 </div>
              </div>
            }
            </div>

    )
  }
}


export default Petcard
