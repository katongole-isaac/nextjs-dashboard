/**
 * Card Row Component
 *
 */
export const Row = ({ children, classes }) => {
  return <div className={`row mt-2 ${classes}`}>{children}</div>;
};

export const Col = ({ children, classes, styles }) => (
  <div style={styles} className={`col ${classes}`}>
    {children}
  </div>
);

export const CardBody = ({ children, classes, ...rest }) => {
  return (
    <div className={`card-body ${classes}`} {...rest}>
      {children}
    </div>
  );
};

export const CardHeader = ({ title, metaInfo }) => {
  return (
    <div className="card-header">
      <p className="h5">{title}</p>
      <small className="text-muted">{metaInfo}</small>
    </div>
  );
};

export const Card = ({ children,classes, ...rest }) => {
  return (
    <div className={`card shadow-sm p-0  border-0 ${classes}`} {...rest}>
      {children}
    </div>
  );
};
