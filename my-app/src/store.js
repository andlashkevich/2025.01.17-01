// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);

// createStore = (reducer, initial) => {
// 		let state = initial;
// 		return {
// 			dispatch: (action) => {
// 				state = reducer(state, action);
// 				console.log(state);
// 			},
// 			getState: () => state,
// 		};
// 	};
