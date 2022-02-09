import React from "react";

function QuestionItem({ question, handleDeletedQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  //DELETE
  const handleDelete = () => {
    // console.log(question.id)
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => handleDeletedQuestion(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
