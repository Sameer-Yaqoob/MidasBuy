import {legacy_createStore as createStore, applyMiddleware,   } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore,persistReducer } from "redux-persist";
import rootReducer from '././reducers'
import rootSaga from '././sagas'
import storage from 'redux-persist/lib/storage' 
import { composeWithDevTools } from "redux-devtools-extension";

// const bindMiddleware = middleware => {
//   if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    
//     const { composeWithDevTools } = require('redux-devtools-extension')
//     return composeWithDevTools(applyMiddleware(...middleware))
//   }
//   return applyMiddleware(...middleware)
// }
// const persistConfig = {
//     key: 'root',
//     storage
//   }
//   const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
// function configureStore() {
//   const sagaMiddleware = createSagaMiddleware()
//   const store = createStore(
//     rootReducer,
//     bindMiddleware([sagaMiddleware])
//   )
//    const persistor  = persistStore(store)
//   store.sagaTask = sagaMiddleware.run(rootSaga)

//   return {store,persistor}
 
// }
const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
	sagaMiddleware.run(rootSaga);
	const persistor = persistStore(store);
	return { store, persistor };
};

// const { store, persistor } = configureStore();
const { store, persistor } = configureStore();
export  {store, persistor}