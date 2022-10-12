import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData()
    const LoderData = quizData.data
    // console.log(LoderData)
    return (
        <div>
            <div>
                <h1>Yeasin arafat</h1>
                <h1>My resturent</h1>
               <div >
               <img className='pic'  src='https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'/>
               </div>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
          {LoderData.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>

        </div>
       
    );
};

export default Home;