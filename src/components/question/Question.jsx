import React from 'react';
import AnswerWrapper from './answer/AnswerWrapper.jsx';
import './question.scss';

const Question = ({ title, answers, id, typeId }) => (
    <div className="question content__card">
        <div className="question__head">
            <h2>{title}</h2>
        </div>
        <div className="question__body">
            <AnswerWrapper
                groupId={`type:${typeId}-question:${id}`}
                answers={answers}
            />
        </div>
    </div>
);

export default Question;
