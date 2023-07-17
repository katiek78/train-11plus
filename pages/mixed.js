import { createAlgebraQuestion } from '../questions/algebra'
import MathsQuestion from '../components/MathsQuestion';
import { useState, useEffect } from "react"

const Mixed = () => {

    const [question, setQuestion] = useState({});
    const [needNewQuestion, setNeedNewQuestion] = useState(true);

    useEffect(() => {
        if (needNewQuestion) {
            setQuestion(createAlgebraQuestion());
            setNeedNewQuestion(false);
        }

    },[needNewQuestion])

    const refreshQuestion = () => {
        console.log("here");
        setNeedNewQuestion(true);
    }

    return(
        <div className="grid wrapper">
            <div className="maths-question-page">
        <h1>Mixed Practice</h1>
        <MathsQuestion question={question.question} answer={question.answer} refreshQuestion={refreshQuestion} />
        
        </div>
        </div>
    )
}

export default Mixed