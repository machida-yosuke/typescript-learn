import * as React from 'react'

type Props = {
  children?: React.ReactNode
}

const Child: React.FC = (props) => <div>{props.children}</div>

const Parent: React.FC<{ childLabel: string }> = (props) => (
  <Child>{props.childLabel}</Child>
)
