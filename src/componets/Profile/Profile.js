export default function Profile() {
    return (
        <section>
            <h2 className="main-title">Your Listings</h2>
            <ul className="offers-list">
                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <a href="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </a>
                            <div className="offer-text">
                                <a className="offer-title offer-link" href="">Brand new Nice Thingy that's red
                                </a>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="profile-buttons">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>

                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <a href="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </a>
                            <div className="offer-text">
                                <a className="offer-title offer-link" href="">Brand new Nice Thingy that's red
                                </a>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="profile-buttons">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>

                <li>
                    <article className="offer-card">
                        <div className="offer-wrapper">
                            <a href="" className="offer-link">
                                <img className="offer-img" src="/images/clothing.jpg" alt="" />
                            </a>
                            <div className="offer-text">
                                <a className="offer-title offer-link" href="">Brand new Nice Thingy that's red
                                </a>
                                <p className="location">Burgas, Bulgaria</p>
                                <div className="profile-buttons">
                                    <button className="profile-edit">Edit</button>
                                    <button className="profile-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                        <p className="price"><strong>20.99</strong> $</p>
                    </article>
                </li>

                <li>
                    <article className="offer-card">
                        <a href="" className="offer-link"
                        ><img className="offer-img" src="/images/clothing.jpg" alt=""
                            /></a>

                        <div className="offer-text">
                            <a className="offer-title offer-link" href=""
                            >Brand new Nice Thingy that's red</a
                            >
                            <p className="location">Burgas, Bulgaria</p>
                            <p className="price"><strong>20.99</strong> $</p>
                            <div className="profile-buttons">
                                <button className="profile-edit">Edit</button>
                                <button className="profile-delete">Delete</button>
                            </div>
                        </div>
                    </article>
                </li>
            </ul>

            <div className="pagination">
                <button className="pagination-arrow"><i className="fa-solid fa-chevron-left"></i></button>
                <p className="page">1/2</p>
                <button className="pagination-arrow"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            {/* <!--  if 0 offers  --> */}
            <p>No offers found...</p>
        </section>

    )
}
