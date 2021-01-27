import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
              <Input name="nomeDoUsuario" value={name} onChange={onchange} placeholder="Diz ai seu nome pra jogar :)" />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
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
