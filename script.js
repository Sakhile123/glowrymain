function toggleMode() {
    const body = document.body;
    body.classList.toggle("day-mode");
    body.classList.toggle("night-mode");
  }
  function setModePreference(mode) {
    localStorage.setItem("modePreference", mode);
  }
  
  function getModePreference() {
    return localStorage.getItem("modePreference");
  }
  
 
  const userPreference = getModePreference();
  if (userPreference) {
    document.body.classList.add(userPreference);
  }
    
