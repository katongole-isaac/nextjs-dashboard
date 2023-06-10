/**
 * Profile Card
 *
 */

import Image from "next/image";

const Profile = () => {
  return (
    <div
      className="card shadow-sm border-0"
      style={{
        minHeight: "300px",
      }}
    >
      <div className="card-body ">
        <div className="d-flex justify-content-center">
          <Image
            width="120"
            height="120"
            src="https://img.icons8.com/fluency/240/user-female-circle.png"
            alt="user-female-circle"
          />
        </div>

        <div className="d-flex flex-column align-items-center">
          <h4> James Collins</h4>
          <small className="d-block text-muted ">Makerere Kampala, UG</small>
          <small className="d-block text-muted mt-1">EAT-6</small>
        </div>

        <hr />
        <div className="d-flex">
          <button className="btn btn-sm btn-primary w-100">
            Upload  Picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
