import './About.css';

const About = () => {
  return (
    <main className="About about-container">
      <h2 className="about-heading">Khushi Jain</h2>
      <img 
        src={`${import.meta.env.BASE_URL}kj2.jpeg`}
        alt="Khushi Jain"
        className="about-image"
      />
      <p className="about-text">
        I'm a passionate developer who believes in the power of words and the magic of clean code. <br /><br />
         Whether you're here to read engaging posts or explore the inner workings of a dynamic web app, you're in the right place.
      </p>

      <ul className="about-list">
        <li>Built with love and code</li>
        <li>Sleek navigation across Home, About, and Post sections</li>
        <li>Designed to deliver a smooth, reader-friendly experience</li>
      </ul>
    </main>
  );
};

export default About;
