import './App.css'
import { NavBarr } from './components/NavBarr'
import { EbookModalPage } from './pages/EbookModalPage';
import { Home } from './pages/Home'

export const App = () => {

  return (
    <>
      <NavBarr />
      <Home />
      <EbookModalPage />
    </>
  );
}

export default App
