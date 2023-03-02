import './App.css';

import Header from './componets/Header/Header';
import Modal from './componets/Modal/Modal';

import { useState } from 'react';
import Home from './componets/Home/Home';

import { Link } from 'react-router-dom';

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
                <Home></Home>


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
