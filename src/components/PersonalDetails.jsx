import { PropTypes } from "prop-types";

export default function PersonalDetails({ resumeInfo, setResumeInfo }) {
  function updateName(e) {
    setResumeInfo({ ...resumeInfo, personInfo: { ...resumeInfo.personInfo, personName: e.target.value } });
  }

  function updateEmail(e) {
    setResumeInfo({ ...resumeInfo, personInfo: { ...resumeInfo.personInfo, email: e.target.value } });
  }

  function updatePhone(e) {
    setResumeInfo({ ...resumeInfo, personInfo: { ...resumeInfo.personInfo, phone: e.target.value } });
  }

  function updateAddress(e) {
    setResumeInfo({ ...resumeInfo, personInfo: { ...resumeInfo.personInfo, address: e.target.value } });
  }

  return (
    <div className="personal details">
      <div className="form-header">Personal Details</div>
      <div>
        <form id="personalDetails">
          <label htmlFor="name">
            <div>Name</div>
            <input type="text" name="personName" placeholder="Enter your full name" id="name" value={resumeInfo.personInfo.personName} onChange={updateName} />
          </label>
          <label htmlFor="email">
            <div>Email</div>
            <input type="email" name="email" placeholder="Enter your email address" id="email" value={resumeInfo.personInfo.email} onChange={updateEmail} />
          </label>
          <label htmlFor="phone">
            <div>Phone</div>
            <input type="tel" name="phone" placeholder="Enter your phone number" id="phone" value={resumeInfo.personInfo.phone} onChange={updatePhone} />
          </label>
          <label htmlFor="address">
            <div>Address</div>
            <input type="text" name="address" placeholder="City, Country" id="address" value={resumeInfo.personInfo.address} onChange={updateAddress} />
          </label>
        </form>
      </div>
    </div>
  );
}

PersonalDetails.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
  setResumeInfo: PropTypes.func.isRequired,
};
