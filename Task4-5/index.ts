import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./reducers/pokemonReducer";
import pokemonSaga from "./sagas/pokemonSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(pokemonSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
