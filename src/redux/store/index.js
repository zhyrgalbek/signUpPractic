import {createStore} from 'redux';
import reducerFunc from '../reducers/reducer'

export const store = createStore(reducerFunc);