let selectedLevel = null;
let selectedSemester = null;

function showSemesterOptions(level) {
  selectedLevel = level;

  // Hide level buttons
  document.getElementById('level-buttons').style.display = 'none';

  // Show semester options
  document.getElementById('semester-options').style.display = 'block';

  // Set correct semester button actions
  document.getElementById('sem1-btn').setAttribute('onclick', `showCurriculum(${level}, 1)`);
  document.getElementById('sem2-btn').setAttribute('onclick', `showCurriculum(${level}, 2)`);
}

function showCurriculum(level, semester) {
  selectedSemester = semester;

  // Get the curriculum content div
  const curriculumContent = document.getElementById('curriculum-content');

  // Clear the previous curriculum
  curriculumContent.innerHTML = '';

  let curriculumData = '';

  // Define the curriculum for each level and semester
  const curriculum = {
    1: {
      1: ['End User Computing(BICT 1101)', 'Introduction to Programming in C(BICT 1102)', 'Computer and Communication Technology(BICT1103)', 'Communication Skills I(COMM1101)', 'Pre-Calculus(MAT1101)'],
      2: ['Calculus(MAT 1201)', 'Communication Skills II(COMM 1201', 'PC Management and Maintenance(BICT 1201)', 'Computer Architecture and Organisation(BICT 1203)', 'Multimedia(BICT 1202)']
    },
    2: {
      1: ['Introduction to Statistical Analysis', 'Operating Systems', 'Computer Networks I', 'Web Design', 'Programming in Java'],
      2: ['Multivariate Calculus', 'Databases', 'Human-Computer Interaction', 'Systems Analysis and Design', 'Group Projects']
    },
    3: {
      1: ['Computer Networks II', 'Research Methods', 'Algorithms and Data Structures with Java', 'Mobile Telecommunication', 'Web Programming'],
      2: ['Object Oriented Analysis and Design', 'Object Oriented Programming (C++)', 'Distributed Systems', 'Mobile Application Development', 'Project Management']
    },
    4: {
      1: ['Software Engineering', 'Modelling and Simulation', 'Network Admin and Information Security', 'Entrepreneurship', 'Information Systems Audit'],
      2: ['Artificial Intelligence', 'Electronic Commerce', 'Business Management', 'Systems Project', 'Industrial Attachment']
    }
  };

  // Retrieve the courses for the selected level and semester
  const courses = curriculum[selectedLevel][selectedSemester];

  // Display title
  curriculumData += `<h2 style="color:dark-green; margin-top: 20px; margin-bottom:20px ;">Level ${selectedLevel} - Semester ${selectedSemester} courses:</h2>`;

  // Create boxes for each course
  courses.forEach(course => {
    curriculumData += `<div class="course-box">${course}</div>`;
  });

  // Add a back button
  curriculumData += `<button onclick="goBackToSemester()" class="back">Back</button>`;

  // Display the curriculum content
  curriculumContent.innerHTML = curriculumData;

  // Hide semester options after selecting
  document.getElementById('semester-options').style.display = 'none';
}

function goBackToLevel() {
  document.getElementById('level-buttons').style.display = 'block';
  document.getElementById('semester-options').style.display = 'none';
  document.getElementById('curriculum-content').innerHTML = '';
}

function goBackToSemester() {
  document.getElementById('semester-options').style.display = 'block';
  document.getElementById('curriculum-content').innerHTML = '';
}
