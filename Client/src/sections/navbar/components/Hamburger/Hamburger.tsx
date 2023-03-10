import classes from "./style.module.css";
import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { IParallax } from "@react-spring/parallax";

type currentRef = {
  currentRef: React.RefObject<IParallax>;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Hamburger: React.FC<currentRef> = (props: currentRef) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={classes.hamburger}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className={classes.background}
        ref={backgroundRef}
        variants={sidebar}
      />
      <Navigation
        backgroundRef={backgroundRef}
        isOpen={isOpen}
        toggle={() => toggleOpen()}
        currentRef={props.currentRef}
      />
      <MenuToggle
        containerRef={containerRef}
        backgroundRef={backgroundRef}
        isOpen={isOpen}
        toggle={() => toggleOpen()}
      />
    </motion.nav>
  );
};
