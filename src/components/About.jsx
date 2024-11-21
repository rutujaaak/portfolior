import React from "react";
import KpImage from '../../src/asset/12.jpg';
import './about.css';

const About = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <section className="content">
                <img src={KpImage} alt="Portrait" className="top-left-image" /> {/* Image remains unaffected by hover */}

                <div className="right hover-container"> {/* Apply hover effect class only to the text content */}
                    <p>
                        I am a Final Year CSE Engineering Student pursuing my BTech in Computer Science and Engineering.
                        A passionate learner with eagerness to learn.
                    </p>
                    <p>
                        I come from a family that values both entrepreneurship and education; my father is a businessman, and my mother is a teacher.
                        Growing up in this environment, I have developed a strong work ethic, a commitment to learning, and a collaborative approach.
                        Alongside my two siblings, I’ve learned the importance of responsibility and teamwork, which I apply to my career endeavors.
                    </p>
                    <p>
                        In my free time, I enjoy expressing my creativity through painting and sketching, and expanding my perspective through reading.
                        These interests keep me balanced and inspired, helping me bring fresh ideas and focus to my work.
                    </p>
                    
                    <h2>Achievements</h2>
                    <div className="achievements-box">
                        <ul>
                            <li>Represented Maharashtra in the National CBSE Science Competition, where I designed and built an innovative solar-powered cycle operating on battery technology. This project earned a patent, showcasing my commitment to sustainable solutions and technical ingenuity.</li>
                            <li>Awarded Runner-Up in the Inter-College Badminton Competition as part of a group event, demonstrating teamwork and competitive spirit.</li>
                            <li>Active participation in Smart India Hackathon where we developed a prototype of an oil separator from water.</li>
                            <li>Competed in the Vaarroc International Competition, an event that allowed me to challenge myself alongside talented individuals from various backgrounds.</li>
                            <li>Achieved Power BI, Data Analyst Certifications from Coursera.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
