// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {

    //buttons
    const takeOffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const missionAbortButton  = document.getElementById('missionAbort');

    //area
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    

    takeOffButton.addEventListener("click", function () {
        const clickConfirm = confirm("Confirm that the shuttle is ready for takeoff.");
        if (clickConfirm) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000
        }
        });
   

    landingButton.addEventListener("click", function () {
        const clickConfirm = confirm("The shuttle is landing. Landing gear engaged.");
        if (clickConfirm) {
            flightStatus.innerHTML = 'The shuttle has landed.';
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0
        }
       });

    missionAbortButton.addEventListener("click", function () {
        const clickConfirm = confirm("Confirm that you want to abort the mission.");
        if (clickConfirm) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0
        }
       });




    });

