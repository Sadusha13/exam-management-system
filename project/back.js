document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy validation (You can replace this with real authentication later)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        showExams();
    } else {
        alert("Invalid username or password");
    }
});

function showExams() {
    const examList = [
        { id: 1, name: "Math Exam", date: "2025-03-01" },
        { id: 2, name: "Science Exam", date: "2025-03-10" },
        { id: 3, name: "History Exam", date: "2025-03-15" }
    ];

    const examListContainer = document.getElementById("examList");

    // Clear existing exams
    examListContainer.innerHTML = "";

    // Display new exams
    examList.forEach(exam => {
        const li = document.createElement("li");
        li.textContent = `${exam.name} - Date: ${exam.date}`;
        examListContainer.appendChild(li);
    });

    // Show exam list
    document.querySelector(".exam-list").style.display = "block";
}
