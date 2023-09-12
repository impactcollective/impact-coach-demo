import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  padding: 2rem;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
  gap: ${({ gap }: any) => gap || "4.6rem"};

  h2 {
    font-size: 2.4rem;
    align-self: start;
  }

  h3 {
    margin-top: -2rem;
    margin-bottom: -2.5rem;
    align-self: start;
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  align-self: start;
  width: 100%;
`;
