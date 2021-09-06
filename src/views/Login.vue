<template>
  <div class="login">
      <div class="container">
        <ErrorModal v-show="authError.isError" @closeModal="clearAuthError">
            <h3>{{authError.message}}</h3>    
        </ErrorModal>
          <h1 class="login__welcome">Olá Visitante,</h1>
          <h2 class="login__welcome--small">Faça o Login ou Cadastre-se para acessar o conteúdo.</h2>
          <form class="form" @submit.prevent="handleSubmit">
                <span class="form__tag">Login</span>
                <div class="form__item">
                    <label for="email"><i class="fas fa-envelope"></i></label>
                    <input type="email" id="email" placeholder="exemplo@ex.com.br" required v-model="userData.email">
                </div>
                <div class="form__item">
                    <label for="password"><i class="fas fa-lock"></i></label>
                    <input type="password" id="password" placeholder="********" required v-model="userData.password">
                </div>
                <button type="submit" class="form__btn accent">Login</button>
                <p class="form__call">Ainda não possui uma conta? <router-link to="/register">Cadastre-se</router-link></p>
          </form>
      </div>
  </div>
</template>

<script>
import ErrorModal from '@/components/ErrorModal.vue'

import { reactive } from 'vue'
import { doLogin, authError, clearAuthError } from '@/Firebase.js'

export default {
name: 'Login',
components: { ErrorModal },
setup(){
    const userData = reactive({
        email: "",
        password: "",
    })

    const handleSubmit = () => doLogin(userData) 

    return { userData, handleSubmit, authError, clearAuthError }
}
}
</script>

<style lang="scss" scoped>
.login {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__welcome {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1rem;

        &--small{
            text-align: center;
            font-size: 1.25rem;
            font-weight: 400;
        }
    }

    .form {
        border: 3px solid var(--clr-primary);
        border-radius: 5px;
        margin: 2rem auto 0;
        padding: 2rem 1rem 0;
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        box-shadow: var(--box-shadow);

        & > * {margin-bottom: 1rem;}

        &__tag {
            font-weight: bold;
            padding: 0 .5rem;
            position: absolute;
            top: -12px;
            left: 15px;
            background-color: var(--clr-background);
        }

        &__item {
            display: flex;
            align-items: center;
            border: 1px solid var(--clr-primary);
            border-radius: 5px;
            width: 100%;
            padding: .5rem 1rem;

            & input {
                flex: 1;
                background-color: transparent;
                border: none;
                outline: none;
                margin-left: 1rem;
                font-size: 1rem;

                &::placeholder {
                    font-style: italic;
                }
            }
        }

        &__btn {
            font-size: 1rem;
            padding: .5rem 1rem;
            border: none;
            border-radius: 5px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: var(--box-shadow);

            &.accent {
                background-color: var(--clr-accent);
                color: var(--clr-txt-secundary);
            }
        }

        &__call {
            text-align: center;
        }
    }
}
</style>