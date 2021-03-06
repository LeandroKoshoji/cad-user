<template>
  <div class="edit">
      <div class="container">
          <ErrorModal @closeModal="clearAuthError" v-show="authError.isError">
            <h3>{{authError.message}}</h3>
          </ErrorModal>
          <form class="form" @submit.prevent="update">
            <span class="form__tag">Editar Cadastro</span>
            <div class="form__section flex">
              <h3 class="form__section__title">Dados Cadastrais:</h3>
                <div class="form__item">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" placeholder="Nome Completo" required v-model="userFromDB.name">
                    <div v-if="v$.name.$error">
                        <ErrorSpan v-for="error in v$.name.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
                <div class="form__item">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" placeholder="11 dígitos - somente numeros" required v-model="userFromDB.cpf">
                    <div v-if="v$.cpf.$error">
                        <ErrorSpan v-for="error in v$.cpf.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
                <div class="form__item">
                    <label for="pis">PIS:</label>
                    <input type="text" id="pis" placeholder="11 dígitos - somente numeros" required v-model="userFromDB.pis">
                    <div v-if="v$.pis.$error">
                        <ErrorSpan v-for="error in v$.pis.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
                </div>
            </div>

            <div class="form__section grid">
              <h3 class="form__section__title">Endereço:</h3>
              <div class="form__item">
                  <label for="postCode">CEP:</label>
                  <input type="text" id="postCode" placeholder="8 dígitos - somente numeros" required v-model="userFromDB.postCode">
                  <div v-if="v$.postCode.$error">
                        <ErrorSpan v-for="error in v$.postCode.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="street">Rua:</label>
                  <input type="text" id="street" required placeholder="Rua exemplo" v-model="userFromDB.street">
                  <div v-if="v$.street.$error">
                        <ErrorSpan v-for="error in v$.street.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="adressNumber">Nº:</label>
                  <input type="number" id="adressNumber" placeholder="123" v-model="userFromDB.adressNumber">
              </div>
              <div class="form__item">
                  <label for="adressComplement">Complemento:</label>
                  <input type="text" id="adressComplement" placeholder="Apt 321" v-model="userFromDB.adressComplement">
              </div>
              <div class="form__item">
                  <label for="district">Bairro:</label>
                  <input type="text" id="district" required placeholder="Centro" v-model="userFromDB.district">
                  <div v-if="v$.district.$error">
                        <ErrorSpan v-for="error in v$.district.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="city">Município:</label>
                  <input type="text" id="city" required placeholder="São Paulo" v-model="userFromDB.city">
                  <div v-if="v$.city.$error">
                        <ErrorSpan v-for="error in v$.city.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="region">Estado:</label>
                  <input type="text" id="region" required placeholder="SP" v-model="userFromDB.region">
                  <div v-if="v$.region.$error">
                        <ErrorSpan v-for="error in v$.region.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
              <div class="form__item">
                  <label for="country">País:</label>
                  <input type="text" id="country" required placeholder="Brasil" v-model="userFromDB.country">
                  <div v-if="v$.country.$error">
                        <ErrorSpan v-for="error in v$.country.$errors" :key="error.$uid"> {{error.$message}}</ErrorSpan>
                    </div>
              </div>
            </div>

            <button type="submit" class="form__btn neutral">Editar</button>
            <button type="button" class="form__btn accent" @click="deleteUser">Excluir Usuário</button>
            <router-link to="/">Voltar para página principal</router-link>
          </form>
      </div>
  </div>
</template>

<script>
import ErrorSpan from '@/components/ErrorSpan.vue'
import ErrorModal from '@/components/ErrorModal.vue'

import { getUserFromDB } from '@/Firebase.js'
import { onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import useVuelidate from '@vuelidate/core'
import { editRules } from '@/composables/useFormRules.js'

import { 
  updateUserDoc, 
  deleteUserLogin, 
  deleteUserDoc, 
  authError, 
  clearAuthError } from '@/Firebase.js'

import loggedUser  from '@/composables/useLoggedUser.js';

export default {
name: 'Edit',
components: { ErrorSpan, ErrorModal },
setup(){
  const { setLoggedUser } = loggedUser()
  const route = useRoute()
  const router = useRouter()
  const userFromDB = ref({})
  const userUID = route.params.id

  const v$ = useVuelidate(editRules, userFromDB)

  const update = async () => {
    const hasNotFormError = !v$.value.$error

    if(hasNotFormError){
      const hasNotAuthError = !authError.isError

      await updateUserDoc(userUID, {...userFromDB.value, uid: userUID})
      if(hasNotAuthError){
        setLoggedUser({...userFromDB.value, uid: userUID})
        router.push('/')
        return
      }
    }
    return alert('Verifique os dados do formulário')
  }

  const deleteUser = async () => {
    const hasNotAuthError = !authError.isError

    await deleteUserLogin()
    if(hasNotAuthError) {
      deleteUserDoc(userUID)
      return
    }
  }
  
  onBeforeMount(async ()=> {
    userFromDB.value = await getUserFromDB(userUID)
    v$.value.$validate()
  })

  return { userFromDB, v$, update, deleteUser, authError, clearAuthError }
}
}
</script>

<style lang="scss" scoped>
.edit {
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
      overflow: hidden;
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
        border: 1px solid var(--clr-primary);
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        font-size: 1rem;
        padding: .25rem .5rem;

        &::placeholder {
          font-style: italic;
          font-size: .75rem;
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

      &.neutral {
        background-color: var(--clr-secundary);
        color: var(--clr-txt-secundary);
      }
    }

    &__call {
        text-align: center;
    }
  }
}
</style>