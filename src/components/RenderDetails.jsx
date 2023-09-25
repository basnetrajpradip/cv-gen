import { PropTypes } from "prop-types";

function converDateFormat(inputDate) {
  const parts = inputDate.split("-");
  if (parts.length === 3) {
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
  }
  return inputDate;
}

function RenderPersonalDetails({ resumeInfo }) {
  return (
    <div className="cv-personal-details">
      <div className="cv-name">{resumeInfo.personInfo.personName}</div>
      <div className="cv-personal-more-info">
        <div className="cv-email">
          {resumeInfo.personInfo.email !== "" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
          )}
          <div className="cv-email-address">{resumeInfo.personInfo.email}</div>
        </div>
        <div className="cv-phone">
          {resumeInfo.personInfo.phone !== "" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          )}
          <div className="cv-phone-number">{resumeInfo.personInfo.phone}</div>
        </div>
        <div className="cv-location">
          {resumeInfo.personInfo.address !== "" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>map-marker</title>
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
          )}
          <div className="cv-location-address">{resumeInfo.personInfo.address}</div>
        </div>
      </div>
    </div>
  );
}

function RenderEducationDetails({ resumeInfo }) {
  return (
    <div className="cv-education-details">
      {resumeInfo.education.length !== 0 && <div className="cv-section-header">Education</div>}
      {resumeInfo.education.map((eduInfo, index) => (
        <div className="education-info section-info" key={`${eduInfo.degree}${index}`}>
          <div className="info-left">
            <div className="date-info">{`${converDateFormat(eduInfo.startDate)} - ${converDateFormat(eduInfo.endDate)}`}</div>
            <div className="address-info">{`${eduInfo.location}`}</div>
          </div>
          <div className="info-right">
            <div className="organization-info">{`${eduInfo.school}`}</div>
            <div className="more-info">{`${eduInfo.degree}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RenderDetails({ resumeInfo }) {
  return (
    <div className="render-container">
      <RenderPersonalDetails resumeInfo={resumeInfo}></RenderPersonalDetails>
      <RenderEducationDetails resumeInfo={resumeInfo}></RenderEducationDetails>
      <div className="cv-experience-details">
        <div className="cv-section-header">Professional Experience</div>
        <div className="experience-info section-info">
          <div className="info-left">
            <div className="date-info">2018/04/12 - 2022/23/23</div>
            <div className="address-info">Itahari, Sunsari</div>
          </div>
          <div className="info-right">
            <div className="organization-info">Janata Garage</div>
            <div className="more-info">SalesMan & Accountant</div>
            <div className="info-description">
              Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and
              Android
            </div>
          </div>
        </div>
        <div className="experience-info section-info">
          <div className="info-left">
            <div className="date-info">2018/04/12 - 2022/23/23</div>
            <div className="address-info">Itahari, Sunsari</div>
          </div>
          <div className="info-right">
            <div className="organization-info">Janata Garage</div>
            <div className="more-info">SalesMan & Accountant</div>
            <div className="info-description">
              Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and
              Android
            </div>
          </div>
        </div>
        <div className="experience-info section-info">
          <div className="info-left">
            <div className="date-info">2018/04/12 - 2022/23/23</div>
            <div className="address-info">Itahari, Sunsari</div>
          </div>
          <div className="info-right">
            <div className="organization-info">Janata Garage</div>
            <div className="more-info">SalesMan & Accountant</div>
            <div className="info-description">
              Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and
              Android
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RenderDetails.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
};

const sharedPropTypes = {
  resumeInfo: PropTypes.object.isRequired,
};

RenderPersonalDetails.propTypes = sharedPropTypes;
RenderEducationDetails.propTypes = sharedPropTypes;
