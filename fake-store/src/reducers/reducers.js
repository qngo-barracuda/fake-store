import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  UPDATE_CATEGORY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUERY,
} from "../actions/actions";

const initialState = {
  products: [],
  currentCategory: "",
  cart: [],
  cartTotal: 0,
  currentQuery: "",

  isFetching: false,
  error: null,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    case FETCH_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartTotal: state.cartTotal + action.payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        //need to figure out what to do when there's multiples of the same item, should we do a quantity state?
        cart: state.cart.filter((eachItem) => {
          return eachItem.id !== action.payload.id;
        }),
        // need to fix this so that it doesn't come up with a weird long number at times
        cartTotal: state.cartTotal - action.payload.price,
      };
      case UPDATE_QUERY:
          console.log(action.payload);
      return {
          ...state,
          currentQuery: action.payload
      };

    default:
      return state;
  }
}

export default reducers;
