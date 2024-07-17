import React from 'react'

const Component3 = () => {
    return (
        <>
            <div className="container my-3">
                <h3>Limitations of BMI</h3>
                <p>Although BMI is a widely used and useful indicator of healthy body weight, it does have its limitations. BMI is only an estimate that cannot take body composition into account. Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI should be considered along with other measurements rather than being used as the sole method for determining a person's healthy body weight.</p>
                <p><b>In adults:</b></p>
                <p>BMI cannot be fully accurate because it is a measure of excess body weight, rather than excess body fat. BMI is further influenced by factors such as age, sex, ethnicity, muscle mass, body fat, and activity level, among others. For example, an older person who is considered a healthy weight, but is completely inactive in their daily life may have significant amounts of excess body fat even though they are not heavy. This would be considered unhealthy, while a younger person with higher muscle composition of the same BMI would be considered healthy. In athletes, particularly bodybuilders who would be considered overweight due to muscle being heavier than fat, it is entirely possible that they are actually at a healthy weight for their body composition. Generally, according to the CDC:</p>
                <ul>
                    <li>Older adults tend to have more body fat than younger adults with the same BMI.</li>
                    <li>Women tend to have more body fat than men for an equivalent BMI.</li>
                    <li>Muscular individuals and highly trained athletes may have higher BMIs due to large muscle mass.</li>
                </ul>

                <p><b>In children and adolescents:</b></p>
                <p>The same factors that limit the efficacy of BMI for adults can also apply to children and adolescents. Additionally, height and level of sexual maturation can influence BMI and body fat among children. BMI is a better indicator of excess body fat for obese children than it is for overweight children, whose BMI could be a result of increased levels of either fat or fat-free mass (all body components except for fat, which includes water, organs, muscle, etc.). In thin children, the difference in BMI can also be due to fat-free mass.</p>
                <p>That being said, BMI is fairly indicative of body fat for 90-95% of the population, and can effectively be used along with other measures to help determine an individual's healthy body weight.</p>
            </div>
        </>
    )
}

export default Component3
