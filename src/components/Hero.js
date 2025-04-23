import React from 'react';
import heroImage from '../assets/images/hero-image.jpg';
import AnimationWrapper from './AnimationWrapper';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <AnimationWrapper yOffset={40}>
            <h1>Transform Your Business with Our Solutions</h1>
          </AnimationWrapper>
          
          <AnimationWrapper delay={0.2} yOffset={30}>
            <p className="lead">
              Innovative technology designed to streamline operations, enhance productivity, 
              and drive growth for modern businesses.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper delay={0.4} yOffset={20}>
            <div className="hero-cta">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </AnimationWrapper>
        </div>
        
        <AnimationWrapper delay={0.6} yOffset={50}>
          <div className="hero-image">
            <img src={heroImage} alt="Business team collaborating" />
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;