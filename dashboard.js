import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1. CHECK AUTH STATUS (LOGIN HAI YA NAHI)
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User login hai, uska email dikhao
        document.getElementById('userEmail').innerText = user.email;
        console.log("Logged in as:", user.email);
    } else {
        // Login nahi hai, wapas bhej do
        window.location.href = "NewIndex.html"; 
    }
});

// 2. LOGOUT FUNCTION
window.logout = async function() {
    try {
        await signOut(auth);
        alert("Logged out successfully!");
        window.location.href = "NewIndex.html";
    } catch (error) {
        console.error("Logout Error:", error);
    }
}

// 3. START INTERVIEW FUNCTION
window.startInterview = function() {
    const role = document.getElementById('role').value;
    const job = document.getElementById('job').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!role || !job || !difficulty) {
        alert("Please select all options before starting!");
        return;
    }

    // Interview settings ko local storage mein temporarily save karein
    const interviewSettings = { role, job, difficulty };
    localStorage.setItem('currentInterview', JSON.stringify(interviewSettings));

    // Interview page par bhejein (Maano uska naam interview.html hai)
    alert(`Starting ${role} interview (${difficulty})...`);
    // window.location.href = "interview.html"; 
}

// 4. GO TO HISTORY
window.goHistory = function() {
    window.location.href = "history.html";
}

// 5. THEME TOGGLE (OPTIONAL)
window.toggleTheme = function() {
    document.body.classList.toggle('dark-theme');
    const btn = document.querySelector('.theme-toggle');
    btn.innerText = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
}