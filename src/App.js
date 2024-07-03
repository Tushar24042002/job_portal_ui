import './App.css';
import RouterFIle from './Router/RouterFIle';
import { AlertProvider } from './Context/AlertContext';

function App() {
  return (
    <AlertProvider>
      <RouterFIle />
    </AlertProvider>
  );
}

export default App;
