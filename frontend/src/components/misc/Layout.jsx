import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
