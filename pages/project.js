import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectInfo from '../components/ProjectInfo'
import ProjectType from '../components/ProjectType'
import ProjectTiming from '../components/ProjectTiming'
import ProjectBudget from '../components/ProjectBudget'
import ProjectPeople from '../components/ProjectPeople'
import React, { useState } from 'react'

export default function Home() {
  const [projectStep, setProjectStep] = useState(<ProjectInfo />);
  return (
    <div>
      <Head>
        <title>Assembly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
      <h3>Define your project:</h3>
        <div>
          <div onClick={() => setProjectStep(<ProjectInfo />)}>Project Info</div>
          <div onClick={() => setProjectStep(<ProjectType />)}>Type of Project</div>
          <div onClick={() => setProjectStep(<ProjectTiming />)}>Timing</div>
          <div onClick={() => setProjectStep(<ProjectBudget />)}>Budget</div>
          <div onClick={() => setProjectStep(<ProjectPeople />)}>People</div>
        </div>
      </div>
      {projectStep}
      <Footer />
    </div>
  )
}
