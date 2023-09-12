import { Wrapper } from "./AuthenticatingScreen.styles";
import LoadingWaves from "../../assets/loading-waves.gif";
import { useEffect, useState } from "react";

export const AuthenticatingScreen = ({ onNext }: any) => {
  const [text, setText] = useState("Authenticating...");

  useEffect(() => {
    setTimeout(() => {
      setText("You're in!");
      onNext();
    }, 2500);
  }, []);

  return (
    <Wrapper>
      <div>
        <img width="110" src={LoadingWaves} alt="loading" />
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};
