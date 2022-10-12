import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './BookDetails.css'

const BookDetails = () => {
    
    const rata = useLoaderData().data
    const mata = rata.questions
   

    console.log(mata)
    
    return (
        <div>
            <div className='yeasin'><h1>Quiz:{mata.length}</h1></div>
           {
            mata.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}

            ></Quiz>)
           }
            
        </div>
    );
};

export default BookDetails;