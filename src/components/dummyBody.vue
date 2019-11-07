<template>
    <div>
    <div class="body">
        <h3 v-if="!loggedIn" class="pop-bold-text">Haven't coded this part Man! You need to Login!</h3>
        <h3 v-else class="pop-bold-text">Logged In! Good, <router-link to="/user">/Go To User Page</router-link> and thats all! </h3>
    </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'dummyBody',
     computed: {
        ...mapState([
            'loggedIn',
        ]),
  },
}
</script>
<style lang="scss" scoped>
.body {
    position: relative;
    text-align: center;
}
</style>