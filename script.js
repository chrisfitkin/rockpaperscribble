var groups = {
    first: ['Aardvark', "Alligator", "Alpaca", "Ant", "Anteater", "Antelope", "Ape", "Armadillo", "Donkey", "Baboon", "Badger", "Bat", "Bear", "Beaver", "Bee", "Boar", "Buffalo", "Butterfly", "Beetle", 'Bug', "Camel", "Cat", "Caterpillar", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Clam", "Cobra", "Cockroach", "Crab", "Crane", "Crocodile", "Crow", "Deer", "Dinosaur", "Dog", "Dolphin", "Dove", "Dragonfly", "Duck", "Eagle", "Echidna", "Eel", "Elephant", "Emu", "Falcon", "Ferret", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gazelle", "Gerbil", "Giraffe", "Gnat", "Goat", "Goldfish", "Goose", "Gorilla", "Grasshopper", "Hamster", "Hare", "Hawk", "Hedgehog", "Hippopotamus", "Horse", "Human", "Hummingbird", "Hyena", "Jaguar", "Jellyfish", "Kangaroo", "Koala", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Magpie", "Manatee", "Mantis", "Meerkat", "Mole", "Monkey", "Moose", "Mosquito", "Mouse", "Mule", "Narwhal", "Newt", "Octopus", "Opossum", "Ostrich", "Otter", "Owl", "Oyster", "Panther", "Parrot", "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Pony", "Porcupine", "Rabbit", "Raccoon", "Ram", "Rat", "Raven", "Red Panda", "Reindeer", "Rhinoceros", "Salamander", "Salmon", "Scorpion", "Seahorse", "Seal", "Shark", "Sheep", "Skunk", "Snail", "Snake", "Sparrow", "Spider", "Squid", "Squirrel", "Stingray", "Stork", "Swan", "Tiger", "Toad", "Turkey", "Turtle", "Vulture", "Wallaby", "Walrus", "Wasp", "Weasel", "Whale", "Wolf", "Wombat", "Woodpecker", "Worm", "Zebra", 'Kitten', 'Puppy', 'Monster', 'T-rex'],
    
  second: ["Aircraft Carrier", "Airplane", "Ambulance", "Bicycle", "Bike", "Blimp", "Boat", "Bridge", "Broomstick", "Dune Buggy", "Bulldozer", "Bus", "Cab", "Camper", "Canoe", "Car", "Caravan", "Cart", "Chairlift", "Chariot", "Chopper", "Coach", "Convertible", "Crane", "Dinghy", "Dirt Bike", "Dump Truck", "Electric Car", "Elevator", "Ferry", "Fire Engine", "Fishing Boat", "Flying Saucer", "Forklift", "Pirate Ship", "Garbage Truck", "Glider", "Go Cart", "Golf Cart", "Gondola", "Hay Wagon", "Hearse", "Helicopter", "Hopping", "Hot Air Balloon", "Hot Rod", "Hovercraft", "Inflatable Boat", "Inner Tube", "Jeep", "Jet", "Jetpack", "Jet Ski", "Jump", "Kayak", "Limo", "Locomotive", "Lorry", "Magic Carpet", "Minibus", "Moped", "Motor Cycle", "Motor Home", "Motorboat", "Mountain Bike", "Paddle Boat", "Parachute", "Pickup Truck", "Plane", "Pogo Stick", "Pole Vault", "Police Car", "Pram", "Quad Bike", "Racecar", "Raft", "Railway", "Lawn Mower", "Rickshaw", "Rocket", "Roller Blades", "Rowboat", "Running", "Sailboat", "School Bus", "Scooter", "Scuba Gear", "Semi Truck", "Ship", 'Sports Car', "Skate Board", "Ice Skates", "Skipping Rope", "Sled", "Spaceship", "Space Shuttle", "Speedboat", "Steamboat", "Stroller", "Submarine", "Surfboard", "Swimming", "Taxi", "Tow Truck", "Tractor", "Trail Bike", "Train", "Tram", "Transit", "Tricycle", "Trolley", "Truck", "Tugboat", "Unicycle", "Van", "Vehicle", "Wagon", "Walking", "Water Ski", "Wheelbarrow", "Wheelchair", "Yacht", 'Digger', 'Volcano', 'Island', 'House'],
    
  third: ['Hat', 'Axe', 'Shoe', 'Mug', 'Pencil', 'Drink', 'Coffee', 'Melon', 'Phone', 'Computer', 'Burger', 'Pizza', 'Hotdog', 'Bow', 'Bag', 'Backpack', 'Flip-Flops', 'Laptop', 'Flask', 'Fries', 'Book', 'Hammer', 'Cookie', 'Rocket', 'Avocado', 'Fruit', 'Banana', 'Strawberry', 'Shovel', 'Fork', 'Apple', 'Coconut', 'Tea', "Brocolli", "Checkbook", "Flower(s)", "Magnet", "Boom Box", "Radio", "Tomato", "Cell Phone", "Food", "Key Chain", "Tooth Pick", "Toothpaste", "Desk", "Hair Brush", "Pillow", "Lip Gloss", "Video Game", "Doll", "Speakers", "Perfume", "Lotion", "Milk", "Bottle Cap", "Mp3 Player", "CD Player",'Headphones', "Door", "Stockings", "Credit Card", "Needle & Thread", "Washing Machine", "Glass", "Nail Clippers", "Controller", "Glasses", "Rug", "Playing Card(s)", "Phone", "Box", "Bowl", "Bag", "Bottle", "Sponge", "Spoon", "Lamp Shade", "Towel", "Slippers", "Newspaper", "Pencil", "Water Bottle", "Sofa", "Clock", "Television", "Wallet", "Clothes", "Toothbrush", "Fridge", "Watch", "Chocolate", "Shoes", "Purse", "Soda Can", "Nail File", "Candle", "Tire Swing", "Keys", "Puddle", "Sketch Pad", "Tree", "Dance Floor", "Soap", "Tennis Racket"],
};
var defaultGroup = 'first';

window.document.addEventListener("DOMContentLoaded", function(event) { 

    var cards = window.document.getElementsByClassName("card");

Array.from(window.document.getElementsByClassName("card")).forEach(function(card) {
  card.onclick = function(e) {
    // Get the card element
    var cardDiv = e.target.closest('.card');
    // Get the label element;
    var labelId = cardDiv.getAttribute('data-label');
    var labelSpan = window.document.getElementById(labelId);
    if(cardDiv.classList.contains('flipped')) {
      // Turn the card word-side down
      cardDiv.classList.remove('flipped');
      // Empty the label
      labelSpan.innerHTML = "";
    } else {
      // Flip the card word-side up
      cardDiv.classList.add('flipped');
      // Find the associated group of words
      var group = cardDiv.getAttribute('data-group') || defaultGroup;
      // Pick a random word
      var newWord = groups[group][Math.floor(Math.random() * groups[group].length)];
      // Update the word on the card
      cardDiv.querySelector('.back').innerHTML = newWord;
      // Update the word in the label
      labelSpan.innerHTML = newWord;
    }
  
  };
});
});