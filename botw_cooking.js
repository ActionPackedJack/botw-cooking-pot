let effects = {
    heatResistance: {
        name: "heat resistance",
        t2Min: 6,
        t3Min: 1000,
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
        timeAdded: 7
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
        name: "bonus temporary hearts and full health recovery",
    },
    staminaUp: {
        name: "bonus stamina wheels and full stamina recovery",
    },
    rejeuvenating: {
        name: "wheels of stamina recovery"
    }
};

let ingredients = [
    {
        name: "Acorn",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Apple",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Armoranth",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Armored Carp",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Armored Porgy",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Big Hearty Radish",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Big Hearty Truffle",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bird Egg",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bladed Rhino Beetle",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Blue Nightshade",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bokoblin Fang",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bokoblin Guts",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bokoblin Horn",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bright-Eyed Crab",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Cane Sugar",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Chickaloo Tree Nut",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Chillfin Trout",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Chillshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Cold Darner",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Cool Safflina",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Courser Bee Honey",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Dinraal's Claw",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Dinraal's Scale",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Electric Darner",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Electric Keese Wing",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Electric Safflina",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Endura Carrot",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Endura Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Energetic Rhino Beetle",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fairy",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Farosh's Claw",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Farosh's Scale",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fire Keese Wing",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fireproof Lizard",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fleet-Lotus Seeds",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fortified Pumpkin",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fresh Milk",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Goat Butter",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Goron Spice",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Bass",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Blueshell Snail",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Durian",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Lizard",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Radish",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Salmon",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Truffle",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hightail Lizard",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hinox Guts",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hinox Toenail",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hinox Tooth",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hot-footed Frog",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hydromelon",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hylian Rice",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hylian Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hyrule Bass",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hyrule Herb",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ice Keese Wing",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Icy Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ironshell Crab",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ironshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Keese Eyeball",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Keese Wing",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lizalfos Horn",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lynel Guts",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lynel Hoof",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lynel Horn",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Mighty Bananas",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Mighty Carp",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Mighty Porgy",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Mighty Thistle",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Moblin Fang",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Moblin Guts",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Moblin Horn",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Molduga Fin",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Molduga Guts",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Monster Extract",
        type: "monsterExtract",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Naydra's Claw",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Naydra's Scale",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Octo Balloon",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Octorok Eyeball",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Octorok Tentacle",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Palm Fruit",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Bird Drumstick",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Bird Thigh",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Gourmet Meat",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Meat",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Prime Meat",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Whole Bird",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Razorclaw Crab",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Razorshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Red Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Red Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Restless Cricket",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Rock Salt",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Rugged Rhino Beetle",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Rushroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Sanke Carp",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Dinraal's Fang",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Dinraal's Horn",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Farosh's Fang",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Farosh's Horn",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Naydra's Fang",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Naydra's Horn",
        type: "dragon",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Silent Princess",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Silent Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Sizzlefin Trout",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Smotherwing Butterfly",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Sneaky River Snail",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Spicy Pepper",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Stamella Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Staminoka Bass",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Star Fragment",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Stealthfin Trout",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Summerwing Butterfly",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Sunset Firefly",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Sunshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Swift Carrot",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Swift Violet",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Tabantha Wheat",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Thunderwing Butterfly",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Tireless Frog",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Voltfin Trout",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Voltfruit",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Warm Darner",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Warm Safflina",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "White Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Wildberry",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Winterwing Butterfly",
        type: "critter",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Yellow Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Yellow Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Zapshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Acorn",
        type: "food",
        heartRestoration: 1,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
]