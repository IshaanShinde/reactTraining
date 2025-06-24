import './styles/global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import A1 from './pages/A1'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/A1' element={ <A1/> }/>
            </Routes>
        </Router>    
    );
};

export default App
