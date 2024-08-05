import ToggleButton from './ToggleButton';
import ToggleContent from './ToggleContent';
import { useState, useCallback } from 'react';

export default function Section(props) {

  //toggle
  const [show, setShow ] = useState(true);
  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])

  return (
    <div >
      <h2>{props.blockTitle}</h2>
      <ToggleButton onToggle={handleToggle} />
      <ToggleContent show={show}/>
    </div>
  );
}