function generateSeatingPage() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const students = parseInt(document.querySelector("#students").value);
    if(students>rows*cols) alert("Seats are not available");

    // Redirect to the seating arrangement page with rows and cols as URL parameters
    else
    window.location.href = `seating.html?rows=${rows}&cols=${cols}&students=${students} `;
}