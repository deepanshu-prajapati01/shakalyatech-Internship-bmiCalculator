import { useState } from "react";

const CalculationComponent = () => {
    const [heightUsUnits, setHeightUsUnits] = useState(true);
    const [weightUsUnits, setWeightUsUnits] = useState(true);

    const toggleHeightUnits = () => {
        setHeightUsUnits(!heightUsUnits);
    }

    const toggleWeightUnits = () => {
        setWeightUsUnits(!weightUsUnits);
    }




    return (
        <>

            <div className="container my-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">BMI Calculator</h5>
                    </div>

                    <div className="container">

                        {/* Age */}
                        <div className=" mb-3 d-flex align-items-center">
                            <label className='mx-1'>Age: </label>
                            <input type="number" className="mx-2 form-control" id="age" />
                        </div>

                        {/* Height */}
                        <div className="input-group mb-3">
                            <button className="input-group-text" style={{ "width": "35%" }} onClick={toggleHeightUnits}>
                                Height
                            </button>

                            <input type="number" placeholder={`${heightUsUnits === true ? 'feet' : 'cms'}`} aria-label="First name" id='feet_or_cms' className="form-control" />

                            <input type="number" placeholder="inches" id='inches' aria-label="Last name" className={`form-control ${heightUsUnits === true ? '' : 'd-none'}`} />

                        </div>

                        {/* Weight */}
                        <div className="input-group mb-3">
                            <button className="input-group-text" style={{ "width": "35%" }} onClick={toggleWeightUnits}>
                                {`Weight ${weightUsUnits === true ? '(pounds)' : '(kgs)'}`}
                            </button>

                            <input type="number" placeholder={`${weightUsUnits === true ? 'pounds' : 'kgs'}`} aria-placeholder={`${weightUsUnits === true ? 'pounds' : 'kgs'}`} id='weight' aria-label="First name" className="form-control" />
                        </div>

                        <div className="container d-flex align-items-center justify-content-center mb-3">
                            <button type="button" id="calculateBMI" className="btn btn-primary btn-sm">Calculate BMI
                            </button>
                        </div>

                    </div>
                </div>






            </div >
        </>
    )
}

export default CalculationComponent
