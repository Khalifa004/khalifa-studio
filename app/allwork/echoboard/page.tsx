import React from 'react'
import EchoBoardIntroAndProblem from './problem'
import EchoBoardSolutionAndFeatures from './solution'
import EchoBoardTechAndDesign from './tech'
import EchoBoardDataAndRealtime from './data'
import EchoBoardOutcomesAndLearnings from './lesson'
import CaseStudyLayout from '@/components/CaseStudyLayout'

const page = () => {
  return (
    <div><CaseStudyLayout
      header={{
        title: 'EchoBoard',
        description: 'A unified workspace that blends real‑time chat, AI assistance, interactive whiteboards, and personal journaling.',
        meta: [
          { label: 'Type', value: 'Project' },
          { label: 'Timeframe', value: 'Aug 2025 – Present' },
          { label: 'Toolkit', value: 'Next.js, TypeScript, Tailwind, Framer Motion, Figma' },
          { label: 'Year', value: '2025 • Ongoing' },
        ],
    
      }}
      sections={[
        { title: "Introduction & Problem", body: <EchoBoardIntroAndProblem /> },
        { title: "Solution & Features", body: <EchoBoardSolutionAndFeatures /> },
        { title: "Tech & Design", body: <EchoBoardTechAndDesign /> },
        { title: "Data & Real-time", body: <EchoBoardDataAndRealtime /> },
        { title: "Outcomes & Learnings", body: <EchoBoardOutcomesAndLearnings /> }
      ]}
    />
  </div>
  )
}

export default page 