import React from 'react'
import { PublicAppUserDto } from '../../../../api/user/interfaces'
import LearnerListItem from './LearnerListItem'

interface LearnerListProps {
  learners: PublicAppUserDto[]
}

const LearnerList: React.FC<LearnerListProps> = ({ learners }): React.ReactElement => {
  return (
    <>
      {learners.map(learner => (
        <LearnerListItem key={learner.id} learner={learner} />
      ))}
    </>
  )
}

export default LearnerList
