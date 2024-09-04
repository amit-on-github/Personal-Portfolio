import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-16"
      style={{
        backgroundImage: "url('./public/a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white", // Ensuring text contrasts well with the background
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        <p className="text-lg leading-relaxed mb-8">
          I am a recent Computer Science graduate with a blend of technical expertise and hands-on experience in web development and machine learning. I have worked on impactful projects like developing a T20 cricket score prediction model and creating a secure image-sharing system using blockchain encryption. My journey includes industrial training in web programming and machine learning, equipping me with the tools to solve complex problems. I am passionate about technology, driven by a love for learning, and eager to contribute to innovative projects that make a difference.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Education</h2>
        <ul className="list-disc list-inside mb-8">
          <li>
            <strong>Central Institute of Technology (Kokrajhar, Assam)</strong> - B.E. in Computer Science and Engineering (2021 – 2024, 6.52 CGPA)
          </li>
          <li>
            <strong>Government Polytechnic College (Dumka, Jharkhand)</strong> - Diploma in Computer Science and Engineering (2018 – 2021, 76%)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-green-400">Skills</h2>
        <ul className="list-disc list-inside mb-8">
          <li><strong>Programming Languages:</strong> C/C++, Python</li>
          <li><strong>Web Development:</strong> HTML, Tailwind CSS, JavaScript, React.js</li>
          <li><strong>Databases:</strong> MySQL</li>
          <li><strong>Libraries:</strong> Python Libraries</li>
          <li><strong>Tools:</strong> Figma, VS Code, GitHub, Git Bash, MS Word, PowerPoint, Excel</li>
          <li><strong>Fundamentals:</strong> Data Structures, OOPS, Operating Systems, DBMS, Software Engineering</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-green-400">Training</h2>
        <ul className="list-disc list-inside mb-8">
          <li><strong>Web Programming (Jharkhand IT Services):</strong> Nov 2020 - Dec 2020</li>
          <p className="ml-6">Acquired hands-on experience in web programming technologies and tools through industrial training. Gained practical skills in implementing and managing web solutions, boosting proficiency in web programming.</p>
          <li><strong>Machine Learning (NIELIT):</strong> June 2023 - July 2023</li>
          <p className="ml-6">Trained in machine learning algorithms and Python libraries for advanced data analysis and modeling. Gained expertise in utilizing Python libraries for effective data processing and machine learning applications.</p>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-green-400">Mission Statement</h2>
        <p className="text-lg leading-relaxed">
          My mission is to leverage my skills and creativity to deliver innovative solutions in the field of Computer Science that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
