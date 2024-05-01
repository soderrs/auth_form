import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function ModalForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isEmailCorrect, setIsEmailCorrect] = useState(true); 

  // const [apiResponse, setApiResponse] = useState({
  //   data: null,
  //   loading: false,
  //   error: null,
  //   success: false,
  // });

 
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!value.length) {
      setIsEmailCorrect(true);
      return;
    }
    setIsEmailCorrect(Boolean(validateEmail(value)));
  };

  const validateEmail = (email: string): RegExpMatchArray | null => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };



  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      console.log("Loading...");
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log(response.body);
      } else {
        console.log(response.body);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm>
      <h1>Register form</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!isEmailCorrect ? <p>Incorrect email</p> : null}
          <Input
            styleType="Input1"
            placeholderValue="Enter your email..."
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Input
            styleType="Input1"
            placeholderValue="Enter your password..."
            value={password}
            type="password"
            onChange={handlePasswordChange}
            required
          />
         
          <Button styleType="Button1" onClick={handleSubmit} />
        </>
      )}
    </AuthForm>
  );
}
