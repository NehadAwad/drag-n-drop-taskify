import React from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputFeild = ({todo, setTodo}: Props)  => {

  return (
   <form action="" className='input'>
    <input type="input" placeholder='Enter a task' className='input__box' />
    <button className='input__submit' type='submit'>Go</button>
   </form>
  )
}
 