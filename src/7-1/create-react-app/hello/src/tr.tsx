import * as React from 'react'
import { Row } from './data'

const Component: React.FC<Row> = (props) => (
  <tr>
    <th>{props.age}</th>
    {props.ansewers.map((ansewer, index) => {
      if (ansewer === null) return <td key={index}>{'-'}</td>
      return <td key={index}>{ansewer * 100}%</td>
    })}
  </tr>
)

export default Component
