import logo from './logo.svg';
import './App.css';

import { ReactNotifications } from 'react-notifications-component';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Options from "./pages/options"

import 'react-notifications-component/dist/theme.css'
import NotFound from './components/notFound';

function App() {
  return (
    <BrowserRouter>
      <ReactNotifications />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/options/:subjectId' element={<Options />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
