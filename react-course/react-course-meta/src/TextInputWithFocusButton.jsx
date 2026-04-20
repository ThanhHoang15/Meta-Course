import { useRef } from "react";

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

//Note:
//inputEl.current --> access whatever element/value the ref is connected to right now --> this case: input
//inputEl.current.focus() --> put | in the input so user is ready to type