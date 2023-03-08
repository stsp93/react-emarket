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
import { ModalProvider } from './context/ModalContext';
import useSessionStorage from './hooks/useSessionStorage';
import { AuthContext } from './context/AuthContext';

function App() {
    const [auth, setAuth] = useSessionStorage('session');

    return (
        <>
        <AuthContext.Provider value={{auth, setAuth}}>

            <ModalProvider> {/*Modal Provider wrapping the app*/}
                <Header />

                {/* Main Content */}
                <main>

                    <Routes>
                        <Route path='/' element={<><Carousel /><CategoryList /></>} />
                        <Route path='/listing/:offerId' element={<OfferDetails />} />
                        <Route path='/category/:category' element={<Results />} />
                        <Route path='/search' element={<Results />} />
                        <Route path='/user/profile'  element={auth ? <Profile /> : <NotFound />} />
                        <Route path='/user/messages' element={auth ? <Messages /> : <NotFound />} />
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
