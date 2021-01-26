import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 45px 0 20px;
  margin: auto 10%;

  & form {
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    input {
      padding: .5rem 1rem;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: initial;
      color: ${({ theme }) => theme.colors.contrastText};
    }
    button {
      padding: .5rem 1rem;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function onsubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function onchange(event) {
    setName(event.target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Sneakerhead</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste os seus conhecimentos sobre a cultura sneakerhead!</p>

            <form onSubmit={onsubmit}>
              <input onChange={onchange} placeholder="Diz ai seu nome pra jogar :)" />
              <button type="submit" disabled={name.length === 0}>
                JOGAR
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h2>Quizes da galera</h2>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/viiniciusgs" />
    </QuizBackground>
  );
}
