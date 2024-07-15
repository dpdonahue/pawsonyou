import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <section className="bg-light" id="team" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading text-uppercase">Email</h3>
              <p className="section-heading text-muted text-center">The most direct way to reach us is via email here: <a href="mailto:pawsonyou2019@gmail.com">pawsonyou2019@gmail.com</a></p>
              <h3 className="section-heading text-uppercase">Social</h3>
              <p className="section-heading text-muted text-center">We can also be reached on our Facebook page here: <a href="https://www.facebook.com/PawOnYou">https://www.facebook.com/PawOnYou</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;