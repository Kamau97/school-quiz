import React from 'react';
import AnswerWrapper from './answer/AnswerWrapper.jsx';

const Question = ({ title, answers, id, typeId }) => (
    <div className="question">
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
