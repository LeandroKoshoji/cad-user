import { helpers, required, email, minLength, maxLength, numeric, and } from '@vuelidate/validators'
import { computed } from 'vue'

const nameRegex = helpers.regex(/^[a-zA-ZÀ-ú']{2,40}/)
const fullNameRegex = helpers.regex(/^([a-zA-ZÀ-ú']{2,40}(\s+|$)){2,}$/)
const locationsRegex = helpers.regex(/^([a-zA-ZÀ-ú']{2,40}(\s+|$)){1,}$/)

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
        nameRegex: helpers.withMessage('Nome inválido', nameRegex),
        fullNameRegex: helpers.withMessage('Digito nome e sobrenome sem abreviações', fullNameRegex)
      },
      cpf: {
        required: helpers.withMessage('Campo Obrigatório', required),
        numeric: helpers.withMessage('Insira apenas números', numeric),
        and: helpers.withMessage('CPF deve conter 11 dígitos', and(minLength(11), maxLength(11))),
      },
      pis: {
        required: helpers.withMessage('Campo Obrigatório', required),
        numeric: helpers.withMessage('Insira apenas números', numeric),
        and: helpers.withMessage('PIS deve conter 11 dígitos', and(minLength(11), maxLength(11)))
      },
      postCode: {
        required: helpers.withMessage('Campo Obrigatório', required),
        numeric: helpers.withMessage('Insira apenas números', numeric),
        and: helpers.withMessage('CEP deve conter 8 dígitos', and(minLength(8), maxLength(8)))
      },
      street: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      district: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Bairro inválido, não use abreviações e/ou números', locationsRegex)
      },
      city: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Cidade inválido, não use abreviações e/ou números', locationsRegex)
      },
      region: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Estado inválido, não use abreviações e/ou números', locationsRegex)
      },
      country: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('País inválido, não use abreviações e/ou números', locationsRegex)
      }
    }
  })

export const editRules = computed(()=> {
  return {
    name: {
      required: helpers.withMessage('Campo Obrigatório', required),
      nameRegex: helpers.withMessage('Nome inválido', nameRegex),
      fullNameRegex: helpers.withMessage('Digito nome e sobrenome sem abreviações', fullNameRegex)
    },
    cpf: {
      required: helpers.withMessage('Campo Obrigatório', required),
      numeric: helpers.withMessage('Insira apenas números', numeric),
      and: helpers.withMessage('CPF deve conter 11 dígitos', and(minLength(11), maxLength(11))),
    },
    pis: {
      required: helpers.withMessage('Campo Obrigatório', required),
      numeric: helpers.withMessage('Insira apenas números', numeric),
      and: helpers.withMessage('PIS deve conter 11 dígitos', and(minLength(11), maxLength(11)))
    },
    postCode: {
      required: helpers.withMessage('Campo Obrigatório', required),
      numeric: helpers.withMessage('Insira apenas números', numeric),
      and: helpers.withMessage('CEP deve conter 8 dígitos', and(minLength(8), maxLength(8)))
    },
    street: {
      required: helpers.withMessage('Campo Obrigatório', required),
    },
    district: {
      required: helpers.withMessage('Campo Obrigatório', required),
      locationsRegex: helpers.withMessage('Bairro inválido, não use abreviações e/ou números', locationsRegex)
    },
    city: {
      required: helpers.withMessage('Campo Obrigatório', required),
      locationsRegex: helpers.withMessage('Cidade inválido, não use abreviações e/ou números', locationsRegex)
    },
    region: {
      required: helpers.withMessage('Campo Obrigatório', required),
      locationsRegex: helpers.withMessage('Estado inválido, não use abreviações e/ou números', locationsRegex)
    },
    country: {
      required: helpers.withMessage('Campo Obrigatório', required),
      locationsRegex: helpers.withMessage('País inválido, não use abreviações e/ou números', locationsRegex)
    }
  }
})