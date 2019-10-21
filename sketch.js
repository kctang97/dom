let roster = [
  {
    firstName: "Kaicong",
    lastName: "Tang",
    color: "black",
    animal: "dog",
    movie: "iron man123",
    game: "csgo",
    superHero: "iron man",
    randomFact: "love game"
  },{
    firstName: "Xiaowei",
    lastName: "Zheng",
    color: " green",
    animal: "babies",
    book: "the little girl at the window",
    movie: "eat drink man woman",
    game: "none",
    superHero: "none",
    randomFact: "don't drink coke"
  },{
    firstName: "Andy",
    lastName: "Wu",
    color: "Red",
    animal: "Kiwi",
    book: "Romance of the Three Kingdoms",
    movie: "Shrek 2",
    game: "Super Mario 64",
    superHero: "Static Shock",
    randomFact: "I've had jaw correction surgery"
  },{
    firstName: "Chris",
    lastName: "Weber",
    color: "green",
    animal: "cat",
    book: "Hitchhiker's Guide to the Galaxy",
    movie: "Spiderman Into The Spiderverse",
    game: "The Legend of Zelda Breath of the Wild",
    superHero: "Iron Man",
    randomFact: "I'm vegetarian"
  },{
    firstName: "Sumedh",
    lastName: "Vedanthi",
    color: "Blue",
    animal: "Crow",
    book: "Of Mice and Men",
    movie: "American Psycho",
    game: "Fruit Ninja",
    superHero: "Batman",
    randomFact: "im a black belt",
  },{
    firstName: "Hao",
    lastName: "Rong",
    color: "hex(#4285F4)",
    animal: "otter",
    book: "A Brief History of Time",
    movie: "Angry Birds 2",
    game: "Final Fantasy XIV",
    superHero: "Tony Stark",
    randomFact: "I like cats."
  },{
    firstName: "Sierra",
    lastName: "Roe",
    color: "purple",
    animal: "dog",
    book : "phantom tollbooth",
    movie : "Naussica of the Valley of the Wind",
    game : "pokemon heartgold",
    superHero : "captain marvel",
    randomFact: "can run 7 minute mile"
  },{
    firstName: "Leon",
    lastName: "Quach",
    color: "silver",
    animal: "penguins",
    book: "Letters to a Young Poet",
    movie: "Kung fu Hustle",
    game: "Pokemon Crystal Version",
    superHero: "Batman",
    randomFact: "I have two pet guinea pigs"
  },{
    firstName: "Chi",
    lastName: "Nguyen",
    color: "purple",
    animal: "bird",
    book: "Math Curse",
    movie: "Big Hero 6",
    game: "Checkers",
    superHero: "Big Hero 6 (team)",
    randomFact: "Lately this year, monsters have especially been occupying my mind, among other things."
  },{
    firstName: "Lydia",
    lastName: "Lim",
    color: "blue",
    animal: "dog",
    book: "No",
    movie: "me before you",
    game: "No",
    superHero: "Thor",
    randomFact: " birds are tetrapods even though they only walk on two legs",
  },{
    firstName: "Eddson",
    lastName: "Jose",
    color: "midnight blue",
    animal: "pig",
    book: "The Dark Forest",
    movie: "The Fountain",
    game: "Halo Reach",
    superHero: "Superman",
    randomFact: "I am made up of stardust"
  },{
    firstName: "Camila",
    lastName: "Avina Garcia",
    color: "Green",
    animal: "Dog",
    book: "Match",
    movie: "Lady and the Tramp",
    game: "Guitar Hero",
    superHero: "Spiderman",
    randomFact: "I have a twin",
  },{
    firstName: "Toni",
    lastName: "Anguiano",
    color: "blue",
    animal: "cat",
    book: "The Bell Jar",
    movie: "Horror",
    game: "none",
    superHero: "batman",
    randomFact: "I like to hangout in cemeteries and research dark California history"
  },{
    firstName: "Zainib",
    lastName: "Ahmed",
    color: "Blue",
    animal: "Giraffe",
    book: "The Book Thief",
    movie: "Amelie",
    game: "none",
    superHero: "The Hulk",
    randomFact: "I love to eat olives"
  },{
    firstName: "Matteo",
    lastName: "Leva",
    color: "Black",
    animal: "Cat",
    book: "Pillars of the earth",
    movie:"The Godfather",
    game: "Witcher 3",
    superHero: "spider man",
    randomFact:"I'm disappointed in GOT season 8"
  },{
    firstName: "Hector",
    lastName: "Flores",
    color: "Blue",
    animal:"Dog",
    book:"Captain Underpants",
    movie:"Ace Ventura pet detective",
    game:"Smash Brothers",
    superHero:"Flash",
    randomFact:"I am a Libra",
  },{
    firstName:"Kevin",
    lastName:"Sagara",
    color:"yellow",
    animal:"cat",
    book:"sherlock holmes",
    movie:"Shaun of the Dead",
    game:"osu!",
    superHero:"batman",
    randomfact:"learning japanese"
  },{
    firstName: "Vanessa",
    lastName: "Blacow-Berggen",
    color: "pink",
    animal:"cat",
    book:"The Heartstriker series",
    movie: "Cats Don't Dance",
    game: "Spyro Reignited Trilogy",
    superHero:"Spiderman",
    randomFact:"I really like cats, especially my cat"
  },{
    firstName: "Anthony",
    lastName: "Valdovinos",
    color:"purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    superHero: "none",
    randomFact: "I studied Japanese for 4 years"
  }, {
    firstName: "Rachel",
    lastName: "Centinaje",
    color: "green",
    animal:"dogs",
    book: "none",
    movie:"Drive",
    game: "Dishonored",
    superHero: "Deadpool",
    randomFact:"I went camping this weekend"
}, {
    firstName: "Alicia",
    lastName: "Breinke",
    color: "purple",
    animal: "dog",
    book: "The Art of Racing in the Rain",
    movie: "Spirited Away",
    superHero: "Wonder Woman",
    randomFact: "I want to live in another country someday"
  }, {
    firstName: "Asra",
    lastName: "Siddiqui",
    color: "idk",
    animal: "chameleons",
    book: "codex 1962",
    movie: "pulp fiction",
    game: "idk",
    superHero: "hate em all",
    randomFact: "im grumpy"
  },
];

