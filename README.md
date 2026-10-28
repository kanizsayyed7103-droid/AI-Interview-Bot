# AI Interview Bot

An interactive AI-powered mock interview application designed to help job seekers practice technical and behavioral interviews with real-time response evaluation and performance tracking.

## Project Overview
This project was developed during my internship as an AI Intern. The platform allows users to select specific job roles and difficulty levels, answer dynamically generated interview questions in real time, and receive detailed feedback on their answers. All chat logs and performance reports are stored securely in Firebase.

## Key Features
* Role & Difficulty Selection: Tailors interview questions based on the candidate's target job role (e.g., Software Engineer, Frontend Developer) and optional difficulty levels.
* AI-Driven Question Prompting: Uses AI API integration to dynamically ask role-relevant technical questions.
* Real-Time Answer Evaluation: Checks candidate text responses instantly for accuracy and completeness.
* Detailed Post-Interview Review: Generates a final report highlighting strong points, areas for improvement, and suggested model answers.
* Session History & Report Tracking: Securely saves past interview sessions and performance reviews using Firebase Firestore for continuous progress tracking.

## Tech Stack
* Frontend: HTML5, CSS3, JavaScript (ES6+)
* UI Framework: Bootstrap / Tailwind CSS
* Database & Authentication: Firebase (Auth & Firestore)
* Backend Integration: JavaScript, Fetch API, n8n workflow automation
* Prototyping & Tools: Visual Studio Code, Git, GitHub, Figma

## Project Structure
* index.html - Landing page / Main entrance
* login.html / auth.js - User authentication handling via Firebase
* dashboard.html / dashboard.js - User dashboard showing past reports and interview options
* interview.html / interview.js - Main interview interface and AI API communication
* firebase.js - Firebase configuration and Firestore database queries
