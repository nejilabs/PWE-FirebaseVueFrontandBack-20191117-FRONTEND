<template>
  <div>
    Logged In
    <span v-if="isLoggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import 'firebase/auth';
export default {
  data(){
    return{
      isLoggedIn:false
    }
  },
  
  methods:{

      async signOut(){
        try{
          const data = await firebase.default.auth().signOut();
          console.log(data);
          this.$router.replace({name:'Login'});
        }catch(err){
          console.log(err);
        }
      }
    
  }

}
</script>

<style>

</style>