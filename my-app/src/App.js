import { Information, Fields } from './Components';
import styles from './App.module.css';
import { useState } from 'react';
import { store } from './store';

const GameLayout = () => {
	const [st, setSt] = useState(store.getState());

	const handleAgain = () => {
		setSt(store.getState());
		store.dispatch({ type: 'RESTART_GAME' });
		console.log(st);
	};

	return (
		<div className={styles.App}>
			<h2>Крестики-нолики</h2>
			<Information />
			<Fields />
			<button onClick={handleAgain} className={styles.startbtn}>
				Начать заново
			</button>
		</div>
	);
};

const Game = () => <GameLayout />;

export default Game;
