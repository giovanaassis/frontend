// import { User } from "./App";

// interface Error {
//     [key: string]: string
// }

// export const validate = (data: User) => {

//     const errors: Error = {}

//     if(!data.email || !data.password) {
//         errors['email'] = 'Esse campo é obrigatório.'
//         errors['password'] = 'Esse campo é obrigatório.'
//     }

//     if(!data.agree) { errors['agree'] = 'Tem que concordar com os termos para continuar.' }
    
//     return errors;
    
// }

import * as yup from "yup"

export const validation = yup.object({
    email: yup.string()
    .email('E-Mail inválido')
    .required('Esse campo é obrigatório'),

    password: yup.string()
    .min(8, 'Deve ter no mínimo 8 caracteres')
    .required('Esse campo é obrigatório'),

    agree: yup.boolean()
    .isTrue('Deve concordar com os termos para continuar.')
    .required('Esse campo é obrigatório')
})