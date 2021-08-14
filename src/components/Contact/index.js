import React from "react";
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

const ContactUS = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">TheDopeGuys</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Contact Us</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <FormInput type="text" required />
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea type="text" required />
            <FormButton type="submit">Send</FormButton>
            <Text>Enter all fields.</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ContactUS;
