import React from 'react'
import { connect } from 'react-redux'
import Petcard from './Petcard'
import { addingUserIDtoPet } from '../actions/allActions'

class MatchedPets extends React.Component{

  handleOnClick = (pet) => {
    this.props.addingUserIDtoPet(pet, this.props.user)
    this.props.history.push("/AdoptionCenter")
  }

  render(){
    console.log('PROPS', this.props)
      const allPets = this.props.user.pets
      let gettingUserMatches = []

      if (!!allPets){
       gettingUserMatches = allPets.map(pet => {
         return <Petcard handleOnClick={this.handleOnClick} key={pet.id} pet={pet} />
      })

    }
    return(
      <div>
      <h1>You can only choose one!</h1>
      {gettingUserMatches}
      </div>

    )
  }
}


const mapStateToProps = ({user}) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  addingUserIDtoPet: (pet, user) => dispatch(addingUserIDtoPet(pet, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchedPets)
