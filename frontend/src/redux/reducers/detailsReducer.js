const initialState = {};

export function detailsReducer(state = initialState, action) {

	switch (action.type) {

		case 'SAVE_PRODUCT_DETAILS':
			const { title, price, sold_quantity, condition } = action.payload;
			return Object.assign({}, { title, price, sold_quantity, condition });
		case 'UPDATE_PRODUCT_DETAILS/fulfilled':
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
