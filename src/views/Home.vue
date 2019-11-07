<template>
  <div>
    <dummy-body></dummy-body>
    <login-form v-if="showLoginForm"></login-form>
  </div>
</template>

<script>

import loginForm from '../components/loginForm.vue' 
import dummyBody from '../components/dummyBody.vue' 

import {mapState} from 'vuex';

export default {
  name: "Home",
  components: {
    'login-form': loginForm,
    'dummy-body': dummyBody,
  },
  computed: {
    ...mapState([
        'showLoginForm',
    ]),
  },
}
</script>
