import useInputValidation from "./hooks/use-inputValidation";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@')

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHander,
    reset: resetNameInput,
  } = useInputValidation(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastnameInputHasError,
    changeHandler: lastnameChangeHandler,
    blurHandler: lastnameBlurHander,
    reset: resetLastNameInput,
  } = useInputValidation(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHander,
    reset: resetEmailInput,
  } = useInputValidation(isEmail);

  let formIsValid = false;

  if(nameIsValid && lastNameIsValid && emailIsValid){
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

    

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHander}
          />
          {nameInputHasError && (
            <p className="error-text">Name cannot be empty!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHander}
          />
          {lastnameInputHasError && (
            <p className="error-text">Last name cannot be empty!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHander}
        />
        {emailInputHasError && (
            <p className="error-text">Please enter a valid email!</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
