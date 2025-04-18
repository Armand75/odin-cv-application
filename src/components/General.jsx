
function General({general, updateGeneral}){

    const handleChange = (value, info) => {

        updateGeneral({value, info})
    }

    return (
        <div className="general">
            <h1>General Area</h1>
            <div className="name">
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name" value={general.name} onChange={(event) => handleChange(event.target.value, "name")} />
                </label>
            </div>
            <div className="email">
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" value={general.email} onChange={(event) => handleChange(event.target.value, "email")} />
                </label>
            </div>
            <div className="phone">
                <label htmlFor="phone">
                    Phone:
                    <input type="tel" id="phone" value={general.phone} onChange={(event) => handleChange(event.target.value, "phone")} />
                </label>
            </div>
    </div>
    );
}

export default General;