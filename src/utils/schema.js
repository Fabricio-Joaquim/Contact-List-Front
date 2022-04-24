import * as yup from 'yup';
const numberMin = 2;
const numberMMax = 200;
<<<<<<< HEAD

const schema = yup.object({
	name: yup.string()
=======
/* .matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Campo de ${path} inválido')*/
export const schema = yup.object({
	nome: yup.string()
>>>>>>> parent of 83d909e... parte das integrações e toasts
		.matches(/^[aA-zZ\s]+$/, 'Somente letras no campo ${path}')
		.min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
		.max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
		.required(),
	sobrenome: yup.string()
		.matches(/^[aA-zZ\s]+$/, 'Somente letras no campo ${path}')
		.min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
		.max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
		.required(),
<<<<<<< HEAD
	phone: yup.string()
		.matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}-[0-9]{4}$/, 'Campo de telefone inválido')
=======
	telefone: yup.string()
		.matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}-[0-9]{4}$/, 'Campo de ${path} inválido')
>>>>>>> parent of 83d909e... parte das integrações e toasts
		.required(),
	email: yup.string().email().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	endereco: yup.string().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	dataDeNascimento: yup.string('campo de Data de Nascimento é').required(),
}).required();

const schemaUserRegister = yup.object({
	password: yup.string()
		.min(6, 'Ao menos ' + 6 + ' caracteres  no campo ${path}')
		.max(20, 'No máximo ' + 20 + ' caracteres  no campo ${path}')
		.required(),
	email: yup.string().email().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),

});

export  {schema, schemaUserRegister};
