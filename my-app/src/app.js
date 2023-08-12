import React, { useState } from 'react';
import { TicTacToeWon } from './utils';
import { AppLayout } from './components/app-layout/app-layout';
import { store } from './store';
import styles from './app.module.css';

let playerN = 'O',
	none = 'none',
	message = '';

export const App = () => {
	const [rendering, setRendering] = useState(false);
	const playingField = store.getState().field;
	const playingStore = store.getState();

	const onClick = (item) => {
		if (item.target.className === styles.field) {
			return;
		}
		if (item.target.textContent === '') {
			if (playerN !== 'X') {
				playerN = 'X';
			} else {
				playerN = 'O';
			}
			store.dispatch({
				type: 'FILL_FIELD',
				payload: {
					...playingStore,
					field: { ...playingField, [item.target.id]: playerN },
					player: playerN,
					won: {},
				},
			});
			setRendering(!rendering);
		}
		if (item.target.className === styles.buttonStart) {
			playerN = 'O';
			none = 'none';
			store.dispatch({
				type: 'CLEAR_FIELD',
			});
			setRendering(!rendering);
		}
	};

	const ticTacToeWon = TicTacToeWon(playingField, playerN, none, message);
	if (ticTacToeWon.none === 'flex') {
		store.dispatch({
			type: 'WON',
			payload: {
				...playingStore,
				player: playerN,
				won: { ...ticTacToeWon.Background },
				none: ticTacToeWon.none,
				message: ticTacToeWon.message,
			},
		});
	}
	return <AppLayout onClick={onClick} />;
};
