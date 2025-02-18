import React, { useEffect, useState } from 'react';
import kImage from '../../src/asset/k.jpg'; // Corrected image path
import './home.css'; // Corrected CSS file path

const Main = () => {
  const [typedText, setTypedText] = useState('');
  const text = "Welcome to my portfolio";
  let index = 0;

  useEffect(() => {
    const typingEffect = () => {
      if (index < text.length) {
        setTypedText(prevText => prevText + text.charAt(index));
        index++;
        setTimeout(typingEffect, 100); // Recursively call typingEffect to add each character
      }
    };

    typingEffect(); // Start the typing effect when the component mounts
  }, []);

  return (
    <div>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            <span className="purple">I'm Rutuja</span>
            <div className="purple">Full Stack Developer</div>
            <span id="element" className="white">Welcome to my Portfolio</span> {/* Typing effect */}
          </div>
          <div className="rightSection">
            <img src={kImage} alt="Portrait" className="profile-image" />
          </div>
        </section>

        <hr className="customHr" />

        <section className="secondSection">
          <h1>Work Experience</h1>
          <div className="box">
            <div className="vertical">
              <div className="vertical-title">Amazon Web Services</div>
              <div className="vertical-desc">
                I have hands-on experience with AWS services like EC2, S3, Lambda, and RDS, focusing on cloud infrastructure and automation.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Web Development Internship</div>
              <div className="vertical-desc">
                Interned at Code Clause, crafting an online video platform, stopwatch, and to-do list using HTML, CSS, and JavaScript.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">SQL Developer</div>
              <div className="vertical-desc">
                Built a database-driven Employee Management System with features to update, view, and delete employee records.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Power BI</div>
              <div className="vertical-desc">
                Developed a Power BI dashboard for real-time sales insights for a computer hardware business.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Current Internship</div>
              <div className="vertical-desc">
                Currently working as a Jr. Developer intern at Edudiagno pvt. ltd.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          {/* Footer content */}
        </div>
        <div className="text-center">
          copyright&#169; www.rutujaportfolio.com | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Main;