let randInd;
let animating = false;
let xWidth = 0;
let counter = 0;
let button;
//-------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth / 1.5, windowHeight / 1.5);
  textAlign(CENTER);
  fill(0);
  textSize(40);
  // text("Click to Randomize", width/2, height/2);

  button = createButton("Start");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
}
//-------------------------------------------------------------------
function draw() {
  counter++;
  if (counter == 200) {
    noStroke();
    fill(random(100, 200), random(100, 200), random(100, 200), 50)
    circle(random(width), random(height), random(200, 500));
    counter = 0;
  }
  if (animating == true) {
    noStroke();
    fill(random(200, 255), random(200, 255), random(200, 255), 80);
    circle(width/2, height/2, xWidth*1.2);
    xWidth -= 20;
  }
}
//-------------------------------------------------------------------
function randomizer() {
  animating = false;
  if (roster[0]) {
    background(random(200, 255),random(200, 255),random(200, 255));
    randInd = int(random(roster.length));
    fill(random(150, 200), random(150, 200), random(150, 200), 80);
    circle(width/2, height/2, width*0.2);
    textAlign(CENTER);
    fill(random(100, 150), random(100, 150), random(100, 150));
    text(roster[randInd].firstName, width/2, height/2);
    roster.splice(randInd, 1);
  } else {
    fill(random(150, 200), random(150, 200), random(150, 200), 80);
    circle(width/2, height/2, width*0.2);
    background(random(200, 255),random(200, 255),random(200, 255));
    fill(random(100, 150), random(100, 150), random(100, 150));
    text("Nothing Left", width/2, height/2)
  }
}
//-------------------------------------------------------------------
function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  counter = 0;
  xWidth = width*1.2;
}
