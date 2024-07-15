import React from 'react';
import { Link } from 'react-router-dom';

interface Service {
  link: string;
  title: string;
  icon: string;
  description: string;
}

const services: Service[] = [
  { link: '/services/training', title: 'Dog Training', icon: 'fa-bone', description: 'Teaching your dog how to be a healthy and fun member of the family!' },
  { link: '/services/sitting', title: 'Pet Sitting', icon: 'fa-home', description: 'Taking care of your puppy while you\'re away!' },
  { link: '/services/boarding', title: 'Boutique Boarding', icon: 'fa-dog', description: 'Temporary lodging for your puppy!' },
  { link: '/services/akc', title: 'AKC Evaluations', icon: 'fa-graduation-cap', description: 'Basic training and preparing for AKC Good Citizen, Community Canine, and S.T.A.R. Puppy evaluations!' },
  { link: '/services/grooming', title: 'Grooming', icon: 'fa-spa', description: 'Basic grooming to keep that coat and those nails trimmed, shiny, and healthy!' },
  //{ link: '/services/pooldays', title: 'Pool Days', icon: 'fa-swimming-pool', description: 'Water exercise and play on hot summer days!' },
];

const ServiceDescription: React.FC<Service> = ({
  link,
  title,
  icon,
  description
}: Service) =>
  <div className="col">
    <Link className="services-link btn" to={link}>
      <span className="fa-stack fa-4x">
        <i className="fas fa-circle fa-stack-2x text-primary"></i>
        <i className={`fas ${icon} fa-stack-1x fa-inverse`}></i>
      </span>
    </Link>
    <br />
    <Link className="services-link btn" to={link}><h4 className="service-heading">{title}</h4></Link>
    <p className="text-muted">{description}</p>
  </div>;

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">What type of services does your canine companion need?</h3>
          </div>
        </div>
        <div className="row text-center">
          {services.map((s, i) => <ServiceDescription key={i} {...s} />) }
        </div>
      </div>
    </section>
  );
}

export default Services;