import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return initialState;
  }
};

function Reducer() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="col text-left">
      <h1 className="text-info text-center">
        {' '}
        Le compteur commence à : {counter}
      </h1>
      <hr />
      <p>
        Incrementer:{' '}
        <button
          className="btn btn-info m-1"
          onClick={() => dispatch('increment')}
        >
          {' '}
          +{' '}
        </button>{' '}
      </p>
      <hr />
      <p>
        Décrementer :
        <button
          className="btn btn-danger m-1"
          onClick={() => dispatch('decrement')}
        >
          {' '}
          -{' '}
        </button>
      </p>
      <hr />
      <p>
        Remise à zéro :{' '}
        <button
          className="btn btn-success m-1"
          onClick={() => dispatch('initialize')}
        >
          {' '}
          0{' '}
        </button>
      </p>
      <hr />
    </div>
  );
}

export default Reducer;
