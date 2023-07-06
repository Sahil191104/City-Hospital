import { Route, Routes } from 'react-router-dom';
import UserRouet from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<UserRouet />} />
      <Route element={<PrivateRoute />}>
        <Route path='/admin/*' element={<AdminRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
