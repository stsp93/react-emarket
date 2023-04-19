import './App.css';

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Header from './componets/Header/Header';
import Results from './componets/Results/Results';
import Profile from './componets/Profile/Profile';
import NotFound from './componets/NotFound/NotFound';
import Messages from './componets/Profile/Messages/Messages';
import OfferDetails from './componets/OfferDetails/OfferDetails';
import { ModalProvider } from './context/ModalContext';
import useSessionStorage from './hooks/useSessionStorage';
import { AuthContext } from './context/AuthContext';
import HomePage from './componets/HomePage/HomePage';
import DemoMessage from './componets/DemoMessage/DemoMessage';

function App() {
    const [auth, setAuth] = useSessionStorage('session');

    return (
        <>
        <AuthContext.Provider value={{auth, setAuth}}>

            <ModalProvider> {/*Modal Provider wrapping the app*/}
                <Header />

                {/* Main Content */}
                <DemoMessage />
                <main>

                    <Routes>
                        {/* User/Guest routes */}
                        <Route path='/' element={<HomePage />} />
                        <Route path='/listing/:offerId' element={<OfferDetails />} />
                        <Route path='/category/:category' element={<Results />} />
                        <Route path='/search' element={<Results />} />
                        {/* User only routes */}
                        <Route path='/user/profile'  element={auth ? <Profile /> : <HomePage />} />
                        <Route path='/user/messages' element={auth ? <Messages /> : <HomePage />} />
                        {/* 404 */}
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                </main>
            </ModalProvider>

        </AuthContext.Provider>
            <footer>
                <Link target="_blank" to="https://github.com/stsp93">2023 Steliyan Petkov - github.com/stsp93</Link>
            </footer>
        </>
    );
}


export default App;
