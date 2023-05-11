console.log("One");

setTimeout(() => {
  console.log("This is a timeout");
}, 2000);

console.log("Two");


//Get all
async function getData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (e) {
    console.log(e);
  }
}

//Get Team
const response = getData(
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
).then((data) => {
  console.log(data.leagues[0].name);
});

async function getDataTeam(url = "", data = {}) {
  // Default options are marked with *
  console.log(data.team);
  const response = await fetch(`${url}/${data.team}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    //    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

getDataTeam(
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/",
  { team: 1 }
).then((data) => {
  console.log(data.team.name); // JSON data parsed by `data.json()` call
});


// Insert Team
// This will not work because we are calling a third party api
async function PostTeam(url = "", data = {}) {
  // Default options are marked with *
  console.log(data.team);
  const response = await fetch(`${url}/${data.team}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

PostTeam("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/", {
  city: "Chicago",
  name: "Bears",
  QB: "Justin Fields",
}).then((data) => {
  console.log(data.team.name); // JSON data parsed by `data.json()` call
});

// Update Team
// This will not work because we are calling a third party api
async function PutTeam(url = "", data = {}) {
    // Default options are marked with *
    console.log(data.team);
    const response = await fetch(`${url}/${data.team}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  PutTeam("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/", {
    number: 1,
    QB: "Aaron Rodgers",
  }).then((data) => {
    console.log(data.team.name); // JSON data parsed by `data.json()` call
  });
