import React from "react";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutContentWrapper">
        <div className="aboutContent">
          <p>
            Welcome to The Normal Company, your destination for a carefully
            curated selection of quality home goods. We celebrate the beauty of
            simplicity and functionality, offering products that add style and
            comfort to your living space. Whether you're updating your decor or
            searching for the perfect piece to complete your home, our diverse
            collection has something for everyone. At The Normal Company, we
            take pride in delivering high-quality items that seamlessly fit into
            your everyday life.
          </p>
        </div>
      </div>
      <div className="testBox">
        <div className="testimonials">
          <h3>What Our Customers Are Saying</h3>
          <blockquote>
            "The Normal Company really changed the way my home feels. The
            quality and design are top-notch."
            <footer>— Tony Stark</footer>
          </blockquote>
          <blockquote>
            "I'm impressed by how simple and functional the products are.
            Definitely worth recommending!"
            <footer>— Bruce Banner</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
