/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";
const numberMin = 2
const numberMMax = 200
export const schema = yup.object({
    nome: yup.string()
        .matches(/^[aA-zZ\s]+$/, "Somente letras no campo ${path}")
        .min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
        .max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
        .required(),
    sobrenome: yup.string()
        .matches(/^[aA-zZ\s]+$/, "Somente letras no campo ${path}")
        .min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
        .max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
        .required(),
    telefone: yup.string()
        .matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}-[0-9]{4}$/, "Campo de ${path} inválido")
        .required(),
    email: yup.string().email().required(),
    endereco: yup.string().required(),
    dataDeNascimento: yup.string("campo de Data de Nascimento é").required(),
}).required();

export default schema;
