import { ref, computed, watch} from 'vue'

const STATE_NAME = 'userState'
const defaultState = {
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
  }

const getDefaultUserState = () => {
    if(sessionStorage.getItem(STATE_NAME) !== null) {
        return JSON.parse(sessionStorage.getItem(STATE_NAME))
    }
    return defaultState
}

const state = ref(getDefaultUserState()) 

const useLoggedUser = () => {
    const setLoggedUser = (value) => state.value = value
    
    watch(state, ()=> {
        sessionStorage.setItem(STATE_NAME, JSON.stringify(state.value))
    })

    if(sessionStorage.getItem(STATE_NAME) === null){
        sessionStorage.setItem(STATE_NAME, JSON.stringify(state.value))
    }
    return { 
        setLoggedUser,
        loggedUser: computed(()=> state.value)
    }
}

export default useLoggedUser