import logo from './logo.png';
import './App.css';

function App() {
  return (

    <>
      <header>

        <div className="header__nav-wrapper">
          <a href="/"><img className="header__logo" src={logo} alt="Shop open e-market" /></a>

          <nav className="header__nav">
            <button className="nav__button"><i className="fa-solid fa-bars"></i></button>
            <ul>
              <li className="nav__li"><a href=""><i className="fa-solid fa-list-ul"></i> Categories</a></li>
              {/* <!-- USER --> */}
              <li className="nav__li"><a href=""><i className="fa-solid fa-user"></i> Profile</a></li>
              <li className="nav__li"><a href=""><i className="fa-solid fa-right-from-bracket"></i> Logout</a></li>
              {/* <!-- GUEST --> */}
              <li className="nav__li"><a href=""><i className="fa-solid fa-user-check"></i> Login</a></li>
              <li className="nav__li"><a href=""><i className="fa-solid fa-file-signature"></i> Register</a></li>
            </ul>
          </nav>
        </div>
        <form>
          <div>
            <input className="search-box" type="text" maxlength="30" />
            <button className="search-box__button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </header>

      <main>
        <article className="carousel">


          <a className="carousel__link carousel__link-active" href=""><div className="carousel__sign">Get Recent Deals</div>
            <img className="carousel__img skeleton" src="../images/electronics.jpg" alt="" />
          </a>W


          <button className="carousel__prev carousel__button">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="carousel__next carousel__button">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

        </article>

        <h2 className="title main-title">Categories</h2>
        <ul className="categories-list">
          <li className="category">
            <a href="/clothings"
            ><img src="/static/images/clothings.jpg" alt="" />
              <p>Clothing</p></a
            >
          </li>
          <li className="category">
            <a href="/electronics"
            ><img src="/static/images/electronics.jpg" alt="" />
              <p>Electronics</p></a
            >
          </li>
          <li className="category">
            <a href=""
            ><img src="/static/images/electronics.jpg" alt="" />
              <p>Cat1</p></a
            >
          </li>
          <li className="category">
            <a href=""
            ><img src="/static/images/electronics.jpg" alt="" />
              <p>Cat1</p></a
            >
          </li>
          <li className="category">
            <a href=""
            ><img src="/static/images/electronics.jpg" alt="" />
              <p>Cat1</p></a
            >
          </li>
          <li className="category">
            <a href=""
            ><img src="/static/images/electronics.jpg" alt="" />
              <p>Cat1</p></a
            >
          </li>
        </ul>

      </main>

      {/* <div className="modal">
      <button className="close-modal">
      <i className="fa-regular fa-circle-xmark"></i>
      </button>
      <form className="user-form" method="POST">
        <h2 className="title form-title">Register</h2>
        <article className="input-group">
          <label for="email">Email*</label>
          <i className="fa-solid fa-envelope"></i>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@abv.bg"
          />
        </article>
        <article className="input-group">
        <label for="username">Username*</label>
          <i className="fa-solid fa-user"></i>
          <input
          id="username"
            name="username"
            type="text"
            placeholder="john123"
          />
        </article>
        <article className="input-group">
          <label for="password">Password*</label>
          <i className="fa-sharp fa-solid fa-key"></i>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="********"
          />
        </article>
        <article className="input-group">
          <label for="repeatPassword">Repeat Password*</label>
          <i className="fa-solid fa-repeat"></i>
          <input
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            placeholder="********"
          />
        </article>
        <article className="input-group">
          <p className="message-field">* Mandatory fields</p>
      </article>
        <article className="input-group">
            <button className="action-button" >Register</button>
        </article>
      </form>
    </div>  */}

      <footer>
        <a href="https://github.com/stsp93"> &rAarr; github.com/stsp93</a>
      </footer>
       {/* <div className="overlay overlay-active"></div> */}
    </>
  );
}


export default App;
