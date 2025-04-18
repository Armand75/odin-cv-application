
function Education({education, id, updateEducation}){

    function handleChange(value, info){
        updateEducation({value, info, id})
    }

    return (
        <div className="education-exp">
            <div className="school-name">
                <label htmlFor={`school-name${id}`}>
                    School Name:
                    <input type="text" id={`school-name${id}`} value={education[id].schoolName} onChange={(event) => handleChange(event.target.value, "schoolName")} />
                </label>
            </div>
            <div className="title-of-study">
                <label htmlFor={`title-of-study${id}`}>
                Title Of Study:
                    <input type="text" id={`title-of-study${id}`} value={education[id].titleOfStudy} onChange={(event) => handleChange(event.target.value, "titleOfStudy")} />
                </label>
            </div>
            <div className="date-of-study">
                <label htmlFor={`date-of-study${id}`}>
                    Start date:
                    <input type="date" id={`date-of-study${id}`} value={education[id].dateOfStudy} onChange={(event) => handleChange(event.target.value, "dateOfStudy")} />
                </label>
            </div>
        </div>
    )
}

export default Education