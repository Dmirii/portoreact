import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';

import Post from '../Post/Post.js';
import Porto from '../Porto/Porto.js'
import Contact from '../Contact/Contact.js';
import Sidebar from '../Sidebar/Sidebar.js';
import PromoPost from '../PromoPost/PromoPost.js';

import './Content.scss';


const Content = ({mainDB ,skils = mainDB.mySkils, porto=mainDB.porto }) => {

    return(

    <BrowserRouter>
        <div className="content">
            <main className="posts">
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
                            return(<Porto key={index} postContent ={item}/>)
                        })
                    }      
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