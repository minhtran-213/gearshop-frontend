import { AddressAdminType } from '../actions/ActionTypes';

const initState = {
  addressLoading: false,
  addresses: [],
};

const addressReducer = (state = initState, action) => {
  switch (action.type) {
    case AddressAdminType.GET_ADDRESS_REQUEST:
      return { ...state, ...{ addressLoading: true } };
    case AddressAdminType.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        ...{ addressLoading: false, addresses: action.payload },
      };
    case AddressAdminType.GET_ADDRESS_FAIL:
      return state;
    default:
      return state;
  }
};

export default addressReducer;
