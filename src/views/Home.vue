<template>
  <div class="home">
    <div class="container">
      <h1 class="home__welcome">Olá, {{loggedUser.name}}</h1>
      <h2 class="home__welcome--small">O que deseja fazer?</h2>
      <div class="home__buttons">
        <router-link :to="`/edit/${loggedUser.uid}`" type="button" class="home__buttons__btn neutral">Editar cadastro</router-link>
        <button type="button" class="home__buttons__btn accent" @click="doLogout">Sair</button>
      </div>
    </div>
  </div>
</template>

<script>
import { loggedUser } from '@/composables/useLoggedUser.js'
import { doLogout } from '@/Firebase.js'

export default {
  name: 'Home',
  setup() {
    
    return { doLogout, loggedUser }
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__welcome{
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;

    &--small {
      font-size: 1.25rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  &__buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &__btn{
      font-size: 1rem;
      padding: .5rem 1rem;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: var(--box-shadow);

      &.neutral {
        background-color: var(--clr-secundary);
        color: var(--clr-txt-secundary);
      }

      &.accent {
        background-color: var(--clr-accent);
        color: var(--clr-txt-secundary);
      }
    }
  }
}
</style>
