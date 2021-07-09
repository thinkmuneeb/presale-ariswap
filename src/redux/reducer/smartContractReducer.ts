import { createSlice } from "@reduxjs/toolkit";

export const smartContractSlice = createSlice({
  name: "smartContractReducer",
  initialState: {
    loading: false,
    smartContract: null,
    error: null,
  },
  reducers: {
    smartContactLoadBegin: (state) => {
      state.loading = true;
    },
    smartContactLoadSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // const { username, password } = action.payload;
      state.loading = false;
      state.smartContract = action.payload;
    },
    smartContactLoadFailure: (state, action) => {
      state.loading = false;
      state.smartContract = null;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  smartContactLoadBegin,
  smartContactLoadSuccess,
  smartContactLoadFailure,
} = smartContractSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const onSmartContractLoad =
  ({ param1, param2 }: any) =>
  (dispatch: any) => {
    console.log(param1, param2);
    dispatch(smartContactLoadBegin());
    setTimeout(() => {
      dispatch(smartContactLoadSuccess({ contract: { info: "dummy" } }));
    }, 2000);
  };

export default smartContractSlice.reducer;
