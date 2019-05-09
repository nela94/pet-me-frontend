import React from 'react'
import '../Home.css'

class Home extends React.Component {

  showDogs = () => {
    this.props.history.push("/ListBabies?type=dogs")
  }

  showCats = () => {
    this.props.history.push("/ListBabies?type=cats")
  }

  render(){

    return (
      <div>
        <h4>What kind of pet would you like to adopt?</h4>
        <div className="box">
            <div onClick={this.showCats} className="img__wrap">
              <img className="image" src="https://ae01.alicdn.com/kf/HTB1KWxhXr1YBuNjSszeq6yblFXaK/5D-Diy-Diamond-Painting-Cross-Stitch-Cat-Stick-Its-Tongue-Out-Needlework-Diamond-Embroidery-Full-Round.jpg_640x640.jpg" alt="Cat" />
              <p className="img__description">Cat List<span role="img" aria-label="emoji">❤️</span></p>
            </div>
            <div onClick={this.showDogs} className="img__wrap">
              <img className="image" src="https://cdn.buzznick.com/wp-content/uploads/2018/12/funny-animals-sticking-tongues-65.jpg" alt="Dog" />
              <p className="img__description">Dog list<span role="img" aria-label="emoji">❤️</span></p>
            </div>
        </div>
      </div>
    )
  }
}


export default Home
