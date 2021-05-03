import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from '../reducers/auth'


const rootReducer = combineReducers({
    user: auth,
    
    
  });
  
  const configureStore = () => {
    return createStore(
      rootReducer,
      compose(applyMiddleware(thunk))
    );
  };
  
  export default configureStore;