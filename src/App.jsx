import Home from './pages/Home';
import UserProvider from './context/UserContext';
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <UserProvider>
      <Home />
      <ToastContainer />
    </UserProvider>
  )
}

export default App;