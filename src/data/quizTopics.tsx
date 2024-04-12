import { ReactNode } from 'react'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'JavaScript',
    icon: <JavaScript />,
  },
]
