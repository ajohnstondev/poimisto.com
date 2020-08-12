import React from 'react'

// @ts-ignore
import Teacher from '@/assets/svg/teacher.svg'
// @ts-ignore
import Technology from '@/assets/svg/technology.svg'
// @ts-ignore
import Knowledge from '@/assets/svg/knowledge.svg'

type AboutItem = {
  id: number
  icon: React.ReactElement
  title: string
  text: string
}

export const ABOUT_ITEMS: AboutItem[] = [
  {
    id: 0,
    icon: <Teacher />,
    title: 'Process',
    text: `
      <p>Without a well-defined process, things evolve into a unmanageable mess. But we all know that a rigid process can do harm than good.</p>
      <br />
      <p>Our process is designed to offer production-level safety with quick iterations and space to innovate.</p>
    `,
  },
  {
    id: 1,
    icon: <Technology />,
    title: 'Tools & technologies',
    text: `
      <p>Not everything should be built from scratch. Taking advantage of already tested and battle-proven technologies is crucial for success.</p>
      <br />
      <p>Let us help with choosing the right tool and making sure it fits to your organization architecture.</p>
    `,
  },
  {
    id: 2,
    icon: <Knowledge />,
    title: 'Know-how',
    text: `
      <p>It is not the shiny features that makes success in the long run. What counts is the know-how that accrues while building those shiny features.</p> 
      <br />
      <p>Let us help in our core compentence areas. Either through our development process or though customized coaching or training.</p>
    `,
  },
]
