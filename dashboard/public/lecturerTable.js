// make sure the code works in the browser
// 
import { lecturers } from './lecturerData.js';


document.addEventListener('DOMContentLoaded', () => {



    function addLecturerRows(lecturers) {
        const tbody = document.getElementById('lecturer-table-body');
        lecturers.forEach(lecturer => {
            const row = document.createElement('tr');
            Object.values(lecturer).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
    }

    // Call the function with your lecturers data
    addLecturerRows(lecturers);
});


export default addLecturerRows;
