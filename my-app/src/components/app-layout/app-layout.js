import PropTypes from 'prop-types';
import { CreateButtons, Players } from './components';
import styles from '../../app.module.css';

import { store } from '../../store';

export const AppLayout = ({ onClick }) => (
	<div className={styles.app} style={{ height: `${window.screen.height}px` }}>
		<label className={styles.appLabel}>Tic Tac Toe</label>
		<Players />
		<div className={styles.field} onClick={onClick}>
			<CreateButtons />
		</div>
		<button className={styles.buttonStart} onClick={onClick}>
			Start Game!
		</button>
		<div className={styles.wonMessage} style={{ display: `${store.getState().none}` }}>
			{store.getState().message}
		</div>
	</div>
);

AppLayout.propTypes = {
	onClick: PropTypes.func,
	ticTacToeWon: PropTypes.object,
};
