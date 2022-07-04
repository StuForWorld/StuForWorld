import React,{Component} from 'react';
import '../main.css'
import Header from './Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
export default class Main extends Component{
    render(){
        return(
            <div className="main">
                <Routes>
                    <Route path="/" element={<Header />} />
                    {/* <Route path="/show" element={<List />} /> */}
                </Routes>
            </div>
        )
    }
}