document
  .getElementById("recipientForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get recipient details
    const recipientGender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;
    let recipientAge = parseInt(document.getElementById("age").value, 10);
    let recipientBMI = parseFloat(document.getElementById("BMI").value);

    // Ensure age is not below 0
    if (recipientAge < 0) recipientAge = 0;

    // Ensure BMI is not below 18
    if (recipientBMI < 18) recipientBMI = 18;

    // Validate inputs
    if (!recipientGender || isNaN(recipientAge) || isNaN(recipientBMI)) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Calculate ranges for matches
    const perfectAgeMin = Math.max(0, recipientAge - 5); // Ensure no negative age range
    const perfectAgeMax = recipientAge + 5;
    const perfectBMIMin = Math.max(18, recipientBMI - 2.5); // Ensure BMI is not below 18
    const perfectBMIMax = recipientBMI + 2.5;

    const nextBestAgeMin = Math.max(0, recipientAge - 15); // Ensure no negative age range
    const nextBestAgeMax = recipientAge + 15;
    const nextBestBMIMin = Math.max(18, recipientBMI - 6.6); // Ensure BMI is not below 18
    const nextBestBMIMax = recipientBMI + 6.6;

    // Generate match descriptions
    const perfectMatch = `Gender: ${
      recipientGender.charAt(0).toUpperCase() + recipientGender.slice(1)
    }, Age: ${perfectAgeMin}-${perfectAgeMax}, BMI: ${perfectBMIMin.toFixed(
      1
    )}-${perfectBMIMax.toFixed(1)}`;
    const nextBestMatch = `Gender: Male/Female, Age: ${nextBestAgeMin}-${nextBestAgeMax}, BMI: ${nextBestBMIMin.toFixed(
      1
    )}-${nextBestBMIMax.toFixed(1)}`;

    // Display results neatly on new lines
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <h4>Your Best Match:</h4>
      <p>${perfectMatch}</p>
      <h4>Your Next Best Match:</h4>
      <p>${nextBestMatch}</p>
    `;
  });
