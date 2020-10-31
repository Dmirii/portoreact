import {React, useState} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Pagination from "react-js-pagination";

import './Content.scss';

import Post from '../Post/Post.js';
import Porto from '../Porto/Porto.js'
import Header from '../Header/Header.js';
import Contact from '../Contact/Contact.js';
import Feedback from '../Feedback/Feedback.js';
import Sidebar from '../Sidebar/Sidebar.js';
import PromoPost from '../PromoPost/PromoPost.js'; 


const Content = ({mainDB ,skils = mainDB.mySkils, porto=mainDB.porto }) => {
    const [page , setPage] = useState(1);
    // eslint-disable-next-line
    const [elements, setElements] = useState(5);
    const [startElement, setStartElement] = useState(0)

    const handlePageChange = (pageNumber) =>{
  
        const newStartElement= (pageNumber*elements)-elements;
        if(newStartElement<=porto.length){            
            setStartElement(newStartElement);
            setPage(pageNumber);
        }
        else{
            

        }
        console.log(newStartElement)
    }

    return(

    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <Header/>
        <div className="content">
            <main className="posts">
            <Route  path='/feedback'>
                    <Feedback/>     
                </Route>

                <Route exact  path='/'>
                    <PromoPost PromoContent ={mainDB.about}/>
                    {
                        skils.map((item,index) => {
                            return(<Post key={index} postContent ={item}/>)
                        })
                    }      
                </Route>

                <Route path='/porto'>              
                    {   
                        
                        porto.map((item,index) => {
                            if( index> startElement && index <=(startElement+elements)){
                            return(
                                <Porto key={index} postContent ={item}/>)
                            }else return(null)
                        })
                    } 
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={5}
                        totalItemsCount={porto.length-1}
                        pageRangeDisplayed={4}   
                        onChange={handlePageChange}                     
                    />   
                </Route>

                <Route path='/contact'>
                    <Contact contactInfo ={mainDB.contactInfo}/>
                </Route>
            </main>
        
            <Sidebar  mainDB ={mainDB}/>
        </div>
    </BrowserRouter>
)}

export default Content;