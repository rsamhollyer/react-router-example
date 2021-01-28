export const setToNull = (fnArray, empty = "") => {
	fnArray.forEach((fn) => fn(empty));
};

export const capitalizeFunction = (s) => {
	try {
		s = s.toLowerCase();
		return s.charAt(0).toUpperCase() + s.slice(1).trim();
	} catch {
		return s;
	}
};
