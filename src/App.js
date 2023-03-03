import './App.css';

import React from 'react';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Modal from './componets/Modal/Modal';

import Profile from './componets/Profile/Profile';
import NotFound from './componets/NotFound/NotFound';
import Messages from './componets/Profile/Messages/Messages';

function App() {
    const [modal, setModal] = useState(null);

    function navClickHandler(e) {
        e.preventDefault();
        setModal(modal => e.target.textContent);
    }

    function closeModal() {
        setModal(null)
    }

    return (
        <>
            <Header navClickHandler={navClickHandler} />

            {/* Main Content */}
            <main>
                <Routes>
                    
                    <Route path='/' element={<Home />} />
                    <Route path='/user/profile' element={<Profile />} />
                    <Route path='/user/messages' element={<Messages />} />
                    <Route path='*' element={<NotFound />} />
                    
                </Routes>
                


            {/* Modal Window */}
                {modal && <Modal modal={modal} closeModal={closeModal} />}
            </main>

            <footer>
                <Link target="_blank" to="https://github.com/stsp93">2023 Steliyan Petkov - github.com/stsp93</Link>
            </footer>
        </>
    );
}


export default App;
