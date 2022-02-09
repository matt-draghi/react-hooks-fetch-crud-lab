import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
    .then(resp => resp.json())
    .then(questions => {
      setQuestions(questions)
    })
  }, [])

  const addNewQuestion = (newQuestion) => {
    console.log(questions)
    setQuestions([...questions, newQuestion])
  }

  const handleDeletedQuestion = (deletedQuestion) => {
    const remainingQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(remainingQuestions)
  }

  const handleUpdatedQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((question) => {
      if(question.id === updatedQuestion.id){
        return updatedQuestion
      }
      else{
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" 
      ? <QuestionForm handleAddNewQuestion={addNewQuestion}/> 
        : <QuestionList 
            questions={questions}
            handleDeletedQuestion={handleDeletedQuestion}
            handleUpdatedQuestion={handleUpdatedQuestion}
          />}
    </main>
  );
}

export default App;
