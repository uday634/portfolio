import React from "react";
import "./About.css";
const About = () => {
  const headingStyle = {
    color: "#10B981",
  };

  return (
    <div className="About">
        <h1 className=" Services">Services</h1>
      <div class="grid">
        <div class="card">
          <span class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </span>
          <h4 style={headingStyle}>Front-end Development</h4>
          <p>
            Elevate your digital presence with our cutting-edge front-end
            development services. We specialize in creating responsive and
            user-friendly interfaces that enhance the overall user experience.
            Our team of skilled developers is proficient in the latest
            technologies and frameworks, ensuring your web applications are not
            only visually appealing but also perform seamlessly across devices.
            Let us bring your designs to life and deliver a captivating user
            interface for your audience.
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>

              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>

              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
              <line x1="9" y1="21" x2="9" y2="15" />
              <line x1="15" y1="21" x2="15" y2="15" />
            </svg>
          </span>
          <h4 style={headingStyle}> Back-end Development</h4>
          <p>
            My back-end development services empower your applications with
            robust server-side functionality. I specialize in designing and
            implementing scalable and efficient server solutions, ensuring your
            system operates seamlessly. From database management to server
            logic, My experts are dedicated to optimizing your application's
            performance and reliability.
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>

              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>

              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a7 7 0 0 1 5-6.33V3h4v2.67A7 7 0 0 1 19 10v6zm-3 5a3 3 0 0 1-6 0"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </span>
          <h4 style={headingStyle}>Deployment</h4>
          <p>
            Simplify your deployment process with My comprehensive deployment
            services. I ensure a smooth transition from development to
            production, optimizing your application's performance and
            reliability. My deployment strategies are tailored to your project's
            specific needs, providing scalability and efficiency. Let Me handle
            the complexities of deployment, allowing you to focus on what you do
            best.
          </p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>

              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>

              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
