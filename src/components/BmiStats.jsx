import React from 'react'
import PropTypes from 'prop-types'

const BmiStats = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <table className={`table ${props.tableColor} table-striped-columns`}>

                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">Body Mass Index (BMI)</th>
                            <th scope="col">Weight Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={props.selected === "RowI" ? 'table-active' : ''}>
                            <th scope="row">Below 16</th>
                            <td>Severe Thinness</td>
                        </tr>
                        <tr className={props.selected === "RowII" ? 'table-active' : ''}>
                            <th scope="row">16 - 17</th>
                            <td>Moderate Thinness</td>
                        </tr>
                        <tr className={props.selected === "RowIII" ? 'table-active' : ''}>
                            <th scope="row">17 - 18.5</th>
                            <td colSpan="2">Mild Thinness</td>
                        </tr>
                        <tr className={props.selected === "RowIV" ? 'table-active' : ''}>
                            <th scope="row">18.5 - 25</th>
                            <td colSpan="2">Normal</td>
                        </tr>
                        <tr className={props.selected === "RowV" ? 'table-active' : ''}>
                            <th scope="row">25 - 30</th>
                            <td colSpan="2">Overweight</td>
                        </tr>
                        <tr className={props.selected === "RowVI" ? 'table-active' : ''}>
                            <th scope="row">30 - 35</th>
                            <td colSpan="2">Obese Class I</td>
                        </tr>
                        <tr className={props.selected === "RowVII" ? 'table-active' : ''}>
                            <th scope="row">35 - 40</th>
                            <td colSpan="2">Obese Class II</td>
                        </tr>
                        <tr className={props.selected === "RowVIII" ? 'table-active' : ''}>
                            <th scope="row">Above 40</th>
                            <td colSpan="2">Obese Class III</td>
                        </tr>
                    </tbody>
                </table>


                <h6 className="card-title">Underweight</h6>
                <p className="card-text">An underweight person is a person whose body weight is considered too low to be healthy. A person who is underweight is malnourished.</p>

                <h6 className="card-title">Normal</h6>
                <p className="card-text">A person with normal weight has a body mass index (BMI) within the range typically considered healthy for their height.</p>

                <h6 className="card-title">Overweight</h6>
                <p className="card-text">An overweight person has a body weight that exceeds what is considered healthy for their height, which may indicate excess body fat.</p>

                <h6 className="card-title">Obese</h6>
                <p className="card-text">An obese person has a significantly higher amount of body fat compared to their height, posing health risks such as cardiovascular diseases and diabetes.</p>


            </div>
        </div>
    )
}

BmiStats.protoTypes = {
    tableColor: PropTypes.string,
    selected: PropTypes.string
}

BmiStats.defaultProps = {
    tableColor: 'table-info',
    // tableColor: '',
    selected: ''
}


export default BmiStats
