import React, { useState, useEffect, useRef } from 'react'

const useDebounce = function (value: any, timeout: number): [any] {
  let [state, setState] = useState(value)
  const refContainer = useRef(false)
  useEffect(() => {
    if (refContainer.current) {
      let someValue = '输入中...'
      setState(someValue)
    } else {
      refContainer.current = true
    }
    let timer = setTimeout(() => setState(value), timeout);
    return () => clearTimeout(timer)
  }, [value, timeout])
  return [state]
}

const City: React.FC = () => {
  const [input, setInput] = useState('');
  const [output] = useDebounce(input, 500)
  const handleInput = (e: any) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      {output}
    </div>
  )
}

export default City
