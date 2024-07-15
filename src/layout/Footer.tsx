import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <span className="copyright">
                  Paws On You, LLC<br />
                  Attleboro, MA | 617-784-0740<br />
                  <a href="mailto:pawsonyou2019@gmail.com">pawsonyou2019@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/PawOnYou" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/@pawsonyou" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="copyright">
              Copyright &copy; 2021<br />
              Website by <a href="mailto:dpdonahue@gmail.com">David P. Donahue</a><br />
              Design by <a href="https://startbootstrap.com" target="_blank" rel="noreferrer">Start Bootstrap</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;