import { PropTypes } from "prop-types";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

function AddExperience({ formDisplay, setFormDisplay }) {
  return (
    <div className="add-experience">
      <button className="add-form-btn" onClick={() => setFormDisplay(!formDisplay)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>plus</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>Experience</span>
      </button>
    </div>
  );
}

function ExperienceInfoList({ resumeInfo, formDisplay, setFormDisplay, setExpFormValue }) {
  function handleClick(expInfo) {
    setFormDisplay(!formDisplay);
    setExpFormValue({ ...expInfo });
  }
  return (
    <div className="experience-list">
      {resumeInfo.experience.map((expInfo) => (
        <div className="list" key={expInfo.id} onClick={() => handleClick(expInfo)}>
          <div className="list-name">{expInfo.company}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>square-edit-outline</title>
            <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function ExperienceDetails({ resumeInfo, setResumeInfo }) {
  const [formDisplay, setFormDisplay] = useState(false);
  const [expFormValue, setExpFormValue] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    id: "",
  });

  const [infoCounter, setInfoCounter] = useState(1);

  return (
    <div className="experience details">
      <div className="form-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>briefcase-variant</title>
          <path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" />
        </svg>
        <span>Experience</span>
      </div>
      {!formDisplay && (
        <ExperienceInfoList
          formDisplay={formDisplay}
          setFormDisplay={setFormDisplay}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
          expFormValue={expFormValue}
          setExpFormValue={setExpFormValue}
        ></ExperienceInfoList>
      )}
      {!formDisplay && <AddExperience formDisplay={formDisplay} setFormDisplay={setFormDisplay}></AddExperience>}
      {formDisplay && (
        <ExperienceForm
          expFormValue={expFormValue}
          setExpFormValue={setExpFormValue}
          formDisplay={formDisplay}
          setFormDisplay={setFormDisplay}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
          infoCounter={infoCounter}
          setInfoCounter={setInfoCounter}
        ></ExperienceForm>
      )}
    </div>
  );
}

const sharedPropTypes1 = {
  resumeInfo: PropTypes.object.isRequired,
  setResumeInfo: PropTypes.func.isRequired,
};

const sharedPropTypes2 = {
  formDisplay: PropTypes.bool.isRequired,
  setFormDisplay: PropTypes.func.isRequired,
};

ExperienceDetails.propTypes = sharedPropTypes1;

AddExperience.propTypes = sharedPropTypes2;

ExperienceInfoList.propTypes = {
  ...sharedPropTypes1,
  ...sharedPropTypes2,
  expFormValue: PropTypes.object.isRequired,
  setExpFormValue: PropTypes.func.isRequired,
};
