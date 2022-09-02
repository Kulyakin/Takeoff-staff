// Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);