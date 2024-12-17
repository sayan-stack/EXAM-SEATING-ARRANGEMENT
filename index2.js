function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        rows: parseInt(params.get('rows')),
        cols: parseInt(params.get('cols')),
        students: (params.get('students'))
    };
}

function createSeatingArrangement(rows, cols,students) {
    const seatingLayout = document.getElementById('seating-layout');
    seatingLayout.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    // Clear previous seating arrangement
    seatingLayout.innerHTML = '';

    let studentIndex =1;

    // Generate seating layout based on rows and columns
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');

            // Assign students to seats if available, otherwise mark as empty
            if (studentIndex <= students) {
                seatDiv.innerHTML = ` <img src="https://img.icons8.com/ios/50/000000/student-male--v1.png" alt="Seat Icon">
                <br>
                Student ${studentIndex}`;
                studentIndex++;
            } else {
                seatDiv.classList.add('empty-seat');
                seatDiv.innerHTML = `<img src="https://img.icons8.com/ios/50/000000/student-male--v1.png" alt="Empty Seat Icon">
                <br>
                Empty Seat`;
            }

            seatingLayout.appendChild(seatDiv);
        }
    }
}

// Get parameters from the URL
const { rows, cols,students } = getUrlParams();

// Create seating arrangement on page load
createSeatingArrangement(rows, cols,students);