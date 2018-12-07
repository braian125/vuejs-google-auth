<template>
  <div id="app">
      <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
    import firebase from 'firebase';
    import firebaseui from 'firebaseui'
    import Auth from './components/Auth.vue';


    export default {
        name: 'app',
        mounted() {
            var uiConfig = {
                signInSuccessUrl: '/',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                    ]
            };
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        },
    }
</script>