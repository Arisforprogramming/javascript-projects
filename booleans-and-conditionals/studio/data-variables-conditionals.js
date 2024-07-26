// Initialize Variables below

let date =	"Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount	=15;
let astronautStatus	= "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg	= astronautCount * averageAstronautMassKg; 
let fuelMassKg	=760000 ;
let shuttleMassKg =	74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit =	850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp = -150;
let fuelLevel     =	"100%";
let weatherStatus =	"clear";
let preparedForLiftOff	= true;
let line = "-----------------------------------";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

 if(astronautCount <= 7){
     (preparedForLiftOff = true);

 }else{
     (preparedForLiftOff = false);
 }

// add logic below to verify all astronauts are ready

if(astronautStatus==="ready" && astronautCount <= 7){

    (preparedForLiftOff = true);

}else{

    (preparedForLiftOff = false);
 };

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg < maximumMassLimit ){ 
    (preparedForLiftOff = true);

}else{

    (preparedForLiftOff = false);
};
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if(fuelTempCelsius > -150 || fuelTempCelsius < -300) {
    (preparedForLiftOff = false);

}else{

    (preparedForLiftOff = true);
};

// add logic below to verify the fuel level is at 100%

if (fuelLevel == "100%"){
    (preparedForLiftOff = true);

}else{

    (preparedForLiftOff = false);
};
// add logic below to verify the weather status is clear
if (weatherStatus == "clear"){
    (preparedForLiftOff = true);

}else{

    (preparedForLiftOff = false);
};
// Make summary statment 
// Verify shuttle launch can proceed based on above conditions
if  (preparedForLiftOff = true) {
 console.log(line);
 console.log("Date:", date)
 console.log("Time:", time)
 console.log("Astronaut Count:", astronautCount)
 console.log("Crew Mass:", crewMassKg)
 console.log("Fuel Mass:", fuelMassKg)
 console.log("Shuttle Mass:", shuttleMassKg)
 console.log("Total Mass:", totalMassKg)
 console.log("Fule Temperature:", fuelTempCelsius)
 console.log("Weather Status", weatherStatus)
 console.log("Have a safe trip astronauts!")
}else{
console.log("CONDITIONS ARE NOT MET, LAUNCH OPERATIONS ABORTED");
 }

 /*// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 15 ;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
let line = "-----------------------------------";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <=7) {
    preparedForLiftOff;
} else {
    !preparedForLiftOff;
}

// add logic below to verify all astronauts are ready
if (astronautStatus) {
    preparedForLiftOff;
} else {
    !preparedForLiftOff;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    preparedForLiftOff;
} else {
    !preparedForLiftOff;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) {
    preparedForLiftOff;
} else {
    !preparedForLiftOff;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel) {
    preparedForLiftOff;
} else {
    !preparedForLiftOff;
}

// add logic below to verify the weather status is clear
if (weatherStatus) {
    preparedForLiftOff;
} else {
    !preparedForLiftOff;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log(
        "All systems are a go! initiationg space shuttle launch sequence",
    );
    console.log(line);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg);
    console.log("Fuel Mass:", fuelMassKg);
    console.log("Shuttle Mass:", shuttleMassKg);
    console.log("Total Mass:", totalMassKg);
    console.log("Fule Temperature:", fuelTempCelsius);
    console.log("Weather Status", weatherStatus);
    console.log("Have a safe trip astronauts!");
    console.log(line);
    console.log("Have a safe trip astronauts!");
} else {
    console.log("CONDITIONS ARE NOT MET, LAUNCH OPERATIONS ABORTED");
}


/*Questions neee help 
- When changed infomation to another number it is still letting the astronauts launch (like changed countto be exceeded to 15)
- Check another shorter version if it works the same
*/

