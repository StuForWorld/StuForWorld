import React,{Component} from 'react';
import '../main.css'
import Home from './Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
export default class Header extends Component{
    render(){
        return(
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/show" element={<List />} /> */}
                </Routes>
            </div>
        )
    }
}