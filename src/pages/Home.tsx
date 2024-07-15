import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-heading text-uppercase">Paws On You</div>
          <p className="intro-lead-in">
            We offer dog training services, certified first aid for dogs, in-home dog sitting and more throughout the Bristol, Norfolk, and Plymouth county areas and RI.
          </p>
          <a href="https://www.animalbehaviorcollege.com" target="_blank" rel="noreferrer">
            <img className="img-fluid" src="img/ABCDTTrainerOval.png" width="300" height="190" alt="Animal Behavior College" />
          </a>
          <p>
            A fully licensed and insured LLC.
          </p>
          <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Tell Me More</Link>
        </div>
      </div>
    </header>
  );
}

export default Home;