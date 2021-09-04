import { helpers, required, email, minLength } from '@vuelidate/validators'
import { computed } from 'vue'

const nameRegex = helpers.regex(/^[a-zA-ZÀ-ú']{2,40}/)
const fullNameRegex = helpers.regex(/^([a-zA-ZÀ-ú']{2,40}(\s+|$)){2,}$/)
const cpfRegex = helpers.regex(/(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/)
const pisRegex = helpers.regex(/(\d{3})[.]?(\d{5})[.]?(\d{2})[-]?(\d)/)
const cepRegex = helpers.regex(/(\d{2}[.]?\d{3})[-]?(\d{3})/)
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
        fullNameRegex: helpers.withMessage('Digito nome e sobrenome', fullNameRegex)
      },
      cpf: {
        required: helpers.withMessage('Campo Obrigatório', required),
        cpfRegex: helpers.withMessage('CPF Inválido | Deve conter 11 dígitos', cpfRegex),
      },
      pis: {
        required: helpers.withMessage('Campo Obrigatório', required),
        pisRegex: helpers.withMessage('PIS Inválido | Deve conter 11 dígitos', pisRegex)
      },
      postCode: {
        required: helpers.withMessage('Campo Obrigatório', required),
        cepRegex: helpers.withMessage('CEP Inválido | Deve conter 8 dígitos', cepRegex)
      },
      street: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      district: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Bairro inválido', locationsRegex)
      },
      city: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Cidade inválido', locationsRegex)
      },
      region: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Estado inválido', locationsRegex)
      },
      country: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('País inválido', locationsRegex)
      }
    }
  })

  export const editRules = computed(()=> {
    return {
      name: {
        required: helpers.withMessage('Campo Obrigatório', required),
        nameRegex: helpers.withMessage('Nome inválido', nameRegex),
        fullNameRegex: helpers.withMessage('Digito nome e sobrenome', fullNameRegex)
      },
      cpf: {
        required: helpers.withMessage('Campo Obrigatório', required),
        cpfRegex: helpers.withMessage('CPF Inválido | Deve conter 11 dígitos', cpfRegex),
      },
      pis: {
        required: helpers.withMessage('Campo Obrigatório', required),
        pisRegex: helpers.withMessage('PIS Inválido | Deve conter 11 dígitos', pisRegex)
      },
      postCode: {
        required: helpers.withMessage('Campo Obrigatório', required),
        cepRegex: helpers.withMessage('CEP Inválido | Deve conter 8 dígitos', cepRegex)
      },
      street: {
        required: helpers.withMessage('Campo Obrigatório', required),
      },
      district: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Bairro inválido', locationsRegex)
      },
      city: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Cidade inválido', locationsRegex)
      },
      region: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('Estado inválido', locationsRegex)
      },
      country: {
        required: helpers.withMessage('Campo Obrigatório', required),
        locationsRegex: helpers.withMessage('País inválido', locationsRegex)
      }
    }
  })