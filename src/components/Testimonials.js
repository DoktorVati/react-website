import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      quote: "This platform transformed our workflow. Our productivity increased by 40% in just 3 months.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, Global Solutions",
      quote: "The best business solution we've implemented. The ROI was almost immediate.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandUp",
      quote: "Customer support is exceptional. The platform is intuitive and packed with features.",
      rating: 4
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Industry Leaders</h2>
          <p>Don't just take our word for it</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote>
                "{testimonial.quote}"
              </blockquote>
              <div className="author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;