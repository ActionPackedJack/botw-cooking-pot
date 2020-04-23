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
        name: "Ancient Core",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ancient Gear",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ancient Screw",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ancient Shaft",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ancient Spring",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Apple",
        type: "food",
        heartRestoration: 1,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Armoranth",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 1
    },
    {
        name: "Armored Carp",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 2
    },
    {
        name: "Armored Porgy",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 3
    },
    {
        name: "Big Hearty Radish",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 5
    },
    {
        name: "Big Hearty Truffle",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 4
    },
    {
        name: "Bird Egg",
        type: "food",
        heartRestoration: 2,
        timeAdded: 90,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bladed Rhino Beetle",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 1
    },
    {
        name: "Blue Nightshade",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: stealthUp,
        effectStrength: 1
    },
    {
        name: "Bokoblin Fang",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bokoblin Guts",
        type: "monsterPart",
        heartRestoration: 190,
        timeAdded: null,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bokoblin Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Bright-Eyed Crab",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: rejeuvenating,
        effectStrength: 2.8
    },
    {
        name: "Cane Sugar",
        type: "food",
        heartRestoration: 0,
        timeAdded: 80,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Chickaloo Tree Nut",
        type: "food",
        heartRestoration: 1,
        timeAdded: 40,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Chillfin Trout",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: heatResistance,
        effectStrength: 3
    },
    {
        name: "Chillshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: heatResistance,
        effectStrength: 2
    },
    {
        name: "Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Cold Darner",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: heatResistance,
        effectStrength: 2
    },
    {
        name: "Cool Safflina",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: heatResistance,
        effectStrength: 1
    },
    {
        name: "Courser Bee Honey",
        type: "food",
        heartRestoration: 4,
        timeAdded: null,
        effectType: rejeuvenating,
        effectStrength: 2.8
    },
    {
        name: "Dinraal's Claw",
        type: "dragon",
        heartRestoration: 2,
        timeAdded: 210,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Dinraal's Scale",
        type: "dragon",
        heartRestoration: 1.25,
        timeAdded: 90,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Electric Darner",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: shockResistance,
        effectStrength: 2
    },
    {
        name: "Electric Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Electric Safflina",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: shockResistance,
        effectStrength: 1
    },
    {
        name: "Endura Carrot",
        type: "food",
        heartRestoration: 4,
        timeAdded: 50,
        effectType: staminaUp,
        effectStrength: 2
    },
    {
        name: "Endura Shroom",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: staminaUp,
        effectStrength: 0.5
    },
    {
        name: "Energetic Rhino Beetle",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: rejeuvenating,
        effectStrength: 8.4
    },
    {
        name: "Fairy",
        type: "food",
        heartRestoration: 10,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Farosh's Claw",
        type: "dragon",
        heartRestoration: 2,
        timeAdded: 210,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Farosh's Scale",
        type: "dragon",
        heartRestoration: 1.25,
        timeAdded: 90,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fire Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Fireproof Lizard",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: flameGuard,
        effectStrength: 1
    },
    {
        name: "Fleet-Lotus Seeds",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: speedUp,
        effectStrength: 2
    },
    {
        name: "Fortified Pumpkin",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 2
    },
    {
        name: "Fresh Milk",
        type: "food",
        heartRestoration: 1,
        timeAdded: 80,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Giant Ancient Core",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Goat Butter",
        type: "food",
        heartRestoration: 0,
        timeAdded: 80,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Goron Spice",
        type: "food",
        heartRestoration: 0,
        timeAdded: 90,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hearty Bass",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 2
    },
    {
        name: "Hearty Blueshell Snail",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 3
    },
    {
        name: "Hearty Durian",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 4
    },
    {
        name: "Hearty Lizard",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 4
    },
    {
        name: "Hearty Radish",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 3
    },
    {
        name: "Hearty Salmon",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 4
    },
    {
        name: "Hearty Truffle",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: healthUp,
        effectStrength: 1
    },
    {
        name: "Hightail Lizard",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: speedUp,
        effectStrength: 1
    },
    {
        name: "Hinox Guts",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hinox Toenail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hinox Tooth",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hot-footed Frog",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: speedUp,
        effectStrength: 2
    },
    {
        name: "Hydromelon",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: heatResistance,
        effectStrength: 1
    },
    {
        name: "Hylian Rice",
        type: "food",
        heartRestoration: 2,
        timeAdded: 60,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hylian Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hyrule Bass",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Hyrule Herb",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ice Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Icy Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Ironshell Crab",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 2
    },
    {
        name: "Ironshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 2
    },
    {
        name: "Keese Eyeball",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Keese Wing",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lizalfos Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lizalfos Talon",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lynel Guts",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lynel Hoof",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Lynel Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Mighty Bananas",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 2
    },
    {
        name: "Mighty Carp",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 2
    },
    {
        name: "Mighty Porgy",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 3
    },
    {
        name: "Mighty Thistle",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 1
    },
    {
        name: "Moblin Fang",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Moblin Guts",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Moblin Horn",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Molduga Fin",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Molduga Guts",
        type: "monsterPart",
        heartRestoration: 1,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Monster Extract",
        type: "monsterExtract",
        heartRestoration: 0,
        timeAdded: null,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Naydra's Claw",
        type: "dragon",
        heartRestoration: 2,
        timeAdded: 210,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Naydra's Scale",
        type: "dragon",
        heartRestoration: 1.25,
        timeAdded: 90,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Octo Balloon",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 70,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Octorok Eyeball",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Octorok Tentacle",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Palm Fruit",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Bird Drumstick",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Bird Thigh",
        type: "food",
        heartRestoration: 3,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Gourmet Meat",
        type: "food",
        heartRestoration: 6,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Meat",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Prime Meat",
        type: "food",
        heartRestoration: 3,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Raw Whole Bird",
        type: "food",
        heartRestoration: 6,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Razorclaw Crab",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 2
    },
    {
        name: "Razorshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: attackUp,
        effectStrength: 2
    },
    {
        name: "Red Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Red Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Restless Cricket",
        type: "critter",
        heartRestoration: 0,
        timeAdded: 50,
        effectType: rejeuvenating,
        effectStrength: 1.4
    },
    {
        name: "Rock Salt",
        type: "food",
        heartRestoration: 0,
        timeAdded: 60,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Rugged Rhino Beetle",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: defenseUp,
        effectStrength: 1
    },
    {
        name: "Rushroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: speedUp,
        effectStrength: 1
    },
    {
        name: "Sanke Carp",
        type: "food",
        heartRestoration: 2,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Dinraal's Fang",
        type: "dragon",
        heartRestoration: 2.5,
        timeAdded: 630,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Dinraal's Horn",
        type: "dragon",
        heartRestoration: 3.25,
        timeAdded: 1800,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Farosh's Fang",
        type: "dragon",
        heartRestoration: 2.5,
        timeAdded: 630,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Farosh's Horn",
        type: "dragon",
        heartRestoration: 3.25,
        timeAdded: 1800,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Naydra's Fang",
        type: "dragon",
        heartRestoration: 2.5,
        timeAdded: 630,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Shard of Naydra's Horn",
        type: "dragon",
        heartRestoration: 3.25,
        timeAdded: 1800,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Silent Princess",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: stealthUp,
        effectStrength: 3
    },
    {
        name: "Silent Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: stealthUp,
        effectStrength: 2
    },
    {
        name: "Sizzlefin Trout",
        type: "food",
        heartRestoration: 2,
        timeAdded: 50,
        effectType: coldResistance,
        effectStrength: 3
    },
    {
        name: "Smotherwing Butterfly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: flameGuard,
        effectStrength: 2
    },
    {
        name: "Sneaky River Snail",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: stealthUp,
        effectStrength: 1
    },
    {
        name: "Spicy Pepper",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: coldResistance,
        effectStrength: 1
    },
    {
        name: "Stamella Shroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: rejeuvenating,
        effectStrength: 1.4
    },
    {
        name: "Staminoka Bass",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: rejeuvenating,
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
        effectType: stealthUp,
        effectStrength: 2
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
        heartRestoration: 0,
        timeAdded: null,
        effectType: stealthUp,
        effectStrength: 1
    },
    {
        name: "Sunshroom",
        type: "food",
        heartRestoration: 2,
        timeAdded: null,
        effectType: coldResistance,
        effectStrength: 2
    },
    {
        name: "Swift Carrot",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: speedUp,
        effectStrength: 1
    },
    {
        name: "Swift Violet",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: speedUp,
        effectStrength: 2
    },
    {
        name: "Tabantha Wheat",
        type: "food",
        heartRestoration: 2,
        timeAdded: 60,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Thunderwing Butterfly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: shockResistance,
        effectStrength: 1
    },
    {
        name: "Tireless Frog",
        type: "critter",
        heartRestoration: 4,
        timeAdded: 50,
        effectType: staminaUp,
        effectStrength: 1
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
        timeAdded: null,
        effectType: shockResistance,
        effectStrength: 1
    },
    {
        name: "Warm Darner",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: coldResistance,
        effectStrength: 2
    },
    {
        name: "Warm Safflina",
        type: "food",
        heartRestoration: 0,
        timeAdded: null,
        effectType: coldResistance,
        effectStrength: 1
    },
    {
        name: "White Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Wildberry",
        type: "food",
        heartRestoration: 1,
        timeAdded: 30,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Winterwing Butterfly",
        type: "critter",
        heartRestoration: 0,
        timeAdded: null,
        effectType: heatResistance,
        effectStrength: 1
    },
    {
        name: "Yellow Chuchu Jelly",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 110,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Yellow Lizalfos Tail",
        type: "monsterPart",
        heartRestoration: 0,
        timeAdded: 190,
        effectType: null,
        effectStrength: null
    },
    {
        name: "Zapshroom",
        type: "food",
        heartRestoration: 1,
        timeAdded: null,
        effectType: shockResistance,
        effectStrength: 2
    },
];

