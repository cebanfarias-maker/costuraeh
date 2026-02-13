import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

export const RevealOnScroll = ({
    children,
    width = "100%",
    className = "",
    delay = 0.25
}: RevealOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
