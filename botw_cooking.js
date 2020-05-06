//These connect our functions to html elements.
const selectors = document.getElementsByClassName("ingredientSelector");
const cookButton = document.getElementById("cookButton");
const copyButton = document.getElementById("copyButton");
const resultError = document.getElementById("resultError");
const resultHearts = document.getElementById("resultHearts");
const resultEffect = document.getElementById("resultEffect");
//This tracks the most recent ingredient selected with ingredient selectors.
let lastSelection = null;
//Below is a database of the various effects a recipe can imbue.
let effects = {
    heatResistance: {
        //This is what it will be called in the html output.
        name: "heat resistance",
        //This is the strength needed to produce a mid-level effect.  Any effect where this is set to null only has one level of strength.
        t2Min: 6,
        //This is the strength needed to produce a high-level effect.  Any effect where this is set to 1000 only has two levels of strength.
        t3Min: 1000,
        //This is how much time is added to the effect per effect-specific ingredient included.
        timeAdded: 150
    },
    coldResistance: {
        name: "cold resistance",
        t2Min: 6,
        t3Min: 1000,
        timeAdded: 150
    },
    shockResistance: {
        name: "shock resistance",
        t2Min: 4,
        t3Min: 6,
        timeAdded: 150
    },
    speedUp: {
        name: "movement speed boost",
        t2Min: 5,
        t3Min: 7,
        timeAdded: 60
    },
    attackUp: {
        name: "attack boost",
        t2Min: 5,
        t3Min: 7,
        timeAdded: 50
    },
    defenseUp: {
        name: "defense boost",
        t2Min: 5,
        t3Min: 7,
        timeAdded: 50
    },
    stealthUp: {
        name: "stealth boost",
        t2Min: 6,
        t3Min: 9,
        timeAdded: 120
    },
    flameGuard: {
        name: "flame guard",
        t2Min: 7,
        t3Min: 1000,
        timeAdded: 150
    },
    healthUp: {
        name: "bonus temporary hearts.",
        t2Min: null
    },
    staminaUp: {
        name: "bonus stamina wheels and full stamina recovery",
        t2Min: null
    },
    rejeuvenating: {
        name: "wheels of stamina recovery",
        t2Min: null
    }
};
//The next 1100 lines or so establishes the properties of all our ingredients.
let ingredients = [
    {
        //The name as it appears in the selectors.
        name: "Acorn",
        //Fairly self-explanatory.
        type: "food",
        //How many hearts it adds to a cooked dish.
        heartRestoration: 1,
        //How much time it adds to a dish with a timed effect.  Set to null if it is aligned with an effect.
        timeAdded: 50,
        //The type of effect with which it is aligned.
        effectType: null,
        //How much it adds to the strength of the effect.
        effectStrength: 0
    },
    {
        name: "Ancient Core",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Ancient Gear",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Ancient Screw",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Ancient Shaft",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Ancient Spring",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Apple",
        type: "food",
        heartRestoration: 1,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Armoranth",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 1
    },
    {
        name: "Armored Carp",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 2
    },
    {
        name: "Armored Porgy",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 3
    },
    {
        name: "Big Hearty Radish",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 5
    },
    {
        name: "Big Hearty Truffle",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 4
    },
    {
        name: "Bird Egg",
        type: "food",
        heartRestoration: 2,
        timeAdded: 90,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Bladed Rhino Beetle",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 1
    },
    {
        name: "Blue Nightshade",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "stealthUp",
        effectStrength: 1
    },
    {
        name: "Bokoblin Fang",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Bokoblin Guts",
        type: "monsterPart",
        heartRestoration: 190,
        timeAdded: null,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Bokoblin Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Bright-Eyed Crab",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "rejeuvenating",
        effectStrength: 2.8
    },
    {
        name: "Cane Sugar",
        type: "food",
        heartRestoration: 0,
        timeAdded: 80,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Chickaloo Tree Nut",
        type: "food",
        heartRestoration: 1,
        timeAdded: 40,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Chillfin Trout",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "heatResistance",
        effectStrength: 3
    },
    {
        name: "Chillshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "heatResistance",
        effectStrength: 2
    },
    {
        name: "Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Cold Darner",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "heatResistance",
        effectStrength: 2
    },
    {
        name: "Cool Safflina",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "heatResistance",
        effectStrength: 1
    },
    {
        name: "Courser Bee Honey",
        type: "food",
        heartRestoration: 4,
        timeAdded: null,
        effectType: "rejeuvenating",
        effectStrength: 2.8
    },
    {
        name: "Dinraal's Claw",
        type: "dragon",
        heartRestoration: 2,
        timeAdded: 210,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Dinraal's Scale",
        type: "dragon",
        heartRestoration: 1.25,
        timeAdded: 90,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Electric Darner",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "shockResistance",
        effectStrength: 2
    },
    {
        name: "Electric Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Electric Safflina",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "shockResistance",
        effectStrength: 1
    },
    {
        name: "Endura Carrot",
        type: "food",
        heartRestoration: 4,
        timeAdded: 50,
        effectType: "staminaUp",
        effectStrength: 2
    },
    {
        name: "Endura Shroom",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "staminaUp",
        effectStrength: 0.5
    },
    {
        name: "Energetic Rhino Beetle",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "rejeuvenating",
        effectStrength: 8.4
    },
    {
        name: "Fairy",
        type: "food",
        heartRestoration: 10,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Farosh's Claw",
        type: "dragon",
        heartRestoration: 2,
        timeAdded: 210,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Farosh's Scale",
        type: "dragon",
        heartRestoration: 1.25,
        timeAdded: 90,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Fire Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Fireproof Lizard",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "flameGuard",
        effectStrength: 1
    },
    {
        name: "Fleet-Lotus Seeds",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "speedUp",
        effectStrength: 2
    },
    {
        name: "Fortified Pumpkin",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 2
    },
    {
        name: "Fresh Milk",
        type: "food",
        heartRestoration: 1,
        timeAdded: 80,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Giant Ancient Core",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Goat Butter",
        type: "food",
        heartRestoration: 0,
        timeAdded: 80,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Goron Spice",
        type: "food",
        heartRestoration: 0,
        timeAdded: 90,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hearty Bass",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 2
    },
    {
        name: "Hearty Blueshell Snail",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 3
    },
    {
        name: "Hearty Durian",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 4
    },
    {
        name: "Hearty Lizard",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 4
    },
    {
        name: "Hearty Radish",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 3
    },
    {
        name: "Hearty Salmon",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 4
    },
    {
        name: "Hearty Truffle",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "healthUp",
        effectStrength: 1
    },
    {
        name: "Hightail Lizard",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "speedUp",
        effectStrength: 1
    },
    {
        name: "Hinox Guts",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hinox Toenail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hinox Tooth",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hot-footed Frog",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "speedUp",
        effectStrength: 2
    },
    {
        name: "Hydromelon",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "heatResistance",
        effectStrength: 1
    },
    {
        name: "Hylian Rice",
        type: "food",
        heartRestoration: 2,
        timeAdded: 60,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hylian Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hyrule Bass",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Hyrule Herb",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Ice Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Icy Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Ironshell Crab",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 2
    },
    {
        name: "Ironshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 2
    },
    {
        name: "Keese Eyeball",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Lizalfos Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Lizalfos Talon",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Lynel Guts",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Lynel Hoof",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Lynel Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Mighty Bananas",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 2
    },
    {
        name: "Mighty Carp",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 2
    },
    {
        name: "Mighty Porgy",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 3
    },
    {
        name: "Mighty Thistle",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 1
    },
    {
        name: "Moblin Fang",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Moblin Guts",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Moblin Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Molduga Fin",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Molduga Guts",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Monster Extract",
        type: "monsterExtract",
        heartRestoration: 0,
        timeAdded: null,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Naydra's Claw",
        type: "dragon",
        heartRestoration: 2,
        timeAdded: 210,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Naydra's Scale",
        type: "dragon",
        heartRestoration: 1.25,
        timeAdded: 90,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Octo Balloon",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Octorok Eyeball",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Octorok Tentacle",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Palm Fruit",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Raw Bird Drumstick",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Raw Bird Thigh",
        type: "food",
        heartRestoration: 3,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Raw Gourmet Meat",
        type: "food",
        heartRestoration: 6,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Raw Meat",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Raw Prime Meat",
        type: "food",
        heartRestoration: 3,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Raw Whole Bird",
        type: "food",
        heartRestoration: 6,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Razorclaw Crab",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 2
    },
    {
        name: "Razorshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "attackUp",
        effectStrength: 2
    },
    {
        name: "Red Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Red Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Restless Cricket",
        type: "critter",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: "rejeuvenating",
        effectStrength: 1.4
    },
    {
        name: "Rock Salt",
        type: "food",
        heartRestoration: 0,
        timeAdded: 60,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Rugged Rhino Beetle",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "defenseUp",
        effectStrength: 1
    },
    {
        name: "Rushroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "speedUp",
        effectStrength: 1
    },
    {
        name: "Sanke Carp",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Shard of Dinraal's Fang",
        type: "dragon",
        heartRestoration: 2.5,
        timeAdded: 630,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Shard of Dinraal's Horn",
        type: "dragon",
        heartRestoration: 3.25,
        timeAdded: 1800,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Shard of Farosh's Fang",
        type: "dragon",
        heartRestoration: 2.5,
        timeAdded: 630,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Shard of Farosh's Horn",
        type: "dragon",
        heartRestoration: 3.25,
        timeAdded: 1800,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Shard of Naydra's Fang",
        type: "dragon",
        heartRestoration: 2.5,
        timeAdded: 630,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Shard of Naydra's Horn",
        type: "dragon",
        heartRestoration: 3.25,
        timeAdded: 1800,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Silent Princess",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "stealthUp",
        effectStrength: 3
    },
    {
        name: "Silent Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "stealthUp",
        effectStrength: 2
    },
    {
        name: "Sizzlefin Trout",
        type: "food",
        heartRestoration: 2,
        timeAdded: 50,
        effectType: "coldResistance",
        effectStrength: 3
    },
    {
        name: "Smotherwing Butterfly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "flameGuard",
        effectStrength: 2
    },
    {
        name: "Sneaky River Snail",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "stealthUp",
        effectStrength: 1
    },
    {
        name: "Spicy Pepper",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "coldResistance",
        effectStrength: 1
    },
    {
        name: "Stamella Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "rejeuvenating",
        effectStrength: 1.4
    },
    {
        name: "Staminoka Bass",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "rejeuvenating",
        effectStrength: 5.6
    },
    {
        name: "Star Fragment",
        type: "food",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: null,
        effectStrength: 20
    },
    {
        name: "Stealthfin Trout",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "stealthUp",
        effectStrength: 2
    },
    {
        name: "Summerwing Butterfly",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: "coldResistance",
        effectStrength: 1
    },
    {
        name: "Sunset Firefly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "stealthUp",
        effectStrength: 1
    },
    {
        name: "Sunshroom",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: "coldResistance",
        effectStrength: 2
    },
    {
        name: "Swift Carrot",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "speedUp",
        effectStrength: 1
    },
    {
        name: "Swift Violet",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "speedUp",
        effectStrength: 2
    },
    {
        name: "Tabantha Wheat",
        type: "food",
        heartRestoration: 2,
        timeAdded: 60,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Thunderwing Butterfly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "shockResistance",
        effectStrength: 1
    },
    {
        name: "Tireless Frog",
        type: "critter",
        heartRestoration: 4,
        timeAdded: 50,
        effectType: "staminaUp",
        effectStrength: 1
    },
    {
        name: "Voltfin Trout",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Voltfruit",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "shockResistance",
        effectStrength: 1
    },
    {
        name: "Warm Darner",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "coldResistance",
        effectStrength: 2
    },
    {
        name: "Warm Safflina",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "coldResistance",
        effectStrength: 1
    },
    {
        name: "White Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Wildberry",
        type: "food",
        heartRestoration: 1,
        timeAdded: 30,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Winterwing Butterfly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: "heatResistance",
        effectStrength: 1
    },
    {
        name: "Yellow Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Yellow Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: 0
    },
    {
        name: "Zapshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: "shockResistance",
        effectStrength: 2
    },
];
//selectorOptions will become a list of all our ingredients.  First we manually populate it with a nothing option.
let selectorOptions = "<option value = 'Nothing'>Nothing</option>";
//Then we iterate through our ingredients and add them to the options.
 for (let i = 0; i < ingredients.length; i++){
    let pushedIngredient = ingredients[i];
    //But first we check to see if there is an apostrophe in the name of the ingredient, because that will create errors due to terminating a string early.
    let apostrophe = ingredients[i].name.indexOf("'");
    //If we find one, we replace it with a unicode character.
    if(apostrophe !==-1){
        pushedIngredient.name = ingredients[i].name.slice(0, apostrophe) + "\u2019" + ingredients[i].name.slice(apostrophe + 1, ingredients[i].name.length);
    }
    selectorOptions += ("<option value = '" + JSON.stringify(pushedIngredient) + "'>" + pushedIngredient.name + "</option>");
 }
 //Then we add our selector options to each selector.
