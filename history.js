import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ================= USER EMAIL =================
const email = localStorage.getItem("userEmail");

if (email) {
  const el = document.getElementById("userEmail");
  if (el) el.innerText = email;
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("currentInterview");
  window.location.href = "NewIndex.html";
}
window.logout = logout;

// ================= HISTORY LOAD (FIREBASE) =================
const box = document.getElementById("history");

async function loadHistory() {
  box.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "interviewHistory"));

  if (querySnapshot.empty) {
    box.innerHTML = "<p>No interviews yet.</p>";
    return;
  }

  querySnapshot.forEach((docSnap) => {
    const h = docSnap.data();

    box.innerHTML += `
      <div class="question history-card">
        <span class="delete-btn" onclick="deleteHistory('${docSnap.id}')">✖</span>
        <strong>${h.role}</strong> (${h.job})<br>
        Difficulty: ${h.difficulty}<br>
        Score: ${h.totalScore}/100<br>
        Date: ${h.date}
      </div>
    `;
  });
}

loadHistory();

// ================= DELETE HISTORY (FIREBASE) =================
window.deleteHistory = async function (id) {
  if (!confirm("Delete this interview record?")) return;

  await deleteDoc(doc(db, "interviewHistory", id));
  loadHistory();
};

// ================= BACK BUTTON =================
function back() {
  window.location.href = "dashboard.html";
}
window.back = back;

// ================= THEME TOGGLE =================
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}
window.toggleTheme = toggleTheme;
