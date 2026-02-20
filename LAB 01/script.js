const eventForm = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearAll = document.getElementById("clearAll");
const sampleEvents = document.getElementById("sampleEvents");

eventForm.addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    addNewEvent(title, date, category, description);
    eventForm.reset();
});

function addNewEvent(title, date, category, description){
    // Removing No Event Message
    const msgClear = eventContainer.querySelector(".empty");
    if (msgClear) msgClear.remove();

    const myEvents = document.createElement("div");
    myEvents.className = "myEvents-card";

    myEvents.innerHTML = `
    <h3>${title}</h3>
    <p><b>📅</b>${date}</p>
    <p id="jsCategory">${category}</p>
    <p>${description}</p>
    <button class="delete-btn">x</button>
    `;
    eventContainer.appendChild(myEvents);
}

eventContainer.addEventListener("click", function (e){
    if (e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
    }
});

clearAll.addEventListener("click", function(){
    eventContainer.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
});

sampleEvents.addEventListener("click", function(){
    addNewEvent("Web Development Conference", "2026-02-15", "Conference", "Annual conference on modern web technologies.");
    addNewEvent("JavaScript Workshop", "2026-02-20", "Workshop", "Hands-on JavaScript learning session.");
})

pressedButton.addEventListener("keydown", function(e){
    this.value = e.key;
    e.preventDefault();
});