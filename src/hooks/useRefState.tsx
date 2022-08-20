// use No Rerendering state
import { useCallback, useRef } from 'react'

function useRefState<S extends {}>(
  initialValue: S,
): [React.MutableRefObject<S>, (setValue: (v: S) => S) => void] {
  const value = useRef<S>(initialValue)
  const setValue = useCallback((newValue: S) => {
    value.current = newValue
  }, [])

  const setValue2 = useCallback((setValue: (v: S) => S) => {
    value.current = setValue(value.current)
  }, [])

  return [value, setValue2]
}

export default useRefState
