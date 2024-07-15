import React from 'react';
import { Link } from 'react-router-dom';

const Sitting: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Pet Sitting</h2>
            <h3 className="section-subheading text-uppercase text-center">Taking care of your puppy while you're away!</h3>
            <p className="text-muted">
              Our dogs are our best friends, but they can't always come with us everywhere we go.  But you can keep your dog happy and keep your own peace of mind with our pet sitting services!  Whether you're away for the day or for an extended vacation, we're here to take care of your canine companion!
            </p>
            <p className="text-muted">
              Our pet sitting services take place in your own home, so your dog knows he or she is still home and safe and anxiously awaiting your return.  And while they wait, they'll have the loving care they deserve.  We come to your home and spend as much time as you feel your dog may need.  Checking up on your dog, feeding, walking, playing, and being his or her friend while you're away.
            </p>
            <p className="text-muted">
              Whether stopping by for lunch or staying overnight, you and your dog will love the care and attention we provide.  And you'll especially love the added peace of mind that our dog sitter is trained and certified in animal first aid and canine CPR.
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <p className="text-muted">
              Service area for hourly sitting: Attleboro, Foxboro, Taunton, Providence, and nearby towns
            </p>
            <p className="text-muted">
              Service area for overnight sitting: Bristol, Norfolk, and Plymouth Counties and RI
            </p>
            <ul className="text-muted">
              <li>Overnight Pet Sitting - $130/night</li>
              <li>$10 each for additional dogs</li>
            </ul>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="/img/services/sitting.jpg" alt="Pet Sitting" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sitting;