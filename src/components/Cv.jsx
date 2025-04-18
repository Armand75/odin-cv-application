function Cv({general, education, practical}) {
  function eduDiv({ schoolName, titleOfStudy, dateOfStudy }) {
    return (
      <div className="edu-school">
        <div>
          <b>School Name</b> <br /> {schoolName}
        </div>
        <div>
          <b>Title Of Study</b> <br /> {titleOfStudy}
        </div>
        <div>
          <b>Start date</b> <br /> {dateOfStudy}
        </div>
      </div>
    );
  }

  function practDiv({
    companyName,
    positionTitle,
    responsibilities,
    startDate,
    endDate
  }) {
    return (
      <div className="edu-school">
        <div>
          <b>Company Name</b> <br /> {companyName}
        </div>
        <div>
          <b>Position Title</b> <br /> {positionTitle}
        </div>
        <div>
          <b>Responsibilities</b> <br /> {responsibilities}
        </div>
        <div>
          <b>Start date</b> <br /> {startDate}
        </div>
        <div>
          <b>End date</b> <br /> {endDate}
        </div>
      </div>
    );
  }

  return (
    <div className="cv">
      <h1>Curriculum Vitae</h1>
      <hr /> <hr />
      <div className="general-cv">
        <h2>General Information</h2>
        <p>
          <b>Name:</b> {general.name}
        </p>
        <p>
          <b>Email:</b> {general.email}
        </p>
        <p>
          <b>Phone:</b> {general.phone}
        </p>
      </div>
      <div className="education-cv">
        <h2>Education Background</h2>
        {education.map((edu) => eduDiv(edu))}
      </div>

      <div className="practical-cv">
        <h2>Practical Experience</h2>
        {practical.map((pract) => practDiv(pract))}
      </div>
    </div>
  );
}

export default Cv