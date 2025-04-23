import React from 'react';
import feature1 from '../assets/images/feature1.jpg';
import feature2 from '../assets/images/feature2.jpg';
import feature3 from '../assets/images/feature3.jpg';
import AnimationWrapper from './AnimationWrapper';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Advanced Analytics",
      description: "Real-time data analysis with customizable dashboards to track your KPIs.",
      image: feature1,
      icon: "📊",
      gradient: "var(--gradient-1)"
    },
    {
      id: 2,
      title: "AI Automation",
      description: "Smart automation powered by AI to reduce manual work and increase efficiency.",
      image: feature2,
      icon: "🤖",
      gradient: "var(--gradient-2)"
    },
    {
      id: 3,
      title: "Secure Cloud Storage",
      description: "Enterprise-grade security with scalable cloud storage solutions.",
      image: feature3,
      icon: "🔒",
      gradient: "var(--gradient-3)"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <AnimationWrapper>
          <div className="section-header">
            <h2>Powerful Features</h2>
            <p>Everything you need to grow your business</p>
          </div>
        </AnimationWrapper>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <AnimationWrapper key={feature.id} delay={index * 0.1}>
              <div 
                className="feature-card" 
                style={{ '--card-gradient': feature.gradient }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#learn-more" className="feature-link">Learn more →</a>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;