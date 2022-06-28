import React from "react";
import "./option.css";
interface Props {
  choiceId: string;
  onClick: () => void;
}
const Option: React.FC<Props> = ({ choiceId, onClick }) => {
  return (
    <>
      <input
        onClick={() => onClick()}
        type="radio"
        id={`${choiceId}`}
        name="skills"
        value={choiceId}
      />
      <label htmlFor={`${choiceId}`}>{choiceId}</label>
    </>
  );
};

export default Option;
