import actiontypes from "../constant/action-types";
const initialState={
	users:[],
};
export const userReducer = (state = initialState, { type, payload})=>{
	switch (type){
		case actiontypes.SET_USER:
			return { ...state, users: payload};
		default:
			return state;
	}
}