Array.prototype.forEach.call(selectors,function(selector){
    selector.innerHTML = selectorOptions;
    //This tells our last-ingredient-selected variable to update whenever we select something.
    selector.addEventListener('change', (event) => {
        lastSelection = event.target.value;
    })
});
//This populates our unassigned selectors with the last selected ingredient.
function copy(){
    if(lastSelection !== null){
        Array.prototype.forEach.call(selectors, function(selector){
            if(selector.value === 'Nothing'){
                selector.value = lastSelection;
            }
        })
    }
}
//And this assigns the above function to a button.
copyButton.addEventListener("click", function(){
    copy();
})
//Main cook function.
function cook(ingredients){
    //This terminates the function early if no ingredients were selected.
    if(ingredients.length === 0){
        resultHearts.innerText = "";
        resultEffect.innerText = "";
        resultError.innerText = "Select some ingredients to get started.";
        return;
    }
    //This sets up the stats of the resulting dish.
    let dish = {
        //How many hearts will be restored.
        heartRestoration : 0,
        //The effect time.
        effectSeconds : 0,
        //In order to display the time properly, how many minutes the effect will last.
        effectMinutes: 0, 
        //The effect type.
        effectType : null,
        //Boolean to negate all effects if conflicting ingredients are added.
        noEffect: false,
        //Strength of the effect.
        effectStrength : 0,
        //Descriptor of the effect strength for output sake.
        effectString: null,
        //This adds an extra zero to the seconds display if the meal has 0 seconds. 
        extraZero: "",
        //You can figure this one out.
        hasMonsterExtract : false,
    };
    //This terminates the function early if the recipe is invalid.
    if(dubiousCheck(ingredients) === true){
        resultHearts.innerText = "";
        resultEffect.innerText = "";
        resultError.innerText = "Result: Dubious Food";
        return;
    }
    //If the recipe is valid, we iterate through the ingredients.
    for(let i = 0; i < ingredients.length; i++){
        //This adds the heart value of the ingredient to the heart value of the dish.
        dish.heartRestoration += ingredients[i].heartRestoration;
        if(ingredients[i].type === "monsterExtract"){
            dish.hasMonsterExtract = true;
        }
        else if(ingredients[i].effectType !== null && dish.noEffect !== true){
            //If this ingredient is associated with an effect different from what the dish already has, we set the boolean to ignore all effects in the final result.
            if(dish.effectType !== null && ingredients[i].effectType !== dish.effectType){
                dish.noEffect = true;
            }
            //This adds the effect type, time and strength of the ingredient.
            dish.effectType = ingredients[i].effectType;
            dish.effectSeconds += effects[ingredients[i].effectType].timeAdded;
            dish.effectStrength += ingredients[i].effectStrength;
        }
        //For generic non-effect-aligned food, if multiples of the same ingredient are added, each one after the first only adds 30 seconds.
        else if (ingredients[i].type === "food" && ingredients[i].effectType === null){
            if(ingredients.indexOf(ingredients[i] === i)){
                dish.effectSeconds += ingredients[i].timeAdded;
            }
            else{
                dish.effectSeconds += 30;
            }
        }
        else{
            dish.effectStrength+= ingredients[i].effectStrength;
            dish.effectSeconds += ingredients[i].timeAdded;
        }
    }
    //Dishes that restore or add maximum stamina deal with fifths of a wheel, so the strength is divided by five.
    if(dish.effectType !== null && dish.noEffect !== true){
        if(effects[dish.effectType].name.indexOf("wheels") !== -1){
            dish.effectStrength /= 5;
        }
        //This compares the strength of the effect to the threshold for strength levels and assigns an appropriate strength descriptor to the final report.
        if(effects[dish.effectType].t2Min !==null){
            if(effects[dish.effectType].t3Min === 1000){
                if(dish.effectStrength >= effects[dish.effectType].t2Min){
                    dish.effectString = "full";
                }
                else{
                    dish.effectString = "partial";
                }
            }
            else{
                if(dish.effectStrength >= effects[dish.effectType].t3Min){
                    dish.effectString = "high-level";
                }
                else if (dish.effectStrength >= effects[dish.effectType].t2Min){
                    dish.effectString = "mid-level";
                }
                else{
                    dish.effectString = "low-level";
                }
            }
        }
    }
    //The maximum time an effect can last is 30 minutes.  This enforces that.
    if(dish.effectSeconds > 1800){
        dish.effectSeconds = 1800;
    }
    //This converts the time into a figure of minutes and seconds.
    while(dish.effectSeconds >= 60){
        dish.effectMinutes ++;
        dish.effectSeconds -=60;
    }
    //This prevents displays of "10:0" for dishes that last an even minute.
    if(dish.effectSeconds === 0){
        dish.extraZero += "0";
    }
    resultError.innerText = "";
    //This sets the output to display health restoration.
    resultHearts.innerText = "Hearts restored: " + dish.heartRestoration;
    //If monster extract was used, this reports all the random variations of the dish that could be made.
    if(dish.hasMonsterExtract === true){
        dish.heartRestoration = ((dish.heartRestoration/4) + ", " + dish.heartRestoration + ", or " + (dish.heartRestoration + 3));
        dish.effectSeconds = "1:00, 10:00 or 30:00";
        if(dish.effectType !== null && dish.noEffect === false){
            switch(dish.effectString){
                case "low-level":
                    dish.effectString = "(2/3 chance of low-level, 1/3 chance of mid-level)";
                    break;
                case "mid-level":
                    dish.effectString = "(equal chance of low/mid/high-level)";
                    break;
                case "high-level":
                    dish.effectString = "(2/3 chance of high-level, 1/3 chance of low-level)";
                    break;
                case "partial":
                    dish.effectString = "(2/3 chance of partial, 1/3 chance of full)";
                    break;
                case "full":
                    dish.effectString = ("2/3 chance of full, 1/3 chance of partial");
                    break;
            }
            resultEffect.innerText = "Effect: " + dish.effectSeconds + " of " + dish.effectString + " " + effects[dish.effectType].name;
        }
        resultHearts.innerText = "Hearts restored: " + dish.heartRestoration;
    }
    //This invalidates the dish's effect if conflicting ingredients were found.
    else if(dish.noEffect === true){
        resultEffect.innerText = "No effect. Conflicting ingredients used.";
    }
    //This clears the effect if the current dish does not have one, to keep from still displaying the previous dish's effect.
    else if(dish.effectType === null){
        resultEffect.innerText = "";
    }
    //This displays any timed effects.
    else if(dish.effectMinutes > 0 || dish.effectSeconds > 0){
        resultEffect.innerText = "Effect: " + dish.effectMinutes + ":" + dish.effectSeconds + dish.extraZero + " of " + dish.effectString + " " + effects[dish.effectType].name;
    }
    //And this displays health and stamina effects.
    else{
        if(dish.effectType === "healthUp"){
            resultHearts.innerText = "Full heart restoration.";
        }
        resultEffect.innerText = "Effect: " + (dish.effectStrength + " " + effects[dish.effectType].name);
    }
}

