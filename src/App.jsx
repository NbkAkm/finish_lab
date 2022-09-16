import InitialPage from './components/InitialPage';
import {Routes, Route} from 'react-router-dom'
import { QuestionList } from './components/QuestionList';
import './App.css'

function App() {
  return (
    <div className="App">
    <h1 className='test'>Тест по доте 2</h1>

        
        <Routes>

        <Route path="/" element={<InitialPage/>}/>
        <Route path="/questions" element={<QuestionList/>}/>
        </Routes>
    </div>
  );
}

export default App;
