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
            </div>
            <div className="vertical">
              <div className="vertical-title">Python based smart Job Recommender</div>
              <div className="vertical-desc">
                Python based smart job recommender that parses through resume and suggests real time jobs using APIs.

              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">SQL Developer for business insighter SaaS platform.</div>
              <div className="vertical-desc">
              A finance management SaaS platform for tracking income and expenses. Built using Next.js, TailwindCSS, and PostgreSQL. Features include responsive dashboards, CSV import, and real-time updates. Deployed on Vercel with high availability and improved user experience through streamlined data entry and reporting.              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Power BI</div>
              <div className="vertical-desc">
                Developed a Power BI dashboard for real-time sales insights for a business.
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
