import { Route, Routes } from 'react-router-dom';
import UserRouet from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/Store';
import { ThemeProvider } from './user/container/Context/ThemeContext';
import Alert from './user/components/Alert/Alert';
import { SnackbarProvider } from 'notistack';

function App() {

  return (
    <SnackbarProvider maxSnack={3} >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Alert />
            <Routes>
              <Route path='/*' element={<UserRouet />} />
              <Route element={<PrivateRoute />}>
                <Route path='/admin/*' element={<AdminRoute />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;
