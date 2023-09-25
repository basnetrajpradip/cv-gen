import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import RenderDetails from "./RenderDetails";
import ExperienceDetails from "./ExperienceDetails";
import { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [resumeInfo, setResumeInfo] = useState({
    personInfo: { personName: "", email: "", phone: "", address: "" },
    education: [],
    experience: [],
  });

  return (
    <div className="app">
      <div className="edit-section">
        <PersonalDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}></PersonalDetails>
        <EducationDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}></EducationDetails>
        <ExperienceDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}></ExperienceDetails>
      </div>
      <RenderDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}></RenderDetails>
    </div>
  );
}
