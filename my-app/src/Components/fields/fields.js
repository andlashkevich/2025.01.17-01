import styles from './fields.module.css';
import { store } from '../../store';
import { useState } from 'react';

const FieldLayout = ({ handleStep }) => {
	const { fields } = store.getState();

	return (
		<div className={styles.container}>
			{fields.map((it, id) => {
				return (
					<button
						ind={id}
						key={id}
						className={styles.button}
						onClick={handleStep}
					>
						{it}
					</button>
				);
			})}
		</div>
	);
};

export const Fields = () => {
	const [st, setSt] = useState(store.getState());
	const win = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const handleStep = (event) => {
		if (!st.isDraw && !st.isGameEnded && event.target.textContent === ' ') {
			let ar = [...st.fields];
			ar[event.target.outerHTML[13]] = st.currentPlayer;
			store.dispatch({ type: 'SET_FIELD', payload: ar });
		}

		win.find(
			(it) =>
				st.currentPlayer === st.fields[it[0]] &&
				st.currentPlayer === st.fields[it[1]] &&
				st.currentPlayer === st.fields[it[2]],
		)
			? store.dispatch({ type: 'SET_GAME_ENDED', payload: true })
			: !st.fields.includes(' ')
				? store.dispatch({ type: 'SET_IS_DRAW', payload: true })
				: st.currentPlayer === '0'
					? store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' })
					: store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: '0' });
		setSt(store.getState());
		// console.log('gameEnded-', st.isGameEnded, 'isDraw', st.isDraw);
	};

	return <FieldLayout fields={st.fields} handleStep={handleStep} />;
};

// useEffect(() => {
// 	store.subscribe(() => {
// 		setSt(store.getState());
// 	});
// 	// const unsubscribe = store.subscribe(() => {
// 	// 	setSt(store.getState());
// 	// });
// 	// unsubscribe();
// }, []);
