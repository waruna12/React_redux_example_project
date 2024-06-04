enum NumberActionType {
  INC = 'INCREMENT',
  DEC = 'DECREMENT',
}

type ActionTypes = {
  type: NumberActionType;
  payload: number;
};

export type StateType = {
  number: number;
};

export const incrementNumber = (payload: number ) => {
  return {
    type: NumberActionType.INC,
    payload: payload,
  };
};
export const decrementNumber = (payload: number) => {
    return {
      type: NumberActionType.DEC,
      payload: payload,
    };
  };


const defaultState = { number: 0 };

const reducer = (state: StateType = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case NumberActionType.INC:
      return {
        number: state.number + action.payload,
      };
    case NumberActionType.DEC:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
