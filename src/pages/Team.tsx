import React from 'react';

interface TeamMember {
  name: string;
  img: string;
  description: string;
}

interface TeamStructure {
  role: string;
  members: TeamMember[];
}

const teams: TeamStructure[] = [
  {
    role: '',
    members: [
      {
        name: 'Joeana',
        img: 'joeana.jpg',
        description: 'Founder and primary caregiver.  Joeana started this business in loving memory of her canine companion, Daisy.'
      },
      {
        name: 'David',
        img: 'david.jpg',
        description: 'Technology director and assistant caregiver.'
      },
      {
        name: 'Kanoh',
        img: 'kanoh.jpg',
        description: 'Security director.  He\'s a good boy.'
      },
      {
        name: 'Hero',
        img: 'hero.jpg',
        description: 'Intern.  Training to be a service dog!'
      }
    ]
  }
];

interface PhotoCredit {
  name: string;
  url: string;
}

const photoCredits: PhotoCredit[] = [
  {
    name: 'musicFactory lehmannsound',
    url: 'https://www.pexels.com/@musicfactory-lehmannsound-12746'
  },
  {
    name: 'Hilary Halliwell',
    url: 'https://www.pexels.com/@hilaryh'
  },
  {
    name: 'Chevanon Photography',
    url: 'https://www.pexels.com/@chevanon'
  },
  {
    name: 'Tookapic',
    url: 'https://www.pexels.com/@tookapic'
  },
  {
    name: 'Pixabay',
    url: 'https://www.pexels.com/@pixabay'
  },
  {
    name: 'Matheus Bertelli',
    url: 'https://www.pexels.com/@bertellifotografia'
  },
  {
    name: 'Carissa Rogers',
    url: 'https://www.pexels.com/@carissarogersphotography'
  },
  {
    name: 'Valeria Boltneva',
    url: 'https://www.pexels.com/@valeriya'
  },
  {
    name: 'Will Wu',
    url: 'https://www.pexels.com/@will-wu-299285'
  },
  {
    name: 'Aleksa Bujišić',
    url: 'https://www.pexels.com/@alektech'
  },
  {
    name: 'Matthias Zomer',
    url: 'https://www.pexels.com/@matthiaszomer'
  },
  {
    name: 'Samson Katt',
    url: 'https://www.pexels.com/@samson-katt'
  },
  {
    name: 'Helena Lopes',
    url: 'https://www.pexels.com/@wildlittlethingsphoto'
  },
  {
    name: 'Dominic Buccilli',
    url: 'https://www.pexels.com/@dominic-buccilli-281808'
  },
  {
    name: 'Gustavo Fring',
    url: 'https://www.pexels.com/@gustavo-fring'
  }
];

const Team: React.FC = () => {
  return (
    <div>
      <section className="bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Team</h2>
            </div>
          </div>
          {teams.map((t, i) =>
            <div key={i} className="row">
              <div className="col-lg-12">
                {i !== 0 ? <hr /> : ''}
                <h3 className="section-heading text-muted text-center">{t.role}</h3>
                <div className="row">
                  {t.members.map((m, j) =>
                    <div key={j} className={`col-lg-${t.members.length === 1 ? '12' : t.members.length === 2 ? '6' : t.members.length === 3 ? '4' : t.members.length === 4 ? '3' : t.members.length === 6 ? '2' : '3'} text-center pb-5`}>
                      <img className="img-fluid rounded-circle" src={`/img/team/${m.img}`} alt={m.name} /><br />
                      <p className="text-muted">{m.name}</p>
                      <em className="text-muted">{m.description}</em>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <hr />
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading text-uppercase">Media Credits</h3>
              <p className="section-heading text-muted text-center">Special thanks to the talented artists and photographers who contribute their skills to the world around them!</p>
              <div className="row">
                {photoCredits.map((p, i) =>
                  <div key={i} className="col-md-4 text-center">
                    <p className="text-muted"><a href={p.url} target="_blank" rel="noreferrer">{p.name}</a></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;