import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatList from './hats';
import HatForm from './newhat';

function App(props) {
  if (props.hats === undefined){
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats">
            <Route path="list" element={<HatList hats={props.hats} />} />
          </Route>
          <Route path="hats">
            <Route path="new" element={<HatForm />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