//This assigns the above function to a button.
cookButton.addEventListener("click", function(){
    let ingredients = [];
    Array.prototype.forEach.call(selectors,function(selector){
        if(selector.value !== 'Nothing'){
            ingredients.push(JSON.parse(selector.value));
        }
    });
    cook(ingredients);
});
//This checks whether an ingredient is valid.
function dubiousCheck(ingredients){
    //The below ingredients must be cooked with something not on this list or the recipe will fail.
    let seasonings = ["Rock Salt", "Monster Extract", "Cane Sugar", "Tabantha Wheat", "Hylian Rice", "Goron Spice", "Goat Butter"];
    let analysis = {
        //These two must either both be false or both be true.
        hasMonsterPart:false,
        hasCritter:false,
        //And this must be true.
        notJustSeasoning:false,
    };
    for(let i = 0; i < ingredients.length; i++){
        //This checks whether the ingredient is something other than the above list.
        if(analysis.notJustSeasoning === false){
            if(seasonings.indexOf(ingredients[i].name) === -1){
                analysis.notJustSeasoning = true;
            }
        }
        if(ingredients[i].type === "critter"){
            analysis.hasCritter = true;
        }
        if(ingredients[i].type === "monsterPart"){
            analysis.hasMonsterPart = true;
        }
    }
    //This checks whether any of our failure conditions are present.
    if(analysis.hasCritter === true && analysis.hasMonsterPart === false){
        return true;
    }
    if(analysis.hasMonsterPart === true && analysis.hasCritter === false){
        return true;
    }
    if(analysis.notJustSeasoning === false){
        return true;
    }
    //And if not, the cooking may continue.
    return false;
}