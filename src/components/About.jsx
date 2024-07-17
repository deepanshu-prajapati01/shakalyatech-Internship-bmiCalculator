import React, { useEffect, useState } from 'react'
import CalculationComponent from './aboutComponents/CalculationComponent'
import CalculationResult from './aboutComponents/CalculationResult'
import BmiStats from './BmiStats'
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const About = () => {

    let location = useLocation();

    const [bmiCategory, setBmiCategory] = useState(''); // Initialize with an empty string

    const highlightBMI = () => {
        var bmi = document.getElementById('bmiResult').innerText;

        if (bmi === '' && bmi === NaN) {
            setBmiCategory('');
        }
        else {
            if (bmi < 16) {
                setBmiCategory('RowI');
            }
            else if (bmi >= 16 && bmi < 17) {
                setBmiCategory('RowII');
            }
            else if (bmi >= 17 && bmi < 18.5) {
                setBmiCategory('RowIII');
            }
            else if (bmi >= 18.5 && bmi < 25) {
                setBmiCategory('RowIV');
            }
            else if (bmi >= 25 && bmi < 30) {
                setBmiCategory('RowV');
            }
            else if (bmi >= 30 && bmi < 35) {
                setBmiCategory('RowVI');
            }
            else if (bmi >= 35 && bmi < 40) {
                setBmiCategory('RowVII');
            }
            else if (bmi > 40) {
                setBmiCategory('RowVIII');
            }
            else {
                setBmiCategory('');
            }
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (location.pathname === '/bmi' && document.getElementById('bmiResult').innerText !== 'NaN') {
                // incase user goes to another page that is "/" which can cause error.
                try {
                    highlightBMI();
                } catch (error) {
                    // incase error occurred on the /bmi page only
                    if (location.pathname === '/bmi') {
                        console.log(`Unknown Error occurred: ${error}`)
                    }
                }

            }
        }, 1000);

        return () => clearInterval(interval)

    }, [])



    return (
        <>
            <div className="card-group container mb-3">
                <div className="card">
                    <CalculationComponent />
                </div>

                <div className="card">
                    <CalculationResult />
                </div>
            </div>

            <div className="container">
                <BmiStats selected={bmiCategory} />
            </div>

            <Footer />
        </>
    )
}

export default About
