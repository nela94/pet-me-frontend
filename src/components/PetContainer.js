import React from 'react'
import { Client } from "@petfinder/petfinder-js"
import Petcard from './Petcard'
import '../Pet.css'
import { connect } from 'react-redux'
import { creatingMatches } from '../actions/allActions'

// import { Card, CardWrapper } from 'react-swipeable-cards'

class PetContainer extends React.Component {

  state = {
      dogs: [],
      cats: []
    }

  componentDidMount() {
    const client = new Client({apiKey: "RqPmGmPGHQWIiCVG5gzphrFaw1QomsafGhyq22Q5yOz19zejel", secret: "sShiuXCl1mlIFd4p4Fq5TCwkCzf6ACDDidNipna4"});

    client.animal.search({type: "Dog"})
      .then(response => {
          return this.setState({
            dogs: response.data.animals
          })
      })
      .catch(error => {
          return error
      });

      client.animal.search({type: "Cat"})
        .then(response => {
            return this.setState({
              cats: response.data.animals
            })
        })
        .catch(error => {
            return error
        });
     }

     handleOnClick = (pet) => {

      this.props.creatingMatches(this.props.user, pet)

         if(pet.type === 'Dog'){
             const removingSelectedPet = this.state.dogs.filter(dog => dog.id !== pet.id)
           this.setState({
             dogs: removingSelectedPet
           })
         }
        else if(pet.type === 'Cat'){
            const removingSelectedPet = this.state.cats.filter(cat => cat.id !== pet.id)
          this.setState({
            cats: removingSelectedPet
          })
        }
     }

  render(){
     console.log("state", this.state.cats)
    const makingOneCat = this.state.cats.map(cat => {
      return <Petcard key={cat.id} pet={cat} origin={'petContainer'} handleOnClick={this.handleOnClick}/>
    })

    const makingOneDog = this.state.dogs.map(dog => {
      return <Petcard handleOnClick={this.handleOnClick} origin={'petContainer'} key={dog.id} pet={dog}/>
    })

    if(this.props.location.search === "?type=cats") {
      return(
        <div>
        <h1>Cats</h1>
        <h2>Start Swipping!</h2>
        <div>{makingOneCat}</div>
        </div>
      )
    }
    else if (this.props.location.search === "?type=dogs") {
      return (
        <div>
        <h1>Dogs</h1>
        <h2>Start Swipping!</h2>
        <div>{makingOneDog}</div>
        </div>
      )
    }
    else {
      return (
        <div>Sorry we don't have that type of pet available yet</div>
      )
    }
  }
}

const mapStateToProps = ({user}) => ({ user })

const mapDispatchToProps = dispatch => ({
  creatingMatches: (user, pet) => dispatch(creatingMatches(user, pet))
  // puttingPetsOnBackEnd: (pet) => dispatch(puttingPetsOnBackEnd(pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetContainer)
