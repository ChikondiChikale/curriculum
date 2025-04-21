document.getElementById("viewOutline").addEventListener("click", function() {
    let selectedCourse = document.getElementById("courseSelect").value;

    if (!selectedCourse) {
        alert("Please select a course.");
        return;
    }

    // Fetch JSON data
    fetch("enduser.json")
        .then(response => response.json())
        .then(data => {
            if (data[selectedCourse]) {
                displayOutline(data[selectedCourse]);
            } else {
                alert("Outline not available for this course.");
            }
        })
        .catch(error => console.error("Error loading course outline:", error));
});

// Function to display course outline
function displayOutline(course) {
    let curriculumContent = document.getElementById("curriculum-content");

    curriculumContent.innerHTML = `
        <button class="back-btn" onclick="goBack()">Back</button>
        <h2>${course.title}</h2>
        <p><strong>Description:</strong> ${course.description}</p>
        <h3>Topics Covered:</h3>
        <ul>${course.topics.map(topic => `<li>${topic}</li>`).join('')}</ul>
        <h3>Assessment Breakdown:</h3>
        <ul>
            <li>Assignments: ${course.assessment.assignments}</li>
            <li>Midterm: ${course.assessment.midterm}</li>
            <li>Final Exam: ${course.assessment.final_exam}</li>
        </ul>
    `;

    document.getElementById("course-selection").style.display = "none";
    curriculumContent.style.display = "block";
}

// Function to go back to course selection
function goBack() {
    document.getElementById("curriculum-content").style.display = "none";
    document.getElementById("course-selection").style.display = "block";
}

