//retrive todo from local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoinput");