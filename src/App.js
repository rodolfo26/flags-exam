import logo from './logo.svg';
// import './App.css';
import { MainPage } from './components/pages';
import {
    MemoryRouter as Router, //
    Route, //
    Link, //
} from "react-router-dom";

function App() {
    return (

        <Router>
            <MainPage/>
        </Router>
    );
}

export default App;