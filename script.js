// Step 1: Promise with setTimeout (simulates async work)
function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async operation complete!"), 2000);
  });
}

// Show how JS continues running while waiting for the Promise
console.log("Before async call");
simulateAsyncOperation().then((message) => console.log(message));
console.log("After async call - JS is not blocked!");


// Step 2: Fetch cat breeds from Cat Fact API
async function fetchCatBreeds() {
  try {
    const response = await fetch("https://catfact.ninja/breeds?limit=10");

    // Always check response.ok before parsing JSON
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }

    const data = await response.json();
    console.log("Cat Breeds:", data.data); // data.data is the array of breeds
    return data.data;
  } catch (error) {
    console.error("Error fetching cat breeds:", error);
    return null;
  }
}

// Call function once so we see output in console
fetchCatBreeds().then((breeds) => console.log("Fetched cat breeds:", breeds));


// Step 3: Get selected value from dropdown
function getSelectedValue() {
  const dropdown = document.getElementById("factCount");
  // Return dropdown value as a number; default to 5 if dropdown not found
  return dropdown ? Number(dropdown.value) : 5;
}


// Step 4: Fetch and display cat facts
async function displayCatFacts() {
  const limit = getSelectedValue();
  const factsContainer = document.getElementById("factsContainer");

  if (factsContainer) {
    factsContainer.innerHTML = "<p>Loading facts...</p>";
  }

  try {
    const response = await fetch(`https://catfact.ninja/facts?limit=${limit}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch cat facts (${response.status})`);
    }

    const data = await response.json();

    if (!factsContainer) return;

    // Clear old facts
    factsContainer.innerHTML = "";

    // Display each fact
    data.data.forEach((factObj, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}. ${factObj.fact}`;
      factsContainer.appendChild(p);
    });
  } catch (error) {
    console.error("Error fetching cat facts:", error);
    if (factsContainer) {
      factsContainer.innerHTML = "<p>Sorry, couldn't load cat facts.</p>";
    }
  }
}


// Step 5: Object destructuring (Samurai Pizza Cats example)
const samuraiPizzaCats = {
  leader: "Speedy Cerviche",
  members: 3,
  base: { location: "Little Tokyo", name: "Pizza Cat Restaurant" },
  catchphrase: "It's cheese time!",
};

const {
  leader,
  base: { location },
} = samuraiPizzaCats;

console.log("Leader:", leader);
console.log("Location:", location);


// Step 6: Run displayCatFacts once on page load
window.addEventListener("DOMContentLoaded", () => {
  displayCatFacts();
});
window.displayCatFacts = displayCatFacts;
