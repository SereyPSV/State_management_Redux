import { Fragment } from 'react';
import { styles } from './button.css';
import PropTypes from 'prop-types';

import { store } from '../../../../store';

export const CreateButtons = () => {
	const state = store.getState();
	const buttons = state.field;
	const buttonsWon = state.won;
	return (
		<Fragment>
			{Object.keys(buttons).map((item) => (
				<div
					className={`button ${buttonsWon[item]}`}
					style={buttons[item] === 'X' ? { color: 'red' } : { color: 'green' }}
					key={item}
					id={item}
				>
					{buttons[item]}
				</div>
			))}
		</Fragment>
	);
};

CreateButtons.propTypes = {
	buttons: PropTypes.object,
};
