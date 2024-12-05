import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import img from "/images2/background/reddot.webp";

UpcomingExams.propTypes = {
  data: PropTypes.array,
};

function UpcomingExams(props) {
  const { data } = props;

  return (
    <>
      {data.map((obj) => (
        <div className="Upcoming_exams" key={obj.id}>
          <img className="reddot" src={img} alt="dot" />
          {obj.date} - {obj.title} - {obj.description}
        </div>
      ))}
    </>
  );
}

export default UpcomingExams;
