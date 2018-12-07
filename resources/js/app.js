import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import firebaseui from 'firebaseui';

const config = {
    apiKey: "AIzaSyBfEKjNqtQRdeRxd1ocNwAQjPMo80MUn70",
    authDomain: "qrpay-23f88.firebaseapp.com",
    databaseURL: "https://qrpay-23f88.firebaseio.com",
    projectId: "hotelgemas-ab430",
    storageBucket: "",
    messagingSenderId: "880700125136"
};


new Vue({
    el: '#app',
    created() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                //this.$router.push('/success')
            } else {

                //this.$router.push('/auth')
            }
        });
        console.log(firebase)
    },
    render: h => h(App)
});