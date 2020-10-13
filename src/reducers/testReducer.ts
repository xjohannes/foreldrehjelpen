interface TestReducerState {
  testState: number;
}

interface Action {
  type: string;
}

const ActionType = {
  TEST_ACTION: 'TEST_ACTION'
};

const initialState: TestReducerState = {
  testState: 0
};
const testReducer = (
  state = initialState,
  action: Action
): TestReducerState => {
  switch (action.type) {
    case ActionType.TEST_ACTION:
      return {
        testState: state.testState + 1
      };
    default:
      return initialState;
  }
};
export default testReducer;
