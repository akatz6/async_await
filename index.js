// console.log("One");

// setTimeout(() => {
//   console.log("This is a timeout");
// }, 2000);

// console.log("Two");

var getPost = async function (url) {
  // Get the post data
  var postResp = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });
  var post = await postResp.json();
  games = post.events;
  games.forEach((element) => {
    const linkToGame = element.links[0].href;
    const comp = element.competitions[0].competitors;
    const teamOne = comp[0];
    const teamTwo = comp[1];
    const game = `${teamTwo.team.displayName}  @ ${teamOne.team.displayName}`;
    const teamOneLogo = teamOne.team.logo;
    const teamTwoLogo = teamTwo.team.logo;
    let newElement = document.createElement("div");
    newElement.style.width = "20%";
    newElement.style.height = "200px";
    newElement.style.marginTop = "30px"
    let gameParagraph = document.createElement("p");
    gameParagraph.innerText = game;
    gameParagraph.style.marginLeft = "20%";
    newElement.append(gameParagraph);
    let imageWrapper = document.createElement("div");
    imageWrapper.style.width = "100%";
    imageWrapper.style.height = "120px";
    imageWrapper.style.display = "flex";
    imageWrapper.style.justifyContent = "space-around";
    let logoOneImgTag = document.createElement("img");
    logoOneImgTag.src = teamOneLogo;
    logoOneImgTag.style.height = "100px";
    imageWrapper.append(logoOneImgTag);
    let logoTwoImgTag = document.createElement("img");
    logoTwoImgTag.style.height = "100px";
    logoTwoImgTag.src = teamTwoLogo;
    newElement.style.display = "inline-block";
    imageWrapper.append(logoTwoImgTag);
    newElement.append(imageWrapper);
    let linkToIndividualGame = document.createElement("a");
    linkToIndividualGame.href = linkToGame;
    linkToIndividualGame.innerText = "Link to Game";
    linkToIndividualGame.style.marginLeft = "40%";
    newElement.append(linkToIndividualGame);
    document.getElementById("root").append(newElement);
  });
};

getPost(
  "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
);
// //Get all
// async function getData(url = "", data = {}) {
//   try {
//     const response = await fetch(url, {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("In here")
//     return response.json(); // parses JSON response into native JavaScript objects
//   } catch (e) {
//     console.log(e);
//   }
// }

// //Get Team
// const response = getData(
//   "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
// ).then((data) => {
//   console.log(data.leagues[0].name);
// });

// async function getDataTeam(url = "", data = {}) {
//   // Default options are marked with *

//   const response = await fetch(`${url}/${data.team}`, {
//     method: "GET", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json",
//     },
//     //    body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// getDataTeam(
//   "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/",
//   { team: 1 }
// ).then((data) => {
//   console.log(data.team.name); // JSON data parsed by `data.json()` call
// });

// // Insert Team
// // This will not work because we are calling a third party api
// async function PostTeam(url = "", data = {}) {
//   // Default options are marked with *
//   console.log(data.team);
//   const response = await fetch(`${url}/${data.team}`, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// PostTeam("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/", {
//   city: "Chicago",
//   name: "Bears",
//   QB: "Justin Fields",
// }).then((data) => {
//   console.log(data.team.name); // JSON data parsed by `data.json()` call
// });

// Update Team
// This will not work because we are calling a third party api
// async function PutTeam(url = "", data = {}) {
//     // Default options are marked with *
//     console.log(data.team);
//     const response = await fetch(`${url}/${data.team}`, {
//       method: "PUT", // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }

//   PutTeam("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/", {
//     number: 1,
//     QB: "Aaron Rodgers",
//   }).then((data) => {
//     console.log(data.team.name); // JSON data parsed by `data.json()` call
//   });
