import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RetroButton } from "../retro";

const Navbar = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/");
  };
  const navToLogin = () => {
    navigate("/login");
  };
  return (
    <motion.nav className=" fixed top-0 w-full px-16 py-4 flex flex-row items-center justify-between">
      <h2 onClick={navToHome} className="text-3xl text-black font-silkScreen">
        Yoda AI
      </h2>
      <RetroButton label={"Login"} onpress={navToLogin} />
    </motion.nav>
  );
};

export default Navbar;
