import React from 'react'
import Navbar from './Navbar'
import GetStarted from './GetStarted'
import Solutions from './Solutions'
import Cybersecurity from './Cybersecurity'
import Awards from './Awards'
import Experienced from './Experienced'
import News from './News'
import Help from './Help'
import Gallary from './Gallary'
import Footer from '../../Footer'
import Form from '../../About/Form'
import Team from '../../About/Team'
import Breach from '../../About/Breach'
const Home1 = () => {
  return (
    <div>
      <Navbar />
      <GetStarted />
      <Team />
      <Solutions />
      <Cybersecurity />
      <Gallary />
      <Awards />
      <Experienced />
      <Breach/>
      <News />
      <Form/>
      <Help />
      <Footer />

    </div>
  )
}

export default Home1
