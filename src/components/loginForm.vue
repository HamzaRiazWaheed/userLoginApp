<template>
  <div class="login-form-wrapper" >
    <div class="wrap-it" v-bind:class="[showLoginForm ? 'visible' : '']">
      <div class="main-title">Logga in</div>
      <span class="closer" @click="closeLoginForm()"></span>

       <div v-show="logginError" class="warning">{{ logginError }}</div>

      <div class="login-inputs-wrapper">
        <div class="input-block-wrapper email">
          <input id="email" v-model="email" type="text" name="email" autocomplete="off" @blur="validEmail" placeholder="E-post...">
        </div>
        <div v-show="!isEmailValid && email">
          <div class="warning">Invalid Email</div>
        </div>
        <div class="input-block-wrapper password">
          <input id="password" v-model="password" type="password" name="password" placeholder="Lösenord..">
          <input type="submit" class="login-button" value="LOGGA IN" @click="login" :disabled="!email || !password">
        </div>
      </div>
      
      <div class="underline center mb3"><a href="https://www.hbl.fi/losenord/">Glömt lösenordet?</a></div>

      <div class="social-buttons-wrapper">
        <div class="a-social-button blue"> Logga In med Facebook</div>
        <div class="a-social-button reddish"> Logga In med Google</div>        
      </div>

      <div class="mb3 center">Inget konto? <a href="?doesn't work">Registrera dig!</a></div>
    </div>
  </div>

</template>

<script>
  import {
    mapState
  } from 'vuex'
  import axios from 'axios'
  import store from '../store'

  export default {
    name: "loginForm",
    data() {
      return {
        email: null,
        password: null,
        isEmailValid: true,
        logginError: "",
      }
    },
    computed: {
      ...mapState([
        'loggedIn',
        'showLoginForm',
      ]),
    },
    methods: {
      closeLoginForm(){
        store.commit('CHANGE_SHOW_LOGIN_FORM', {
            status: false
        })
      },
      validEmail() {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.isEmailValid = re.test(this.email)
      },
      login(){
        const self = this;
        store.dispatch('LOGIN', {"username": this.email, "password": this.password})
            .then(function (response) {
                console.log('login : success')
                store.dispatch('GET_USER_INFO');
                self.$router.push('/user')
            })
            .catch(function (error) {
                console.log(error);
                self.logginError = "Oops... somethings wrong \\(*o*)/"
            });
      }

    },

  }
</script>
<style lang="scss" scoped>
  .login-form-wrapper {
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99999;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    justify-content: space-around;
    align-items: center;
    
    a{
      color: #337ab7;
      text-decoration: none;
    }
    .wrap-it {
      opacity: 0;
      transform: scale(0.3);
      transition: transform 0.3s, opacity 0.3s;
      background-color: white;
      position: relative;
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      padding: 20px 50px 65px;
      &.visible{
        opacity: 1;
        transform: scale(1);
      }
      .closer {
        display: block;
        position: absolute;
        right: 13px;
        top: 13px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        padding: 20px;
        background-image: url(https://www.hbl.fi/wp-content/themes/ksf/assets/icons/icon-close-lg.svg);
        background-size: 25px;
        background-position: center;
        background-repeat: no-repeat;
      }
      .login-inputs-wrapper{
        width: 70%;
        margin: 40px auto 15px;
        .input-block-wrapper {
          margin: 10px auto 0 auto;
          position: relative;
          &:before {
            display: block;
            content: "";
            background-color: #aab2bd;
            background-repeat: no-repeat;
            background-position: 50%;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 40px;
            height: 34px;
            pointer-events: none;
          }
          &.email::before{
            background-image: url(https://static.ksf.infomaker.io/wp-content/themes/ksf/assets/js/login/icon-mail-white.268624bd.268624bd.png);
            background-size: 16px 11px;
          }
          &.password::before{
            background-image: url(https://static.ksf.infomaker.io/wp-content/themes/ksf/assets/js/login/icon-key-white.b3677ee9.b3677ee9.png);
            background-size: 16px;
          }

          label {
            display: block;
            text-align: left;
            position: absolute;
            left: 4px;
            top: 0;
            color: #f20077;
            transition: all 300ms ease-out;
          }

          input {
            border-radius: 1px;
            display: block;
            padding: 8px 10px 8px 50px;
            width: 100%;
            border: 1px solid #aab2bd;
            font-size: .9em;

            &:focus {
              +label {
                top: -20px;
              }

            }
          }
          .login-button {
            position: absolute;
            right: 1px;
            top: 1px;
            bottom: 1px;
            width: 85px;
            text-align: center;
            padding: 0;
            border: none;
            border-left: 1px solid #aab2bd;
            border-radius: 0;
            color: #aab2bd;
            background: #fff;
            font-size: .8em;
            font-family: Duplex Sans,sans-serif;
            font-weight: 300;
          }
          button {
            width: 100%;
            padding: 3% 10px;
            border-radius: 3px;
          }
        }
      }
      .social-buttons-wrapper {
          margin: 40px auto 30px;
          width: 70%;
          .a-social-button {
              display: block;
              width: 100%;
              min-width: 100px;
              padding: 7px 0;
              text-align: center;
              border-radius: 5px;
              cursor: pointer;
              color: #fff!important;
              transition: none!important;
              letter-spacing: .015em;
              font-size: .9em;
              font-weight: 500;
              margin-top: 5px;
              &.blue{
                background-color: #3b5999;
                background-image: url(https://static.ksf.infomaker.io/wp-content/themes/ksf/assets/js/login/fb-logo.ea515539.ea515539.svg)!important;
                background-size: 20px;
                background-position: 20px;
                background-repeat: no-repeat;
              }
              &.reddish{
                background-color: #d64a2a;
                background-image: url(https://static.ksf.infomaker.io/wp-content/themes/ksf/assets/js/login/google-logo.3de5cb0e.3de5cb0e.svg)!important;
                background-size: 20px;
                background-position: 20px;
                background-repeat: no-repeat;
              }
          }
      }

    }
  }
</style>