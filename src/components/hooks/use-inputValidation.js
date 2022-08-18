import {useState} from 'react'

const useInputValidation = (validateValue) => {

  const [value, setValue] = useState('');
  const [isTouched, setisTouched] = useState(false)

  const changeHandler = event =>{
    setValue(event.target.value);
  }

  const blurHandler = () =>{
    setisTouched(true);
  }

  const isValid = validateValue(value)
  const hasError = isTouched && !isValid

  

  const reset = () =>{
    setValue('');
    setisTouched(false)
  }

  return{
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset
  }
}

export default useInputValidation