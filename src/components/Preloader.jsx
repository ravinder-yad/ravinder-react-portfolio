import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[9999] bg-[#131424] flex flex-col items-center justify-center"
        >
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="w-24 h-24 mb-4 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent relative"
            >
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>

                <img
                    src="/r-logo.svg"
                    alt="R"
                    className="w-12 h-12 object-contain relative z-10"
                />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white font-bold text-xl tracking-[4px] uppercase"
            >
                Loading...
            </motion.h2>
        </motion.div>
    );
};

export default Preloader;
