import { TicTacToeLogic } from './';
import { initialState } from '../reduser';
import PropTypes from 'prop-types';

export const TicTacToeWon = (ticTacToe, playerN, none, message) => {
	const resultWon = TicTacToeLogic(ticTacToe, playerN);
	if (resultWon) {
		return {
			none: 'flex',
			message: 'Player ' + (playerN === 'O' ? '2' : '1') + ' won!',
			Background: { ...initialState.field, ...resultWon },
		};
	}
	if (Object.values(ticTacToe).some((i) => i === '')) {
		message = 'Player ' + (playerN === 'O' ? '2' : '1') + ' won!';
	} else {
		message = 'Nobody won!';
		none = 'flex';
	}
	return {
		Background: { ...initialState.field, ...resultWon },
		message: message,
		none: none,
	};
};

TicTacToeWon.propTypes = {
	ticTacToe: PropTypes.object,
	playerN: PropTypes.string,
	none: PropTypes.string,
	message: PropTypes.string,
};
