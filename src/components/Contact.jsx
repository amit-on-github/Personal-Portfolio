import React from "react";

function Contact() {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      style={{
        backgroundImage: "url('./c.jpg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-4">For any inquiries or messages, please reach out to me via email:</p>
        <a
          href="mailto:amitonwhatsapp@gmail.com"
          className="text-xl font-semibold underline"
        >
          amitonwhatsapp@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
