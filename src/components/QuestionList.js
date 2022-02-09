import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, handleDeletedQuestion, handleUpdatedQuestion}) {
  // console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map((question =>{
          return (
            <QuestionItem 
              key={question.id} 
              question={question} 
              handleDeletedQuestion={handleDeletedQuestion}
              handleUpdatedQuestion={handleUpdatedQuestion}
              />
          )
        }))}
      </ul>
    </section>
  );
}

export default QuestionList;
