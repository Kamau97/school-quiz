import React, { useState } from 'react';
import Answer from './Answer.jsx';
import './answerWrapper.scss';

const AnswerWrapper = ({ answers, groupId }) => {
    const [wasClicked, setWasClicked] = useState();
    return (
        <div className="answer-wrapper">
            {
                answers.sort((a1, a2) => (a1.orderId > a2.orderId ? 1 : -1)).map(({ text, isCorrect }) => (
                    <Answer
                        text={text}
                        groupId={groupId}
                        isCorrect={isCorrect}
                        wasClicked={wasClicked}
                        onClick={() => {
                            setWasClicked(true);
                        }}
                    />
                ))
            }
        </div>
    );
};
export default AnswerWrapper;
