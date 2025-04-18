
function Practical({practical, id, updatePractical}){

    function handleChange(value, info){
        updatePractical({value, info, id})
    }

    return (
        <div className="practical-exp">
            <div className="company-name">
                <label htmlFor={`company-name${id}`}>
                    Company Name:
                    <input type="text" id={`company-name${id}`} value={practical[id].companyName} onChange={(event) => handleChange(event.target.value, "companyName")} />
                </label>
            </div>
            <div className="position-title">
                <label htmlFor={`position-title${id}`}>
                Position Title:
                    <input type="text" id={`position-title${id}`} value={practical[id].positionTitle} onChange={(event) => handleChange(event.target.value, "positionTitle")} />
                </label>
            </div>
            <div className="responsibilities">
                <label htmlFor={`responsibilities${id}`}>
                Responsibilities:
                    <textarea id={`position-title${id}`} value={practical[id].responsibilities} onChange={(event) => handleChange(event.target.value, "responsibilities")}></textarea>
                </label>
            </div>
            <div className="start-date">
                <label htmlFor={`start-date${id}`}>
                    Starting date:
                    <input type="date" id={`start-date${id}`} value={practical[id].startDate} onChange={(event) => handleChange(event.target.value, "startDate")} />
                </label>
            </div>
            <div className="end-date">
                <label htmlFor={`end-date${id}`}>
                    Ending date:
                    <input type="date" id={`end-date${id}`} value={practical[id].endDate} onChange={(event) => handleChange(event.target.value, "endDate")} />
                </label>
            </div>
        </div>
    )
}

export default Practical