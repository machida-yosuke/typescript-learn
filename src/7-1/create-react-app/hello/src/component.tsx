import * as React from 'react'

type Props = {
  clickedX: number
  clickedY: number
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Component: React.FC = () => {
  const [count, setCount] = React.useState<number>(0)
  const handleClick = () =>
    React.useCallback(() => {
      setCount((prev) => prev + 1)
    }, [count])

  const double = React.useMemo(() => count * 2, [count])
  const doubleWithUnit = React.useMemo(() => `${count}pt`, [double])

  return (
    <div>
      <p>{count}</p>
      <p>{double}</p>
      <p>{doubleWithUnit}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Component
