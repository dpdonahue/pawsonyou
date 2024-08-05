import React from 'react';
import { Link } from 'react-router-dom';

const Training: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Dog Training</h2>
            <h3 className="section-subheading text-uppercase text-center">Teaching your dog how to be a healthy and fun member of the family!</h3>
            <p className="text-muted">
              Dogs are man's best friend, but sometimes we have difficulty understanding our friends.  A dog's subtle behaviors can sometimes be a mystery to his or her owner, and our behaviors even more of a mystery to the dog!
            </p>
            <p className="text-muted">
              With some simple training, both the dog and the owner can better understand each other and their environment.  Your dog wants to be your best friend and wants to be a good dog, let us help teach them (and you) how!  Training sessions include walking techniques, establishing roles in the human/canine relationship, introduction to simple command training, and much more!
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <p className="text-center">
              <a href="https://www.animalbehaviorcollege.com" target="_blank" rel="noreferrer">
                <img className="img-fluid" src="/img/ABCDTTrainerOval.png" width="300" height="190" alt="Animal Behavior College" />
              </a>
            </p>
            <ul className="text-muted">
              <li>Initial 30-minute Consultation - $35</li>
              <li>
                1-hour Training Session - $85<br />
                Includes: 30-minute walk with training based on dog's history/needs
              </li>
            </ul>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="./img/services/training.jpg" alt="Training" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;