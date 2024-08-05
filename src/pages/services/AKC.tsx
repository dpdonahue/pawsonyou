import React from 'react';
import { Link } from 'react-router-dom';

const Training: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase text-center">AKC Evaluations</h2>
            <h3 className="section-subheading text-uppercase text-center">Basic training and preparing for AKC Good Citizen, Community Canine, and S.T.A.R. Puppy evaluations!</h3>
            <p className="text-muted">
              The <a href="https://www.akc.org/" target="_blank" rel="noreferrer">American Kennel Club</a> has developed several programs which define training standards and practices for your dog:
            </p>
            <ul className="text-muted">
              <li>
                <a href="https://www.akc.org/products-services/training-programs/canine-good-citizen/" target="_blank" rel="noreferrer">
                  Canine Good Citizen
                </a>
              </li>
              <li>
                <a href="https://www.akc.org/products-services/training-programs/canine-good-citizen/akc-urban-canine-good-citizen/" target="_blank" rel="noreferrer">
                  Urban Canine Good Citizen
                </a>
              </li>
              <li>
                <a href="https://www.akc.org/products-services/training-programs/canine-good-citizen/akc-community-canine/" target="_blank" rel="noreferrer">
                  Community Canine
                </a>
              </li>
              <li>
                <a href="https://www.akc.org/products-services/training-programs/canine-good-citizen/akc-star-puppy/" target="_blank" rel="noreferrer">
                  S.T.A.R. Puppy
                </a>
              </li>
            </ul>
            <p className="text-muted">
              These standards focus primarily on essential behaviors for a dog to be a happy and healthy member of the family and the community.  From sitting and staying to safely responding to friends and strangers, the evaluation ensures a dog's training meets certain minimum standards.
            </p>
            <p className="text-muted">
              As a certified AKC Canine Good Citizen evaluator, Paws On You is authorized to train and test your dog to meet these standards.  We offer 6-week and 8-week programs, depending on the specific needs of both you and your canine companion.  Once the program is completed, we can officially evaluate your dog for the AKC Canine Good Citizen standards.  Once your dog passes the evaluation, you'll have an AKC-certified Good Citizen!
            </p>
            <p className="text-muted">
              Each training program will focus on preparation for a specific AKC test, one of the four mentioned above.  After passing one of the base tests (for example, the AKC Canine Good Citizen test) your dog may be eligible to and prepared for a supplemental test (for example, the AKC Community Canine test) depending on the dog's results and capabilities.  The AKC programs build on each other to create a strong foundation of training for your dog.
            </p>
            <p className="text-center">
              <Link className="btn btn-primary" to={'/contact'}>Contact us to set up an appointment!</Link>
            </p>
            <p className="text-center">
              <a href="https://www.animalbehaviorcollege.com" target="_blank" rel="noreferrer">
                <img className="img-fluid" src="../img/ABCDTTrainerOval.png" width="300" height="190" alt="Animal Behavior College" />
              </a>
            </p>
            <ul className="text-muted">
              <li>6 Weeks - $260</li>
              <li>8 Weeks - $320</li>
            </ul>
            <p className="text-center">
              <Link className="btn btn-primary btn-xl text-uppercase" to={'/services'}>Back to Services</Link>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src="./img/services/goodcitizen.jpg" alt="AKC Canine Good Citizen" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;