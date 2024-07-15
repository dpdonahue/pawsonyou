import React from 'react';
import { Link } from 'react-router-dom';

const Transportation: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Pet Transportation</h2>
            <h3 className="section-subheading text-uppercase text-center">Getting your dog where they need to go!</h3>
            <p className="text-muted">
              Getting your dogs to and from their appointments can be a hassle, especially when our busy lives get in the way.  Well worry no more, we're here to help!  We'll pick up your dog (and you as well!) and bring you to your local veterinarian or other appointments!
            </p>
            <p className="text-muted">
              We can even bring you and your dog to the airport for your travel needs!  When flying in or out of TF Green, we'll pick you up and drop you off when you need us!
            </p>
            <p className="text-muted">
              For those times when you need an unaccompanied trip (that is, when you need your pet transported without you) we can arrange additional personalized rates depending on your pet's needs.  Maybe you have a conflicting appointment and still need someone to take your dog to his or her veterinary appointment and back home, maybe you need someone to drop off or pick up your dog at the airport for an unaccompanied flight, or whatever else you need!  We can build a custom price for your needs.
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <ul className="text-muted">
              <li>Local Pet Transportation - $18 one way</li>
              <li>
                Pet Transportation to Airport - $39 one way
                <ul>
                  <li>BOS or PVD</li>
                </ul>
              </li>
            </ul>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="/img/services/transportation.jpg" alt="Pet Transportation" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transportation;