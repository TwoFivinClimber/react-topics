import React, { useEffect, useState } from 'react';

export default function Hooks() {
  const [stateHook, setStateHook] = useState('State Hook Default Value');

  // useEfect will start the timer and after the component renders, will rerender adter 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 5000);
    return () => clearTimeout(timer);
  }, [stateHook]);
  // CLEAR TIMEOUT IS INHERIT TO setTimeout.  Need to call in order to reset timer.

  // ADDED DEPENDENCY ARRAY ABOVE TO TEST THE RE-RUNNING OF USEEFFECT
  return (
    <>
      <div>{stateHook}</div>
      <button type="button" onClick={() => setStateHook('New Value')}>Button To Click</button>
    </>
  );
}
