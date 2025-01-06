import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img 
              src="src/images/Abhi.jpg" 
              alt="Profile" 
              className="img-fluid rounded-circle border border-primary"
              style={{ width: '100px' }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-4">Abhishek Bhojaviya</h1>
            <p className="lead">Aspiring Software Engineer</p>
          </div>
          <div className="col-md-4 text-md-right">
            <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} />
            </a>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }} />
            </a>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
