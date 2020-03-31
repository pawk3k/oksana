// Initialize Firebase
import Template from "./components/Template/Template";
import * as firebase from 'firebase';
import React from "react";
const firebaseConfig = {
    apiKey: "AIzaSyD1a2_bcyftC3kVT5o1KAGfBqByynjYjoQ",
    authDomain: "nefritis2.firebaseapp.com",
    databaseURL: "https://nefritis2.firebaseio.com",
    projectId: "nefritis2",
    storageBucket: "nefritis2.appspot.com",
    messagingSenderId: "89320406806",
    appId: "1:89320406806:web:60d218d1a4a818adcc5a37",
    measurementId: "G-J5CY84C9W5"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();
let provider = new firebase.auth.GoogleAuthProvider();

// const ath= () => firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
// }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });


class HelloMessage extends React.Component {
    constructor () {
        super();
        this.state = {
            lithuania: '',
            uk: '',
            back:''
        };
        this.getImage('back');
    }

    getImage (image) {
        // let { state } = this;
        storage.child('back.jpg').getDownloadURL().then((url) => {
            let new_state = {
              back: url
            };
            this.setState(new_state)
        }).catch((error) => {
            // Handle any errors
        })
    }

    render() {
        return (
            <div>
                Hello Lithuania<br />
                <Template image={this.state.back}/>
                <Template image={this.state.back}/>
                <Template image={this.state.back}/>
                <Template image={this.state.back}/>
                {/*<img src={ this.state.back } alt="Lithuanian flag" />*/}
                <br />
                Hello United Kingdom<br />
                <img src={ this.state.uk } alt="UK flag" />
                <br/>
                <button onClick={() => {
                    firebase.auth().signInWithPopup(provider);
                    console.log("kek");
                }}> Sign in</button>
            </div>
        );
    }
}
export default HelloMessage;