import React from 'react'
import { Link } from 'react-router-dom';
import BmiStats from '../BmiStats';

const Component1 = () => {
    return (
        <>
            {/* "https://www.shutterstock.com/image-illustration/body-mass-index-cm-kg-600nw-186677255.jpg" className="d-block w-100" alt="BMI Image"
        "https://www.shutterstock.com/image-vector/bmi-classification-chart-measurement-man-600nw-2124413216.jpg"
        "https://www.shutterstock.com/image-vector/body-mass-index-meter-infographic-600nw-2350698781.jpg" */}


            <div className="card-group container mb-3">

                {/* card 1 */}
                <div className="card">
                    <img src="https://www.shutterstock.com/image-vector/bmi-classification-chart-measurement-man-600nw-2124413216.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BMI (Body Mass Index)</h5>
                        <p className="card-text">BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>
                    </div>

                    <div className="container d-flex align-items-center justify-content-center mb-3">

                        <Link to={"/bmi"}>
                            <button type="button" className="btn btn-primary btn-lg" >Calculate BMI
                            </button>
                        </Link>
                    </div>
                </div>

                {/* card 2 */}
                <BmiStats />
            </div>

        </>
    )
}

export default Component1
