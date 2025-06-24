import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/global.css'

import A1 from './pages/A1'
import A2 from './pages/A2';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/A1' element={ <A1/> }/>
                <Route path='/A2' element={ <A2/> }/>
            </Routes>
        </Router>    
    );
};

export default App
