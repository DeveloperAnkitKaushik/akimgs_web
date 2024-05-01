'use client';

import styles from "./page.module.css";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.innercontainer}
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ ease: "easeOut", duration: 0.5 }} 
      ></motion.div>
      <div className={styles.content}>
        <motion.div
          className={styles.logo}
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }} 
        >
          <img src="/images/logo.png" />
        </motion.div>
        <motion.div
          className={styles.tagline}
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        >
          Your Vision, Our Library.
        </motion.div>
        <motion.div
          className={styles.btn}
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
        >
          <a href="https://expo.dev/artifacts/eas/hPZYMksqpa6JNUDedt6CKr.apk" target="_blank">
            Download APK
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
