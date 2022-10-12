import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Quiz.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




const Quiz = ({quiz}) => {
    const [cart,setCart] = useState([])
    const [bart,setBart] = useState([])
   
    const {question,correctAnswer,options} = quiz;
    
    const handleTo = quta =>{
        const exists = cart.find(ts =>ts.quta === quta.correctAnswer)
        if(exists) {
            alert('worng answer');
        }
        else {
            const newcart =[quta]
            setCart(newcart);
            alert('Right answer')
        }
        
        // console.log(quta)
        

    }
    const doubleTo = correctAnswer =>{
       
        const exists = bart.find(ts =>ts === correctAnswer)
        if(exists) {
            alert(correctAnswer);
        }
        else {
            const newcart =[correctAnswer]
            setBart(newcart);
            alert (correctAnswer)
        }

    }
   
   
    return (
       <div >
       

<div className='quiz-container'>
    <button onClick={() => doubleTo(correctAnswer)}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
   
            <h1>{question}</h1>
           
            {
                options.map(quta=><div className="form-control">
                <label className="cursor-pointer label">
                <input type="radio" onClick={() =>handleTo(quta)}  name='1name'  />
                  <span className="label-text">{quta}</span>
                  
                </label>
              </div>)
            }
            
            
            


         



        </div>
       </div>
    );
};

export default Quiz;