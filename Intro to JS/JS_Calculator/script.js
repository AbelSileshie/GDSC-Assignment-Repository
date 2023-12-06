
// creat a variyable that will display your mathmatical operations and as well as SpeechRecognitionResultList.

const display = document.querySelector(".display");

// thrn use any method to select them what you need (you can use Id class and querySelector)
// then add event listner to it when it is clicked the displays text content will changed by the button's ktext content you clicked 

document.getElementById("nine").addEventListener("click", function() {
    // const val = display.innerText;
    display.innerText += document.getElementById("nine").innerText; 
});


document.getElementById("eight").addEventListener("click", function() {
    display.innerText += document.getElementById("eight").innerText;
});

document.getElementById("seven").addEventListener("click", function() {
  display.innerText += document.getElementById("seven").innerText;
});

document.getElementById("six").addEventListener("click", function() {
  display.innerText += document.getElementById("six").innerText;
});

document.getElementById("five").addEventListener("click", function() {
  display.innerText += document.getElementById("five").innerText;
});

document.getElementById("zero").addEventListener("click", function() {
  display.innerText += document.getElementById("zero").innerText;
});

document.querySelector(".ac").addEventListener("click", function() {
  display.innerText = ""; 
});

document.getElementById("four").addEventListener("click", function() {
  display.innerText += document.getElementById("four").innerText;
});

document.getElementById("three").addEventListener("click", function() {
  display.innerText += document.getElementById("three").innerText;
});

document.getElementById("two").addEventListener("click", function() {
  display.innerText += document.getElementById("two").innerText;
});

document.getElementById("one").addEventListener("click", function() {
  display.innerText += document.getElementById("one").innerText;
});

document.getElementById("minus").addEventListener("click", function() {
  display.innerText += document.getElementById("minus").innerText;
});

document.getElementById("add").addEventListener("click", function() {
  display.innerText += document.getElementById("add").innerText;
});

document.getElementById("over").addEventListener("click", function() {
  display.innerText += document.getElementById("over").innerText;
});
document.getElementById("dot").addEventListener("click", function() {
    display.innerText += document.getElementById("dot").innerText;
  });

document.getElementById("times").addEventListener("click", function() {
  display.innerText += document.getElementById("times").innerText;
});


document.getElementById("equals").addEventListener("click", function() {
   
      const result = eval ( display.innerText);
      display.innerText = result;
});


