
import {Routes,Route,BrowserRouter }  from 'react-router-dom'
import { AuthProvider } from './AuthContext/AuthContext';
import ProtectedRoute from './AuthContext/Protective';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    <Routes>
    <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
     
      <Route exact path='/login' element={<Login/>}></Route>
 
      <Route exact path='/signup' element={<Signup/>}></Route>

    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
