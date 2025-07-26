import { motion } from "framer-motion";

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.6 },
  },
};
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.6 },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.6,
    },
  },
};

const FadeInSection = ({ children, delay = 0, variant = "fadeIn" }) => {
  const variantsMap = {
    fadeIn: fadeInVariant,
    slideInLeft,
    slideInRight,
  };

  return (
    <motion.div
      variants={variantsMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
