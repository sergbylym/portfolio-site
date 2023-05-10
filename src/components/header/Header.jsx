import './Header.style.css'

const Header = () => {
  return (
   <div>
     <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Serhii</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="/SerhiiBylymCV.pdf"  download className="btn">
            Download CV
          </a>
        </div>
      </header>
   </div>
  );
};

export default Header;
