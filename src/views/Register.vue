<template>
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="email"/>
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password"/>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
//imports 
import * as firebase from 'firebase'; //1643
import 'firebase/auth'; //1643

export default {
  methods:{
    async pressed(){
      try {
        const user = firebase.default.auth().createUserWithEmailAndPassword(this.email,this.password);
        console.log(user);
        this.$router.replace({name:"Secret"});
      } catch(err){
        console.log(err)
      }
    


    }
  },

  data(){
    return{
      email:'',
      password:'',
      error:''
    }
  }
}
</script>

<style>

</style>