import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hocs";
import Swal from "sweetalert2";

//template_dc346he
//service_bm28kzi
//b8nKwt1XPDbCWvMsD

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_bm28kzi",
        "template_dc346he",
        {
          from_name: form.name,
          to_name: "Mohammad",
          from_email: form.email,
          to_email: "mohammadrezaee22@gmail.com",
          message: form.message,
        },
        "b8nKwt1XPDbCWvMsD"
      )
      .then(
        (result) => {
          setLoading(false);
          Swal.fire({
            title: "Your email has been sent!",
            text: "I will come back to you soon.!",
            icon: "success",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
  };

  return (
    <SectionWrapper idName="contact">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
