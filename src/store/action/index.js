import Firebase from '../../config/firebase' 
import firebase from 'firebase'

const set_data = (data) => {
 return (dispatch) => {
    console.log (data) ;

   dispatch ({ type : "SETDATA", data : data })
 
}

}

const facebook_login = ()=> {

    console.log("Fbbbbb")
    return (dispatch) => { 

        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("adasdasd",user)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           console.log(errorMessage)
          });
    }
}

export {
    set_data,
    facebook_login
}