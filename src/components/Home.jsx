import React from 'react'
import Component1 from './homeComponents/Component1'
import Component2 from './homeComponents/Component2'
import Component3 from './homeComponents/Component3'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Component1 />
            <h3 className='container my-3 '>Risks of being underweight or overweight</h3>
            <Component2 />
            <Component3 />
            <p className="container my-3">For more info: <a target='_blank' href="https://en.wikipedia.org/wiki/Body_mass_index">Visit Wikipedia</a></p>
            <Footer />
        </>
    )
}

export default Home
