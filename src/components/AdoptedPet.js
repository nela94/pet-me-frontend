import React from 'react'
import { connect } from 'react-redux'

class AdoptedPet extends React.Component{
  render(){
    console.log("adoptedpet", this.props.pet)
    return(
      <h1>Congrats On Your New Babyy!!!!! </h1>
    )
  }
}

const mapStateToProps = ({pet}) => ({ pet })

export default connect(mapStateToProps)(AdoptedPet)
