/**
 * Compnay Card
 *
 */
import cardStyles from "./card.module.css";

const CompanyCard = ({
  logo,
  name,
  description,
  revenue,
  monthlyVisitors,
  domain,
  draggableRef,
  dropZoneRef,
  handleStartDrag,
  handleEndDrag,
  handleDrop,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  index,
}) => {
  return (
    <div
      className="dropZone"
      style={{ width: "24rem" }}
      onDrop={ e => handleDrop(e, index)}
      onDragOver={handleDragOver}
      onDragEnd={handleEndDrag}
      onDragLeave={handleDragLeave}
      ref={dropZoneRef}
    >
      <div
        draggable
        className={`card `}
        style={{ width: "100%", height: "100%" }}
        onDragStart={(e) => handleStartDrag(e, index)}
        onDragEnd={handleEndDrag}
        ref={draggableRef}
      >
        <div className="card-body d-flex flex-column align-items-center p-0">
          <div className={cardStyles.cardImage}>
            <img src={logo} alt={name} />
          </div>

          <div className="description px-2 ">
            <h5 className="font-weight-bold text-center">
              {name}
              <span className="ml-1">
                <a href={`https://${domain}`} target="_blank">
                  <i className="fa fa-link clickable " aria-hidden="true"></i>
                </a>
              </span>
            </h5>
            <p className="text-center">{description.substring(0, 100)}...</p>
          </div>
          <hr className="mt-0" />

          <div className={` ${cardStyles.actions} text-muted d-flex w-100`}>
            <div>
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span> Visitors: {monthlyVisitors}</span>
            </div>
            <div>
              <i className="fa fa-money" aria-hidden="true"></i>
              <span> Revenue: {revenue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
