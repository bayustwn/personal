"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./component/buttons";

export default function Home() {
  return (
    <main>
      <div className="flex relative flex-col items-center h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="absolute -z-99 bottom-0 top-0"
        >
          <Image src="/grid.svg" alt="grid" width={800} height={800} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -z-98 bottom-0 scale-x-[-1]"
        >
          <img src="/me.png" alt="me" width={500} height={500} />
        </motion.div>
        <div className="flex flex-col items-center mt-30">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-7xl font-bold bg-gradient-to-b from-white to-gray bg-clip-text text-transparent leading-[1.1] pb-1"
          >
            Bayu Setiawan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-md text-gray"
          >
            ~$ Fullstack Developer
          </motion.p>
        </div>
        <div className="absolute bottom-10 flex flex-row gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <Button icon="/phone-icon.svg" title="Contact" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="flex flex-row bg-black py-3 gap-30 text-lg font-bold px-20 border-1 border-border rounded-lg items-center justify-between"
          >
            <p>About Me</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <Button
              icon="/project-icon.svg"
              style="flex-row-reverse"
              title="My Project"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
