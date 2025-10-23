// Step 1: Function that returns a promise (simulating async operation)
function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async operation complete!");
        }, 2000);
    });
}

// Call the function and show that JS continues running
console.log("Before async call");
simulateAsyncOperation().then((message) => console.log(message));
console.log("After async call - JS is not blocked!");

// Step 2: Fetch cat breeds from the Cat Fact API
async function fetchCatBreeds() {
    try {
        const response = await fetch("");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Cat Breeds:", data);
        return data;
    } catch (error) {
        console.error("Error fetching cat breeds:", error);
    }
}

// Call the function
fetchCatBreeds().then((data) => console.log("Fetched cat breeds:", data));

// Step 3: Get selected dropdown value
function getSelectedValue() {
    const dropdown = document.getElementById("factCount");
    return dropdown ? dropdown.value : 5; // Default to 5 if not found
}

// Step 4: Fetch and display cat facts based on dropdown selection
async function displayCatFacts() {
    try {
        const limit = getSelectedValue();
        const response = await fetch(`https://catfact.ninja/facts?limit=${limit}`);
        if (!response.ok) {
            throw new Error("Failed to fetch cat facts");
        }
        const data = await response.json();

        const factsContainer = document.getElementById("catFacts");
        if (factsContainer) {
            factsContainer.innerHTML = "";
            data.data.forEach((fact) => {
                const p = document.createElement("p");
                p.textContent = fact.fact;
                factsContainer.appendChild(p);
            });
        }
    } catch (error) {
        console.error("Error fetching cat facts:", error);
    }
}

// Step 5: Destructuring Samurai Pizza Cats
const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};

const { leader, base: { location } } = samuraiPizzaCats;
console.log("Leader:", leader);
console.log("Location:", location);

// Optional: Run displayCatFacts on page load
window.onload = displayCatFacts;
