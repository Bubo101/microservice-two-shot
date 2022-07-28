import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatList from './hats';
import HatForm from './newhat';
import NewShoeForm from './newshoe';
import ShoeList from './shoes';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats">
            <Route path="list" element={<HatList/>} />
          </Route>
          <Route path="shoes">
            <Route path="list" element={<ShoeList/>} />
          </Route>
          <Route path="hats">
            <Route path="new" element={<HatForm />} />
          </Route>
          <Route path="shoes">
            <Route path="new" element={<NewShoeForm />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
