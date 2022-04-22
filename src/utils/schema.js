/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';
const numberMin = 2;
const numberMMax = 200;
/* .matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Campo de ${path} inválido')*/
export const schema = yup.object({
<<<<<<< HEAD
	nome: yup.string()
		.matches(/^[aA-zZ\s]+$/, 'Somente letras no campo ${path}')
		.min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
		.max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
		.required(),
	sobrenome: yup.string()
		.matches(/^[aA-zZ\s]+$/, 'Somente letras no campo ${path}')
		.min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
		.max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
		.required(),
	telefone: yup.string()
		.matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}-[0-9]{4}$/, 'Campo de ${path} inválido')
		.required(),
	email: yup.string().email().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	endereco: yup.string().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	dataDeNascimento: yup.string('campo de Data de Nascimento é').required(),
=======
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
>>>>>>> 6c52d20f90d95c4bc12f8f9444195e2dafdc03a1
}).required();

export default schema;
