import React, { useRef } from 'react';

import './style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
        type="input"
        placeholder="Enter Your Task"
      />
      <button className="input__submit">GO</button>
    </form>
  );
};

export default Input;
