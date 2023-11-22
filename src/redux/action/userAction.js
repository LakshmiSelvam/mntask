import actiontypes from "../constant/action-types";

export const setUser = (users) => {
		return {
			type: actiontypes.SET_USER,
			payload:users,
		};
	};
