// Tim Hortons Roll Up The Rim Simulator

// Global Variables
let numRetry = 0;
let numCoffee = 0;
let numDonut = 0;
let numPrize = 0;

//EVENT LISTENER
document.getElementById("search").addEventListener("click", prizeSearch);
document.getElementById("simulate5times").addEventListener("click", simulate5times);
document.getElementById("sumulategrandprize").addEventListener("click", sumulategrandprize);
document.getElementById("simulate500donuts").addEventListener("click", simulate500donuts);

// EVENT FUNCTION
function characterSearch () {
    // GET INPUT VALUE (WHAT CHARACTER TO LOOK FOR)
    let name = document.getElementById("input-province").value;
    name = name.toLowerCase() ;
}
// Generate a Random Number
let randNum = Math.random(); // Random Decimal from 0 up to 1

// TEST INPUT VARIABLE AND UPDATE THE PAGE
if (name == "British Columbia" || name == "british columbia") {
    // UPDATE PAGE TO BRITISH COLUMBIA
    document.getElementById("main-img").src = "images/british-columbia.png"
        // Event Listener
        document.getElementById("simulateonce").addEventListener("click", simulateonce);
        if (randNum < 0.70) {
            console.log("Please Play Again");
            numRetry++;
            document.getElementById("playagain").innerHTML = numRetry;
        } else if (randNum < 0.80) {
            console.log ("Free Coffee");
            numCoffee++;
            document.getElementById("freecoffee").innerHTML = numCoffee;
        } else if (randNum < 0.90) {
            console.log ("Free Donut");
            numDonut++;
            document.getElementById("freedonut").innerHTML = numDonut;
        } else {
            console.log ("prize");
            numPrize++;
            document.getElementById("prize").innerHTML = numPrize;
            }
            function simulate5times() {
                for (let n = 0; n < 5; n++) {
                    prizeSearch();
                }
            function sumulategrandprize(){
                let count = 0;
                while(numPrize < 50){
                    numPrize(); 
                    count++
                    }
                    console.log("Count: " + count);
                }
            }
            function simulate500donuts(){
                let count = 0;
                while(numDonut < 500){
                    numDonut(); 
                    count++
                }
                console.log("Count: " + count);
            }
   
} else if (name == "Alberta" || name == "alberta") {
    // UPDATE PAGE TO ALBERTA
    document.getElementById("main-img").src = "images/alberta.png"
        // Event Listener
        document.getElementById("simulateonce").addEventListener("click", simulateonce);
        if (randNum < 0.15) {
            console.log("Please Play Again");
            numRetry++;
            document.getElementById("playagain").innerHTML = numRetry;
        } else if (randNum < 0.55) {
            console.log ("Free Coffee");
            numCoffee++;
            document.getElementById("freecoffee").innerHTML = numCoffee;
        } else if (randNum < 0.95) {
            console.log ("Free Donut");
            numDonut++;
            document.getElementById("freedonut").innerHTML = numDonut;
        } else {
            console.log ("prize");
            numPrize++;
            document.getElementById("prize").innerHTML = numPrize;
        }
        function simulate5times() {
            for (let n = 0; n < 5; n++) {
                prizeSearch();
            }
        function sumulategrandprize(){
            let count = 0;
            while(numPrize < 50){
                numPrize(); 
                count++
                }
                console.log("Count: " + count);
            }
        }
        function simulate500donuts(){
            let count = 0;
            while(numDonut < 500){
                numDonut(); 
                count++
            }
            console.log("Count: " + count);
        }
   
} else if (name == "Saskatchewan" || name == "saskatchewan") {
    // UPDATE PAGE TO SASKATCHEWAN
    document.getElementById("main-img").src = "images/saskatchewan.png"
        // Event Listener
        document.getElementById("simulateonce").addEventListener("click", simulateonce);
        if (randNum < 0.70) {
            console.log("Please Play Again");
            numRetry++;
            document.getElementById("playagain").innerHTML = numRetry;
        } else if (randNum < 0.71) {
            console.log ("Free Coffee");
            numCoffee++;
            document.getElementById("freecoffee").innerHTML = numCoffee;
        } else if (randNum < 0.72) {
            console.log ("Free Donut");
            numDonut++;
            document.getElementById("freedonut").innerHTML = numDonut;
        } else {
            console.log ("prize");
            numPrize++;
            document.getElementById("prize").innerHTML = numPrize;
    }
        function simulate5times() {
            for (let n = 0; n < 5; n++) {
            prizeSearch();
        }
        function sumulategrandprize(){
            let count = 0;
            while(numPrize < 50){
            numPrize(); 
            count++
            }
            console.log("Count: " + count);
        }
     }
        function simulate500donuts(){
            let count = 0;
            while(numDonut < 500){
            numDonut(); 
            count++
        }
        console.log("Count: " + count);
    }
}