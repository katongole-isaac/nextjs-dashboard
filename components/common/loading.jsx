/**
 * Loading Component
 *
 */

const Loading = ({ classes, styles }) => {
  return (
    <div
      className={`container d-flex align-items-center justify-content-center   h-75  ${classes} `}
      style={styles}
    >
      <div className="d-flex h-100 justify-content-center align-items-center">
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
