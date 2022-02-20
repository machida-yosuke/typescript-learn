import * as React from 'react'
import {rows} from './data'
import Thread from './thead'
import Tbody from './tbody'


const Component: React.FC = () =>(
  <div>
    <h1>健康</h1>
    <table>
      <Thread/>
      <Tbody rows={rows}/>
    </table>
  </div>
)

export default Component
