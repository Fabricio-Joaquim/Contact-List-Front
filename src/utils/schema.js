import * as yup from 'yup';
const numberMin = 2;
const numberMMax = 200;

const schema = yup.object({
	name: yup.string()
		.matches(/^[aA-zZ\s]+$/, 'Somente letras no campo ${path}')
		.min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
		.max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
		.required(),
	lastname: yup.string()
		.matches(/^[aA-zZ\s]+$/, 'Somente letras no campo ${path}')
		.min(numberMin, 'Ao menos ' + numberMin + ' caracteres  no campo ${path}')
		.max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}')
		.required(),
	phone: yup.string()
		.matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}-[0-9]{4}$/, 'Campo de telefone inválido')
		.required(),
	email: yup.string().email().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	address: yup.string().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	dateBorn: yup.string('campo de Data de Nascimento é').required(),
}).required();

const schemaUserRegister = yup.object({
	password: yup.string()
		.min(6, 'Ao menos ' + 6 + ' caracteres  no campo ${path}')
		.max(20, 'No máximo ' + 20 + ' caracteres  no campo ${path}')
		.required(),
	email: yup.string().email().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),

});

export  {schema, schemaUserRegister};
