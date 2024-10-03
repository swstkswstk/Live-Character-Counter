// (function () {
//   document.addEventListener('DOMContentLoaded', function () {
//     const textArea = document.querySelector('#textarea');
//     const counter = document.querySelector('.counter');
//     function countingCharacters() {
//       let textAreaLength = textArea.value.length;
//       console.log(textAreaLength);
//       counter.textContent = `Characters: ${textAreaLength}`;

//     }
//     textArea.addEventListener('keyup', countingCharacters);



//   })
// })();
function countingCharacters() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('.counter');
  let textAreaLength = textArea.value.length;
  counter.textContent = textAreaLength;  // Update the character count in the counter
}

// document.addEventListener('DOMContentLoaded', function () {
//   const textArea = document.querySelector('#textarea');
//   textArea.addEventListener('keyup', countingCharacters);  // Optional, as you already have the inline event
// });
