

// основные стили
import './scss/index.scss';

// компонент
import Content from './components/Content/Content.js'



// основной обект с данными - заменим на fetch
import { mainDB } from './service/service.js'
//


  



function App() {
  return (
    <> 
        <Content mainDB = { mainDB } />
    </>
  );
}

export default App;
