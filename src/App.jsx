import "./styles/App.css";
import { useState } from "react";
import Practical from "./components/Practical";
import Education from "./components/Education";
import General from "./components/General";
import Cv from "./components/Cv";

function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState([
    { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
  ]);
  const [practical, setPractical] = useState([
    {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function updateGeneral({ info, value }) {
    setGeneral((prevGeneral) => {
      return { ...prevGeneral, [info]: value };
    });
  }

  function updateEducation({ value, info, id }) {
    setEducation((prevEducation) =>
      prevEducation.map((edu, index) =>
        index === id ? { ...edu, [info]: value } : edu
      )
    );
  }

  function updatePractical({ value, info, id }) {
    setPractical((prevPractical) =>
      prevPractical.map((pract, index) =>
        index === id ? { ...pract, [info]: value } : pract
      )
    );
  }

  function addEducation() {
    setEducation((prevEducation) => [
      ...prevEducation,
      { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    ]);
  }
  function addPractical() {
    setPractical((prevPractical) => [
      ...prevPractical,
      {
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  return (
    <>
      <div className="input-info">
        <h1>React CV generator</h1>

        <General general={general} updateGeneral={updateGeneral} />

        <div className="education-area">
          <h1>Education Background</h1>
          {education.map((edu, index) => {
            return (
              <Education
                education={education}
                id={index}
                updateEducation={updateEducation}
              />
            );
          })}
          <button className="add-education" onClick={addEducation}>
            Add
          </button>
        </div>

        <div className="practical-area">
          <h1>Practical Experience</h1>
          {practical.map((pract, index) => {
            return (
              <Practical
                practical={practical}
                id={index}
                updatePractical={updatePractical}
              />
            );
          })}
          <button className="add-education" onClick={addPractical}>
            Add
          </button>
        </div>
      </div>

      <Cv general={general} education={education} practical={practical} />
    </>
  );
}

export default App;
