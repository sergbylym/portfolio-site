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
          <a href="https://drive.google.com/file/d/1HBymh1pKeK74Nmyh6p2CWLxzyoj4Kt8Q/view?usp=share_link"  download className="btn">
            Download CV
          </a>
        </div>
      </header>
   </div>
  );
};

export default Header;
