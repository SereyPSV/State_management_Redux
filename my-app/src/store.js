import { appReduser } from './reduser';

const createStore = (reducer) => {
	let state;

	return {
		dispatch: (action) => {
			state = reducer(state, action);
		},
		getState: () => state,
	};
};

export const store = createStore(appReduser);

store.dispatch({});
