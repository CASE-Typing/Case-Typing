//   const firstCrossElement = document.body.getElementsByClassName("cross")[0];

// // Check if the element exists before adding the event listener
// if (firstCrossElement) {
//   firstCrossElement.addEventListener("click", () => {
//     alert("I was clicked");
//   });
// } else {
//   console.error("Element with class 'cross' not found");
// }

// // Make a GET request using the fetch function
// const apiEndpoint = 'https://newsapi.org/v2/everything?q=tesla&from=2023-12-15&sortBy=publishedAt&apiKey=d9fa1a710eac4b0fb8fd33c255ca6fc6';
// fetch(apiEndpoint)
//   .then(response => {
//     // Check if the request was successful (status code 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parse the JSON data from the response
//     return response.json();
//   })
//   .then(data => {
//     // Handle the data from the API
//     console.log(data.articles[0].author);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Fetch error:', error);
//   });

// const ui = document.querySelector(".texting");
const txt = document.querySelector("#text");
const txtT = document.querySelector("#textT");
const txt2 = document.querySelector("#text2");
const btn = document.querySelector(".cross");
const play = document.querySelector("#playButton")
const noOfWords= document.querySelector('#noOfWords')
const timeTaken = document.querySelector('#timeTaken')
const timing = document.querySelector('#timing')
const wpm = document.querySelector('#wpm')
const salutation = document.querySelector('#salutation')
var totalNoOfWords
var gameStartsIn
var wordsPerMinute
// console.log((txtT.value + txt.value).length)
const quotes = [
  "An apple a day keeps the doctor away",
  "I am a person",
  "This is a game"
];
document.getElementById("playButton").addEventListener("click", function () {
  // Set a timeout for 2 seconds (2000 milliseconds) to delay the alert]
  txt2.innerHTML = ""
  gameStartsIn = 5;
  alert("Game is starting after 5 seconds!");

  const timerInterval = setInterval(function () {
    timing.value = gameStartsIn +" sec";
    gameStartsIn--;

    if (gameStartsIn < 0) {
      clearInterval(timerInterval);
      alert("Game Started!");
      txt2.disabled = false;
      startCounter();
    }
  }, 1000);
});
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}
// const updateAnalysis = ()=>{

// }
function startCounter() {
  let counter = 0;

  // Display the counter every second
  const intervalId = setInterval(function () {
      console.log("Counter:", counter);

      // Increase the counter
      counter++;

      // Stop the counter after a certain limit (e.g., 10 seconds)
      if (counter >= 10) {
          txt2.disabled = true;
          
          const text = txt2.value.trim();
            totalNoOfWords = text.split(/\s+/).filter(function (word) {
                return word.length > 0;
            }).length;

            if (noOfWords) {
              noOfWords.innerHTML = "Number of words: " + totalNoOfWords + " words";
            }
            
            if (timeTaken) {
              timeTaken.innerHTML = "Total time taken: " + (counter) + " sec";
            }
            wordsPerMinute = (totalNoOfWords * 60) / counter;
            console.log(wordsPerMinute)
      // Correct updating of WPM display
      
        wpm.innerHTML = "Words per minute count (wpm): " + wordsPerMinute;
        if(wordsPerMinute < 20){
          salutation.innerHTML = "You can try harder"
        }
        else if(wordsPerMinute <30){
          salutation.innerHTML = "You are going good"
        }
        else{
          salutation.innerHTML = "Amazing"
        }
      
            console.log(counter);
            // updateAnalysis();
            // alert("Time up. Number of words: " + totalNoOfWords);
            // wpm = (noOfWords*60)/timeTaken
          clearInterval(intervalId);
          console.log("Counter stopped.");
      }
  }, 1000);
  }

txt.value = quotes.map(quote => `${quote}`).join(" ");
txt2.addEventListener('keyup', (event) => {
  const userInput = event.target.value;
  checkTextInput(userInput)
});
var textRight;
var transfer;

const checkTextInput =async (userTextInput)=>{
  // console.log(txtT.value + txt.value.slice(0,1))
  // transfer = txt.value.slice(0,1)
  // txt.value = txt.value.slice(1)
  // txtT.value = txtT.value + transfer
  // console.log(txtT.value)


  if (userTextInput ===txtT.value + txt.value.slice(0,1)) {
    
    transfer =await txt.value.slice(0,1)
    txt.value = await txt.value.slice(1)
    txtT.value =await txtT.value + transfer
    txtT.style.color = "green"
    
} else {
    
}
}