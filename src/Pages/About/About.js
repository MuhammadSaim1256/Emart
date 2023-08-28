import React from "react";
import Container from "../../components/Container/Container";
import aboutImg from "./gray-sofa-white-living-room-with-copy-space 2.png";
import aboutImgTwo from "./image 499.png";

import "./style.css";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <div className="about-content">
            <h1>About Us</h1>
          </div>
        </Container>
      </section>
      <Container>
        <div className="about">
          <div className="about-content">
            <div className="about-text">
              <h1>Where Imagination Meets Interiors</h1>
              <p>
                Renovatio, we believe that every space has the potential to be
                transformed into a work of art. With a passion for design and a
                commitment to excellence, we strive to create captivating
                interiors that reflect the unique personalities and aspirations
                of our clients.Our team of talented designers, architects, and
                craftsmen collaborates closely with each client to understand
                their vision and bring it to life.Whether it’s a residential
                project, commercial space, or a hospitality establishment, we
                approach each project with creativity, professionalism, and a
                commitment to excellence. Our portfolio showcases a diverse
                range of projects that highlight our versatility and ability to
                adapt to different design styles and requirements.What sets us
                apart is our attention to detail and our commitment to
                delivering exceptional results. We meticulously plan every
                aspect of the design process, from space planning and furniture
                selection to material choices and lighting design. Our goal is
                to create harmonious environments that not only inspire but also
                enhance the daily lives of those who inhabit them.
              </p>
            </div>
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-img-two">
              <img src={aboutImgTwo} alt="" />
            </div>
            <div className="about-text">
              <p>
                Renovatio, we believe that every space has the potential to be
                transformed into a work of art. With a passion for design and a
                commitment to excellence, we strive to create captivating
                interiors that reflect the unique personalities and aspirations
                of our clients.Our team of talented designers, architects, and
                craftsmen collaborates closely with each client to understand
                their vision and bring it to life.Whether it’s a residential
                project, commercial space, or a hospitality establishment, we
                approach each project with creativity, professionalism, and a
                commitment to excellence. Our portfolio showcases a diverse
                range of projects that highlight our versatility and ability to
                adapt to different design styles and requirements.What sets us
                apart is our attention to detail and our commitment to
                delivering exceptional results. We meticulously plan every
                aspect of the design process, from space planning and furniture
                selection to material choices and lighting design. Our goal is
                to create harmonious environments that not only inspire but also
                enhance the daily lives of those who inhabit them.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
