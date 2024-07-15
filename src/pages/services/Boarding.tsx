import React from 'react';
import { Link } from 'react-router-dom';

const Boarding: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Boutique Boarding</h2>
            <h3 className="section-subheading text-uppercase text-center">Temporary lodging for your puppy!</h3>
            <p className="text-muted">
              Does your puppy need a place to stay temporarily?  Maybe you're going on vacation, or maybe having some remodeling done at your home, or any other reason that your pup may need some temporary lodging?  We can help!  We offer short-term (5 days maximum) in-home boarding in our own dog-friendly house!
            </p>
            <p className="text-muted">
              Your puppy will have plenty of yard space to run around, a friend to play with (our very friendly dog <Link to={'/team'}>Hero</Link>), and all the care and attention needed!  Appointments are for one client at a time, no more than two dogs at a time.  Vaccination records are required at time of booking.  Please ensure your puppy is socialized, friendly, and of course house trained!  (Additional fees may incur for "accidents".)
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <ul className="text-muted">
              <li>Overnight boarding per night - $79 per dog</li>
            </ul>
            <p className="text-muted">
              Curious about the service offerings out of our home?  We'll be happy to set up a video call and you can see for yourself!
            </p>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="/img/services/boarding.jpg" alt="Boarding" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boarding;