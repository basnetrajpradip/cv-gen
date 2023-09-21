import { PropTypes } from "prop-types";

function EducationForm() {
  return (
    <div className="edu-form">
      <label htmlFor="school">
        <div>School</div>
        <input type="text" placeholder="Enter School/University" id="school"></input>
      </label>
      <label htmlFor="degree">
        <div>Degree</div>
        <input type="text" placeholder="Enter Degree/Field of study" id="degree"></input>
      </label>
      <div className="edu-date">
        <label htmlFor="start">
          <div>Start Date</div>
          <input type="date" placeholder="Start Date" id="end"></input>
        </label>
        <label htmlFor="end">
          <div>End Date</div>
          <input type="date" placeholder="End Date" id="end"></input>
        </label>
      </div>
      <label htmlFor="location">
        <div>Location</div>
        <input type="text" placeholder="Enter Location" id="location"></input>
      </label>
    </div>
  );
}

export default function EducationDetails() {
  return (
    <div className="education details">
      <div className="form-header">Education</div>
      <EducationForm></EducationForm>
    </div>
  );
}

EducationDetails.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
  setResumeInfo: PropTypes.func.isRequired,
};
