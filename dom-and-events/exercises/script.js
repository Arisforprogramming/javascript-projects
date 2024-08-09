function init() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    //1 change messages 
    button.addEventListener('click', function (event) {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener('mouseover', function () {
        missionAbort.style.backgroundColor = 'red';
    });
    missionAbort.addEventListener('mouseout', function () {
        missionAbort.style.backgroundColor = ''; // Resets to original color
    });

    missionAbort.addEventListener("click", function () {
        const clickConfirm = confirm("Are you sure you want to abort the mission?.");

        if (clickConfirm) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.';
        }
    });

}

window.addEventListener("load", init)

//When the user clicks the Abort Mission button, make a confirmation window that says 
// "Are you sure you want to abort the mission?."
//If the user confirms that they want to abort, the text changes to Mission aborted! Space shuttle returning home.