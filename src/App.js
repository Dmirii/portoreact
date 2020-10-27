

// основные стили
import './scss/index.scss';

// компоненты
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js'

// основной обект с данными - заменим на fetch
import { mainDB } from './service/service.js'

function App() {
  return (
    <> 
        <Header/>
        <Content mainDB = { mainDB } />
    </>
  );
}

export default App;
