import React, { useState } from 'react';
import classNames from 'classnames';
import './answer.scss';

const Answer = ({ text, isCorrect, groupId, wasClicked, onClick }) => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="answer">
            <button
                className={classNames({
                    wrong: wasClicked && selected && !isCorrect,
                    correct: wasClicked && isCorrect,
                    disabled: wasClicked && !selected,
                })}
                onClick={() => {
                    if (!wasClicked) {
                        onClick();
                        setSelected(true);
                    }
                }}
            >
                <p>
                    {text}
                </p>
            </button>
        </div>
    );
};

export default Answer;
