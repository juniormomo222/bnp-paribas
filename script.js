document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Fake credentials (you can adjust if needed)
  if (username === "HENRIK" && password === "392185") {
    window.location.href = "dashboard.html";
  } else {
    errorMsg.style.display = "block";
    errorMsg.textContent = "❌ Invalid login credentials.";
  }
});
