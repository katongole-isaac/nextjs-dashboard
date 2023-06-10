/**
 * Component for display fullName with a profile image
 *
 */


const FullName = ({ profileImage, firstName, lastName }) => {
  const userName = `${firstName} ${lastName}`;
  return (
    <span className="d-flex align-items-center">
      <img className="image-wrapper mr-2" src={profileImage} />
      <span> {userName} </span>
    </span>
  );
};

export default FullName;
