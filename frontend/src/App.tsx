import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/global.css'

import Layout from './Layout';

import A1 from './pages/A1'
import A2 from './pages/A2';
import A3 from './pages/A3';
import A4 from './pages/A4';
import Home from './pages/Home';

function App() {

    return (
        <Router>
            <Routes>
                <Route element={ <Layout /> }>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='/A1' element={ <A1/> }/>
                    <Route path='/A2' element={ <A2/> }/>
                    <Route path='/A3' element={ <A3/> }/>
                    <Route path='/A4' element={ <A4/> }/>
                </Route>
            </Routes>
        </Router> 
    );
};

export default App
