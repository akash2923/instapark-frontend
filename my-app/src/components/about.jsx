import React from 'react';
import '../stylesheet/aboutus.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Instaparks</strong>, a leading innovator in{' '}
        <em>your field or industry</em>. We are committed to providing high-quality products and services that meet the needs and exceed the expectations of our clients.
      </p>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          At <strong>Instaparks</strong>, our mission is to deliver exceptional value to our customers through innovative solutions, unparalleled service, and a commitment to excellence. We aim to empower individuals and businesses by offering reliable, efficient, and sustainable products that foster growth and success.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where <em>describe your vision or long-term goal</em>, creating a lasting impact on industries and communities alike. We believe in harnessing the power of technology, creativity, and teamwork to transform lives and build a better future for all.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity</strong>: We conduct our business with the highest ethical standards, maintaining honesty and transparency in all our dealings.</li>
          <li><strong>Customer-Centricity</strong>: Our customers are at the heart of everything we do. We listen to their needs and work diligently to provide tailored solutions.</li>
          <li><strong>Innovation</strong>: We embrace new ideas and continuously explore ways to improve our products and services.</li>
          <li><strong>Sustainability</strong>: We are dedicated to minimizing our environmental impact through responsible business practices and sustainable product development.</li>
          <li><strong>Collaboration</strong>: We believe in teamwork and the power of partnerships to achieve shared goals and drive success.</li>
        </ul>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in <strong>2025</strong>, <strong>Instaparks</strong> has quickly grown to become a leader in <em>industry/sector</em>. Our founders envisioned a company that would revolutionize the way <em>describe the purpose or focus of your business</em>, and today, that vision is a reality.
        </p>
        <p>
          From our humble beginnings to becoming an industry leader, we've always focused on quality, customer satisfaction, and continuous growth. Our team is dedicated to maintaining a legacy of excellence and driving innovation in everything we do.
        </p>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          At <strong>Instaparks</strong>, we specialize in <em>briefly describe your products or services</em>. We provide solutions for <em>specific industries or customer groups</em>, ensuring that every product and service we offer is designed to meet the highest standards of quality and efficiency.
        </p>
        <p>
          Our team of experts works tirelessly to create cutting-edge solutions that address the challenges of today’s dynamic world. Whether you're looking for <em>specific service/product</em>, we've got you covered with our comprehensive offerings.
        </p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <p>
          Our team is composed of passionate professionals who are experts in their respective fields. From engineers and designers to marketers and customer support staff, every member of our team plays a crucial role in ensuring that we deliver the best possible solutions to our clients.
        </p>
        <p>
          We are proud of our diverse and talented team, and we are committed to fostering a culture of continuous learning and growth.
        </p>
      </section>

      <footer>
      <p>
  For more information, feel free to <Link to="/contact-us">contact us</Link>
</p>

      </footer>
    </div>
  );
};

export default AboutUs;
