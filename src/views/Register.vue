<template>
  <div class="register">
      <div class="container">
          <form class="form" @submit.prevent="handleSubmit()">
            <span class="form__tag">Cadastre-se</span>
            <div class="form__section flex">
              <h3 class="form__section__title">Dados de Acesso:</h3>
                <div class="form__item">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="exemplo@ex.com.br" required v-model="userData.email">
                    <div v-if="v$.email.$error">
                        <ErrorSpan v-for="error in v$.email.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
                <div class="form__item">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" placeholder="********" required v-model="userData.password">
                    <div v-if="v$.password.$error">
                        <ErrorSpan v-for="error in v$.password.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
            </div>

            <div class="form__section flex">
              <h3 class="form__section__title">Dados Cadastrais:</h3>
                <div class="form__item">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" placeholder="nome" required v-model="userData.name">
                    <div v-if="v$.name.$error">
                        <ErrorSpan v-for="error in v$.name.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
                <div class="form__item">
                    <label for="cpf">CPF:</label>
                    <input type="number" id="cpf" placeholder="11 digitos - apenas numeros" required v-model="userData.cpf">
                    <div v-if="v$.cpf.$error">
                        <ErrorSpan v-for="error in v$.cpf.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
                <div class="form__item">
                    <label for="pis">PIS:</label>
                    <input type="number" id="pis" required v-model="userData.pis">
                    <div v-if="v$.pis.$error">
                        <ErrorSpan v-for="error in v$.pis.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
            </div>

            <div class="form__section grid">
              <h3 class="form__section__title">Endereço:</h3>
              <div class="form__item">
                  <label for="postCode">CEP:</label>
                  <input type="text" id="postCode" placeholder="8 digitos - apenas numeros" required v-model="userData.postCode">
                  <div v-if="v$.postCode.$error">
                        <ErrorSpan v-for="error in v$.postCode.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="street">Rua:</label>
                  <input type="text" id="street" required placeholder="Rua ficticia" v-model="userData.street">
                  <div v-if="v$.street.$error">
                        <ErrorSpan v-for="error in v$.street.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="adressNumber">Nº:</label>
                  <input type="number" id="adressNumber" placeholder="123" v-model="userData.adressNumber">
              </div>
              <div class="form__item">
                  <label for="adressComplement">Complemento:</label>
                  <input type="text" id="adressComplement" placeholder="Apt 321" v-model="userData.adressComplement">
              </div>
              <div class="form__item">
                  <label for="district">Bairro:</label>
                  <input type="text" id="district" required placeholder="Centro" v-model="userData.district">
                  <div v-if="v$.district.$error">
                        <ErrorSpan v-for="error in v$.district.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="city">Município:</label>
                  <input type="text" id="city" required placeholder="São Paulo" v-model="userData.city">
                  <div v-if="v$.city.$error">
                        <ErrorSpan v-for="error in v$.city.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="region">Estado:</label>
                  <input type="text" id="region" required placeholder="SP" v-model="userData.region">
                  <div v-if="v$.region.$error">
                        <ErrorSpan v-for="error in v$.region.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="country">País:</label>
                  <input type="text" id="country" required placeholder="Brasil" v-model="userData.country">
                  <div v-if="v$.country.$error">
                        <ErrorSpan v-for="error in v$.country.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
            </div>

            <button type="submit" class="form__btn accent" >Cadastrar</button>
            <p class="form__call">Já possui uma conta? <router-link to="/login">Login</router-link></p>
          </form>
      </div>
  </div>
</template>

<script>
import { registerRules } from '@/composables/useFormRules.js'
import useVuelidate from '@vuelidate/core'
import { reactive} from 'vue'

import ErrorSpan from '@/components/ErrorSpan.vue'
export default {
name: 'Register',
components: { ErrorSpan },
setup(){
  const userData = reactive({
    email: '',
    password: '',
    name: '',
    cpf: null,
    pis: null,
    postCode: null,
    street: '',
    adressNumber: null,
    adressComplement: '',
    district: '',
    city: '',
    region: '',
    country: ''
  })

  const v$ = useVuelidate(registerRules, userData)
  v$.value.$validate()

  const handleSubmit = () => {
    if(!v$.value.$error) {
      alert('criar') // função de Criar Usuário no FB
    } else {
      alert('Nao foi')
    }
  }
  return { userData, v$, handleSubmit }
}
}
</script>

<style lang="scss" scoped>
.register {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
    border: 3px solid var(--clr-primary);
    border-radius: 5px;
    margin: 2rem auto 0;
    padding: 2rem 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: var(--box-shadow);

    & > * { margin-bottom: 1rem;}

    &__tag {
      font-weight: bold;
      padding: 0 .5rem;
      position: absolute;
      top: -12px;
      left: 15px;
      background-color: var(--clr-background);
    }

    &__section {
      
      width: 100%;
      padding-top: 2rem;
      
      position: relative;

      &.flex {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 825px) {
        flex-direction: column;
        }
      }

      &.grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 767px) {
          grid-template-columns: auto;
        }
      }

      &__title {
        position: absolute;
        left: 1rem;
        top: .5rem;
      }

    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 100%;
      padding: .5rem 1rem;

      & label {
        font-weight: bold;
        font-size: 1rem;
      }

      & input {
        flex: 1;
        max-height: 30px;
        border: 1px solid var(--clr-primary);
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        font-size: 1rem;
        padding: .25rem .5rem;
        color: var(--clr-txt-primary);

        &::placeholder {
          font-style: italic;
        }
      }
    }

    &__btn {
      min-width: 200px;
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