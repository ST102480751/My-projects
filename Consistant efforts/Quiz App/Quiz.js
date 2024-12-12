let currentQuestionIndex = 0;// Initialize the question index to start at the first question.

let optionsSelected = false; // Tracks if an option is selected.


   list = [
    {
        question :" What is the capital of France?",
        options: ["Berlin","Madrid","Paris","Barcelona"],
        answer: "Paris",
       Selected: null // Placeholder for storing the selected option
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn","Neptune"],
        answer: "Mars",
        Selected: null // Placeholder for storing the selected option
      },
      {
        question: "Who wrote the play Hamlet?",
        options: ["Charles Dickens", "J.K. Rowling", "Mark Twain", "William Shakespeare"],
        answer: "William Shakespeare",
        Selected: null // Placeholder for storing the selected option
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale",
       Selected: null // Placeholder for storing the selected option
    },

    {
      question: "What is the boiling point of water in Celsius?",
      options: ["50°C", "75°C", "100°C", "125°C"],
      answer: "100°C",
     Selected: null // Placeholder for storing the selected option
  }
  
 
   ];
   
  
  


function updateQuestion(){

  let currentQuestion = list[currentQuestionIndex]; //accesses the current question in the list array
  let Question= document.getElementById('question');
  Question.textContent = currentQuestion.question;// since theres somethin in the arry , this retrives wat is in the array (.textContent)

let optionsButtons = document.querySelectorAll('.options button'); //use querySelectorall wen in html they are buttons inside an ul or div with the class 
currentQuestion.options. forEach ((option,index) =>{  

  //array.forEach((value, index) => {
   // code to execute for each element  (how for each works.)


  optionsButtons[index].textContent = option; //Show the answer option on the button

   // Attach event listener to each button
   optionsButtons[index].onclick = () => {
    optionsSelected = true; // Update dynamically when a button is clicked
    selectAnswer(option); // Pass the selected option  finction call   


}

});
optionsSelected = false; // Reset option selection for the new question
} 


function selectAnswer(option) {
    
  list[currentQuestionIndex].Selected=option;//declaring the seleced property of objects
  
 
  optionsSelected  = true; // Mark that an option is selected
  let key = `optionsSelected_${currentQuestionIndex}`;//Create a unique key for storing the selected option for the current question in localStorage.

  localStorage.setItem(key, option);
 
}

function nextQuestion(){
 
  let currentQuestion = list[currentQuestionIndex];
  
  if(!optionsSelected){ 
    alert("Please choose an option");
 
    return;
  
   }
  
   currentQuestionIndex++; // Move to the next question by incrementing the current question index

       // Check if there are more questions in the list
       if (currentQuestionIndex < list.length) {

        updateQuestion();
        optionsSelected = false; // Reset for the new question
    } else {
        // Show some message or handle when quiz is complete
      
        
        alert("Quiz Complete!");
   
         
    }   

    

    score();// check how calling functions work


    updateQuestion();
  }


    function score(){

      let currentQuestion = list[currentQuestionIndex]; 

      let total = document.getElementById("scoreTotal");
      let key = `optionsSelected_${currentQuestionIndex}`;// Create a unique key for storing the selected option for the current question in localStorage.


      let savedOption = localStorage.getItem(key);//Save the selected option to localStorage using the generated key to persist the user's choice.

let score = 0;  // Initialize score      


list.forEach((question) => {
  // Check if the selected answer matches the correct answer
  if (question.Selected === question.answer) {
      score++; // Increment score for each correct answer
  }
});

//how to think a for loop as 
// Loop through each element (question) in the list  Do something with this question
   




total.textContent = `Your score: ${score} / ${list.length}`;//displays using the DOM element


    }

    updateQuestion(); 

  




