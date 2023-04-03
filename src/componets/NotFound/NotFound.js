import './NotFound.css'

export default function NotFound() {
    return (
        <>
            <h2 className="title main-title">Page not Found</h2>
            <article className="not-found">
                <a className="go-home" href="/">Back to Home</a>
                <img className="not-found__img" src="/images/404.jpg" alt="404" />
            </article>
        </>
    )
}
