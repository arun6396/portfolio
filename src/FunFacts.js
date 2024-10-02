import React from 'react';
import CountUp from 'react-countup';

const FunFacts = () => {
  const facts = [
    { icon: "icofont-printer", count: 6, label: "Successful Projects" },
    { icon: "icofont-users", count: 0, label: "Happy Clients" },
    { icon: "icofont-users-alt-5", count: 1, label: "Team Members" },
    { icon: "icofont-award", count: 1, label: "Winning Awards" },
  ];

  return (
    <section className="gray_bg funfacts-area pb_80">
      <div className="container">
        <div className="row">
          {facts.map((fact, index) => (
            <div className="col-lg-3 col-md-3" key={index}>
              <div className="funfact">
                <i className={fact.icon}></i>
                <h3>
                  <CountUp start={0} end={fact.count} duration={2.5} />
                  {fact.count >= 1000 ? 'K' : ''}
                </h3>
                <p>{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
