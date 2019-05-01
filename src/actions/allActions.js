const loginUser = (user) => ({type: 'LOGIN_USER', payload: user})
const usersPick = (matches) => ({type: 'USERS_PICK', payload: matches})
const chosenPet = (petUserId) => ({type:'EDITTING_PET', payload: petUserId})

export const newUser = (userInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {dispatch(loginUser(userData),
        localStorage.setItem("token", userData.jwt))
      });
  }
}

export const gettingUser = (userInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {dispatch(loginUser(userData),
        localStorage.setItem("token", userData.jwt))
      })
    }
}

export const getCurrentUser = () => (dispatch) => {
    let token = localStorage.token;
    token
      && fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(user =>{dispatch(loginUser(user))

          })
  }

  export const creatingMatches = (user, pet) => {
    return (dispatch) => {
      fetch("http://localhost:3000/matches", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          user_id: user.id,
          pet: {
            name: pet.name,
            gender: pet.gender,
            img_full: pet.photos[0].full,
            img_medium: pet.photos[0].medium,
            img_large: pet.photos[0].large,
            img_small: pet.photos[0].small,
            description: pet.description,
            adoption_id: pet.id,
            age: pet.age,
            user_id: null
          }
        })
      })
        .then(resp => resp.json())
        .then(data => {dispatch(usersPick(data))
      })
    }
  }

export const addingUserIDtoPet = (pet, user) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user_id: user.id
      })
    })
    .then(resp => resp.json())
    .then(data => {console.log(data)
  })
  }
}



  // export const puttingPetsOnBackEnd = (pet) => {
  //   // debugger
  //     return (dispatch) => {
  //       fetch("http://localhost:3000/pets", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //           accepts: "application/json"
  //         },
  //         body: JSON.stringify({
  //           name: pet.name,
  //           gender: pet.gender,
  //           img_full: pet.photos[0].full,
  //           img_medium: pet.photos[0].medium,
  //           img_large: pet.photos[0].large,
  //           img_small: pet.photos[0].small,
  //           description: pet.description,
  //           adoption_id: pet.id,
  //           age: pet.age,
  //           user_id: null
  //         })
  //       })
  //         .then(resp => resp.json())
  //         .then(data => {dispatch(chosenPets(data))
  //       })
  //     }
  //   }
