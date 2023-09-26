import { PropTypes } from "prop-types";
import { useState, useRef } from "react";

export default function EducationForm({ formDisplay, setFormDisplay, resumeInfo, setResumeInfo, eduFormValue, setEduFormValue, infoCounter, setInfoCounter }) {
  const [educationInfo, setEducationInfo] = useState({ ...eduFormValue });

  const buttonRef = useRef();
  function handleEnterKey(event) {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    setFormDisplay(!formDisplay);
    setEduFormValue({ school: "", degree: "", startDate: "", endDate: "", location: "", id: "" });
  }

  function handleSave(e) {
    e.preventDefault();
    setFormDisplay(!formDisplay);
    if (educationInfo.id !== "") {
      const itemIndex = resumeInfo.education.findIndex((item) => item.id === educationInfo.id);
      const editedInfo = [...resumeInfo.education.slice(0, itemIndex), educationInfo, ...resumeInfo.education.slice(itemIndex + 1)];
      setResumeInfo({ ...resumeInfo, education: editedInfo });
    } else {
      setResumeInfo({ ...resumeInfo, education: [...resumeInfo.education, { ...educationInfo, id: infoCounter }] });
      setInfoCounter(infoCounter + 1);
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    setFormDisplay(!formDisplay);
    if (educationInfo.id !== "") {
      const itemIndex = resumeInfo.education.findIndex((item) => item.id === educationInfo.id);
      const editedInfo = [...resumeInfo.education.slice(0, itemIndex), ...resumeInfo.education.slice(itemIndex + 1)];
      setResumeInfo({ ...resumeInfo, education: editedInfo });
      setEduFormValue({ school: "", degree: "", startDate: "", endDate: "", location: "", id: "" });
    }
  }

  function updateSchool(e) {
    setEducationInfo({ ...educationInfo, school: e.target.value });
  }

  function updateDegree(e) {
    setEducationInfo({ ...educationInfo, degree: e.target.value });
  }

  function updateStartDate(e) {
    setEducationInfo({ ...educationInfo, startDate: e.target.value });
  }

  function updateEndDate(e) {
    setEducationInfo({ ...educationInfo, endDate: e.target.value });
  }

  function updateLocation(e) {
    setEducationInfo({ ...educationInfo, location: e.target.value });
  }

  return (
    <form id="eduForm" onKeyDown={handleEnterKey}>
      <label htmlFor="school">
        <div>School</div>
        <input type="text" placeholder="Enter School / University" id="school" value={educationInfo.school} onChange={updateSchool}></input>
      </label>
      <label htmlFor="degree">
        <div>Degree</div>
        <input type="text" placeholder="Enter Degree / Field of study" id="degree" value={educationInfo.degree} onChange={updateDegree}></input>
      </label>
      <div className="edu-date">
        <label htmlFor="start">
          <div>Start Date</div>
          <input type="date" placeholder="Start Date" id="end" value={educationInfo.startDate} onChange={updateStartDate}></input>
        </label>
        <label htmlFor="end">
          <div>End Date</div>
          <input type="date" placeholder="End Date" id="end" value={educationInfo.endDate} onChange={updateEndDate}></input>
        </label>
      </div>
      <label htmlFor="location">
        <div>Location</div>
        <input type="text" placeholder="Enter Location" id="location" value={educationInfo.location} onChange={updateLocation}></input>
      </label>
      <div className="form-controls">
        <div className="button-left">
          <button className="delete" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>delete</title>
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
            <span>Delete</span>
          </button>
        </div>
        <div className="button-right">
          <button className="cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button ref={buttonRef} type="submit" className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

EducationForm.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
  setResumeInfo: PropTypes.func.isRequired,
  formDisplay: PropTypes.bool.isRequired,
  setFormDisplay: PropTypes.func.isRequired,
  eduFormValue: PropTypes.object.isRequired,
  setEduFormValue: PropTypes.func.isRequired,
  infoCounter: PropTypes.number.isRequired,
  setInfoCounter: PropTypes.func.isRequired,
};
