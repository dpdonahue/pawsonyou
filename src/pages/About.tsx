import React from 'react';
import { Link } from 'react-router-dom';

interface AboutItem {
  title: string;
  subTitle: string;
  image: string;
  description: React.ReactNode;
}

const aboutListings: AboutItem[] = [
  {
    title: 'Pre-2019',
    subTitle: 'Daisy',
    image: 'img/about/1.jpg',
    description:
      <div>
        <p>Daisy was the best dog anybody could ask for.  She bonded to me as I did to her and I trained her as I was at home and pregnant at the time.  My training ways came from reading the book Cesar's Way by the famed dog trainer Cesar Millan.  I grew up knowing dogs my whole life and being around them in Maine every summer, but the bond formed with my Daisy was like none other.</p>
        <p>What Daisy taught me was to be patient with any dog in any age range.  When we walked she would cut in front of me, trying to show a bit of dominance.  So I patiently corrected this behavior with simple dominance of my own, just putting my foot in front of her to stop her.  The next few times we walked she did it again and I responded consistently.  One day she bumped into me as I stopped at an intersection where there was a car coming our way.  She realized I was protecting her, and that I was the dominant one on the walks and that she was not.  Starting from this simple approach, I continued to teach her and provide her with guidance as to her place in the family.  When my son came along, Daisy was prepared and understood her role.</p>
        <p>Daisy always had her paws on me.  It was how she protected me in her own way.  Sadly, Daisy passed away in December of 2018.  But what she taught me lives on.</p>
      </div>
  },
  {
    title: 'Spring 2019',
    subTitle: 'An Idea Is Born',
    image: 'img/about/2.jpg',
    description:
      <div>
        <p>Paws On You was an idea created one night with a notebook.  One of the last activities I shared with Daisy were our "puppy walk" events with a Veteran Service Organization, and I wanted to continue to work with dogs and with the community.  The idea of going back to school and being a trainer was born.  I had trained Daisy and she was very well behaved; She never bit anyone and she was the sweetest dog you would meet.  So it was time to take my training skills to a more official level.  I sat and mapped out what I would want to do at first and then expand.</p>
        <p>So here we are walking dogs and soon to be expanding.  Obtaining my Certificate in Dog Training from Animal Behavioral College would give me the tools I need so I could professionally train dogs.  (And their owners!)</p>
      </div>    
  },
  {
    title: 'July 2019',
    subTitle: 'Our Doors Open',
    image: 'img/about/3.jpg',
    description:
      <div>
        <p>Welcome!  With a website and a <a href="https://www.facebook.com/pawonyou" target="_blank" rel="noreferrer">Facebook Page</a>, Paws On You is up and running!  We have some introductory services available to care for your canine companions while we build out additional offerings.</p>
      </div>
  },
  {
    title: 'March 2020',
    subTitle: 'New Location',
    image: 'img/about/4.jpg',
    description:
      <div>
        <p>We've moved to Attleboro!  While our programs continue to focus on providing care in the dog's familiar environment (your home and neighborhood), our new home also allows us to offer additional services to customize your needs and your dog's care.  On an individual and case-by-case basis, we can care for your dog during the day or overnight in our own home.  (Though for your pet's well-being and to help with their anxiety we still recommend overnight care in their familiar home.)  We can also offer pool exercise and therapies to dog care and training needs!</p>
        <p>As I'm sure you're well aware, 2020 presents a variety of challenges.  During this time of pandemic and quarantine we have continued to offer limited services to existing clients in the Canton area, for those affected and in need of care for their pets.  And we stand ready to assist with your dog's care as we expand here in Attleboro MA!</p>
        <p><Link to={'/contact'}>Contact us today</Link> for your dog's needs!</p>
      </div>
  },
  {
    title: 'June 2020',
    subTitle: 'Kanoh Joins The Team',
    image: 'img/about/5.jpg',
    description:
      <div>
        <p>Kanoh is our <a href="https://www.dogsondeployment.org/" target="_blank" rel="noreferrer">Dog on Deployment</a>.  His owner, Hector, is deploying to Iraq for several months as a member of the United States Air Force.  With no nearby family to take care of Kanoh, the only other options would have been kenneling or giving the dog away.  Kenneling for such an extended period of time is highly detrimental for a dog's health and well-being, and simply giving away a member of the family like that would be unthinkable.</p>
        <p>The Dogs On Deployment service matches deploying service members with volunteers who will welcome the dog into their own family during the extended time away.  This allows Kanoh to stay in a loving home and get the attention and exercise he needs to remain healthy and happy!</p>
      </div>
  },
  {
    title: 'October 2020',
    subTitle: 'Certification',
    image: 'img/about/6.jpg',
    description:
      <div>
        <p>Graduation!  After several months of COVID-related delays, in particular the efforts to find suitable internship and volunteer work during the pandemic, we've finally amassed enough work credits to finish the program and become an <a href="https://www.animalbehaviorcollege.com" target="_blank" rel="noreferrer">Animal Behavior College Certified Dog Trainer</a>.</p>
        <p>The program at ABC has been wonderful, and we've learned so much and made some great friends along the way!  Now that certification is complete, we're looking to expand our abilities even more, such as certifications in pet nutrition or even pet therapy.  So stay tuned for additional services and qualifications to come!</p>
      </div>
  },
  {
    title: 'February 2021',
    subTitle: 'Hero Joins The Team',
    image: 'img/about/7.jpg',
    description:
      <div>
        <p>We found out about a puppy who was in a pretty bad domestic situation and we were helping our local community service connections in the effort to find him a new home.  That effort wasn't getting far, so the right thing to do became pretty obvious... We became that new home!  Meet Hero, our new 6-month-old puppy and service dog in training!  (There's some paperwork to work out for the service part, but the training has started.)  Welcome to the team, Hero!</p>
      </div>
  }
];

interface AboutListingProps extends AboutItem {
  invert: boolean;
}

const AboutListing: React.FC<AboutListingProps> = ({
  title,
  subTitle,
  image,
  description,
  invert
}: AboutListingProps) =>
  <li className={invert ? 'timeline-inverted' : ''}>
    <div className="timeline-image">
      <img className="rounded-circle img-fluid" src={image} alt={title} />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h4>{title}</h4>
        <h4 className="subheading">{subTitle}</h4>
      </div>
      <div className="timeline-body">
        <div className="text-muted">{description}</div>
      </div>
    </div>
  </li>;

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">A little bit of history about us.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {aboutListings.map((a, i) => <AboutListing key={i} title={a.title} subTitle={a.subTitle} image={a.image} description={a.description} invert={i % 2 === 1} />)}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Link className="btn-primary text-uppercase" to={'/contact'}>
                    <h4>
                      Be Part<br />
                      Of Our<br />
                      Story!
                    </h4>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;