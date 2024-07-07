import './App.css';
import RouterFIle from './Router/RouterFIle';
import { AlertProvider } from './Context/AlertContext';
import { AuthProvider } from './Context/AuthContext';
import { useAxiosInterceptors } from './axiosInstance';

function App() {
  useAxiosInterceptors();
  return (
    <AlertProvider>
      <AuthProvider>
        <RouterFIle />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
