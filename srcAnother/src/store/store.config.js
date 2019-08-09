import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import rootMiddleware from './rootMiddleware';

export default function createAppStore () {
  return createStore(
    rootReducer,
    applyMiddleware(rootMiddleware)
  );
}