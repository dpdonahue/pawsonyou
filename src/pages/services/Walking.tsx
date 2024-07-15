import React from 'react';
import { Link } from 'react-router-dom';

const Walking: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Walking</h2>
            <h3 className="section-subheading text-uppercase text-center">Keeping your dog healthy starts with regular exercise!</h3>
            <p className="text-muted">
              Dogs are active creatures, and they need exercise just as much as we do.  Walking, running, playing.  But while our busy schedules often prevent us from getting the exercise we need, a dog's schedule is always open.
            </p>
            <p className="text-muted">
              To keep your best friend healthy, we offer simple walking services in 30-minute or 60-minute sessions.  Whether around the block or to the local park, your dog will love getting outside and being active!  And you'll love the convenience as well as the added peace of mind that your puppy isn't just being walked but is truly being cared for and encouraged!
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <p className="text-muted">
              Service area for walking includes: Attleboro, Pawtucket, and nearby towns
            </p>
            <ul className="text-muted">
              <li>30 Minutes of Walking - $18</li>
              <li>60 Minutes of Walking - $36</li>
            </ul>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="./img/services/walking.jpg" alt="Walking" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Walking;