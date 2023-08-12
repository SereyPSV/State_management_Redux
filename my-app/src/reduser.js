export const initialState = {
	field: {
		field11: '',
		field12: '',
		field13: '',
		field21: '',
		field22: '',
		field23: '',
		field31: '',
		field32: '',
		field33: '',
	},
	player: 'O',
	won: {},
	message: '',
	none: 'none',
};

export const appReduser = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FILL_FIELD': {
			return payload;
		}
		case 'CLEAR_FIELD': {
			return initialState;
		}
		case 'WON': {
			return payload;
		}
		default:
			return state;
	}
};
