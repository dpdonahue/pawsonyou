import React from 'react';
import { Link } from 'react-router-dom';

const Grooming: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">Grooming</h2>
            <h3 className="section-subheading text-uppercase text-center">Basic grooming to keep that coat and those nails trimmed, shiny, and healthy!</h3>
            <p className="text-muted">
              Regular grooming not only keeps your puppy looking great but is also an essential part of keeping them healthy and happy.  Depending on the breed and how their coat grows and sheds, your dog may need regular care more often than you think!  Even a simple bath, brush, and nail trim goes a long way to maintaining the your dog's health.
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <div>
              <h5>Bronze Package</h5>
              Bath, brush, blow out, grind/file nails. (Est. 1 - 2 hours)
              <ul className="text-muted">
                <li>Small dog - $45</li>
                <li>Large dog - $65</li>
              </ul>
            </div>
            <div>
              <h5>Silver Package</h5>
              Bath, brush, blow out, grind/file nails, foot bed trimmed, hind quarters tucked in. (Est. 2 - 2.5 hours)
              <ul className="text-muted">
                <li>Small dog - $55</li>
                <li>Large dog - $70</li>
              </ul>
            </div>
            <div>
              <h5>Gold Package</h5>
              Bath (choice of shampoo), brush, blow out, grind/file nails, foot bed trimmed (default to AKC standards, or to client wants/needs), hind quarters tucked in. (Est. 2.5 - 3 hours)
              <ul className="text-muted">
                <li>$65-$150 depending on size, breed, and client specifications</li>
              </ul>
            </div>
            <div>
              <h5>Fall/Spring Furminator Bath and Brush</h5>
              Use of all furminator products including shampoo and conditioner
              <ul className="text-muted">
                <li>Small dog - $65</li>
                <li>Large dog - $85</li>
              </ul>
            </div>
            <div>
              <h5>Extras</h5>
              <ul className="text-muted">
                <li>Shampoo - $5</li>
                <li>Nail Grinding - $15</li>
                <li>Coat Conditioner - $6</li>
                <li>Stenciling - $5 per design</li>
                <li>Nail Polish - $15</li>
                <li>Color Coat - $15</li>
              </ul>
            </div>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="./img/services/grooming.jpg" alt="Grooming" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grooming;