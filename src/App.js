import './App.css';

import Carousel from './componets/Carousel/Carousel';
import CategoryList from './componets/CategoryList/CategoryList';
import Header from './componets/Header/Header';
import Modal from './componets/Modal/Modal';
import Overlay from './componets/Modal/Overlay';

import { useEffect, useState } from 'react';

function App() {

    const [modal, setModal] = useState();

    function navClickHandler(e) {
        e.preventDefault();

        setModal(modal => e.target.textContent);
    }

    function closeModal() {
        setModal(null)
        setOpacity(o => 0);
    }

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        modal ? setOpacity(o => 1) : setOpacity(o => 0);
    }, [modal])

    return (
        <>
            <Header navClickHandler={navClickHandler} />

            {/* Main Content */}
            <main>
            <Carousel />
                <h2 className="title main-title">Categories</h2>

                <CategoryList />

                {modal && <Modal modal={modal} opacity={opacity} closeModal={closeModal} />}

            </main>

            <footer>
                <a href="https://github.com/stsp93"> &rAarr; github.com/stsp93</a>
            </footer>
            {modal && <Overlay closeModal={closeModal} />}
        </>
    );
}


export default App;
