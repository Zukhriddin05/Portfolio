import './nav.scss'

const nav = () => {
  return (
    <div className="nav">
        <div className="container">
            <a href="">
                <img className="nav__logo" src="1.svg" alt="" />
            </a>
            <ul className="nav__list">
                <li className="nav__item"><a href="#header" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#level" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="#card" className="nav__link">Portfolio</a></li>
                <li className="nav__item"><a href="#slider" className="nav__link">Testimonials</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
            <a href="/cv-zukhriddin.pdf" download="cv-zukhriddin.pdf" className="nav__main-link">DOWNLOAD CV</a>
        </div>
    </div>
  )
}

export default nav