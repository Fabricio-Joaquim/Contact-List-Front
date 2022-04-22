const minAge = 10;
const maxAge = 100;
const maxDate = (age) => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${year - (age || minAge)}-${String(month).padStart(2, '0')}-${day}`;
};
const minDate = (age) => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${year - (age || maxAge)}-${String(month).padStart(2, '0')}-${day}`;
};

export { minDate, maxDate };