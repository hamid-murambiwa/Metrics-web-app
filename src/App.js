import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Art from './pages/home';
import Details from './pages/details';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <section>
        <Routes>
          <Route exact path="/" element={<Art />} />
          <Route path="/*" element={<Details />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </section>
    </Provider>
  );
}

export default App;
