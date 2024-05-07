import React from 'react';
import ReactDOM from 'react-dom/client';
import addLecturerRows from './lecturerTable.js';
import { lecturers } from './lecturerData.js';


const LecturerList = () => (
    <ul>
       {lecturers.map((lecturer, index) => (
         <li key={index}>{lecturer.name}</li>
       ))}
    </ul>
   );




   
ReactDOM.render(<LecturerList />, document.getElementById('root'));






// ReactDOM.render(<h1> Departure Dashboard </h1>, document.getElementById('root'));




