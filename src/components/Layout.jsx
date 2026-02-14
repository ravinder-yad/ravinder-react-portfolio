import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Transition from './Transition';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={location.pathname} className="h-full">
                <Transition />
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Layout;
