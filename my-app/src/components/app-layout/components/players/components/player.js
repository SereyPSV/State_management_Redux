import styles from './player.module.css';
import PropTypes from 'prop-types';

export const Input = ({ color, children }) => {
	return (
		<div className={styles.player}>
			<input className={`${styles.input} ${styles[color]}`} defaultValue={children}></input>
			<div className={`${styles.playerIcon} ${styles[color]}`}>
				{children === 'Player 1' ? 'X' : 'O'}
			</div>
		</div>
	);
};

Input.propTypes = {
	color: PropTypes.string,
	children: PropTypes.string,
};
