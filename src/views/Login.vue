<template>
  <div>
    <form @submit.prevent="pressed">
      Login
      <div class="login">
        <input type="email" placeholder="login"/>
      </div>

      <div class="password">
        <input type="password" v-model="password" placeholder="password"/>
      </div>

      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    <span>Need an account? Click here to <router-link to="/register">Register</router-link></span>
  </div>

</template>

<script>
import * as firebase from 'firebase'; //1643
import 'firebase/auth'; //1643

export default {
  data(){
    return{
      email:'',
      pasword:'',
      error:''
    }
  },

  methods:{
    async pressed(){
      try{
        const val = await firebase.default.auth().signInWithEmailAndPassword(this.email,this.password);
        console.log(val);

        this.$router.replace({name:'Secret'});
      }catch(err){
        console.log(err);
      }
      
    }
  },

  

}
</script>

<style>

</style>