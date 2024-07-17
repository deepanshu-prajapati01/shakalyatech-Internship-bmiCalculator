import React, { useEffect } from 'react'

const CalculationResult = () => {

    const calculateBMI = () => {
        var heightInMeters;

        // logic to get height unit from the CalculationComponent.jsx 
        if (!document.getElementById('inches').classList.contains('d-none')) {
            var heightUsUnits = true;
        } else {
            var heightUsUnits = false;
        }

        // logic to get weight unit from the CalculationComponent.jsx
        if (!document.getElementById('weight').ariaPlaceholder === 'pounds') {
            var weightUsUnits = true;
        } else {
            var weightUsUnits = false;
        }


        // ^ HEIGHT
        if (heightUsUnits === true) {
            const feet = parseFloat(document.getElementById('feet_or_cms').value); // Height in feet
            const inches = parseFloat(document.getElementById('inches').value); // Height in inches

            // convert height in meters
            heightInMeters = (feet * 0.3048) + (inches * 0.0254); // height in meters

        } else if (heightUsUnits === false) {
            const cms = parseFloat(document.getElementById('feet_or_cms').value); // Height in cms
            heightInMeters = cms * 0.01; // Convert cms to meters
        }


        // ^ WEIGHT
        var weightInPounds, weightInKg;
        if (weightUsUnits === true) {
            weightInPounds = parseFloat(document.getElementById('weight').value); // Weight in pounds

            // convert weight in kgs
            weightInKg = weightInPounds * 0.453592;
        } else if (weightUsUnits === false) {

            // the input is in kilograms (kg)
            weightInKg = parseFloat(document.getElementById('weight').value);

        }

        // Calculate BMI
        var bmi = weightInKg / (heightInMeters ** 2);
        bmi = bmi.toFixed(2);
        document.getElementById('bmiResult').innerText = bmi;
    };

    useEffect(() => {
        document.getElementById('calculateBMI').addEventListener('click', () => {
            calculateBMI();
        })
    }, [])


    return (
        <>
            <div className="container my-2">
                <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Result </h5>
                    </div>

                    <div className="container">

                        <p><strong>BMI: </strong><span id="bmiResult">NaN</span> kg/m²</p>
                        <strong>Limitations: </strong>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item">BMI for children less than age of 20 maybe slightly different!
                            </li>

                            <li className="list-group-item">The site did not include the age factor (can be added).
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )


}

export default CalculationResult
