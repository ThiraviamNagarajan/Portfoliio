// import React, { useState } from "react";
// import CustomInput from "../../CommonComponents/CustomInput";
// import emailjs from "@emailjs/browser";

// const ContactMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mail: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<any>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlesubmit = () => {
//     const newErrors: { [key: string]: string } = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//     if (formData.name.trim() === "") {
//       newErrors.name = "Please enter your name";
//     }
//     if (formData.mail.trim() === "") {
//       newErrors.mail = "Please enter your email";
//     } else if (!emailRegex.test(formData.mail)) {
//       newErrors.mail = "Please enter a valid email address";
//     }
//     if (formData.subject.trim() === "") {
//       newErrors.subject = "Please enter the subject";
//     }
//     if (formData.message.trim() === "") {
//       newErrors.message = "Please enter your message";
//     }
  
//     setErrors(newErrors);
  
//     if (Object.keys(newErrors).length === 0) {
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.mail,
//         subject: formData.subject,
//         message: formData.message,
//       };
  
//       emailjs.send(
//         "service_bouge5c",
//         "template_7wnz7fd",
//         templateParams,
//         "_az4oQc9vzuIOFnL7"
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Message sent successfully!");
//           setFormData({
//             name: "",
//             mail: "",
//             subject: "",
//             message: "",
//           });
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           alert("Failed to send message. Please try again!");
//         }
//       );
//     }
//   };
  
  

//   return (
//     <div className="flex justify-center">
//       <div className="w-[80%]">
//         <div className="text-center font-[800] text-[24px] text-[#b1b2b3] py-[25px]">
//           Contact
//         </div>
//         <div className="flex justify-center">
//           <div className="w-[60%]">
//             <div className="p-7 flex flex-col border-[2px] border-[#854ce6] gap-4 rounded-[12px]">
//               <CustomInput
//                 isInput={true}
//                 placeholder="Enter your name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 error={errors.name}
//               />
//               <CustomInput
//                 isInput={true}
//                 placeholder="Enter your mail"
//                 type="email"
//                 name="mail"
//                 value={formData.mail}
//                 onChange={handleChange}
//                 error={errors.mail}
//               />
//               <CustomInput
//                 isInput={true}
//                 placeholder="Enter your subject"
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 error={errors.subject}
//               />
//               <CustomInput
//                 isInput={false}
//                 placeholder="Enter your message"
//                 type="text"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 error={errors.message}
//               />
//               <button
//                 className="bg-gradient-to-r from-[#cc00ff] to-[#8d00ff] text-white px-6 py-3 rounded-lg text-lg hover:opacity-90"
//                 onClick={handlesubmit}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactMe;


import React, { useState } from "react";
import CustomInput from "../../CommonComponents/CustomInput";
import emailjs from "@emailjs/browser";
import "./index.css"

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name";
    }
    if (formData.mail.trim() === "") {
      newErrors.mail = "Please enter your email";
    } else if (!emailRegex.test(formData.mail)) {
      newErrors.mail = "Please enter a valid email address";
    }
    if (formData.subject.trim() === "") {
      newErrors.subject = "Please enter the subject";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.mail,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs
        .send(
          "service_bouge5c",
          "template_7wnz7fd",
          templateParams,
          "_az4oQc9vzuIOFnL7"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            setFormData({
              name: "",
              mail: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again!");
          }
        );
    }
  };

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10"   style={{
      background: "linear-gradient(to right, #261b30, #1a1f33)",
    }}>
      <div className="w-full max-w-4xl" >
        <div className="text-center font-bold text-2xl sm:text-3xl text-[#b1b2b3] mb-6">
          Contact
        </div>
        <div className="flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%]">
            <div className="p-4 sm:p-6 md:p-7 flex flex-col border-2 border-[#854ce6] gap-4 rounded-xl">
              <CustomInput
                isInput={true}
                placeholder="Enter your name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <CustomInput
                isInput={true}
                placeholder="Enter your mail"
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                error={errors.mail}
              />
              <CustomInput
                isInput={true}
                placeholder="Enter your subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              <CustomInput
                isInput={false}
                placeholder="Enter your message"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              <button
                className="bg-gradient-to-r from-[#cc00ff] to-[#8d00ff] text-white px-6 py-3 rounded-lg text-base sm:text-lg hover:opacity-90"
                onClick={handlesubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

