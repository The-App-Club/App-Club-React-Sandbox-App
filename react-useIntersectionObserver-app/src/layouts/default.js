import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingEmpty } from '../components/loading';
const Header = lazy(() => import('../components/header'));
const Footer = lazy(() => import('../components/footer'));

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<LoadingEmpty></LoadingEmpty>}>
        <Header />
      </Suspense>
      <AnimatePresence>
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Suspense fallback={<LoadingEmpty></LoadingEmpty>}>
        <Footer />
      </Suspense>
    </>
  );
};

export { Layout };
