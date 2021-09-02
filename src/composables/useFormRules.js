import { helpers, required, email, minLength, maxLength, numeric, and  } from '@vuelidate/validators'
import { computed } from 'vue'

export const registerRules = computed(()=> {
    return {
      email: { 
        required: helpers.withMessage('Campo Obrigatório', required),
        email: helpers.withMessage('Insira um email válido', email)
      },
      password: { 
        required: helpers.withMessage('Campo Obrigatório', required),
        minLength: helpers.withMessage('A senha deve ter no mínimo 6 caracteres', minLength(6))
       },
      name: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      cpf: {
        required: helpers.withMessage('Campo Obrigatório', required),
        numeric: helpers.withMessage('Insira apenas números', numeric),
        and: helpers.withMessage('O CPF deve conter 11 dígitos', and(maxLength(11), minLength(11)))
      },
      pis: {
        required: helpers.withMessage('Campo Obrigatório', required),
        numeric: helpers.withMessage('Insira apenas números', numeric),
        and: helpers.withMessage('O PIS deve conter 11 dígitos', and(maxLength(11), minLength(11)))
      },
      postCode: {
        required: helpers.withMessage('Campo Obrigatório', required),
        numeric: helpers.withMessage('Insira apenas números', numeric),
        and: helpers.withMessage('O CEP deve conter 8 dígitos', and(maxLength(8), minLength(8)))
      },
      street: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      district: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      city: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      region: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      country: {
        required: helpers.withMessage('Campo Obrigatório', required),
      }
    }
  })