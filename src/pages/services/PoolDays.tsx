import React from 'react';
import { Link } from 'react-router-dom';

const PoolDays: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Pool Days</h2>
            <h3 className="section-subheading text-uppercase text-center">Water exercise and play on hot summer days!</h3>
            <p className="text-muted">
              Keeping your puppies active and healthy is super important.  But on those hot summer days the pavement can hurt their paws and being kept outside in the heat can be dangerous to their health!  Fortunately, many dogs love to swim!  And that time spent in the pool is a great low-impact exercise for dogs of all ages!
            </p>
            <p className="text-muted">
              On select days, weather permitting, we reserve the day for puppy pool activities.  We usually announce the following week's pool day(s) on Friday upon checking the weather forecast for the week.  <a href="https://www.facebook.com/PawOnYou" target="_blank" rel="noreferrer">Follow us on Facebook</a> for updates!  You can drop off your puppy, or we can arrange a pickup if needed.
            </p>
            <p className="text-muted">
              Please ensure your puppy is water-friendly.  For pups who don't want to swim, there's plenty of shade and a sprinkler to keep cool.  Vaccination records are required at the time of booking.
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <ul className="text-muted">
              <li>Pool Day - $25</li>
              <li>Additional fees for pickup may incur</li>
              <li>Personalized puppy towels available for $20!</li>
            </ul>
            <p className="text-muted">
              Curious about the service offerings out of our home?  We'll be happy to set up a video call and you can see for yourself!
            </p>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="./img/services/pooldays.jpg" alt="Pool" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoolDays;