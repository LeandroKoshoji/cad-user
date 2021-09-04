<template>
  <main>
    <router-view/>
  </main>
</template>

<script>
import firebase from 'firebase/compat/app'
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default {
 setup(){
  const route = useRoute()
  const router = useRouter()

  const redirectIfNotLoggedIn = firebase.auth().onAuthStateChanged((user) => {
    if(!user) {
      console.log('Deslogado')
      router.replace('/login')
    } else if (route.path === '/login' || route.path === '/register') {
      console.log('logado')
      router.replace('/')
    }
  })
  
  onBeforeMount(()=> redirectIfNotLoggedIn)

 }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
:root {
  --clr-background: #f5f5f5;
  --clr-primary: #2d3f51;
  --clr-secundary:#f8ae17;
  --clr-accent: #ff6854;
  --clr-txt-primary: #2d3f51;
  --clr-txt-secundary: #f5f5f5;
  --box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  background-color: var(--clr-background);
  color: var(--clr-txt-primary);
  min-height: 100vh;
  width: 100%;
}

a{
  cursor: pointer;
  color: inherit;
}

.container {
  width: Min(90%, 70rem);
  margin: 0 auto;
}


</style>
