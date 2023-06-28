import { Route, Routes } from 'react-router-dom';
import UserRouet from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<UserRouet />} />
      <Route path='/admin/*' element={<AdminRoute />} />
    </Routes>
  );
}

export default App;
