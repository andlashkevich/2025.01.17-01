import styles from './information.module.css';
import { store } from '../../store';
import { useEffect, useState } from 'react';

const InformationLayout = ({ message }) => (
	<div className={styles.information}>{message}</div>
);

export const Information = () => {
	let message = '';
	const [st, setSt] = useState(store.getState());

	useEffect(() => {
		store.subscribe(() => {
			setSt(store.getState());
		});
	}, []);

	st.isDraw
		? (message = 'Ничья')
		: st.isGameEnded
			? (message = `Победа: ${st.currentPlayer}`)
			: (message = `Ходит: ${st.currentPlayer}`);

	return <InformationLayout message={message} />;
};
