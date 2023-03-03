import './App.css';

import React from 'react';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Header from './componets/Header/Header';
import Modal from './componets/Modal/Modal';
import Results from './componets/Results/Results';
import Profile from './componets/Profile/Profile';
import NotFound from './componets/NotFound/NotFound';
import Messages from './componets/Profile/Messages/Messages';
import OfferDetails from './componets/OfferDetails/OfferDetails';
import Carousel from './componets/Carousel/Carousel';
import CategoryList from './componets/CategoryList/CategoryList';

function App() {
    const [modal, setModal] = useState(null);

    function navClickHandler(e) {
        e.preventDefault();
        setModal(m => e.target.textContent);
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

                    <Route path='/' element={<><Carousel /><CategoryList /></>} />
                    <Route path='/listing/:offerId' element={<OfferDetails />} />
                    <Route path='/category/:category' element={<Results />} />
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
