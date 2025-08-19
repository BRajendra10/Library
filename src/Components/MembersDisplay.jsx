import React from "react";

const MemberCard = () => {
  return (
    <div className="card shadow-sm mb-3 w-75 mx-auto">
      <div className="card-body d-flex align-items-center gap-3">
        {/* Avatar */}
        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-white fw-bold"
          style={{ width: 50, height: 50 }}
        >
          Z
        </div>

        {/* Member Info */}
        <div className="flex-grow-1">
          <h5 className="mb-1">Zoe Garcia</h5>
          <small className="text-muted">#753159246</small>
        </div>

        {/* Book Info */}
        <div>
          <p className="mb-0 fw-semibold">Dune</p>
          <small className="text-muted">978-0-441-17271-9</small>
        </div>

        {/* Status */}
        <div className="text-danger text-center">
          <p className="mb-0 fw-bold">Overdue</p>
          <small>6 Days</small>
        </div>

        {/* Fines */}
        <div className="text-center">
          <p className="mb-0 fw-bold text-dark">Fines</p>
          <small className="text-danger">₹120</small>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
