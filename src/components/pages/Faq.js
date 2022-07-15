import "./Faq.scss";
import React from 'react'
import SecondSearch from '../Components/Images/secondsearch.png'
import SecondSearchleg from '../Components/Images/secondsearchleg.png'


 function Faq() {
    return (
        <div id="search-help">
        <p id="help">How can we help?</p>
        <p id="keyword">Type your keyword</p>
                <input  type="search" id="search" id="search-bar" />
        <div id="search-icon">
            <img src={SecondSearch} alt="" className="head"/>
            <img src={SecondSearchleg} alt="" className="leg" />
         </div> 
         <div id="ask-body">
        <p id="ask-about">Ask questions about</p>
        <div id="the-ask">
        <p id="interpool">Interpool</p>
        <select id="HNG">
              <option value="all-about">What HNGi is all about?</option>     
        </select>
        <select id="history">
              <option value="all-about">History</option> 
        </select>
        <textarea>
            Interpool was founded by the HNG team in the year 2020.
            Combining efforts to create Interpool were bunch of hardworking individuals 
               which were dedicated to their tasks.
               </textarea> 
         <select id="HN">
              <option value="all-about">Functionalities of Interpol</option>    
        </select>   
        <p id="application">Application</p>
        <select id="app">
              <option value="all-about">How to apply</option>     
        </select>
        <select id="ap">
              <option value="all-about">Application Process</option>     
        </select>


      
        </div>
        </div>           
        </div>
       
    )
}export default Faq
      