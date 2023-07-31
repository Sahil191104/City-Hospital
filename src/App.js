import { Route, Routes } from 'react-router-dom';
import UserRouet from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { configstore } from './redux/Store';

function App() {

  const { store, persistor } = configstore();

  // console.log(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path='/*' element={<UserRouet />} />
          <Route element={<PrivateRoute />}>
            <Route path='/admin/*' element={<AdminRoute />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
