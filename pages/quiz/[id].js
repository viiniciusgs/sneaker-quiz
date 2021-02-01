/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((responseConvertedToObject) => responseConvertedToObject)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
