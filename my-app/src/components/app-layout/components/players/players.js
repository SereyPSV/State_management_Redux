import { Input } from './components/player';
import styles from './players.module.css';
import PropTypes from 'prop-types';

import { store } from '../../../../store';

export const Players = () => {
	const playerN = store.getState().player;
	return (
		<div className={styles.players}>
			<Input color={'red'}>Player 1</Input>

			<div
				className={`${styles.nextMove} ${playerN === 'O' ? styles.red : styles.green}`}
			>
				<p>Next</p>
				<p>{playerN === 'O' ? 'X' : 'O'}</p>
			</div>
			<Input color={'green'}>Player 2</Input>
		</div>
	);
};

Players.propTypes = {
	playerN: PropTypes.string,
};
