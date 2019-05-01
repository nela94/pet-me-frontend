import React from 'react'

// import { withRouter } from "react-router-dom"

class Home extends React.Component {

  showDogs = () => {
    this.props.history.push("/pets?type=dogs")
  }

  showCats = () => {
    this.props.history.push("/pets?type=cats")
  }

  render(){

    return (
      <div>
        <h1>PET ME!!!</h1>
        <h4>What kind of pet would you like to adopt?</h4>
        <div className="box">
                <img onClick={this.showCats} src="https://www.gannett-cdn.com/-mm-/735f994d042682a89f8a4f2fcfd5ea505f3dc1cd/c=0-127-2995-1819/local/-/media/2015/10/31/USATODAY/USATODAY/635818943680464639-103115cute-kitty.jpg?width=320&height=360&fit=crop" alt="Cat" height="360"/>
                <img onClick={this.showDogs} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uUIjCN4U906iKukGxJnz37nCpq8PkonI-efAEch4uEPkvWj7" alt="Dog" height="300"/>
        </div>
      </div>
    )
  }
}


export default Home
