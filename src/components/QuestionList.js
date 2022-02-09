import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, handleDeletedQuestion}) {
  // console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map((question =>{
          return <QuestionItem key={question.id} question={question} handleDeletedQuestion={handleDeletedQuestion}/>
        }))}
      </ul>
    </section>
  );
}

export default QuestionList;
