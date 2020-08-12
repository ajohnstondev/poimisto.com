import React from 'react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'

type Props = {} & ReactSelectProps

const Select: React.FC<Props> = ({ ...reactSelectProps }) => {
  return <ReactSelect {...reactSelectProps} />
}

export default Select
