import * as yup from 'yup';
const numberMin = 2;
const numberMMax = 200;
/* 
 id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    lastname character varying COLLATE pg_catalog."default" NOT NULL,
    phone character varying COLLATE pg_catalog."default" NOT NULL,
    "dateBorn" timestamp without time zone NOT NULL,
    address character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    "userIdId" uuid NOT NULL,
*/

/* .matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Campo de ${path} inválido')*/
export const schema = yup.object({
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
		.matches(/^\([1-9]{2}\)9 (?:[1-9]|9[1-9])[0-9]{3}-[0-9]{4}$/, 'Campo de ${path} inválido')
		.required(),
	email: yup.string().email().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	address: yup.string().required().max(numberMMax, 'No máximo ' + numberMMax + ' caracteres  no campo ${path}'),
	dateBorn: yup.string('campo de Data de Nascimento é').required(),
}).required();

export default schema;
