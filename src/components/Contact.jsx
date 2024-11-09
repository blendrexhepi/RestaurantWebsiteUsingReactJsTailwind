import React from "react";

const Contact = () => {
  const contactData = [
    {
      name: "Address",
      data: "123 Main street,paris France, 32565",
    },
    {
      name: "Phone",
      data: "1352-42316-53456",
    },
    {
      name: "Email",
      data: "contact@gmail.com",
    },
  ];
  return (
    <div className="mx-auto  py-8" id="contact">
      <h1 className="text-center text-2xl py-4 md:text-4xl">Contact Us</h1>
      <div className="grid grid-cols-1 gap-2">
        {contactData.map((item, index) => (
          <div
            className="flex p-8 gap-2 border-b-2 justify-center text-xl md:text-2xl border-neutral-500 text-neutral-400"
            key={index}
          >
            <h2 className="">{item.name}:</h2>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
