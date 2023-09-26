import { PropTypes } from "prop-types";
import { useState, useRef } from "react";

export default function ExperienceForm({ formDisplay, setFormDisplay, resumeInfo, setResumeInfo, expFormValue, setExpFormValue, infoCounter, setInfoCounter }) {
  const [experienceInfo, setExperienceInfo] = useState({ ...expFormValue });

  const buttonRef = useRef();
  function handleEnterKey(event) {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    setFormDisplay(!formDisplay);
    setExpFormValue({ company: "", position: "", startDate: "", endDate: "", location: "", description: "", id: "" });
  }

  function handleDelete(e) {
    e.preventDefault();
    setFormDisplay(!formDisplay);
    if (experienceInfo.id !== "") {
      const itemIndex = resumeInfo.experience.findIndex((item) => item.id === experienceInfo.id);
      const editedInfo = [...resumeInfo.experience.slice(0, itemIndex), ...resumeInfo.experience.slice(itemIndex + 1)];
      setResumeInfo({ ...resumeInfo, experience: editedInfo });
      setExpFormValue({ school: "", degree: "", startDate: "", endDate: "", location: "", id: "" });
    }
  }

  function handleSave(e) {
    e.preventDefault();
    setFormDisplay(!formDisplay);
    if (experienceInfo.id !== "") {
      const itemIndex = resumeInfo.experience.findIndex((item) => item.id === experienceInfo.id);
      const editedInfo = [...resumeInfo.experience.slice(0, itemIndex), experienceInfo, ...resumeInfo.experience.slice(itemIndex + 1)];
      setResumeInfo({ ...resumeInfo, experience: editedInfo });
    } else {
      setResumeInfo({ ...resumeInfo, experience: [...resumeInfo.experience, { ...experienceInfo, id: infoCounter }] });
      setInfoCounter(infoCounter + 1);
    }
  }

  function updateCompany(e) {
    setExperienceInfo({ ...experienceInfo, company: e.target.value });
  }

  function updatePostion(e) {
    setExperienceInfo({ ...experienceInfo, position: e.target.value });
  }

  function updateStartDate(e) {
    setExperienceInfo({ ...experienceInfo, startDate: e.target.value });
  }

  function updateEndDate(e) {
    setExperienceInfo({ ...experienceInfo, endDate: e.target.value });
  }

  function updateLocation(e) {
    setExperienceInfo({ ...experienceInfo, location: e.target.value });
  }

  return (
    <form id="expForm" onKeyDown={handleEnterKey}>
      <label htmlFor="company">
        <div>Company</div>
        <input type="text" placeholder="Enter company name" id="school" value={experienceInfo.company} onChange={updateCompany}></input>
      </label>
      <label htmlFor="postion">
        <div>Position</div>
        <input type="text" placeholder="Enter position title" value={experienceInfo.position} onChange={updatePostion}></input>
      </label>
      <div className="exp-date">
        <label htmlFor="start">
          <div>Start Date</div>
          <input type="date" placeholder="Start Date" id="end" value={experienceInfo.startDate} onChange={updateStartDate}></input>
        </label>
        <label htmlFor="end">
          <div>End Date</div>
          <input type="date" placeholder="End Date" id="end" value={experienceInfo.endDate} onChange={updateEndDate}></input>
        </label>
      </div>
      <label htmlFor="location">
        <div>Location</div>
        <input type="text" placeholder="Enter location" value={experienceInfo.location} onChange={updateLocation}></input>
      </label>
      <label htmlFor="description">
        <div>Description</div>
        <textarea rows={4}></textarea>
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

ExperienceForm.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
  setResumeInfo: PropTypes.func.isRequired,
  formDisplay: PropTypes.bool.isRequired,
  setFormDisplay: PropTypes.func.isRequired,
  expFormValue: PropTypes.object.isRequired,
  setExpFormValue: PropTypes.func.isRequired,
  infoCounter: PropTypes.number.isRequired,
  setInfoCounter: PropTypes.func.isRequired,
};
