import { PropTypes } from "prop-types";
import { useState } from "react";
import EducationForm from "./EducationForm";

function AddEducation({ formDisplay, setFormDisplay }) {
  return (
    <div className="add-education">
      <button className="add-form-btn" onClick={() => setFormDisplay(!formDisplay)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>plus</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>Education</span>
      </button>
    </div>
  );
}

function EducationInfoList({ resumeInfo, formDisplay, setFormDisplay, setEduFormValue }) {
  function handleClick(eduInfo) {
    setFormDisplay(!formDisplay);
    setEduFormValue({ ...eduInfo });
  }
  return (
    <div className="education-list">
      {resumeInfo.education.map((eduInfo) => (
        <div className="list" key={eduInfo.id} onClick={() => handleClick(eduInfo)}>
          <div className="list-name">{eduInfo.school}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>square-edit-outline</title>
            <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function EducationDetails({ resumeInfo, setResumeInfo }) {
  const [formDisplay, setFormDisplay] = useState(false);
  const [eduFormValue, setEduFormValue] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: "",
  });
  const [infoCounter, setInfoCounter] = useState(1);

  return (
    <div className="education details">
      <div className="form-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>school</title>
          <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
        </svg>
        <span>Education</span>
      </div>
      {!formDisplay && (
        <EducationInfoList
          formDisplay={formDisplay}
          setFormDisplay={setFormDisplay}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
          eduFormValue={eduFormValue}
          setEduFormValue={setEduFormValue}
        ></EducationInfoList>
      )}
      {!formDisplay && <AddEducation formDisplay={formDisplay} setFormDisplay={setFormDisplay}></AddEducation>}
      {formDisplay && (
        <EducationForm
          eduFormValue={eduFormValue}
          setEduFormValue={setEduFormValue}
          formDisplay={formDisplay}
          setFormDisplay={setFormDisplay}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
          infoCounter={infoCounter}
          setInfoCounter={setInfoCounter}
        ></EducationForm>
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

EducationDetails.propTypes = sharedPropTypes1;

AddEducation.propTypes = sharedPropTypes2;

EducationInfoList.propTypes = {
  ...sharedPropTypes1,
  ...sharedPropTypes2,
  eduFormValue: PropTypes.object.isRequired,
  setEduFormValue: PropTypes.func.isRequired,
};
