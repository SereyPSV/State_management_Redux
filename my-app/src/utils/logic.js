import PropTypes from 'prop-types';

export const TicTacToeLogic = (ticTacToe) => {
	if (
		ticTacToe.field11 === ticTacToe.field12 &&
		ticTacToe.field12 === ticTacToe.field13 &&
		ticTacToe.field12 !== ''
	) {
		return { field11: 'buttonWon', field12: 'buttonWon', field13: 'buttonWon' };
	}

	if (
		ticTacToe.field21 === ticTacToe.field22 &&
		ticTacToe.field22 === ticTacToe.field23 &&
		ticTacToe.field22 !== ''
	) {
		return { field21: 'buttonWon', field22: 'buttonWon', field23: 'buttonWon' };
	}
	if (
		ticTacToe.field31 === ticTacToe.field32 &&
		ticTacToe.field32 === ticTacToe.field33 &&
		ticTacToe.field32 !== ''
	) {
		return { field31: 'buttonWon', field32: 'buttonWon', field33: 'buttonWon' };
	}
	if (
		ticTacToe.field11 === ticTacToe.field21 &&
		ticTacToe.field21 === ticTacToe.field31 &&
		ticTacToe.field21 !== ''
	) {
		return { field11: 'buttonWon', field21: 'buttonWon', field31: 'buttonWon' };
	}
	if (
		ticTacToe.field12 === ticTacToe.field22 &&
		ticTacToe.field22 === ticTacToe.field32 &&
		ticTacToe.field22 !== ''
	) {
		return { field12: 'buttonWon', field22: 'buttonWon', field32: 'buttonWon' };
	}
	if (
		ticTacToe.field13 === ticTacToe.field23 &&
		ticTacToe.field23 === ticTacToe.field33 &&
		ticTacToe.field23 !== ''
	) {
		return { field13: 'buttonWon', field23: 'buttonWon', field33: 'buttonWon' };
	}
	if (
		ticTacToe.field11 === ticTacToe.field22 &&
		ticTacToe.field22 === ticTacToe.field33 &&
		ticTacToe.field22 !== ''
	) {
		return { field11: 'buttonWon', field22: 'buttonWon', field33: 'buttonWon' };
	}
	if (
		ticTacToe.field31 === ticTacToe.field22 &&
		ticTacToe.field22 === ticTacToe.field13 &&
		ticTacToe.field22 !== ''
	) {
		return { field31: 'buttonWon', field22: 'buttonWon', field13: 'buttonWon' };
	}
	return null;
};

TicTacToeLogic.propTypes = {
	ticTacToe: PropTypes.object,
};
