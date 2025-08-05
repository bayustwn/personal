"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./component/buttons";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="no-scrollbar md:px-[20%] p-8 overflow-x-hidden overflow-y-scroll">
        <div className="flex relative flex-col items-center h-screen px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="absolute -z-99 bottom-0 top-0 left-1/2 -translate-x-1/2 w-full flex justify-center"
          >
            <Image
              src="/grid.svg"
              alt="grid"
              width={800}
              height={800}
              className="w-[100vh] md:w-[90vw] max-w-[800px] h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -z-98 bottom-0 scale-x-[-1] left-1/2 -translate-x-1/2 w-full flex justify-center"
          >
            <img
              src="/me.png"
              alt="me"
              className="w-[100vw] max-w-[450px] sm:max-w-[500px] h-auto"
            />
          </motion.div>
          <div className="flex flex-col items-center mt-10">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl sm:text-7xl font-bold bg-gradient-to-b from-white to-gray bg-clip-text text-transparent leading-[1.1] pb-1 text-center"
            >
              Bayu Setiawan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-md sm:text-md text-gray text-center"
            >
              ~$ Fullstack Developer
            </motion.p>
          </div>
          <div className="absolute hidden md:flex flex-wrap bottom-6 sm:bottom-10 flex-col sm:flex-row gap-3 sm:gap-5 w-full items-center justify-center px-2">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
              className="sm:w-auto"
            >
              <Button
                icon="/phone-icon.svg"
                style="text-sm md:text-lg"
                title="Contact"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="flex text-sm md:text-lg cursor-pointer hover:bg-black-hover flex-row w-70 bg-black py-3 gap-3 sm:gap-30 text-base sm:text-lg font-bold px-6 sm:px-20 border-1 border-border rounded-lg items-center justify-between sm:w-auto text-center"
            >
              <p>About Me</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="sm:w-auto"
            >
              <Button
                icon="/project-icon.svg"
                style="flex-row-reverse text-sm md:text-lg"
                title="My Project"
              />
            </motion.div>
          </div>
        </div>
        <div className="h-screen mt-15">
          <h3 className="font-bold text-4xl bg-gradient-to-b from-white to-gray bg-clip-text text-transparent leading-[1.1] pb-1">
            About Me
          </h3>
          <p className="text-justify mt-3 text-lg/7 text-gray font-light">
            <span className="text-white">Hello i’m Bayu Setiawan</span>, a
            6th-semester Computer Science student at Universitas Pembangunan
            Nasional "Veteran" Jawa Timur. Passionate about full-stack and{" "}
            <span className="text-white">Android development</span>, I actively
            engage in projects to enhance my skills. I participated in the
            Bangkit Academy Independent Study Program, where I gained valuable
            experience in Android development. Additionally, I joined the{" "}
            <span className="text-white">Mobile Development Community</span> at
            my university, where I contributed to various front-end and
            full-stack development projects while mentoring fellow students.
          </p>
          <h1 className="font-bold text-white text-lg mt-5">Skills</h1>
          <div className="flex flex-row mt-3 gap-4">
            {Array.from([
              "figma.svg",
              "react.svg",
              "android.svg",
              "js.svg",
              "kotlin.svg",
            ]).map((icon, index) => {
              return (
                <img
                  key={index}
                  src={`/icons/${icon}`}
                  alt="react-icon"
                  width={icon == "/figma.svg" ? 25 : 30}
                  className="transform hover:scale-90 transition-all"
                />
              );
            })}
          </div>
          <h1 className="font-bold text-white text-xl mt-10">Certification</h1>
          <div
            className="flex flex-row gap-5 mt-5 pb-5 overflow-x-scroll [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700/30
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500/40"
          >
            {Array.from([
              "dca.jpg",
              "fundamental.jpg",
              "exprt.jpg",
              "bangkit.jpg",
            ]).map((cert, index) => {
              return (
                <img
                  key={index}
                  src={`/cert/${cert}`}
                  alt="cert"
                  className="w-70 h-fit rounded-lg hover:scale-95 transform transition-all cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
