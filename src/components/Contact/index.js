import React from "react";
import useInput from "../../hooks/use-input";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormTextArea,
} from "./ContactElements";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactUS = () => {
  const {
    value: enteredFullName,
    isValid: enteredFullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: resetEnteredEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const errorMessage = <Text>Enter all fields.</Text>;

  let formIsValid = false;

  if (enteredFullNameIsValid && enteredMessageIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Full Name: " + enteredFullName);
    console.log("Message Name: " + enteredMessage);
    console.log("Email: " + enteredEmail);
    const contact = {
      FullName: enteredFullName,
      Message: enteredMessage,
      Email: enteredEmail,
    };
    submitMessageHandler(contact);
    resetFullNameInput();
    resetMessageInput();
    resetEnteredEmailInput();
  };

  const submitMessageHandler = async (message) => {
    await fetch(
      "https://react-http-3ae99-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify({
          message: message,
        }),
      }
    );
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">TheDopeGuys</Icon>
        <FormContent>
          <Form action="#" onSubmit={formSubmissionHandler}>
            <FormH1>Contact Us</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              required
              onChange={enteredEmailChangeHandler}
              onBlur={enteredEmailBlurHandler}
            />
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <FormInput
              type="text"
              required
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
            />
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea
              type="text"
              required
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
            <FormButton type="submit" disabled={!formIsValid}>
              Send
            </FormButton>
            {fullNameHasError &&
              emailHasError &&
              messageHasError &&
              errorMessage}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ContactUS;
