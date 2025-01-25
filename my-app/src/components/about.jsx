import React from 'react';
import '../stylesheet/aboutus.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        Welcome to <strong>Instaparks</strong>, a leading innovator in{' '}
        <em>your field or industry</em>. We are committed to providing high-quality products and services that meet the needs and exceed the expectations of our clients.
      </p>

      <section className="about-us-mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          At <strong>Instaparks</strong>, our mission is to deliver exceptional value to our customers through innovative solutions, unparalleled service, and a commitment to excellence. We aim to empower individuals and businesses by offering reliable, efficient, and sustainable products that foster growth and success.
        </p>
      </section>

      <section className="about-us-vision">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          We envision a world where <em>describe your vision or long-term goal</em>, creating a lasting impact on industries and communities alike. We believe in harnessing the power of technology, creativity, and teamwork to transform lives and build a better future for all.
        </p>
      </section>

      <section className="about-us-values">
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li className="value-item"><strong>Integrity</strong>: We conduct our business with the highest ethical standards, maintaining honesty and transparency in all our dealings.</li>
          <li className="value-item"><strong>Customer-Centricity</strong>: Our customers are at the heart of everything we do. We listen to their needs and work diligently to provide tailored solutions.</li>
          <li className="value-item"><strong>Innovation</strong>: We embrace new ideas and continuously explore ways to improve our products and services.</li>
          <li className="value-item"><strong>Sustainability</strong>: We are dedicated to minimizing our environmental impact through responsible business practices and sustainable product development.</li>
          <li className="value-item"><strong>Collaboration</strong>: We believe in teamwork and the power of partnerships to achieve shared goals and drive success.</li>
        </ul>
      </section>

      <section className="about-us-history">
        <h2 className="section-title">Our History</h2>
        <p className="section-description">
          Founded in <strong>2025</strong>, <strong>Instaparks</strong> has quickly grown to become a leader in <em>industry/sector</em>. Our founders envisioned a company that would revolutionize the way <em>describe the purpose or focus of your business</em>, and today, that vision is a reality.
        </p>
        <p className="section-description">
          From our humble beginnings to becoming an industry leader, we've always focused on quality, customer satisfaction, and continuous growth. Our team is dedicated to maintaining a legacy of excellence and driving innovation in everything we do.
        </p>
      </section>

      <section className="about-us-services">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">
          At <strong>Instaparks</strong>, we specialize in <em>briefly describe your products or services</em>. We provide solutions for <em>specific industries or customer groups</em>, ensuring that every product and service we offer is designed to meet the highest standards of quality and efficiency.
        </p>
        <p className="section-description">
          Our team of experts works tirelessly to create cutting-edge solutions that address the challenges of today’s dynamic world. Whether you're looking for <em>specific service/product</em>, we've got you covered with our comprehensive offerings.
        </p>
      </section>

      <section className="about-us-team">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
          Our team is composed of passionate professionals who are experts in their respective fields. From engineers and designers to marketers and customer support staff, every member of our team plays a crucial role in ensuring that we deliver the best possible solutions to our clients.
        </p>
        <p className="section-description">
          We are proud of our diverse and talented team, and we are committed to fostering a culture of continuous learning and growth.
        </p>
      </section>

      <footer className="about-us-footer">
        <p className="footer-text">
          For more information, feel free to <Link to="/contact-us" className="contact-link">contact us</Link>.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
