import './App.css';

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Header from './componets/Header/Header';
import Results from './componets/Results/Results';
import Profile from './componets/Profile/Profile';
import NotFound from './componets/NotFound/NotFound';
import Messages from './componets/Profile/Messages/Messages';
import OfferDetails from './componets/OfferDetails/OfferDetails';
import Carousel from './componets/Carousel/Carousel';
import CategoryList from './componets/CategoryList/CategoryList';
import Modal from './componets/Modal/Modal';
import ModalContext from './context/ModalContext';
import useModal from './hooks/useModal';


function App() {

    const {modal, navClickHandler, closeModal} = useModal();

    return (
        <>

            <Header navClickHandler={navClickHandler} />

            {/* Main Content */}
            <main>

                <Routes>
                    <Route path='/' element={<><Carousel /><CategoryList /></>} />
                    <Route path='/listing/:offerId' element={<OfferDetails />} />
                    <Route path='/category/:category' element={<Results />} />
                    <Route path='/search' element={<Results />} />
                    <Route path='/user/profile' element={<Profile />} />
                    <Route path='/user/messages' element={<Messages />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

        <ModalContext.Provider value={ closeModal}>
                {/* Modal Window */}
                {modal && <Modal modal={modal}/>}
        </ModalContext.Provider>
            </main>

            <footer>
                <Link target="_blank" to="https://github.com/stsp93">2023 Steliyan Petkov - github.com/stsp93</Link>
            </footer>
        </>
    );
}


export default App;
