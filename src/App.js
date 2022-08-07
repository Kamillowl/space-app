import Header from './Components/Header';
import Main from './Pages/Main';
import MainDoggo from './Pages/MainDoggo';
import MainMe from './Pages/MainMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
      <>
        <Header />
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/dogPage' element={<MainDoggo />} />
                  <Route path='/about-me' element={<MainMe />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
