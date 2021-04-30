import { hot } from 'react-hot-loader/root';
import React from 'react';
import Question from './question/Question.jsx';
import { perfect, plusquamperfect } from '../constants/questions';
import './app.scss';

const App = () => (
    <div className="tapp app">
        <h1>Perfekt</h1>
        {
            perfect.sort((q1, q2) => (q1.orderId > q2.orderId ? 1 : -1)).map(({ title, answers, id }) => (
                <Question
                    id={id}
                    typeId={1}
                    title={title}
                    answers={answers}
                />
            ))
        }
        <h1>Plusquamperfekt</h1>
        {
            plusquamperfect.sort((q1, q2) => (q1.orderId > q2.orderId ? 1 : -1)).map(({ title, answers, id }) => (
                <Question
                    id={id}
                    typeId={2}
                    title={title}
                    answers={answers}
                />
            ))
        }
    </div>
);

export default App;
export const HotApp = hot(App);
