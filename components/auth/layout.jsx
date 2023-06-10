/**
 * Auth Layout
 *
 */
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="container vh-100">
        <div
          className={`row justify-content-center align-items-center ${styles.rowh100}`}
        >
          <div
            className="col-md-6 col-lg-4 position-relative "
            style={{
              top: "-6rem",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
