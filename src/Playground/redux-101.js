import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };

    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;
      return {
        count: state.count - decrementBy,
      };

    case 'SET':
      return {
        count: action.count,
      }

    case 'RESET':
      return {
        count: state.count = 0,
      }

    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// I'd like to increment the cound
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5,
});

// unsubscribe(); 

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10,
});

store.dispatch({
  type: 'SET',
  count: 101,
})