// components/FadeInSection.jsx
import { motion } from "framer-motion";

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

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeInVariant}
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
