import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      style={{
        backgroundImage: "url('./public/a.jpg')", // Replace with the correct path to your image
        backgroundSize: "cover", // Adjust as necessary (options: 'cover', 'contain', etc.)
        backgroundPosition: "center", // Adjust as necessary (options: 'center', 'top', 'bottom', etc.)
        backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
      }}
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        As a recent Computer Science graduate, I bring a blend of technical expertise and hands-on experience across web development and machine learning. I've honed my skills through impactful projects like developing a T20 cricket score prediction model and creating a secure image-sharing system with blockchain encryption. My journey includes industrial training in web programming and machine learning, equipping me with the tools to solve complex problems. I'm passionate about technology, driven by a love for learning, and eager to contribute to innovative projects that make a difference.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
        •Central Institute of Technology (Kokrajhar, Assam)
Computer Science and Engineering 2021 – 2024 (6.52 CGPA)<br></br>
•Government Polytechnic College (Dumka, Jharkhand) 
Diploma Computer Science and Engineering 2018 – 2021 (76%)
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills
        </h1>
        <span>
        • Programming Languages: C/C++, Python<br></br>
• Web Development: HTML, Tailwind CSS, JavaScript, React.Js<br></br>
• Databases: MySQL<bt></bt>
• Libraries: Python Libraries<br></br>
• Tools: Figma, VS Code, GitHub, Git Bash, MS Word, PowerPoint, Excel<br></br>
• Fundamentals: Data Structures, OOPS, Operating Systems, DBMS, Software Engineering
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Training
        </h1>
        <span>
        Web Programming (Jharkhand IT Services) November2020 - December 2020<br></br>
• Acquired hands-on experience in web programming technologies and tools through industrial training.<br></br>
• Gained practical skills in implementing and managing web solutions, boosting proficiency in web programming.<br></br>
Industrial Training (NIELIT) June 2023 - July2023<br></br>
• Trained in machine learning algorithms and Python libraries for advanced data analysis and modeling.<br></br>
• Gained expertise in utilizing Python libraries for effective data processing and machine learning applications.
        </span>
        <br />
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative in the field of Computer Science and solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;           