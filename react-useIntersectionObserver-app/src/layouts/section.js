import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

const StyledLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

// https://blog.maximeheckel.com/posts/framer-motion-emotion/
const Layout = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <StyledLayout>{children}</StyledLayout>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export { Layout };
