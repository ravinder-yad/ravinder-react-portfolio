import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

import Circles from "../components/Circles";
import ParticlesContainer from "../components/ParticlesContainer";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    yourname: "",
    email: "",
    Connectwith: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      setIsSubmitted(true);
      setFormData({ yourname: "", email: "", Connectwith: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full min-h-screen bg-primary/30 pt-16 md:pt-24 pb-40 xl:pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circleStar bg-cover opacity-20 pointer-events-none"></div>
      <ParticlesContainer />
      <Circles />

      <div className="container mx-auto h-full flex items-center justify-center relative z-10 px-4">
        <div className="flex flex-col w-full max-w-[1100px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center xl:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold italic">
              Get In <span className="text-accent not-italic">Touch.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto xl:mx-0">
              Let’s build something meaningful — pixels, ideas, or futures.
            </p>
          </motion.div>

          <div className="flex flex-col xl:flex-row gap-14">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <input
                          required
                          type="text"
                          name="yourname"
                          value={formData.yourname}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="flex-1 h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white outline-none"
                        />
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="flex-1 h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white outline-none"
                        />
                      </div>

                      <textarea
                        required
                        name="Connectwith"
                        value={formData.Connectwith}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="h-48 p-6 rounded-3xl bg-white/5 border border-white/10 text-white resize-none outline-none"
                      />

                      <button
                        type="submit"
                        className="btn bg-accent text-white rounded-full px-12 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-transparent hover:text-accent transition-all"
                      >
                        Send Message
                        <BsArrowRight className="text-2xl" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <FaCheckCircle className="text-accent text-7xl mx-auto mb-6 animate-bounce" />
                      <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-white/60">
                        I’ll be in touch before your coffee gets cold ☕
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="xl:w-[400px] space-y-8"
            >
              <Info
                icon={<FaEnvelope />}
                title="Email"
                value="ravinderyadav092007@gmail.com"
              />
              <Info
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 8949477114"
              />
              <Info
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Mundawar, Alwar, Rajasthan"
              />

              <div className="flex gap-4 pt-6">
                <Social
                  icon={<FaGithub />}
                  link="https://github.com/ravinder-yad"
                />
                <Social
                  icon={<FaLinkedin />}
                  link="https://www.linkedin.com/in/ravinder-yadav-809090321/"
                />
                <Social icon={<FaWhatsapp />} link="https://wa.me/8949477114" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, title, value }) => (
  <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
    <div className="text-accent text-xl">{icon}</div>
    <div>
      <p className="text-xs text-white/40 uppercase tracking-widest">{title}</p>
      <p className="text-white font-semibold break-all">{value}</p>
    </div>
  </div>
);

const Social = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl hover:bg-accent hover:text-white transition-all"
  >
    {icon}
  </a>
);

export default Contact;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BsArrowRight } from "react-icons/bs";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Contact = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     yourname: "",
//     email: "",
//     Connectwith: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Failed to send message");

//       setIsSubmitted(true);
//       setFormData({
//         yourname: "",
//         email: "",
//         Connectwith: "",
//       });

//       setTimeout(() => setIsSubmitted(false), 5000);
//     } catch (error) {
//       console.error(error);
//       alert("Message not sent 😢");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-primary/30 pt-24 pb-32 flex items-center justify-center px-4">
//       <div className="w-full max-w-[1100px] grid xl:grid-cols-2 gap-16">

//         {/* FORM */}
//         <div className="bg-white/5 p-10 rounded-[32px] border border-white/10 backdrop-blur-xl shadow-2xl">
//           <AnimatePresence mode="wait">
//             {!isSubmitted ? (
//               <motion.form
//                 key="form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 onSubmit={handleSubmit}
//                 className="flex flex-col gap-6"
//               >
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <input
//                     required
//                     type="text"
//                     name="yourname"
//                     value={formData.yourname}
//                     onChange={handleChange}
//                     placeholder="Your Name"
//                     className="flex-1 bg-white/5 border border-white/10 h-14 rounded-2xl px-6 outline-none text-white"
//                   />
//                   <input
//                     required
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Your Email"
//                     className="flex-1 bg-white/5 border border-white/10 h-14 rounded-2xl px-6 outline-none text-white"
//                   />
//                 </div>

//                 <textarea
//                   required
//                   name="Connectwith"
//                   value={formData.Connectwith}
//                   onChange={handleChange}
//                   placeholder="Write your message here..."
//                   className="w-full bg-white/5 border border-white/10 h-44 rounded-2xl p-6 outline-none text-white resize-none"
//                 />

//                 <button
//                   type="submit"
//                   className="bg-accent text-white rounded-full py-4 px-12 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-transparent hover:text-accent border border-accent transition-all"
//                 >
//                   Send Message
//                   <BsArrowRight className="text-xl" />
//                 </button>
//               </motion.form>
//             ) : (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="flex flex-col items-center justify-center text-center py-16"
//               >
//                 <FaCheckCircle className="text-accent text-7xl mb-6 animate-bounce" />
//                 <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
//                 <p className="text-white/60">
//                   Thanks for reaching out.
//                   <br />I’ll reply soon 🌙
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* INFO */}
//         <div className="flex flex-col gap-10">
//           <Info icon={<FaEnvelope />} title="Email" value="ravinderyadav092007@gmail.com" />
//           <Info icon={<FaPhoneAlt />} title="Phone" value="+91 8949477114" />
//           <Info icon={<FaMapMarkerAlt />} title="Location" value="Mundawar, Alwar, Rajasthan" />

//           <div className="flex gap-4 pt-6">
//             <Social icon={<FaGithub />} link="https://github.com/ravinder-yad" />
//             <Social icon={<FaLinkedin />} link="https://www.linkedin.com/in/ravinder-yadav-809090321/" />
//             <Social icon={<FaWhatsapp />} link="https://wa.me/8949477114" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* Small helpers (same file, no extra imports) */
// const Info = ({ icon, title, value }) => (
//   <div className="flex gap-4 items-start">
//     <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent text-xl">
//       {icon}
//     </div>
//     <div>
//       <p className="text-white/40 text-xs uppercase tracking-widest">{title}</p>
//       <p className="text-white font-semibold">{value}</p>
//     </div>
//   </div>
// );

// const Social = ({ icon, link }) => (
//   <a
//     href={link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-accent hover:text-white transition-all"
//   >
//     {icon}
//   </a>
// );

// export default Contact;
