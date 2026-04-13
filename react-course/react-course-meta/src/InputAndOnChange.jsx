import { useState } from 'react';

export default function InputAndOnChange() { 
  const [inputText, setText] = useState('hello'); 



  return ( 
    <> 
      <input value={inputText} onChange={e => (setText(e.target.value))}/> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 