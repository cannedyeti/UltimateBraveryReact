var items = {
    "tree": [
        {
            "header": "START",
            "tags": [
                "LANE",
                "JUNGLE"
            ]
        },
        {
            "header": "TOOLS",
            "tags": [
                "GOLDPER",
                "CONSUMABLE",
                "VISION"
            ]
        },
        {
            "header": "DEFENSE",
            "tags": [
                "HEALTH",
                "HEALTHREGEN",
                "ARMOR",
                "SPELLBLOCK"
            ]
        },
        {
            "header": "ATTACK",
            "tags": [
                "LIFESTEAL",
                "CRITICALSTRIKE",
                "ATTACKSPEED",
                "DAMAGE"
            ]
        },
        {
            "header": "MAGIC",
            "tags": [
                "MANA",
                "SPELLDAMAGE",
                "COOLDOWNREDUCTION",
                "MANAREGEN"
            ]
        },
        {
            "header": "MOVEMENT",
            "tags": [
                "BOOTS",
                "NONBOOTSMOVEMENT"
            ]
        },
        {
            "header": "UNCATEGORIZED",
            "tags": [
                "ACTIVE",
                "SPELLVAMP",
                "MAGICPENETRATION",
                "ARMORPENETRATION",
                "AURA",
                "ONHIT",
                "TRINKET",
                "SLOW",
                "STEALTH",
                "TENACITY"
            ]
        }
    ],
    "version": "7.12.1",
    "data": {
        "1001": {
            "stats": {
                "FlatMovementSpeedMod": 25
            },
            "description": "<groupLimit>Limited to 1.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
            "gold": {
                "total": 300,
                "sell": 210,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Boots"
            ],
            "plaintext": "Slightly increases Movement Speed",
            "image": {
                "full": "1001.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "Limited to 1. UNIQUE Passive - Enhanced Movement: +25 Movement Speed",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3006",
                "3047",
                "3020",
                "3158",
                "3111",
                "3117",
                "3009"
            ],
            "id": 1001,
            "name": "Boots of Speed"
        },
        "1004": {
            "stats": {},
            "description": "<stats><mana>+25% Base Mana Regen </mana></stats>",
            "gold": {
                "total": 125,
                "sell": 88,
                "base": 125,
                "purchasable": true
            },
            "tags": [
                "ManaRegen"
            ],
            "plaintext": "Slightly increases Mana Regen",
            "image": {
                "full": "1004.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "sanitizedDescription": "+25% Base Mana Regen",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3028",
                "3070",
                "3073",
                "3114",
                "3098"
            ],
            "id": 1004,
            "name": "Faerie Charm"
        },
        "1006": {
            "stats": {},
            "description": "<stats>+50% Base Health Regen </stats>",
            "gold": {
                "total": 150,
                "sell": 105,
                "base": 150,
                "purchasable": true
            },
            "tags": [
                "HealthRegen"
            ],
            "plaintext": "Slightly increases Health Regen",
            "image": {
                "full": "1006.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "+50% Base Health Regen",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3077",
                "3097",
                "2053",
                "3801",
                "3096",
                "3194"
            ],
            "id": 1006,
            "name": "Rejuvenation Bead"
        },
        "1011": {
            "from": [
                "1028"
            ],
            "description": "<stats>+380 Health</stats>",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Health"
            ],
            "plaintext": "Greatly increases Health",
            "image": {
                "full": "1011.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "+380 Health",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3083",
                "3084",
                "3022",
                "3742"
            ],
            "stats": {
                "FlatHPPoolMod": 380
            },
            "id": 1011,
            "name": "Giant's Belt"
        },
        "1018": {
            "stats": {
                "FlatCritChanceMod": 0.2
            },
            "description": "<stats>+20% Critical Strike Chance</stats>",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike"
            ],
            "plaintext": "Increases critical strike chance",
            "image": {
                "full": "1018.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "sanitizedDescription": "+20% Critical Strike Chance",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3031",
                "3185",
                "3508"
            ],
            "id": 1018,
            "name": "Cloak of Agility"
        },
        "1026": {
            "stats": {
                "FlatMagicDamageMod": 40
            },
            "description": "<stats>+40 Ability Power</stats>",
            "gold": {
                "total": 850,
                "sell": 595,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Moderately increases Ability Power",
            "image": {
                "full": "1026.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "+40 Ability Power",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3089",
                "3135",
                "3124",
                "3029",
                "3151",
                "3027",
                "3100",
                "3102",
                "3116"
            ],
            "id": 1026,
            "name": "Blasting Wand"
        },
        "1027": {
            "stats": {
                "FlatMPPoolMod": 250
            },
            "description": "<stats><mana>+250 Mana</mana></stats>",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Mana"
            ],
            "plaintext": "Increases Mana",
            "image": {
                "full": "1027.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "+250 Mana",
            "colloq": "blue",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3057",
                "3070",
                "3010",
                "3024",
                "3073",
                "3802"
            ],
            "id": 1027,
            "name": "Sapphire Crystal"
        },
        "1028": {
            "stats": {
                "FlatHPPoolMod": 150
            },
            "description": "<stats>+150 Health</stats>",
            "gold": {
                "total": 400,
                "sell": 280,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Health"
            ],
            "plaintext": "Increases Health",
            "image": {
                "full": "1028.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "sanitizedDescription": "+150 Health",
            "colloq": "red",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "1011",
                "3211",
                "3136",
                "2045",
                "2049",
                "3010",
                "3801",
                "3044",
                "3052",
                "3067",
                "3116",
                "3143",
                "3748",
                "3751"
            ],
            "id": 1028,
            "name": "Ruby Crystal"
        },
        "1029": {
            "stats": {
                "FlatArmorMod": 15
            },
            "description": "<stats>+15 Armor</stats>",
            "gold": {
                "total": 300,
                "sell": 210,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Armor"
            ],
            "plaintext": "Slightly increases Armor",
            "image": {
                "full": "1029.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "sanitizedDescription": "+15 Armor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3047",
                "1031",
                "3191",
                "3024",
                "3082",
                "3075",
                "2053",
                "3105",
                "3026"
            ],
            "id": 1029,
            "name": "Cloth Armor"
        },
        "1031": {
            "from": [
                "1029"
            ],
            "description": "<stats>+40 Armor</stats>",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Armor"
            ],
            "plaintext": "Greatly increases Armor",
            "image": {
                "full": "1031.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "sanitizedDescription": "+40 Armor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3075",
                "3068",
                "3109",
                "3193",
                "3742"
            ],
            "stats": {
                "FlatArmorMod": 40
            },
            "id": 1031,
            "name": "Chain Vest"
        },
        "1033": {
            "stats": {
                "FlatSpellBlockMod": 25
            },
            "description": "<stats>+25 Magic Resist</stats>",
            "gold": {
                "total": 450,
                "sell": 315,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "SpellBlock"
            ],
            "plaintext": "Slightly increases Magic Resist",
            "image": {
                "full": "1033.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "sanitizedDescription": "+25 Magic Resist",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3111",
                "3211",
                "1057",
                "3028",
                "3140",
                "3155",
                "3105",
                "3102",
                "3814",
                "3190",
                "3194"
            ],
            "id": 1033,
            "name": "Null-Magic Mantle"
        },
        "1036": {
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "description": "<stats>+10 Attack Damage</stats>",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Lane"
            ],
            "plaintext": "Slightly increases Attack Damage",
            "image": {
                "full": "1036.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "+10 Attack Damage",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3134",
                "3077",
                "3123",
                "1053",
                "3133",
                "3034",
                "3035",
                "3044",
                "3052",
                "3053",
                "3072",
                "3122",
                "3144",
                "3155",
                "3252"
            ],
            "id": 1036,
            "name": "Long Sword"
        },
        "1037": {
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "description": "<stats>+25 Attack Damage</stats>",
            "gold": {
                "total": 875,
                "sell": 613,
                "base": 875,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Moderately increases Attack Damage",
            "image": {
                "full": "1037.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "+25 Attack Damage",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3124",
                "3004",
                "3008",
                "3031",
                "3074",
                "3814",
                "3812",
                "3139",
                "3181"
            ],
            "id": 1037,
            "name": "Pickaxe"
        },
        "1038": {
            "stats": {
                "FlatPhysicalDamageMod": 40
            },
            "description": "<stats>+40 Attack Damage</stats>",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 1300,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Greatly increases Attack Damage",
            "image": {
                "full": "1038.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "+40 Attack Damage",
            "colloq": "bf",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3026",
                "3031",
                "3072",
                "3147",
                "3508"
            ],
            "id": 1038,
            "name": "B. F. Sword"
        },
        "1039": {
            "stats": {},
            "description": "<stats><mana>+150% Base Mana Regen while in Jungle  </mana></stats><br><br><unique>UNIQUE Passive - Tooth:</unique> Damaging a monster with a spell or attack  steals 25 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Provides damage against Monsters and Mana Regen in the Jungle",
            "image": {
                "full": "1039.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "sanitizedDescription": "+150% Base Mana Regen while in Jungle UNIQUE Passive - Tooth: Damaging a monster with a spell or attack steals 25 Health over 5 seconds. Killing monsters grants special bonus experience.",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "25",
                "Effect2Amount": "0",
                "Effect6Amount": "1.5",
                "Effect4Amount": "5",
                "Effect7Amount": "15",
                "Effect5Amount": "0"
            },
            "colloq": "jungle;Jungle",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "into": [
                "3706",
                "3711",
                "3715"
            ],
            "id": 1039,
            "name": "Hunter's Talisman"
        },
        "1041": {
            "stats": {},
            "description": "<stats>+10% Life Steal vs. Monsters</stats><br><br><unique>UNIQUE Passive - Nail:</unique> Basic attacks deal 25 bonus damage on hit vs. Monsters. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Provides damage and life steal versus Monsters",
            "image": {
                "full": "1041.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "+10% Life Steal vs. Monsters UNIQUE Passive - Nail: Basic attacks deal 25 bonus damage on hit vs. Monsters. Killing monsters grants special bonus experience.",
            "effect": {
                "Effect3Amount": "0.1",
                "Effect1Amount": "12",
                "Effect2Amount": "25",
                "Effect6Amount": "0.1",
                "Effect4Amount": "2",
                "Effect7Amount": "15",
                "Effect5Amount": "0"
            },
            "colloq": "jungle;Jungle",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "into": [
                "3706",
                "3711",
                "3715"
            ],
            "id": 1041,
            "name": "Hunter's Machete"
        },
        "1042": {
            "stats": {
                "PercentAttackSpeedMod": 0.12
            },
            "description": "<stats>+12% Attack Speed</stats>",
            "gold": {
                "total": 300,
                "sell": 210,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed"
            ],
            "plaintext": "Slightly increases Attack Speed",
            "image": {
                "full": "1042.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "sanitizedDescription": "+12% Attack Speed",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "1043",
                "3091",
                "3006",
                "3085",
                "2015",
                "3046",
                "3086",
                "3101"
            ],
            "id": 1042,
            "name": "Dagger"
        },
        "1043": {
            "from": [
                "1042",
                "1042"
            ],
            "description": "<stats>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "plaintext": "Greatly increases Attack Speed",
            "image": {
                "full": "1043.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 336
            },
            "sanitizedDescription": "+25% Attack Speed UNIQUE Passive: Basic attacks deal an additional 15 physical damage on hit.",
            "effect": {
                "Effect1Amount": "15"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3091",
                "3153",
                "3124",
                "3675",
                "1416",
                "1418",
                "1419"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.25
            },
            "id": 1043,
            "name": "Recurve Bow"
        },
        "1051": {
            "stats": {
                "FlatCritChanceMod": 0.1
            },
            "description": "<stats>+10% Critical Strike Chance</stats>",
            "gold": {
                "total": 400,
                "sell": 280,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike"
            ],
            "plaintext": "Slightly increases Critical Strike Chance",
            "image": {
                "full": "1051.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 384
            },
            "sanitizedDescription": "+10% Critical Strike Chance",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3086",
                "3122"
            ],
            "id": 1051,
            "name": "Brawler's Gloves"
        },
        "1052": {
            "stats": {
                "FlatMagicDamageMod": 20
            },
            "description": "<stats>+20 Ability Power</stats>",
            "gold": {
                "total": 435,
                "sell": 305,
                "base": 435,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Slightly increases Ability Power",
            "image": {
                "full": "1052.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 432
            },
            "sanitizedDescription": "+20 Ability Power",
            "colloq": "amptome",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3108",
                "3191",
                "3136",
                "3135",
                "3145",
                "3113",
                "3090",
                "3116",
                "1402",
                "1410",
                "1414",
                "3089",
                "3165",
                "3673",
                "3802"
            ],
            "id": 1052,
            "name": "Amplifying Tome"
        },
        "1053": {
            "from": [
                "1036"
            ],
            "description": "<stats>+15 Attack Damage<br>+10% Life Steal</stats>",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "plaintext": "Basic attacks restore Health",
            "image": {
                "full": "1053.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 0
            },
            "sanitizedDescription": "+15 Attack Damage +10% Life Steal",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3072",
                "3074",
                "3812",
                "3139",
                "3144",
                "3181"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "PercentLifeStealMod": 0.1
            },
            "id": 1053,
            "name": "Vampiric Scepter"
        },
        "1054": {
            "stats": {
                "FlatHPPoolMod": 80,
                "FlatHPRegenMod": 1.2
            },
            "description": "<stats>+80 Health</stats><br><br><passive>Passive: </passive>Restores 6 Health every 5 seconds.<br><passive>Passive: </passive>Basic attacks deal an additional 5 physical damage to minions on hit.<br><unique>UNIQUE Passive:</unique> Regain an additional 20 health over 10 seconds after taking damage from an enemy champion.",
            "gold": {
                "total": 450,
                "sell": 180,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "plaintext": "Good defensive starting item",
            "image": {
                "full": "1054.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 48
            },
            "sanitizedDescription": "+80 Health Passive: Restores 6 Health every 5 seconds. Passive: Basic attacks deal an additional 5 physical damage to minions on hit. UNIQUE Passive: Regain an additional 20 health over 10 seconds after taking damage from an enemy champion.",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "10",
                "Effect3Amount": "5",
                "Effect4Amount": "2"
            },
            "colloq": "dshield",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1054,
            "name": "Doran's Shield"
        },
        "1055": {
            "stats": {
                "FlatPhysicalDamageMod": 8,
                "FlatHPPoolMod": 80,
                "PercentLifeStealMod": 0.03
            },
            "description": "<stats>+8 Attack Damage<br>+80 Health<br>+3% Life Steal</stats>",
            "gold": {
                "total": 450,
                "sell": 180,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Health",
                "Lane",
                "LifeSteal"
            ],
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "1055.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 96
            },
            "sanitizedDescription": "+8 Attack Damage +80 Health +3% Life Steal",
            "effect": {
                "Effect1Amount": "10"
            },
            "colloq": "dblade",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1055,
            "name": "Doran's Blade"
        },
        "1056": {
            "stats": {
                "FlatHPPoolMod": 60,
                "FlatMagicDamageMod": 15
            },
            "description": "<stats>+60 Health<br>+15 Ability Power<br><mana>+50% Base Mana Regen </mana></stats><br><br><mana><passive>UNIQUE Passive:</passive> Restores 4 Mana upon killing a unit.</mana>",
            "gold": {
                "total": 400,
                "sell": 160,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Good starting item for casters",
            "image": {
                "full": "1056.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 144
            },
            "sanitizedDescription": "+60 Health +15 Ability Power +50% Base Mana Regen UNIQUE Passive: Restores 4 Mana upon killing a unit.",
            "effect": {
                "Effect1Amount": "4"
            },
            "colloq": "dring",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1056,
            "name": "Doran's Ring"
        },
        "1057": {
            "from": [
                "1033"
            ],
            "description": "<stats>+40 Magic Resist</stats>",
            "gold": {
                "total": 720,
                "sell": 504,
                "base": 270,
                "purchasable": true
            },
            "tags": [
                "SpellBlock"
            ],
            "plaintext": "Moderately increases Magic Resist",
            "image": {
                "full": "1057.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 192
            },
            "sanitizedDescription": "+40 Magic Resist",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3170",
                "3091",
                "3512",
                "3001",
                "3193"
            ],
            "stats": {
                "FlatSpellBlockMod": 40
            },
            "id": 1057,
            "name": "Negatron Cloak"
        },
        "1058": {
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "description": "<stats>+60 Ability Power</stats>",
            "gold": {
                "total": 1250,
                "sell": 875,
                "base": 1250,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Greatly increases Ability Power",
            "image": {
                "full": "1058.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 240
            },
            "sanitizedDescription": "+60 Ability Power",
            "colloq": "nlr",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3089",
                "3090",
                "3003",
                "3007",
                "3285"
            ],
            "id": 1058,
            "name": "Needlessly Large Rod"
        },
        "1082": {
            "stats": {
                "FlatMPPoolMod": 100,
                "FlatMagicDamageMod": 15
            },
            "description": "<stats>+15 Ability Power<br>+25% Increased Healing from Potions<br><mana>+100 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +3 Ability Power per Glory.  <br><unique>UNIQUE Passive - Do or Die:</unique> Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "Lane"
            ],
            "plaintext": "Provides Ability Power and Mana.  Increases in power as you kill enemies.",
            "image": {
                "full": "1082.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 288
            },
            "sanitizedDescription": "+15 Ability Power +25% Increased Healing from Potions +100 Mana UNIQUE Passive - Dread: Grants +3 Ability Power per Glory. UNIQUE Passive - Do or Die: Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.",
            "effect": {
                "Effect3Amount": "1",
                "Effect1Amount": "0.25",
                "Effect2Amount": "2",
                "Effect6Amount": "4",
                "Effect4Amount": "10",
                "Effect5Amount": "3"
            },
            "colloq": "Noxian",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "into": [
                "3041"
            ],
            "id": 1082,
            "name": "The Dark Seal"
        },
        "1083": {
            "stats": {
                "FlatPhysicalDamageMod": 7
            },
            "description": "<stats>+7 Attack Damage<br>+3 Life on Hit</stats><br><br><unique>UNIQUE Passive:</unique> Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.",
            "gold": {
                "total": 450,
                "sell": 180,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "Lane"
            ],
            "plaintext": "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
            "image": {
                "full": "1083.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 336
            },
            "sanitizedDescription": "+7 Attack Damage +3 Life on Hit UNIQUE Passive: Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "1",
                "Effect3Amount": "100",
                "Effect4Amount": "350"
            },
            "colloq": "dblade",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1083,
            "name": "Cull"
        },
        "1400": {
            "from": [
                "3133",
                "3706"
            ],
            "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Grants Attack Damage and Cooldown Reduction",
            "image": {
                "full": "1400.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 384
            },
            "sanitizedDescription": "+60 Attack Damage +10% Cooldown Reduction",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 1400,
            "name": "Enchantment: Warrior"
        },
        "1401": {
            "from": [
                "3751",
                "3706"
            ],
            "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters. ",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Grants Health and Immolate Aura",
            "image": {
                "full": "1401.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 432
            },
            "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 400
            },
            "id": 1401,
            "name": "Enchantment: Cinderhulk"
        },
        "1402": {
            "from": [
                "3113",
                "1052",
                "3706"
            ],
            "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 340,
                "purchasable": true
            },
            "plaintext": "Grants Ability Power and periodically empowers your Spells",
            "image": {
                "full": "1402.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 0
            },
            "sanitizedDescription": "+60 Ability Power +7% Movement Speed UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 1402,
            "name": "Enchantment: Runic Echoes"
        },
        "1408": {
            "from": [
                "3133",
                "3711"
            ],
            "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Grants Attack Damage and Cooldown Reduction",
            "image": {
                "full": "1408.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 48
            },
            "sanitizedDescription": "+60 Attack Damage +10% Cooldown Reduction",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 1408,
            "name": "Enchantment: Warrior"
        },
        "1409": {
            "from": [
                "3751",
                "3711"
            ],
            "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters. ",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Grants Health and Immolate Aura",
            "image": {
                "full": "1409.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 96
            },
            "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 400
            },
            "id": 1409,
            "name": "Enchantment: Cinderhulk"
        },
        "1410": {
            "from": [
                "3113",
                "1052",
                "3711"
            ],
            "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 340,
                "purchasable": true
            },
            "plaintext": "Grants Ability Power and periodically empowers your Spells",
            "image": {
                "full": "1410.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 144
            },
            "sanitizedDescription": "+60 Ability Power +7% Movement Speed UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 1410,
            "name": "Enchantment: Runic Echoes"
        },
        "1412": {
            "from": [
                "3133",
                "3715"
            ],
            "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Grants Attack Damage and Cooldown Reduction",
            "image": {
                "full": "1412.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 192
            },
            "sanitizedDescription": "+60 Attack Damage +10% Cooldown Reduction",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 1412,
            "name": "Enchantment: Warrior"
        },
        "1413": {
            "from": [
                "3751",
                "3715"
            ],
            "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters. ",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Grants Health and Immolate Aura",
            "image": {
                "full": "1413.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 240
            },
            "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 11 (+1 per champion level) magic damage a second to nearby enemies while in combat. Deals 200% bonus damage to minions and monsters.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 400
            },
            "id": 1413,
            "name": "Enchantment: Cinderhulk"
        },
        "1414": {
            "from": [
                "3113",
                "1052",
                "3715"
            ],
            "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 340,
                "purchasable": true
            },
            "plaintext": "Grants Ability Power and periodically empowers your Spells",
            "image": {
                "full": "1414.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 288
            },
            "sanitizedDescription": "+60 Ability Power +7% Movement Speed UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 1414,
            "name": "Enchantment: Runic Echoes"
        },
        "1416": {
            "from": [
                "1043",
                "3706"
            ],
            "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 625,
                "purchasable": true
            },
            "plaintext": "Increases Attack Speed and deals damage based on the target's Health",
            "image": {
                "full": "1416.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 336
            },
            "sanitizedDescription": "+50% Attack Speed UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 1416,
            "name": "Enchantment: Bloodrazor"
        },
        "1418": {
            "from": [
                "1043",
                "3711"
            ],
            "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 625,
                "purchasable": true
            },
            "plaintext": "Increases Attack Speed and deals damage based on the target's Health",
            "image": {
                "full": "1418.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 384
            },
            "sanitizedDescription": "+50% Attack Speed UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 1418,
            "name": "Enchantment: Bloodrazor"
        },
        "1419": {
            "from": [
                "1043",
                "3715"
            ],
            "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 625,
                "purchasable": true
            },
            "plaintext": "Increases Attack Speed and deals damage based on the target's Health",
            "image": {
                "full": "1419.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 432
            },
            "sanitizedDescription": "+50% Attack Speed UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 1419,
            "name": "Enchantment: Bloodrazor"
        },
        "2003": {
            "stats": {},
            "description": "<groupLimit>Limited to 5 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.",
            "gold": {
                "total": 50,
                "sell": 20,
                "base": 50,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Jungle",
                "Lane"
            ],
            "plaintext": "Consume to restore Health over time",
            "image": {
                "full": "2003.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 0
            },
            "sanitizedDescription": "Limited to 5 at one time. Limited to 1 type of Healing Potion. Click to Consume: Restores 150 Health over 15 seconds.",
            "effect": {
                "Effect1Amount": "150",
                "Effect2Amount": "15"
            },
            "stacks": 5,
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2003,
            "name": "Health Potion"
        },
        "2009": {
            "stats": {},
            "description": "<consumable>Click to Consume:</consumable> Restores 80 Health and 50 Mana over 10 seconds.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2009.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 48
            },
            "sanitizedDescription": "Click to Consume: Restores 80 Health and 50 Mana over 10 seconds.",
            "inStore": false,
            "consumed": true,
            "id": 2009,
            "name": "Total Biscuit of Rejuvenation"
        },
        "2010": {
            "stats": {},
            "description": "<consumable>Click to Consume:</consumable> Restores 15 Health and 15 Mana immediately and then 150 Health over 15 seconds.",
            "gold": {
                "total": 50,
                "sell": 20,
                "base": 50,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2010.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 96
            },
            "sanitizedDescription": "Click to Consume: Restores 15 Health and 15 Mana immediately and then 150 Health over 15 seconds.",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect3Amount": "150",
                "Effect4Amount": "15"
            },
            "stacks": 5,
            "consumed": true,
            "inStore": false,
            "id": 2010,
            "name": "Total Biscuit of Rejuvenation"
        },
        "2011": {
            "stats": {},
            "description": "<consumable>Click to Consume:</consumable> Grants <font color='#29E3D6'>+1 Skill Point</font>.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Consumable",
                "Lane",
                "Jungle"
            ],
            "image": {
                "full": "2011.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 144
            },
            "sanitizedDescription": "Click to Consume: Grants +1 Skill Point.",
            "stacks": 5,
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "inStore": false,
            "id": 2011,
            "name": "Elixir Of Skill"
        },
        "2015": {
            "from": [
                "1042"
            ],
            "description": "<stats>+15% Attack Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Energized Strike:</unique> Your Energized attacks deal 50 bonus magic damage on hit.",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "plaintext": "Attack speed and a chargable magic hit",
            "image": {
                "full": "2015.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 192
            },
            "sanitizedDescription": "+15% Attack Speed Passive: Moving and attacking will make an attack Energized. UNIQUE Passive - Energized Strike: Your Energized attacks deal 50 bonus magic damage on hit.",
            "effect": {
                "Effect1Amount": "50"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3094",
                "3087"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.15
            },
            "id": 2015,
            "name": "Kircheis Shard"
        },
        "2031": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.",
            "gold": {
                "total": 150,
                "sell": 60,
                "base": 150,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "Consumable",
                "Active",
                "Lane",
                "Jungle"
            ],
            "plaintext": "Restores Health over time. Refills at shop.",
            "image": {
                "full": "2031.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 240
            },
            "sanitizedDescription": "Limited to 1 type of Healing Potion. UNIQUE Active: Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.",
            "effect": {
                "Effect1Amount": "125",
                "Effect2Amount": "0",
                "Effect3Amount": "12",
                "Effect4Amount": "2"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "2032",
                "2033"
            ],
            "id": 2031,
            "name": "Refillable Potion"
        },
        "2032": {
            "from": [
                "2031"
            ],
            "description": "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 60 Health and 35 Mana over 8 seconds. Holds up to 5 charges and refills upon visiting the shop.<br><br>Killing a Large Monster grants 1 charge.<br><br><rules>(Killing a Large Monster at full charges will automatically consume the newest charge.)</rules>",
            "gold": {
                "total": 400,
                "sell": 160,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "Consumable",
                "Active",
                "Jungle"
            ],
            "plaintext": "Restores Health and Mana over time - Refills at shop and has increased capacity",
            "image": {
                "full": "2032.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 288
            },
            "sanitizedDescription": "Limited to 1 type of Healing Potion. UNIQUE Active: Consumes a charge to restore 60 Health and 35 Mana over 8 seconds. Holds up to 5 charges and refills upon visiting the shop. Killing a Large Monster grants 1 charge. (Killing a Large Monster at full charges will automatically consume the newest charge.)",
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "35",
                "Effect3Amount": "8",
                "Effect4Amount": "5"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {},
            "id": 2032,
            "name": "Hunter's Potion"
        },
        "2033": {
            "from": [
                "2031"
            ],
            "description": "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants <font color='#FF8811'><u>Touch of Corruption</u></font> during that time. Holds up to 3 charges that refills upon visiting the shop.<br><br><font color='#FF8811'><u>Touch of Corruption:</u></font> Damaging spells and attacks burn enemy champions for <scaleLevel>15 - 30</scaleLevel> magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)<br><br><rules>(Corrupting Potion can be used even at full Health and Mana.)</rules>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Consumable",
                "HealthRegen",
                "Lane",
                "ManaRegen"
            ],
            "plaintext": "Restores Health and Mana over time and boosts combat power - Refills at Shop",
            "image": {
                "full": "2033.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 336
            },
            "sanitizedDescription": "Limited to 1 type of Healing Potion. UNIQUE Active: Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants Touch of Corruption during that time. Holds up to 3 charges that refills upon visiting the shop. Touch of Corruption: Damaging spells and attacks burn enemy champions for 15 - 30 magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.) (Corrupting Potion can be used even at full Health and Mana.)",
            "effect": {
                "Effect3Amount": "12",
                "Effect1Amount": "125",
                "Effect2Amount": "75",
                "Effect6Amount": "0.1",
                "Effect9Amount": "30",
                "Effect4Amount": "3",
                "Effect7Amount": "15",
                "Effect8Amount": "3",
                "Effect5Amount": "10"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {},
            "id": 2033,
            "name": "Corrupting Potion"
        },
        "2045": {
            "from": [
                "2049",
                "1028"
            ],
            "description": "<stats>+500 Health</stats><br><br><unique>UNIQUE Passive:</unique> Item Active cooldowns are reduced by 20%.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges and refills when visiting the shop.<br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
            "gold": {
                "total": 1600,
                "sell": 640,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Health",
                "Vision"
            ],
            "plaintext": "Greatly increases Health and provides Stealth Wards over time",
            "image": {
                "full": "2045.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 384
            },
            "sanitizedDescription": "+500 Health UNIQUE Passive: Item Active cooldowns are reduced by 20%. UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges and refills when visiting the shop. (A player may only have 3 Stealth Wards on the map at one time. Unique Passives with the same name don't stack.)",
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "4",
                "Effect3Amount": "150"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 500
            },
            "id": 2045,
            "name": "Ruby Sightstone"
        },
        "2047": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 5 minutes.",
            "gold": {
                "total": 300,
                "sell": 120,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Allows champion to see invisible or unseen enemy units",
            "image": {
                "full": "2047.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 432
            },
            "sanitizedDescription": "Click to Consume: Grants detection of nearby invisible or unseen enemy units for 5 minutes.",
            "consumed": true,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2047,
            "name": "Oracle's Extract"
        },
        "2049": {
            "from": [
                "1028"
            ],
            "description": "<stats>+150 Health</stats><br><br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds.  Holds up to 3 charges which refill upon visiting the shop. <br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
            "gold": {
                "total": 800,
                "sell": 320,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Health",
                "Vision"
            ],
            "plaintext": "Increases Health and provides Stealth Wards over time",
            "image": {
                "full": "2049.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 0
            },
            "sanitizedDescription": "+150 Health UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop. (A player may only have 3 Stealth Wards on the map at one time. Unique Passives with the same name don't stack.)",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "150"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2045",
                "2301",
                "2302",
                "2303"
            ],
            "stats": {
                "FlatHPPoolMod": 150
            },
            "id": 2049,
            "name": "Sightstone"
        },
        "2050": {
            "stats": {},
            "description": "<consumable>Click to Consume:</consumable> Places an invisible ward that reveals the surrounding area for 60 seconds.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Consumable"
            ],
            "image": {
                "full": "2050.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 48
            },
            "sanitizedDescription": "Click to Consume: Places an invisible ward that reveals the surrounding area for 60 seconds.",
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2050,
            "name": "Explorer's Ward"
        },
        "2051": {
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatHPRegenMod": 4
            },
            "description": "<stats>+150 Health</stats><br><br><passive>Passive: </passive>Restores 20 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
            "gold": {
                "total": 950,
                "sell": 380,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "plaintext": "Good starting item for tanks",
            "image": {
                "full": "2051.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 96
            },
            "sanitizedDescription": "+150 Health Passive: Restores 20 Health every 5 seconds. UNIQUE Passive: Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities). Limited to 1 Guardian's Item.",
            "effect": {
                "Effect1Amount": "12",
                "Effect2Amount": "0.25"
            },
            "colloq": "Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2051,
            "name": "Guardian's Horn"
        },
        "2052": {
            "stats": {},
            "description": "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.</i>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2052.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 144
            },
            "sanitizedDescription": "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure. All proceeds will be donated towards fighting Noxian animal cruelty.",
            "stacks": 2,
            "consumed": true,
            "inStore": false,
            "id": 2052,
            "name": "Poro-Snax"
        },
        "2053": {
            "from": [
                "1006",
                "1029"
            ],
            "description": "<stats>+30 Armor<br>+125% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "HealthRegen",
                "NonbootsMovement"
            ],
            "plaintext": "Enhances Movement Speed near turrets",
            "image": {
                "full": "2053.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 192
            },
            "sanitizedDescription": "+30 Armor +125% Base Health Regen UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3512",
                "3056",
                "3060",
                "3069"
            ],
            "stats": {
                "FlatArmorMod": 30
            },
            "id": 2053,
            "name": "Raptor Cloak"
        },
        "2054": {
            "stats": {},
            "description": "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy.<br><br><consumable>Click to Consume:</consumable> Gives your Poros a delicious healthy treat.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2054.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 240
            },
            "sanitizedDescription": "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy. Click to Consume: Gives your Poros a delicious healthy treat.",
            "inStore": false,
            "consumed": true,
            "id": 2054,
            "name": "Diet Poro-Snax"
        },
        "2055": {
            "stats": {},
            "description": "<groupLimit>Can only carry 3 Control Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal / disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br><br>Limit 1 <font color='#BBFFFF'>Control Ward</font> on the map per player.",
            "gold": {
                "total": 75,
                "sell": 30,
                "base": 75,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Lane",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Used to disable wards and invisible traps in an area.",
            "image": {
                "full": "2055.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 288
            },
            "sanitizedDescription": "Can only carry 3 Control Wards in inventory. Click to Consume: Places a ward that grants vision of the surrounding area. This device will also reveal invisible traps and reveal / disable wards. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. Limit 1 Control Ward on the map per player.",
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "3"
            },
            "stacks": 3,
            "colloq": "orange;",
            "consumed": true,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 2055,
            "name": "Control Ward"
        },
        "2138": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +300 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Consumable",
                "NonbootsMovement",
                "Tenacity"
            ],
            "plaintext": "Temporarily increases defenses. Leaves a trail for allies to follow.",
            "image": {
                "full": "2138.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 336
            },
            "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants +300 Health, 25% Tenacity, increased champion size, and Path of Iron for 3 minutes. Path of Iron: Moving leaves a path behind that boosts allied champion's Movement Speed by 15%. (Only one Elixir effect may be active at a time.)",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "300",
                "Effect2Amount": "0.25",
                "Effect6Amount": "0",
                "Effect4Amount": "0.15",
                "Effect7Amount": "0",
                "Effect8Amount": "9",
                "Effect5Amount": "0.15"
            },
            "colloq": "white",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2138,
            "name": "Elixir of Iron"
        },
        "2139": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules><br>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
            "image": {
                "full": "2139.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 384
            },
            "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and Sorcery for 3 minutes. Sorcery: Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets. (Only one Elixir effect may be active at a time.)",
            "effect": {
                "Effect3Amount": "25",
                "Effect1Amount": "50",
                "Effect2Amount": "50",
                "Effect6Amount": "3",
                "Effect4Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "9",
                "Effect5Amount": "5"
            },
            "colloq": "blue",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2139,
            "name": "Elixir of Sorcery"
        },
        "2140": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +30 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 15% of the damage dealt.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Damage",
                "LifeSteal",
                "SpellVamp"
            ],
            "plaintext": "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
            "image": {
                "full": "2140.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 432
            },
            "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants +30 Attack Damage and Bloodlust for 3 minutes. Bloodlust: Dealing physical damage to champions heals for 15% of the damage dealt. (Only one Elixir effect may be active at a time.)",
            "effect": {
                "Effect3Amount": "0.15",
                "Effect1Amount": "30",
                "Effect2Amount": "30",
                "Effect6Amount": "0",
                "Effect4Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "9",
                "Effect5Amount": "0"
            },
            "colloq": "red",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2140,
            "name": "Elixir of Wrath"
        },
        "2301": {
            "from": [
                "2049",
                "3098"
            ],
            "description": "<stats>+200 Health<br><mana>+50% Base Mana Regen </mana><br>+35 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Provides Ability Power and Stealth Wards over time",
            "image": {
                "full": "2301.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 0
            },
            "sanitizedDescription": "+200 Health +50% Base Mana Regen +35 Ability Power +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Tribute: Damaging spells and attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. QUEST: Earn 650 gold using this item. REWARD: Tribute is upgraded into Queen's Tribute. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "0",
                "Effect16Amount": "0",
                "Effect15Amount": "0",
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect19Amount": "1",
                "Effect14Amount": "0",
                "Effect17Amount": "650",
                "Effect12Amount": "0",
                "Effect9Amount": "0",
                "Effect11Amount": "0",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "150",
                "Effect8Amount": "4",
                "Effect13Amount": "0",
                "Effect10Amount": "0",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 35
            },
            "id": 2301,
            "name": "Eye of the Watchers"
        },
        "2302": {
            "from": [
                "2049",
                "3096"
            ],
            "description": "<stats>+200 Health<br>+125% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor: </unique>Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>30</font> gold or <font color='#44DDFF'>8%</font> missing mana (minimum 15). Cannon minions always drop coins.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and you receive an <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir Of Skill</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 1900,
                "sell": 760,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "Vision",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Provides Gold, Mana, and Stealth Wards over time",
            "image": {
                "full": "2302.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 48
            },
            "sanitizedDescription": "+200 Health +125% Base Health Regen +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Favor: Enemy minions killed by your allies sometimes drop coins that give either 30 gold or 8% missing mana (minimum 15). Cannon minions always drop coins. UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop QUEST: Earn 650 gold using this item. REWARD: Favor is upgraded to Emperor's Favor and you receive an Elixir Of Skill. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect3Amount": "25",
                "Effect1Amount": "2",
                "Effect2Amount": "15",
                "Effect6Amount": "0",
                "Effect12Amount": "0.08",
                "Effect9Amount": "0",
                "Effect11Amount": "30",
                "Effect4Amount": "4",
                "Effect7Amount": "150",
                "Effect8Amount": "0",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 2302,
            "name": "Eye of the Oasis"
        },
        "2303": {
            "from": [
                "2049",
                "3097"
            ],
            "description": "<stats>+500 Health<br>+200% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 2300,
                "sell": 920,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Vision",
                "Active",
                "GoldPer"
            ],
            "plaintext": "Provides Health and Stealth Wards over time",
            "image": {
                "full": "2303.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 96
            },
            "sanitizedDescription": "+500 Health +200% Base Health Regen +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges. UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. QUEST: Earn 650 gold using this item. REWARD: Shield Battery, a permanent shield that regenerates slowly outside of combat. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect3Amount": "30",
                "Effect1Amount": "320",
                "Effect2Amount": "50",
                "Effect6Amount": "0",
                "Effect12Amount": "30",
                "Effect9Amount": "2",
                "Effect11Amount": "650",
                "Effect4Amount": "4",
                "Effect7Amount": "150",
                "Effect8Amount": "0",
                "Effect13Amount": "4",
                "Effect10Amount": "20",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 500
            },
            "id": 2303,
            "name": "Eye of the Equinox"
        },
        "3001": {
            "from": [
                "3211",
                "1057"
            ],
            "description": "<stats>+300 Health<br>+65 Magic Resist<br>+100% Base Health Regeneration <br>+10% Cooldown Reduction</stats><br><br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 10% more magic damage.",
            "gold": {
                "total": 2800,
                "sell": 1960,
                "base": 880,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Aura",
                "CooldownReduction",
                "MagicPenetration"
            ],
            "plaintext": "Nearby enemies take more magic damage",
            "image": {
                "full": "3001.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 144
            },
            "sanitizedDescription": "+300 Health +65 Magic Resist +100% Base Health Regeneration +10% Cooldown Reduction UNIQUE Aura: Nearby enemy champions take 10% more magic damage.",
            "effect": {
                "Effect1Amount": "-10",
                "Effect2Amount": "-25",
                "Effect3Amount": "0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 65,
                "FlatHPPoolMod": 300
            },
            "id": 3001,
            "name": "Abyssal Mask"
        },
        "3003": {
            "from": [
                "3070",
                "1058"
            ],
            "description": "<stats>+80 Ability Power<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +8 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Increases Ability Power based on maximum Mana",
            "image": {
                "full": "3003.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 192
            },
            "sanitizedDescription": "+80 Ability Power +250 Mana UNIQUE Passive - Awe: Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. UNIQUE Passive - Mana Charge: Grants +8 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Seraph's Embrace at +750 Mana.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.03",
                "Effect2Amount": "8",
                "Effect6Amount": "0",
                "Effect4Amount": "2",
                "Effect7Amount": "0.25",
                "Effect5Amount": "8"
            },
            "colloq": "aa",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 80
            },
            "id": 3003,
            "name": "Archangel's Staff"
        },
        "3004": {
            "from": [
                "3070",
                "1037"
            ],
            "description": "<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 775,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Mana",
                "ManaRegen",
                "OnHit"
            ],
            "plaintext": "Increases Attack Damage based on maximum Mana",
            "image": {
                "full": "3004.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 240
            },
            "sanitizedDescription": "+25 Attack Damage +250 Mana UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent. UNIQUE Passive - Mana Charge: Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Muramana at +750 Mana.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.02",
                "Effect2Amount": "4",
                "Effect6Amount": "1",
                "Effect4Amount": "2",
                "Effect7Amount": "0.15",
                "Effect5Amount": "8"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatPhysicalDamageMod": 25
            },
            "id": 3004,
            "name": "Manamune"
        },
        "3006": {
            "from": [
                "1001",
                "1042"
            ],
            "description": "<stats> +35% Attack Speed</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "Boots"
            ],
            "plaintext": "Enhances Movement Speed and Attack Speed",
            "image": {
                "full": "3006.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 288
            },
            "sanitizedDescription": "+35% Attack Speed UNIQUE Passive - Enhanced Movement: +45 Movement Speed",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45,
                "PercentAttackSpeedMod": 0.35
            },
            "id": 3006,
            "name": "Berserker's Greaves"
        },
        "3007": {
            "from": [
                "3073",
                "1058"
            ],
            "description": "<stats>+80 Ability Power<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. <br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +12 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Increases Ability Power based on maximum Mana",
            "image": {
                "full": "3007.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 336
            },
            "sanitizedDescription": "+80 Ability Power +250 Mana UNIQUE Passive - Awe: Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. UNIQUE Passive - Mana Charge: Grants +12 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Seraph's Embrace at +750 Mana.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.03",
                "Effect2Amount": "12",
                "Effect6Amount": "0",
                "Effect4Amount": "2",
                "Effect7Amount": "0.25",
                "Effect5Amount": "8"
            },
            "colloq": "aa",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 80
            },
            "id": 3007,
            "name": "Archangel's Staff (Quick Charge)"
        },
        "3008": {
            "from": [
                "3073",
                "1037"
            ],
            "description": "<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +6 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 775,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Mana",
                "ManaRegen",
                "OnHit"
            ],
            "plaintext": "Increases Attack Damage based on maximum Mana",
            "image": {
                "full": "3008.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 384
            },
            "sanitizedDescription": "+25 Attack Damage +250 Mana UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent. UNIQUE Passive - Mana Charge: Grants +6 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Muramana at +750 Mana.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.02",
                "Effect2Amount": "6",
                "Effect6Amount": "1",
                "Effect4Amount": "2",
                "Effect7Amount": "0.15",
                "Effect5Amount": "8"
            },
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatPhysicalDamageMod": 25
            },
            "id": 3008,
            "name": "Manamune (Quick Charge)"
        },
        "3009": {
            "from": [
                "1001"
            ],
            "description": "<unique>UNIQUE Passive - Enhanced Movement:</unique> +55 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:</unique> Movement slowing effects are reduced by 25%.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Boots"
            ],
            "plaintext": "Enhances Movement Speed and reduces the effect of slows",
            "image": {
                "full": "3009.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 432
            },
            "sanitizedDescription": "UNIQUE Passive - Enhanced Movement: +55 Movement Speed UNIQUE Passive - Slow Resist: Movement slowing effects are reduced by 25%.",
            "effect": {
                "Effect1Amount": "0.25"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 55
            },
            "id": 3009,
            "name": "Boots of Swiftness"
        },
        "3010": {
            "from": [
                "1028",
                "1027"
            ],
            "description": "<stats>+225 Health<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. <br><br>Spending Mana restores 20% of the cost as Health, up to 15 per spell cast.  <br><br><rules>(Toggled Spells heal for a maximum of 15 per second.)</rules>",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Spend Mana to recover Health",
            "image": {
                "full": "3010.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 0
            },
            "sanitizedDescription": "+225 Health +300 Mana UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 15 per spell cast. (Toggled Spells heal for a maximum of 15 per second.)",
            "effect": {
                "Effect3Amount": "8",
                "Effect1Amount": "150",
                "Effect2Amount": "200",
                "Effect6Amount": "0.15",
                "Effect4Amount": "15",
                "Effect5Amount": "0.2"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3027",
                "3029",
                "3030"
            ],
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 225
            },
            "id": 3010,
            "name": "Catalyst of Aeons"
        },
        "3020": {
            "from": [
                "1001"
            ],
            "description": "<stats>+15 <a href='FlatMagicPen'>Magic Penetration</a></stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Boots",
                "MagicPenetration"
            ],
            "plaintext": "Enhances Movement Speed and magic damage",
            "image": {
                "full": "3020.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 48
            },
            "sanitizedDescription": "+15 Magic Penetration UNIQUE Passive - Enhanced Movement: +45 Movement Speed",
            "effect": {
                "Effect1Amount": "15"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "id": 3020,
            "name": "Sorcerer's Shoes"
        },
        "3022": {
            "from": [
                "3052",
                "1011"
            ],
            "description": "<stats>+700 Health<br>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive - Icy:</unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks).",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 900,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Health",
                "OnHit",
                "Slow"
            ],
            "plaintext": "Basic attacks slow enemies",
            "image": {
                "full": "3022.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 96
            },
            "sanitizedDescription": "+700 Health +30 Attack Damage UNIQUE Passive - Icy: Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks).",
            "effect": {
                "Effect1Amount": "1.5",
                "Effect2Amount": "0.4",
                "Effect3Amount": "0.3"
            },
            "colloq": "fm",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatHPPoolMod": 700
            },
            "id": 3022,
            "name": "Frozen Mallet"
        },
        "3024": {
            "from": [
                "1027",
                "1029"
            ],
            "description": "<stats>+20 Armor<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "CooldownReduction",
                "Mana"
            ],
            "plaintext": "Increases Armor and Cooldown Reduction",
            "image": {
                "full": "3024.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 144
            },
            "sanitizedDescription": "+20 Armor +250 Mana UNIQUE Passive: +10% Cooldown Reduction",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3110",
                "3025",
                "3050",
                "3800",
                "3187"
            ],
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 20
            },
            "id": 3024,
            "name": "Glacial Shroud"
        },
        "3025": {
            "from": [
                "3057",
                "3024"
            ],
            "description": "<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Mana",
                "CooldownReduction",
                "Slow"
            ],
            "plaintext": "Basic attacks create a slow field after spell cast",
            "image": {
                "full": "3025.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 192
            },
            "sanitizedDescription": "+65 Armor +20% Cooldown Reduction +500 Mana UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown). Size of zone increases with bonus armor.",
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "1",
                "Effect3Amount": "2",
                "Effect4Amount": "-0.3",
                "Effect5Amount": "1.5"
            },
            "colloq": "frozen fist",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 500,
                "FlatArmorMod": 65
            },
            "id": 3025,
            "name": "Iceborn Gauntlet"
        },
        "3026": {
            "from": [
                "1038",
                "1029"
            ],
            "description": "<stats>+40 Attack Damage<br>+30 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Upon taking lethal damage, restores 50% of base Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).",
            "gold": {
                "total": 2400,
                "sell": 960,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "plaintext": "Periodically revives champion upon death",
            "image": {
                "full": "3026.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 240
            },
            "sanitizedDescription": "+40 Attack Damage +30 Armor UNIQUE Passive: Upon taking lethal damage, restores 50% of base Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "4",
                "Effect3Amount": "300",
                "Effect4Amount": "0.3"
            },
            "colloq": "ga",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatArmorMod": 30,
                "FlatPhysicalDamageMod": 40
            },
            "id": 3026,
            "name": "Guardian Angel"
        },
        "3027": {
            "from": [
                "3010",
                "1026"
            ],
            "description": "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Greatly increases Health, Mana, and Ability Power",
            "image": {
                "full": "3027.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 288
            },
            "sanitizedDescription": "+300 Health +300 Mana +60 Ability Power Passive: Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks). UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
            "effect": {
                "Effect3Amount": "4",
                "Effect1Amount": "20",
                "Effect2Amount": "10",
                "Effect6Amount": "150",
                "Effect9Amount": "25",
                "Effect11Amount": "0.15",
                "Effect4Amount": "1",
                "Effect7Amount": "200",
                "Effect8Amount": "8",
                "Effect10Amount": "0.2",
                "Effect5Amount": "10"
            },
            "colloq": "roa",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "id": 3027,
            "name": "Rod of Ages"
        },
        "3028": {
            "from": [
                "1004",
                "1033",
                "1004"
            ],
            "description": "<stats>+30 Magic Resist<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.</unique>",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 100,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "ManaRegen"
            ],
            "plaintext": "Increases Mana and Health Regeneration",
            "image": {
                "full": "3028.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 336
            },
            "sanitizedDescription": "+30 Magic Resist +50% Base Mana Regen UNIQUE Passive - Harmony: Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.",
            "effect": {
                "Effect3Amount": "600",
                "Effect1Amount": "2",
                "Effect2Amount": "5",
                "Effect6Amount": "1",
                "Effect4Amount": "180",
                "Effect7Amount": "1",
                "Effect5Amount": "8"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3174",
                "3222"
            ],
            "stats": {
                "FlatSpellBlockMod": 30
            },
            "id": 3028,
            "name": "Chalice of Harmony"
        },
        "3029": {
            "from": [
                "3010",
                "1026"
            ],
            "description": "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Greatly increases Health, Mana, and Ability Power",
            "image": {
                "full": "3029.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 384
            },
            "sanitizedDescription": "+300 Health +300 Mana +60 Ability Power Passive: Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks). UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
            "effect": {
                "Effect3Amount": "4",
                "Effect1Amount": "20",
                "Effect2Amount": "10",
                "Effect6Amount": "150",
                "Effect9Amount": "25",
                "Effect11Amount": "0.15",
                "Effect4Amount": "1",
                "Effect7Amount": "200",
                "Effect8Amount": "8",
                "Effect10Amount": "0.2",
                "Effect5Amount": "10"
            },
            "colloq": "roa",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "id": 3029,
            "name": "Rod of Ages (Quick Charge)"
        },
        "3030": {
            "from": [
                "3010",
                "3145"
            ],
            "description": "<stats>+300 Health<br><mana>+400 Mana</mana><br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><unique>UNIQUE Active - Frost Bolt:</unique> Fires a spray of icy bolts that explode, dealing <scaleLevel>100 - 200</scaleLevel> (+35% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Enemies hit are slowed by 65% decaying over 0.5 seconds.<br><br><rules>(Frost Bolt has a cast time, in contrast to most actives.)</rules> ",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "Active"
            ],
            "plaintext": "Activate to fire icy bolts to slow enemies",
            "image": {
                "full": "3030.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 432
            },
            "sanitizedDescription": "+300 Health +400 Mana +80 Ability Power UNIQUE Passive - Eternity: 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast. UNIQUE Active - Frost Bolt: Fires a spray of icy bolts that explode, dealing 100 - 200 (+35% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other Hextech items). Enemies hit are slowed by 65% decaying over 0.5 seconds. (Frost Bolt has a cast time, in contrast to most actives.)",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect6Amount": "100",
                "Effect12Amount": "40",
                "Effect9Amount": "25",
                "Effect11Amount": "0.15",
                "Effect4Amount": "0.5",
                "Effect7Amount": "200",
                "Effect8Amount": "0.35",
                "Effect10Amount": "0.2",
                "Effect5Amount": "0.65"
            },
            "colloq": "frost cannon;",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80
            },
            "id": 3030,
            "name": "Hextech GLP-800"
        },
        "3031": {
            "from": [
                "1038",
                "1037",
                "1018"
            ],
            "description": "<stats>+70 Attack Damage<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strike bonus damage is increased by 50%.",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 425,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "plaintext": "Massively enhances critical strikes",
            "image": {
                "full": "3031.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 0
            },
            "sanitizedDescription": "+70 Attack Damage +20% Critical Strike Chance UNIQUE Passive: Critical strike bonus damage is increased by 50%.",
            "effect": {
                "Effect1Amount": "0.5"
            },
            "colloq": "ie",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatCritChanceMod": 0.2
            },
            "id": 3031,
            "name": "Infinity Edge"
        },
        "3033": {
            "from": [
                "3035",
                "3123"
            ],
            "description": "<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.<br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='BonusArmorPen'>Bonus Armor Penetration</a>.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "ArmorPenetration",
                "Damage"
            ],
            "plaintext": "Overcomes enemies with high Health recovery and Armor",
            "image": {
                "full": "3033.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 48
            },
            "sanitizedDescription": "+50 Attack Damage UNIQUE Passive - Executioner: Physical damage inflicts Grievous Wounds on enemy champions for 5 seconds. UNIQUE Passive - Last Whisper: +35% Bonus Armor Penetration.",
            "effect": {
                "Effect1Amount": "5",
                "Effect2Amount": "0.35"
            },
            "colloq": "lw;grievous",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 50
            },
            "id": 3033,
            "name": "Mortal Reminder"
        },
        "3034": {
            "from": [
                "1036"
            ],
            "description": "<stats>+10 Attack Damage</stats><br><br><unique>UNIQUE Passive - Giant Slayer:</unique> Grants up to +10% physical damage against enemy champions with greater maximum Health than you (+1% damage per 100 Health difference, maxing at 1000 Health difference).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Overcomes enemies with high Health",
            "image": {
                "full": "3034.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 96
            },
            "sanitizedDescription": "+10 Attack Damage UNIQUE Passive - Giant Slayer: Grants up to +10% physical damage against enemy champions with greater maximum Health than you (+1% damage per 100 Health difference, maxing at 1000 Health difference). (Unique Passives with the same name don't stack.)",
            "effect": {
                "Effect1Amount": "0.1",
                "Effect2Amount": "100",
                "Effect3Amount": "0.01",
                "Effect4Amount": "1000"
            },
            "colloq": "gs",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3036"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "id": 3034,
            "name": "Giant Slayer"
        },
        "3035": {
            "from": [
                "1036"
            ],
            "description": "<stats>+10 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='BonusArmorPen'>Bonus Armor Penetration</a>",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "ArmorPenetration",
                "Damage"
            ],
            "plaintext": "Overcomes enemies with high Armor",
            "image": {
                "full": "3035.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 144
            },
            "sanitizedDescription": "+10 Attack Damage UNIQUE Passive - Last Whisper: +35% Bonus Armor Penetration",
            "effect": {
                "Effect1Amount": "0.35",
                "Effect2Amount": "0.35"
            },
            "colloq": "lw",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3033",
                "3036"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "id": 3035,
            "name": "Last Whisper"
        },
        "3036": {
            "from": [
                "3035",
                "3034"
            ],
            "description": "<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Giant Slayer:</unique> Grants up to +20% physical damage against enemy champions with greater maximum Health than you (+2% damage per 100 Health difference, maxing at 1000 Health difference).<br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='BonusArmorPen'>Bonus Armor Penetration</a>",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "plaintext": "Overcomes enemies with high health and armor",
            "image": {
                "full": "3036.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 192
            },
            "sanitizedDescription": "+50 Attack Damage UNIQUE Passive - Giant Slayer: Grants up to +20% physical damage against enemy champions with greater maximum Health than you (+2% damage per 100 Health difference, maxing at 1000 Health difference). UNIQUE Passive - Last Whisper: +35% Bonus Armor Penetration",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0.35",
                "Effect2Amount": "0.2",
                "Effect6Amount": "1000",
                "Effect4Amount": "100",
                "Effect5Amount": "0.02"
            },
            "colloq": "lw",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 50
            },
            "id": 3036,
            "name": "Lord Dominik's Regards"
        },
        "3040": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatMagicDamageMod": 80
            },
            "description": "<stats>+80 Ability Power<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active"
            ],
            "image": {
                "full": "3040.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 240
            },
            "sanitizedDescription": "+80 Ability Power +1000 Mana UNIQUE Passive - Awe: Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. UNIQUE Active - Mana Shield: Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "0.03",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0",
                "Effect4Amount": "150",
                "Effect7Amount": "0.25",
                "Effect5Amount": "120"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3003,
            "id": 3040,
            "name": "Seraph's Embrace"
        },
        "3041": {
            "from": [
                "1082"
            ],
            "description": "<stats>+20 Ability Power<br><mana>+200 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 15 Glory.<br><unique>UNIQUE Passive - Do or Die:</unique> Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.",
            "gold": {
                "total": 1400,
                "sell": 980,
                "base": 1050,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana"
            ],
            "plaintext": "Grants Ability Power for kills and assists",
            "image": {
                "full": "3041.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 288
            },
            "sanitizedDescription": "+20 Ability Power +200 Mana UNIQUE Passive - Dread: Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 15 Glory. UNIQUE Passive - Do or Die: Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "5",
                "Effect2Amount": "4",
                "Effect6Amount": "0.1",
                "Effect4Amount": "25",
                "Effect7Amount": "10",
                "Effect8Amount": "15",
                "Effect5Amount": "0.5"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMPPoolMod": 200,
                "FlatMagicDamageMod": 20
            },
            "id": 3041,
            "name": "Mejai's Soulstealer"
        },
        "3042": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatPhysicalDamageMod": 25
            },
            "description": "<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "OnHit"
            ],
            "image": {
                "full": "3042.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 336
            },
            "sanitizedDescription": "+25 Attack Damage +1000 Mana UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent. UNIQUE Passive - Shock: Single target spells and attacks (on hit) on Champions consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed. This effect only activates while you have greater than 20% maximum Mana.",
            "effect": {
                "Effect1Amount": "0.15"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3004,
            "id": 3042,
            "name": "Muramana"
        },
        "3043": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatPhysicalDamageMod": 25
            },
            "description": "<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "OnHit"
            ],
            "image": {
                "full": "3043.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 384
            },
            "sanitizedDescription": "+25 Attack Damage +1000 Mana UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent. UNIQUE Passive - Shock: Single target spells and attacks (on hit) on Champions consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed. This effect only activates while you have greater than 20% maximum Mana.",
            "effect": {
                "Effect1Amount": "0.15"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3008,
            "id": 3043,
            "name": "Muramana"
        },
        "3044": {
            "from": [
                "1028",
                "1036"
            ],
            "description": "<stats>+200 Health<br>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.",
            "gold": {
                "total": 1250,
                "sell": 875,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Health",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Attacks and kills give a small burst of speed",
            "image": {
                "full": "3044.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 432
            },
            "sanitizedDescription": "+200 Health +15 Attack Damage UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2",
                "Effect3Amount": "60"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3078",
                "3071"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "FlatHPPoolMod": 200
            },
            "id": 3044,
            "name": "Phage"
        },
        "3046": {
            "from": [
                "1042",
                "3086",
                "1042"
            ],
            "description": "<stats>+45% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Spectral Waltz:</unique> While within 550 units of an enemy champion you can see, +7% Movement Speed and you can move through units.<br><unique>UNIQUE Passive - Lament:</unique> The last champion hit deals 12% less damage to you (ends after 10 seconds of not hitting).",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement"
            ],
            "plaintext": "Move faster near enemies and reduce incoming damage",
            "image": {
                "full": "3046.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 0
            },
            "sanitizedDescription": "+45% Attack Speed +30% Critical Strike Chance +5% Movement Speed UNIQUE Passive - Spectral Waltz: While within 550 units of an enemy champion you can see, +7% Movement Speed and you can move through units. UNIQUE Passive - Lament: The last champion hit deals 12% less damage to you (ends after 10 seconds of not hitting).",
            "effect": {
                "Effect1Amount": "0.12",
                "Effect2Amount": "10",
                "Effect3Amount": "550",
                "Effect4Amount": "0.07"
            },
            "colloq": "pd",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.45,
                "FlatCritChanceMod": 0.3
            },
            "id": 3046,
            "name": "Phantom Dancer"
        },
        "3047": {
            "from": [
                "1001",
                "1029"
            ],
            "description": "<stats>+30 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Blocks 10% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Boots"
            ],
            "plaintext": "Enhances Movement Speed and reduces incoming basic attack damage",
            "image": {
                "full": "3047.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 48
            },
            "sanitizedDescription": "+30 Armor UNIQUE Passive: Blocks 10% of the damage from basic attacks. UNIQUE Passive - Enhanced Movement: +45 Movement Speed",
            "effect": {
                "Effect1Amount": "0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatArmorMod": 30
            },
            "id": 3047,
            "name": "Ninja Tabi"
        },
        "3048": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatMagicDamageMod": 80
            },
            "description": "<stats>+80 Ability Power<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active"
            ],
            "image": {
                "full": "3048.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 96
            },
            "sanitizedDescription": "+80 Ability Power +1000 Mana UNIQUE Passive - Awe: Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. UNIQUE Active - Mana Shield: Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "0.03",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0",
                "Effect4Amount": "150",
                "Effect7Amount": "0.25",
                "Effect5Amount": "120"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3007,
            "id": 3048,
            "name": "Seraph's Embrace"
        },
        "3050": {
            "from": [
                "3105",
                "3024"
            ],
            "description": "<stats>+60 Armor<br>+30 Magic Resist<br><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><mainText><active>UNIQUE Active - Conduit:</active> Bind to an ally without an existing Conduit.<br><unique>UNIQUE Passive:</unique> Casting your ultimate near your ally surrounds you with a frost storm and ignites your ally's basic attacks for 10 seconds. Enemies inside your frost storm are slowed by 20% and your ally's attacks burn their target for 50% bonus magic damage over 2 seconds (45 second cooldown).<br><br><unlockedPassive>Frostfire Covenant:</unlockedPassive> Basic attacking a burning enemy ignites your frost storm to deal 40 magic damage per second and slow by 40% instead for 3 seconds.</maintext><br><br><rules>(Champions can only be linked by one Zeke's Convergence at a time.)</rules>",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Mana",
                "Aura",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Grants you and your ally bonuses when you cast your ultimate.",
            "image": {
                "full": "3050.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 144
            },
            "sanitizedDescription": "+60 Armor +30 Magic Resist +250 Mana +10% Cooldown Reduction UNIQUE Active - Conduit: Bind to an ally without an existing Conduit. UNIQUE Passive: Casting your ultimate near your ally surrounds you with a frost storm and ignites your ally's basic attacks for 10 seconds. Enemies inside your frost storm are slowed by 20% and your ally's attacks burn their target for 50% bonus magic damage over 2 seconds (45 second cooldown). Frostfire Covenant: Basic attacking a burning enemy ignites your frost storm to deal 40 magic damage per second and slow by 40% instead for 3 seconds. (Champions can only be linked by one Zeke's Convergence at a time.)",
            "effect": {
                "Effect3Amount": "40",
                "Effect15Amount": "0.35",
                "Effect1Amount": "-0.1",
                "Effect2Amount": "20",
                "Effect14Amount": "2",
                "Effect12Amount": "300",
                "Effect9Amount": "45",
                "Effect11Amount": "2",
                "Effect4Amount": "0.5",
                "Effect6Amount": "0.5",
                "Effect7Amount": "10",
                "Effect8Amount": "3",
                "Effect13Amount": "40",
                "Effect10Amount": "3",
                "Effect5Amount": "1000"
            },
            "colloq": "haroldandkumar",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 60,
                "FlatSpellBlockMod": 30
            },
            "id": 3050,
            "name": "Zeke's Convergence"
        },
        "3052": {
            "from": [
                "1036",
                "1028"
            ],
            "description": "<stats>+15 Attack Damage<br>+150 Health</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 5 maximum Health. This bonus stacks up to 30 times.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "plaintext": "Attack Damage and stacking Health on Unit Kill",
            "image": {
                "full": "3052.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 192
            },
            "sanitizedDescription": "+15 Attack Damage +150 Health UNIQUE Passive: Killing a unit grants 5 maximum Health. This bonus stacks up to 30 times.",
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "5",
                "Effect3Amount": "2",
                "Effect4Amount": "150"
            },
            "colloq": "enforcer",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3104",
                "3022",
                "3053",
                "3748"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "FlatHPPoolMod": 150
            },
            "id": 3052,
            "name": "Jaurim's Fist"
        },
        "3053": {
            "from": [
                "3052",
                "1036"
            ],
            "description": "<stats>+400 Health<br>+30% Base Attack Damage </stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a shield for 75% of your bonus Health that decays over 3 seconds (60 second cooldown).<br><br><unlockedPassive>Sterak's Fury:</unlockedPassive> When <i>Lifeline</i> triggers, grow in size and strength, gaining +30% additional Base Attack Damage for 8 seconds.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 1050,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "plaintext": "Shields against large bursts of damage",
            "image": {
                "full": "3053.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 240
            },
            "sanitizedDescription": "+400 Health +30% Base Attack Damage UNIQUE Passive - Lifeline: Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a shield for 75% of your bonus Health that decays over 3 seconds (60 second cooldown). Sterak's Fury: When Lifeline triggers, grow in size and strength, gaining +30% additional Base Attack Damage for 8 seconds.",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "400",
                "Effect2Amount": "0.3",
                "Effect6Amount": "8",
                "Effect9Amount": "1800",
                "Effect4Amount": "0.75",
                "Effect7Amount": "60",
                "Effect8Amount": "3",
                "Effect5Amount": "0"
            },
            "colloq": "juggernaut;primal",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 400
            },
            "id": 3053,
            "name": "Sterak's Gage"
        },
        "3056": {
            "from": [
                "2053",
                "3067"
            ],
            "description": "<stats>+300 Health<br>+50 Armor<br>+150% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds.<br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.",
            "gold": {
                "total": 2650,
                "sell": 1855,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "CooldownReduction",
                "Health",
                "HealthRegen",
                "NonbootsMovement"
            ],
            "plaintext": "Temporarily disables enemy turrets",
            "image": {
                "full": "3056.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 288
            },
            "sanitizedDescription": "+300 Health +50 Armor +150% Base Health Regen +10% Cooldown Reduction UNIQUE Active: Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds. UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "120",
                "Effect3Amount": "8",
                "Effect4Amount": "0.2",
                "Effect5Amount": "1"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 50,
                "FlatHPPoolMod": 300
            },
            "id": 3056,
            "name": "Ohmwrecker"
        },
        "3057": {
            "from": [
                "1027"
            ],
            "description": "<stats><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).",
            "gold": {
                "total": 1050,
                "sell": 735,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "CooldownReduction"
            ],
            "plaintext": "Grants a bonus to next attack after spell cast",
            "image": {
                "full": "3057.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 336
            },
            "sanitizedDescription": "+250 Mana +10% Cooldown Reduction UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).",
            "effect": {
                "Effect1Amount": "1.5",
                "Effect2Amount": "1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3078",
                "3100",
                "3025"
            ],
            "stats": {
                "FlatMPPoolMod": 250
            },
            "id": 3057,
            "name": "Sheen"
        },
        "3060": {
            "from": [
                "3105",
                "2053"
            ],
            "description": "<stats>+60 Armor<br>+30 Magic Resist<br>+125% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Promote:</active> Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown).<br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
            "gold": {
                "total": 2200,
                "sell": 1540,
                "base": 200,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Active",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Promotes a siege minion to a more powerful unit",
            "image": {
                "full": "3060.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 384
            },
            "sanitizedDescription": "+60 Armor +30 Magic Resist +125% Base Health Regen +10% Cooldown Reduction UNIQUE Active - Promote: Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown). UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "15",
                "Effect3Amount": "0.75",
                "Effect4Amount": "20",
                "Effect5Amount": "2"
            },
            "colloq": "flag",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 60
            },
            "id": 3060,
            "name": "Banner of Command"
        },
        "3065": {
            "from": [
                "3211",
                "3067"
            ],
            "description": "<stats>+450 Health<br>+55 Magic Resist<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Increases all healing received by 30%.",
            "gold": {
                "total": 2800,
                "sell": 1960,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "Health",
                "HealthRegen",
                "SpellBlock"
            ],
            "plaintext": "Increases Health and healing effects",
            "image": {
                "full": "3065.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 432
            },
            "sanitizedDescription": "+450 Health +55 Magic Resist +100% Base Health Regen +10% Cooldown Reduction UNIQUE Passive: Increases all healing received by 30%.",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0.3",
                "Effect3Amount": "0.5"
            },
            "colloq": "sv",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatHPPoolMod": 450
            },
            "id": 3065,
            "name": "Spirit Visage"
        },
        "3067": {
            "from": [
                "1028"
            ],
            "description": "<stats>+200 Health  </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "Health"
            ],
            "plaintext": "Increases Health and Cooldown Reduction",
            "image": {
                "full": "3067.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "+200 Health UNIQUE Passive: +10% Cooldown Reduction",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3187",
                "3401",
                "3065",
                "3071",
                "3109",
                "3056",
                "3083",
                "3152"
            ],
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3067,
            "name": "Kindlegem"
        },
        "3068": {
            "from": [
                "1031",
                "3751"
            ],
            "description": "<stats>+425 Health<br>+60 Armor  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 11 (+1 per champion level) magic damage per second to nearby enemies. Deals 200% bonus damage to minions and monsters.",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Health"
            ],
            "plaintext": "Constantly deals damage to nearby enemies",
            "image": {
                "full": "3068.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "sanitizedDescription": "+425 Health +60 Armor UNIQUE Passive - Immolate: Deals 11 (+1 per champion level) magic damage per second to nearby enemies. Deals 200% bonus damage to minions and monsters.",
            "effect": {
                "Effect1Amount": "11",
                "Effect2Amount": "1",
                "Effect3Amount": "2"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 60,
                "FlatHPPoolMod": 425
            },
            "id": 3068,
            "name": "Sunfire Cape"
        },
        "3069": {
            "from": [
                "3096",
                "2053"
            ],
            "description": "<stats>+45 Armor<br>+175% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><unique>UNIQUE Passive - Favor: </unique>Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>30</font> gold or <font color='#44DDFF'>8%</font> missing mana (minimum 15). Cannon minions always drop coins.<br><active>UNIQUE Active:</active> Grants nearby allies +40% Movement Speed for 3 seconds (60 second cooldown).<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and you receive an <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir Of Skill</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "Armor",
                "ManaRegen",
                "Active",
                "GoldPer",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.",
            "image": {
                "full": "3069.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "+45 Armor +175% Base Health Regen +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates. UNIQUE Passive - Favor: Enemy minions killed by your allies sometimes drop coins that give either 30 gold or 8% missing mana (minimum 15). Cannon minions always drop coins. UNIQUE Active: Grants nearby allies +40% Movement Speed for 3 seconds (60 second cooldown). QUEST: Earn 650 gold using this item. REWARD: Favor is upgraded to Emperor's Favor and you receive an Elixir Of Skill. Limited to 1 Gold Income Item. ''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE",
            "effect": {
                "Effect3Amount": "15",
                "Effect1Amount": "-0.1",
                "Effect2Amount": "2",
                "Effect6Amount": "3",
                "Effect12Amount": "0.08",
                "Effect9Amount": "2",
                "Effect11Amount": "30",
                "Effect4Amount": "25",
                "Effect7Amount": "60",
                "Effect8Amount": "20",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0.4"
            },
            "colloq": "shurelya;reverie",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 45
            },
            "id": 3069,
            "name": "Talisman of Ascension"
        },
        "3070": {
            "from": [
                "1027",
                "1004"
            ],
            "description": "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds).<br><br>Caps at +750 Mana.</mana>",
            "gold": {
                "total": 750,
                "sell": 525,
                "base": 275,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Increases maximum Mana as Mana is spent",
            "image": {
                "full": "3070.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "+250 Mana UNIQUE Passive - Awe: Refunds 15% of Mana spent. UNIQUE Passive - Mana Charge: Grants 4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds). Caps at +750 Mana.",
            "effect": {
                "Effect3Amount": "1",
                "Effect1Amount": "4",
                "Effect2Amount": "8",
                "Effect6Amount": "2",
                "Effect4Amount": "8",
                "Effect7Amount": "0.15",
                "Effect5Amount": "750"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3003",
                "3004"
            ],
            "stats": {
                "FlatMPPoolMod": 250
            },
            "id": 3070,
            "name": "Tear of the Goddess"
        },
        "3071": {
            "from": [
                "3044",
                "3067"
            ],
            "description": "<stats>+400 Health<br>+40 Attack Damage<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "ArmorPenetration",
                "CooldownReduction",
                "Damage",
                "Health",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Dealing physical damage to enemy champions reduces their Armor",
            "image": {
                "full": "3071.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "sanitizedDescription": "+400 Health +40 Attack Damage +20% Cooldown Reduction UNIQUE Passive: Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 4% for 6 seconds (stacks up to 6 times, up to 24%). UNIQUE Passive - Rage: Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
            "effect": {
                "Effect3Amount": "6",
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0.04",
                "Effect6Amount": "20",
                "Effect9Amount": "2",
                "Effect4Amount": "6",
                "Effect7Amount": "2",
                "Effect8Amount": "60",
                "Effect5Amount": "0.24"
            },
            "colloq": "bc",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatHPPoolMod": 400
            },
            "id": 3071,
            "name": "The Black Cleaver"
        },
        "3072": {
            "from": [
                "1038",
                "1036",
                "1053"
            ],
            "description": "<stats>+80 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
            "gold": {
                "total": 3700,
                "sell": 2590,
                "base": 1150,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "plaintext": "Grants Attack Damage, Life Steal and Life Steal now overheals",
            "image": {
                "full": "3072.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "+80 Attack Damage UNIQUE Passive: +20% Life Steal UNIQUE Passive: Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level. This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
            "effect": {
                "Effect1Amount": "50",
                "Effect2Amount": "350",
                "Effect3Amount": "25",
                "Effect4Amount": "0.2"
            },
            "colloq": "bt",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 80
            },
            "id": 3072,
            "name": "The Bloodthirster"
        },
        "3073": {
            "from": [
                "1027",
                "1004"
            ],
            "description": "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 6 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds).<br><br>Caps at +750 Mana.</mana>",
            "gold": {
                "total": 750,
                "sell": 525,
                "base": 275,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Increases maximum Mana as Mana is spent",
            "image": {
                "full": "3073.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "+250 Mana UNIQUE Passive - Awe: Refunds 15% of Mana spent. UNIQUE Passive - Mana Charge: Grants 6 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds). Caps at +750 Mana.",
            "effect": {
                "Effect3Amount": "1",
                "Effect1Amount": "6",
                "Effect2Amount": "8",
                "Effect6Amount": "2",
                "Effect4Amount": "8",
                "Effect7Amount": "0.15",
                "Effect5Amount": "750"
            },
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3007",
                "3008"
            ],
            "stats": {
                "FlatMPPoolMod": 250
            },
            "id": 3073,
            "name": "Tear of the Goddess (Quick Charge)"
        },
        "3074": {
            "from": [
                "3077",
                "1053",
                "1037"
            ],
            "description": "<stats>+80 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 525,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Damage",
                "HealthRegen",
                "LifeSteal",
                "OnHit"
            ],
            "plaintext": "Melee attacks hit nearby enemies, dealing damage and restoring Health",
            "image": {
                "full": "3074.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "sanitizedDescription": "+80 Attack Damage +100% Base Health Regen +12% Life Steal Passive: 50% of total Life Steal applies to damage dealt by this item. UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).",
            "effect": {
                "Effect1Amount": "0.2",
                "Effect2Amount": "0.6",
                "Effect3Amount": "0.6",
                "Effect4Amount": "1",
                "Effect5Amount": "10"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 80,
                "PercentLifeStealMod": 0.12
            },
            "id": 3074,
            "name": "Ravenous Hydra"
        },
        "3075": {
            "from": [
                "1029",
                "1031"
            ],
            "description": "<stats>+100 Armor  </stats><br><br><unique>UNIQUE Passive:</unique> Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage.<br><br><rules>(Bonus Armor is Armor from items, buffs, runes and masteries.)</rules><br><rules>(Reflect damage is calculated based on damage taken before being reduced by Armor.)</rules>",
            "gold": {
                "total": 2350,
                "sell": 1645,
                "base": 1250,
                "purchasable": true
            },
            "tags": [
                "Armor"
            ],
            "plaintext": "Returns damage taken from basic attacks as magic damage",
            "image": {
                "full": "3075.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "sanitizedDescription": "+100 Armor UNIQUE Passive: Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage. (Bonus Armor is Armor from items, buffs, runes and masteries.) (Reflect damage is calculated based on damage taken before being reduced by Armor.)",
            "effect": {
                "Effect1Amount": "0.15",
                "Effect2Amount": "0.25"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 100
            },
            "id": 3075,
            "name": "Thornmail"
        },
        "3077": {
            "from": [
                "1036",
                "1006",
                "1036"
            ],
            "description": "<stats>+20 Attack Damage<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "Damage",
                "Active"
            ],
            "plaintext": "Melee attacks hit nearby enemies",
            "image": {
                "full": "3077.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "sanitizedDescription": "+20 Attack Damage +50% Base Health Regen UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).",
            "effect": {
                "Effect1Amount": "0.2",
                "Effect2Amount": "0.6",
                "Effect3Amount": "0.6",
                "Effect4Amount": "1",
                "Effect5Amount": "10"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3074",
                "3748"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "id": 3077,
            "name": "Tiamat"
        },
        "3078": {
            "from": [
                "3101",
                "3057",
                "3044"
            ],
            "description": "<stats>+250 Health<br><mana>+250 Mana</mana><br>+25 Attack Damage<br>+40% Attack Speed<br>+20% Cooldown Reduction<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
            "gold": {
                "total": 3733,
                "sell": 2613,
                "base": 333,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement"
            ],
            "plaintext": "Tons of Damage",
            "image": {
                "full": "3078.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "sanitizedDescription": "+250 Health +250 Mana +25 Attack Damage +40% Attack Speed +20% Cooldown Reduction +5% Movement Speed UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions. UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "2",
                "Effect5Amount": "1.5"
            },
            "colloq": "triforce;tons of damage",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMPPoolMod": 250,
                "FlatPhysicalDamageMod": 25,
                "FlatHPPoolMod": 250,
                "PercentAttackSpeedMod": 0.4
            },
            "id": 3078,
            "name": "Trinity Force"
        },
        "3082": {
            "from": [
                "1029",
                "1029"
            ],
            "description": "<stats>+40 Armor</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Slow"
            ],
            "plaintext": "Slows Attack Speed of enemy champions when receiving basic attacks",
            "image": {
                "full": "3082.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "+40 Armor UNIQUE Passive - Cold Steel: When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.",
            "effect": {
                "Effect1Amount": "-0.15",
                "Effect2Amount": "1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3110",
                "3143"
            ],
            "stats": {
                "FlatArmorMod": 40
            },
            "id": 3082,
            "name": "Warden's Mail"
        },
        "3083": {
            "from": [
                "1011",
                "3067",
                "3801"
            ],
            "description": "<stats>+800 Health<br>+200% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Grants <unlockedPassive>Warmog's Heart</unlockedPassive> if you have at least 2750 maximum Health.<br><br><unlockedPassive>Warmog's Heart:</unlockedPassive> Restores 25% of maximum Health every 5 seconds if damage hasn't been taken within 6 seconds (3 seconds for damage from minions and monsters).",
            "gold": {
                "total": 2850,
                "sell": 1995,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction"
            ],
            "plaintext": "Grants massive Health and Health Regen",
            "image": {
                "full": "3083.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "+800 Health +200% Base Health Regen UNIQUE Passive: +10% Cooldown Reduction UNIQUE Passive: Grants Warmog's Heart if you have at least 2750 maximum Health. Warmog's Heart: Restores 25% of maximum Health every 5 seconds if damage hasn't been taken within 6 seconds (3 seconds for damage from minions and monsters).",
            "effect": {
                "Effect3Amount": "0.25",
                "Effect1Amount": "0.015",
                "Effect2Amount": "5",
                "Effect6Amount": "-0.1",
                "Effect4Amount": "2750",
                "Effect7Amount": "6",
                "Effect8Amount": "3",
                "Effect5Amount": "6"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 800
            },
            "id": 3083,
            "name": "Warmog's Armor"
        },
        "3084": {
            "from": [
                "1011",
                "3801"
            ],
            "description": "<stats>+800 Health<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> Upon champion kill or assist, restores 300 Health over 5 seconds.",
            "gold": {
                "total": 2550,
                "sell": 1785,
                "base": 900,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "plaintext": "Restores Health on kill or assist",
            "image": {
                "full": "3084.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "+800 Health +100% Base Health Regen UNIQUE Passive: Upon champion kill or assist, restores 300 Health over 5 seconds.",
            "effect": {
                "Effect1Amount": "300",
                "Effect2Amount": "5"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 800
            },
            "id": 3084,
            "name": "Overlord's Bloodmail"
        },
        "3085": {
            "from": [
                "1042",
                "3086",
                "1042"
            ],
            "description": "<stats>+40% Attack Speed<br>+30% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (40% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "plaintext": "Ranged attacks fire two bolts at nearby enemies",
            "image": {
                "full": "3085.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "sanitizedDescription": "+40% Attack Speed +30% Critical Strike Chance +7% Movement Speed UNIQUE Passive - Wind's Fury: When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (40% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect6Amount": "1",
                "Effect4Amount": "0",
                "Effect5Amount": "40"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.4,
                "FlatCritChanceMod": 0.3
            },
            "id": 3085,
            "name": "Runaan's Hurricane"
        },
        "3086": {
            "from": [
                "1051",
                "1042"
            ],
            "description": "<stats>+15% Attack Speed<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement"
            ],
            "plaintext": "Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed",
            "image": {
                "full": "3086.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "+15% Attack Speed +20% Critical Strike Chance UNIQUE Passive: +5% Movement Speed",
            "effect": {
                "Effect1Amount": "0.05"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3094",
                "3085",
                "3046",
                "3087"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.15,
                "FlatCritChanceMod": 0.2
            },
            "id": 3086,
            "name": "Zeal"
        },
        "3087": {
            "from": [
                "3086",
                "2015"
            ],
            "description": "<stats>+35% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Shiv Lightning:</unique> Your Energized attacks deal 60~160 bonus magic damage (based on level) to up to 5 targets on hit (deals +65% bonus damage to minions and can critically strike).",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Movement builds charges that release chain lightning on basic attack",
            "image": {
                "full": "3087.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "sanitizedDescription": "+35% Attack Speed +30% Critical Strike Chance +5% Movement Speed Passive: Moving and attacking will make an attack Energized. UNIQUE Passive - Shiv Lightning: Your Energized attacks deal 60~160 bonus magic damage (based on level) to up to 5 targets on hit (deals +65% bonus damage to minions and can critically strike).",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "100",
                "Effect2Amount": "80",
                "Effect6Amount": "160",
                "Effect4Amount": "750",
                "Effect7Amount": "5",
                "Effect8Amount": "0.65",
                "Effect5Amount": "60"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.35,
                "FlatCritChanceMod": 0.3
            },
            "id": 3087,
            "name": "Statikk Shiv"
        },
        "3089": {
            "from": [
                "1026",
                "1058",
                "1052"
            ],
            "description": "<stats>+120 Ability Power  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 35%.",
            "gold": {
                "total": 3800,
                "sell": 2660,
                "base": 1265,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Massively increases Ability Power",
            "image": {
                "full": "3089.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 336
            },
            "sanitizedDescription": "+120 Ability Power UNIQUE Passive: Increases Ability Power by 35%.",
            "effect": {
                "Effect1Amount": "35"
            },
            "colloq": "dc;banksys;hat",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMagicDamageMod": 120
            },
            "id": 3089,
            "name": "Rabadon's Deathcap"
        },
        "3090": {
            "from": [
                "3191",
                "1058"
            ],
            "description": "<stats>+100 Ability Power<br>+45 Armor  </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 1050,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "SpellDamage"
            ],
            "plaintext": "Massively increases Ability Power and can be activated to enter stasis",
            "image": {
                "full": "3090.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 384
            },
            "sanitizedDescription": "+100 Ability Power +45 Armor UNIQUE Passive: Increases Ability Power by 25% UNIQUE Active: Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            },
            "colloq": "hat",
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 45,
                "FlatMagicDamageMod": 100
            },
            "id": 3090,
            "name": "Wooglet's Witchcap"
        },
        "3091": {
            "from": [
                "1043",
                "1057",
                "1042"
            ],
            "description": "<stats>+40% Attack Speed<br>+40 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 40 bonus magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times.)",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 480,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "OnHit",
                "SpellBlock"
            ],
            "plaintext": "Deals bonus magic damage on basic attacks",
            "image": {
                "full": "3091.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 432
            },
            "sanitizedDescription": "+40% Attack Speed +40 Magic Resist UNIQUE Passive: Basic attacks deal 40 bonus magic damage on hit. UNIQUE Passive: Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times.)",
            "effect": {
                "Effect1Amount": "40",
                "Effect2Amount": "5",
                "Effect3Amount": "5"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 40,
                "PercentAttackSpeedMod": 0.4
            },
            "id": 3091,
            "name": "Wit's End"
        },
        "3092": {
            "from": [
                "3098",
                "3108"
            ],
            "description": "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active:</active> Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and slow them by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown).<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Active",
                "CooldownReduction",
                "GoldPer",
                "ManaRegen",
                "Slow",
                "SpellDamage"
            ],
            "plaintext": "Sends out seeking wraiths that track hidden enemies and slow them",
            "image": {
                "full": "3092.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 0
            },
            "sanitizedDescription": "+60 Ability Power +10% Cooldown Reduction +2 Gold per 10 seconds +50% Base Mana Regen UNIQUE Passive - Tribute: Damaging spells and attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. UNIQUE Active: Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and slow them by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown). QUEST: Earn 650 gold using this item. REWARD: Tribute is upgraded into Queen's Tribute. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "0",
                "Effect16Amount": "2",
                "Effect15Amount": "0.25",
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect19Amount": "1",
                "Effect14Amount": "90",
                "Effect17Amount": "650",
                "Effect12Amount": "6",
                "Effect9Amount": "2",
                "Effect11Amount": "5",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "1",
                "Effect8Amount": "2",
                "Effect13Amount": "50",
                "Effect10Amount": "-0.4",
                "Effect5Amount": "30"
            },
            "colloq": "spooky ghosts;",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "id": 3092,
            "name": "Frost Queen's Claim"
        },
        "3094": {
            "from": [
                "3086",
                "2015"
            ],
            "description": "<stats>+30% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Firecannon:</unique> Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 50~120 bonus magic damage (based on level) on hit.<br><br>Attacks become Energized 25% faster. Energized attacks function on structures.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Movement builds charges that release a sieging fire attack on release",
            "image": {
                "full": "3094.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 48
            },
            "sanitizedDescription": "+30% Attack Speed +30% Critical Strike Chance +5% Movement Speed Passive: Moving and attacking will make an attack Energized. UNIQUE Passive - Firecannon: Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 50~120 bonus magic damage (based on level) on hit. Attacks become Energized 25% faster. Energized attacks function on structures.",
            "effect": {
                "Effect3Amount": "50",
                "Effect1Amount": "0.35",
                "Effect2Amount": "150",
                "Effect6Amount": "0.25",
                "Effect4Amount": "120",
                "Effect5Amount": "5"
            },
            "colloq": "canon;rapidfire;rfc",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.3,
                "FlatCritChanceMod": 0.3
            },
            "id": 3094,
            "name": "Rapid Firecannon"
        },
        "3096": {
            "from": [
                "1006",
                "3301"
            ],
            "description": "<stats>+50% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>30</font> gold or <font color='#44DDFF'>8%</font> missing mana (minimum 15). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and you receive an <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir Of Skill</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>",
            "gold": {
                "total": 850,
                "sell": 340,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Grants gold and mana when nearby minions die that you didn't kill",
            "image": {
                "full": "3096.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 96
            },
            "sanitizedDescription": "+50% Base Health Regen +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Favor: Enemy minions killed by your allies sometimes drop coins that give either 30 gold or 8% missing mana (minimum 15). Cannon minions always drop coins. QUEST: Earn 650 gold using this item. REWARD: Favor is upgraded to Emperor's Favor and you receive an Elixir Of Skill. Limited to 1 Gold Income Item. ''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE",
            "effect": {
                "Effect3Amount": "50",
                "Effect1Amount": "2",
                "Effect2Amount": "15",
                "Effect6Amount": "0",
                "Effect12Amount": "0.08",
                "Effect9Amount": "0",
                "Effect11Amount": "30",
                "Effect4Amount": "10",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2302",
                "3069"
            ],
            "stats": {},
            "id": 3096,
            "name": "Nomad's Medallion"
        },
        "3097": {
            "from": [
                "3302",
                "1006"
            ],
            "description": "<stats>+175 Health<br>+50% Base Health Regen <br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold.<br><br>These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 850,
                "sell": 340,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Aura",
                "GoldPer",
                "Health",
                "HealthRegen"
            ],
            "plaintext": "Periodically kill enemy minions to heal and grant gold to a nearby ally",
            "image": {
                "full": "3097.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 144
            },
            "sanitizedDescription": "+175 Health +50% Base Health Regen +2 Gold per 10 seconds UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges. QUEST: Earn 650 gold using this item. REWARD: Shield Battery, a permanent shield that regenerates slowly outside of combat. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect3Amount": "30",
                "Effect1Amount": "200",
                "Effect2Amount": "40",
                "Effect6Amount": "10",
                "Effect12Amount": "30",
                "Effect9Amount": "0",
                "Effect11Amount": "650",
                "Effect4Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "3",
                "Effect10Amount": "0",
                "Effect5Amount": "2"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2303",
                "3401"
            ],
            "stats": {
                "FlatHPPoolMod": 175
            },
            "id": 3097,
            "name": "Targon's Brace"
        },
        "3098": {
            "from": [
                "3303",
                "1004"
            ],
            "description": "<stats>+20 Ability Power<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. Killing minions slows Tribute generation.<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 850,
                "sell": 340,
                "base": 375,
                "purchasable": true
            },
            "tags": [
                "Active",
                "GoldPer",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Grants gold when you damage an enemy",
            "image": {
                "full": "3098.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 192
            },
            "sanitizedDescription": "+20 Ability Power +2 Gold per 10 seconds +50% Base Mana Regen UNIQUE Passive - Tribute: Damaging spells and attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. Killing minions slows Tribute generation. QUEST: Earn 650 gold using this item. REWARD: Tribute is upgraded into Queen's Tribute. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "6",
                "Effect16Amount": "0",
                "Effect15Amount": "0",
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect19Amount": "1",
                "Effect14Amount": "0",
                "Effect17Amount": "650",
                "Effect12Amount": "0",
                "Effect9Amount": "0",
                "Effect11Amount": "0",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "0",
                "Effect10Amount": "0",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2301",
                "3092"
            ],
            "stats": {
                "FlatMagicDamageMod": 20
            },
            "id": 3098,
            "name": "Frostfang"
        },
        "3100": {
            "from": [
                "3057",
                "3113",
                "1026"
            ],
            "description": "<stats>+80 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).",
            "gold": {
                "total": 3200,
                "sell": 2240,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Grants a bonus to next attack after spell cast",
            "image": {
                "full": "3100.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 240
            },
            "sanitizedDescription": "+80 Ability Power +7% Movement Speed +10% Cooldown Reduction +250 Mana UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).",
            "effect": {
                "Effect1Amount": "0.75",
                "Effect2Amount": "0.5",
                "Effect3Amount": "1.5"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 80
            },
            "id": 3100,
            "name": "Lich Bane"
        },
        "3101": {
            "from": [
                "1042",
                "1042"
            ],
            "description": "<stats>+35% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CooldownReduction"
            ],
            "plaintext": "Increased Attack Speed and Cooldown Reduction",
            "image": {
                "full": "3101.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 288
            },
            "sanitizedDescription": "+35% Attack Speed UNIQUE Passive: +10% Cooldown Reduction",
            "effect": {
                "Effect1Amount": "10"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3115",
                "3137",
                "3078"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.35
            },
            "id": 3101,
            "name": "Stinger"
        },
        "3102": {
            "from": [
                "3108",
                "1033",
                "1026"
            ],
            "description": "<stats>+70 Ability Power<br>+60 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "SpellDamage",
                "CooldownReduction"
            ],
            "plaintext": "Periodically blocks enemy abilities",
            "image": {
                "full": "3102.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 336
            },
            "sanitizedDescription": "+70 Ability Power +60 Magic Resist +10% Cooldown Reduction UNIQUE Passive: Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
            "effect": {
                "Effect3Amount": "10",
                "Effect1Amount": "40",
                "Effect2Amount": "45",
                "Effect6Amount": "2",
                "Effect4Amount": "-0.1",
                "Effect5Amount": "8"
            },
            "colloq": "bv",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatMagicDamageMod": 70
            },
            "id": 3102,
            "name": "Banshee's Veil"
        },
        "3104": {
            "from": [
                "3133",
                "3052"
            ],
            "description": "<stats>+300 Health<br>+50 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Ashes to Ashes:</unique> Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (Deals 50% bonus damage to minions and monsters). Controlling the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage",
                "Aura",
                "CooldownReduction",
                "OnHit",
                "ArmorPenetration"
            ],
            "plaintext": "Reduces Armor of nearby enemies",
            "image": {
                "full": "3104.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 384
            },
            "sanitizedDescription": "+300 Health +50 Attack Damage +10% Cooldown Reduction UNIQUE Passive - Ashes to Ashes: Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (Deals 50% bonus damage to minions and monsters). Controlling the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "1",
                "Effect3Amount": "0.5"
            },
            "colloq": "lvd;",
            "maps": {
                "8": false,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 300
            },
            "id": 3104,
            "name": "Lord Van Damm's Pillager"
        },
        "3105": {
            "from": [
                "1033",
                "1029"
            ],
            "description": "<stats>+30 Armor<br>+30 Magic Resist</stats>",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Armor"
            ],
            "plaintext": "Grants Armor and Magic Resistance",
            "image": {
                "full": "3105.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 432
            },
            "sanitizedDescription": "+30 Armor +30 Magic Resist",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3190",
                "3050",
                "3060"
            ],
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "id": 3105,
            "name": "Aegis of the Legion"
        },
        "3107": {
            "from": [
                "3114",
                "3801"
            ],
            "description": "<stats>+200 Health<br>+50% Base Health Regen <br>+150% Base Mana Regen <br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Redemption's heal.<br><br>Can be used while dead.<br><br><rules>Half effect if the target has been affected by another Redemption recently.</rules>",
            "gold": {
                "total": 2100,
                "sell": 1470,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Further improves defenses for nearby allies",
            "image": {
                "full": "3107.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 0
            },
            "sanitizedDescription": "+200 Health +50% Base Health Regen +150% Base Mana Regen +10% Cooldown Reduction UNIQUE Passive: +10% Heal and Shield Power UNIQUE Active: Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 10 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as true damage and deal 250 true damage to enemy minions (120 second cooldown). Heal and Shield Power is 3 times as effective on Redemption's heal. Can be used while dead. Half effect if the target has been affected by another Redemption recently.",
            "effect": {
                "Effect3Amount": "20",
                "Effect1Amount": "0.1",
                "Effect2Amount": "10",
                "Effect6Amount": "120",
                "Effect9Amount": "0.5",
                "Effect11Amount": "3",
                "Effect4Amount": "0.1",
                "Effect7Amount": "550",
                "Effect8Amount": "5500",
                "Effect10Amount": "8",
                "Effect5Amount": "250"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3107,
            "name": "Redemption"
        },
        "3108": {
            "from": [
                "1052"
            ],
            "description": "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 465,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "SpellDamage"
            ],
            "plaintext": "Increases Ability Power and Cooldown Reduction",
            "image": {
                "full": "3108.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 48
            },
            "sanitizedDescription": "+30 Ability Power UNIQUE Passive: +10% Cooldown Reduction",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3174",
                "3092",
                "3115",
                "3165",
                "3102",
                "3157"
            ],
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "id": 3108,
            "name": "Fiendish Codex"
        },
        "3109": {
            "from": [
                "3067",
                "1031"
            ],
            "description": "<stats>+400 Health<br>+40 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +20 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 12% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>",
            "gold": {
                "total": 2300,
                "sell": 1610,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Armor",
                "Aura",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Partner with an ally to protect each other",
            "image": {
                "full": "3109.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 96
            },
            "sanitizedDescription": "+400 Health +40 Armor +10% Cooldown Reduction UNIQUE Active: Designate an allied champion as your Partner (90 second cooldown). UNIQUE Passive: If your Partner is nearby, gain +20 additional Armor and +15% Movement Speed towards them. UNIQUE Passive: If your Partner is nearby, heal for 12% of the damage your Partner deals to champions and redirect 12% of the damage your Partner takes from champions to you as true damage (healing and damage redirection are reduced by 50% if you are ranged). (Champions can only be linked by one Knight's Vow at a time.)",
            "effect": {
                "Effect3Amount": "0.12",
                "Effect1Amount": "20",
                "Effect2Amount": "0.15",
                "Effect6Amount": "0.5",
                "Effect4Amount": "0.12",
                "Effect7Amount": "1000",
                "Effect5Amount": "90"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 40,
                "FlatHPPoolMod": 400
            },
            "id": 3109,
            "name": "Knight's Vow"
        },
        "3110": {
            "from": [
                "3082",
                "3024"
            ],
            "description": "<stats>+90 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana</mana></stats><br><br><aura>UNIQUE Aura:</aura> Reduces the Attack Speed of nearby enemies by 15%.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Aura",
                "CooldownReduction",
                "Mana"
            ],
            "plaintext": "Massively increases Armor and slows enemy basic attacks",
            "image": {
                "full": "3110.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 144
            },
            "sanitizedDescription": "+90 Armor +20% Cooldown Reduction +400 Mana UNIQUE Aura: Reduces the Attack Speed of nearby enemies by 15%.",
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "-0.15"
            },
            "colloq": "fh",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatArmorMod": 90
            },
            "id": 3110,
            "name": "Frozen Heart"
        },
        "3111": {
            "from": [
                "1001",
                "1033"
            ],
            "description": "<stats>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Boots",
                "SpellBlock",
                "Tenacity"
            ],
            "plaintext": "Increases Movement Speed and reduces duration of disabling effects",
            "image": {
                "full": "3111.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 192
            },
            "sanitizedDescription": "+25 Magic Resist UNIQUE Passive - Enhanced Movement: +45 Movement Speed UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatSpellBlockMod": 25
            },
            "id": 3111,
            "name": "Mercury's Treads"
        },
        "3112": {
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 35
            },
            "description": "<stats>+150 Health<br>+35 Ability Power<br><mana>+10 Mana regen per 5 seconds</mana></stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
            "gold": {
                "total": 950,
                "sell": 380,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Lane"
            ],
            "plaintext": "Good starting item for mages",
            "image": {
                "full": "3112.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 240
            },
            "sanitizedDescription": "+150 Health +35 Ability Power +10 Mana regen per 5 seconds Limited to 1 Guardian's Item.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3112,
            "name": "Guardian's Orb"
        },
        "3113": {
            "from": [
                "1052"
            ],
            "description": "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
            "gold": {
                "total": 850,
                "sell": 595,
                "base": 415,
                "purchasable": true
            },
            "tags": [
                "NonbootsMovement",
                "SpellDamage"
            ],
            "plaintext": "Increases Ability Power and Movement Speed",
            "image": {
                "full": "3113.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 288
            },
            "sanitizedDescription": "+30 Ability Power UNIQUE Passive: +5% Movement Speed",
            "effect": {
                "Effect1Amount": "0.05"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1402",
                "1410",
                "1414",
                "3100",
                "3285",
                "3504",
                "3673"
            ],
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "id": 3113,
            "name": "Aether Wisp"
        },
        "3114": {
            "from": [
                "1004",
                "1004"
            ],
            "description": "<stats><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +8% Heal and Shield Power",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "ManaRegen"
            ],
            "plaintext": "Increases Mana Regeneration and Cooldown Reduction",
            "image": {
                "full": "3114.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 336
            },
            "sanitizedDescription": "+50% Base Mana Regen UNIQUE Passive: +10% Cooldown Reduction UNIQUE Passive: +8% Heal and Shield Power",
            "effect": {
                "Effect1Amount": "-0.1",
                "Effect2Amount": "0.08"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3107",
                "3222",
                "3504"
            ],
            "stats": {},
            "id": 3114,
            "name": "Forbidden Idol"
        },
        "3115": {
            "from": [
                "3101",
                "3108"
            ],
            "description": "<stats>+50% Attack Speed<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "SpellDamage"
            ],
            "plaintext": "Increases Attack Speed, Ability Power, and Cooldown Reduction",
            "image": {
                "full": "3115.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 384
            },
            "sanitizedDescription": "+50% Attack Speed +80 Ability Power UNIQUE Passive: +20% Cooldown Reduction UNIQUE Passive: Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMagicDamageMod": 80,
                "PercentAttackSpeedMod": 0.5
            },
            "id": 3115,
            "name": "Nashor's Tooth"
        },
        "3116": {
            "from": [
                "1026",
                "1052",
                "1028"
            ],
            "description": "<stats>+300 Health<br>+75 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 915,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Slow"
            ],
            "plaintext": "Abilities slow enemies",
            "image": {
                "full": "3116.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 432
            },
            "sanitizedDescription": "+300 Health +75 Ability Power UNIQUE Passive: Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.",
            "effect": {
                "Effect3Amount": "-0.2",
                "Effect1Amount": "-0.2",
                "Effect2Amount": "-0.2",
                "Effect6Amount": "1",
                "Effect4Amount": "1",
                "Effect5Amount": "1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 75
            },
            "id": 3116,
            "name": "Rylai's Crystal Scepter"
        },
        "3117": {
            "from": [
                "1001"
            ],
            "description": "<unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Boots"
            ],
            "plaintext": "Greatly enhances Movement Speed when out of combat",
            "image": {
                "full": "3117.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 0
            },
            "sanitizedDescription": "UNIQUE Passive - Enhanced Movement: +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect6Amount": "0",
                "Effect4Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "25",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 115
            },
            "id": 3117,
            "name": "Boots of Mobility"
        },
        "3122": {
            "from": [
                "1051",
                "1036"
            ],
            "description": "<stats>+20 Attack Damage<br>+10% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike",
                "Damage",
                "OnHit"
            ],
            "plaintext": "Critical Strikes cause your target to bleed",
            "image": {
                "full": "3122.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 48
            },
            "sanitizedDescription": "+20 Attack Damage +10% Critical Strike Chance UNIQUE Passive: Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.",
            "effect": {
                "Effect1Amount": "0.6",
                "Effect2Amount": "3"
            },
            "colloq": "ie",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3104",
                "3185"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatCritChanceMod": 0.1
            },
            "id": 3122,
            "name": "Wicked Hatchet"
        },
        "3123": {
            "from": [
                "1036"
            ],
            "description": "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 3 seconds.",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Overcomes enemies with high health gain",
            "image": {
                "full": "3123.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 96
            },
            "sanitizedDescription": "+15 Attack Damage UNIQUE Passive - Executioner: Physical damage inflicts Grievous Wounds on enemy champions for 3 seconds.",
            "effect": {
                "Effect1Amount": "3"
            },
            "colloq": "grievous",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3033"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15
            },
            "id": 3123,
            "name": "Executioner's Calling"
        },
        "3124": {
            "from": [
                "1026",
                "1043",
                "1037"
            ],
            "description": "<stats>+35 Attack Damage<br>+50 Ability Power<br>+25% Attack Speed</stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 15 magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks grant +8% Attack Speed, +3 Attack Damage, and +4 Ability Power for 5 seconds (stacks up to 6 times). While you have 6 stacks, gain <unlockedPassive>Guinsoo's Rage</unlockedPassive>.<br><br><unlockedPassive>Guinsoo's Rage:</unlockedPassive> Every other basic attack will trigger on hit effects an additional time.",
            "gold": {
                "total": 3600,
                "sell": 2520,
                "base": 875,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "OnHit"
            ],
            "plaintext": "Increases Ability Power and Attack Damage",
            "image": {
                "full": "3124.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 144
            },
            "sanitizedDescription": "+35 Attack Damage +50 Ability Power +25% Attack Speed Passive: Basic attacks deal an additional 15 magic damage on hit. UNIQUE Passive: Basic attacks grant +8% Attack Speed, +3 Attack Damage, and +4 Ability Power for 5 seconds (stacks up to 6 times). While you have 6 stacks, gain Guinsoo's Rage. Guinsoo's Rage: Every other basic attack will trigger on hit effects an additional time.",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "0.08",
                "Effect2Amount": "4",
                "Effect6Amount": "0",
                "Effect9Amount": "1",
                "Effect4Amount": "5",
                "Effect7Amount": "0",
                "Effect8Amount": "15",
                "Effect5Amount": "6"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatMagicDamageMod": 50,
                "PercentAttackSpeedMod": 0.25
            },
            "id": 3124,
            "name": "Guinsoo's Rageblade"
        },
        "3133": {
            "from": [
                "1036",
                "1036"
            ],
            "description": "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "CooldownReduction"
            ],
            "plaintext": "Attack Damage and Cooldown Reduction",
            "image": {
                "full": "3133.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 192
            },
            "sanitizedDescription": "+25 Attack Damage UNIQUE Passive: +10% Cooldown Reduction",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "stacks": 0,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3142",
                "1400",
                "3104",
                "1408",
                "1412",
                "3812",
                "3156",
                "3508",
                "3671"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "id": 3133,
            "name": "Caulfield's Warhammer"
        },
        "3134": {
            "from": [
                "1036",
                "1036"
            ],
            "description": "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat.",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Increases Attack Damage and Lethality",
            "image": {
                "full": "3134.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 240
            },
            "sanitizedDescription": "+25 Attack Damage UNIQUE Passive: +10 Lethality UNIQUE Passive: +20 Movement Speed out of Combat.",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "10",
                "Effect3Amount": "20"
            },
            "stacks": 0,
            "colloq": "lethality",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3142",
                "3814",
                "3147"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "id": 3134,
            "name": "Serrated Dirk"
        },
        "3135": {
            "from": [
                "1026",
                "1052"
            ],
            "description": "<stats>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +35% <a href='TotalMagicPen'>Magic Penetration</a>.",
            "gold": {
                "total": 2650,
                "sell": 1855,
                "base": 1365,
                "purchasable": true
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "plaintext": "Increases magic damage",
            "image": {
                "full": "3135.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 288
            },
            "sanitizedDescription": "+80 Ability Power UNIQUE Passive: +35% Magic Penetration.",
            "effect": {
                "Effect1Amount": "0.35"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMagicDamageMod": 80
            },
            "id": 3135,
            "name": "Void Staff"
        },
        "3136": {
            "from": [
                "1028",
                "1052"
            ],
            "description": "<stats>+25 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Eyes of Pain:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a>",
            "gold": {
                "total": 1500,
                "sell": 1050,
                "base": 665,
                "purchasable": true
            },
            "tags": [
                "Health",
                "MagicPenetration",
                "SpellDamage"
            ],
            "plaintext": "Increases magic damage",
            "image": {
                "full": "3136.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 336
            },
            "sanitizedDescription": "+25 Ability Power +200 Health UNIQUE Passive - Eyes of Pain: +15 Magic Penetration",
            "effect": {
                "Effect1Amount": "15"
            },
            "stacks": 0,
            "colloq": "mask",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3151"
            ],
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 25
            },
            "id": 3136,
            "name": "Haunting Guise"
        },
        "3137": {
            "from": [
                "3140",
                "3101"
            ],
            "description": "<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Active",
                "AttackSpeed",
                "CooldownReduction",
                "NonbootsMovement",
                "SpellBlock"
            ],
            "plaintext": "Activate to remove all debuffs and grant massive Movement Speed",
            "image": {
                "full": "3137.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 384
            },
            "sanitizedDescription": "+50% Attack Speed +45 Magic Resist +10% Cooldown Reduction UNIQUE Active - Quicksilver: Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 45,
                "PercentAttackSpeedMod": 0.5
            },
            "id": 3137,
            "name": "Dervish Blade"
        },
        "3139": {
            "from": [
                "3140",
                "1037",
                "1053"
            ],
            "description": "<stats>+65 Attack Damage<br>+35 Magic Resist<br>+10% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
            "gold": {
                "total": 3600,
                "sell": 2520,
                "base": 525,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "Active",
                "NonbootsMovement"
            ],
            "plaintext": "Activate to remove all crowd control debuffs and grant massive Movement Speed",
            "image": {
                "full": "3139.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 432
            },
            "sanitizedDescription": "+65 Attack Damage +35 Magic Resist +10% Life Steal UNIQUE Active - Quicksilver: Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatPhysicalDamageMod": 65,
                "PercentLifeStealMod": 0.1
            },
            "id": 3139,
            "name": "Mercurial Scimitar"
        },
        "3140": {
            "from": [
                "1033"
            ],
            "description": "<stats>+30 Magic Resist</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs (90 second cooldown).",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Active",
                "SpellBlock"
            ],
            "plaintext": "Activate to remove all crowd control debuffs",
            "image": {
                "full": "3140.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 0
            },
            "sanitizedDescription": "+30 Magic Resist UNIQUE Active - Quicksilver: Removes all crowd control debuffs (90 second cooldown).",
            "effect": {
                "Effect1Amount": "90"
            },
            "colloq": "qss",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3139",
                "3137"
            ],
            "stats": {
                "FlatSpellBlockMod": 30
            },
            "id": 3140,
            "name": "Quicksilver Sash"
        },
        "3142": {
            "from": [
                "3133",
                "3134"
            ],
            "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Activate to greatly increase Movement Speed",
            "image": {
                "full": "3142.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 48
            },
            "sanitizedDescription": "+60 Attack Damage +10% Cooldown Reduction UNIQUE Passive: +15 Lethality UNIQUE Passive: +20 Movement Speed out of Combat UNIQUE Active: Grants +20% Movement Speed for 6 seconds (45 second cooldown).",
            "effect": {
                "Effect3Amount": "0.2",
                "Effect1Amount": "45",
                "Effect2Amount": "15",
                "Effect6Amount": "20",
                "Effect4Amount": "0",
                "Effect5Amount": "6"
            },
            "colloq": "lethality",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 3142,
            "name": "Youmuu's Ghostblade"
        },
        "3143": {
            "from": [
                "1028",
                "3082",
                "1028"
            ],
            "description": "<stats>+350 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive:</unique> -20% damage taken from basic attack critical strikes.<br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second.<br><active>UNIQUE Active:</active> Slows the Movement Speed of nearby enemy units by 55% for 2 seconds (60 second cooldown).",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "Health",
                "Slow"
            ],
            "plaintext": "Greatly increases defenses, activate to slow nearby enemies",
            "image": {
                "full": "3143.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 96
            },
            "sanitizedDescription": "+350 Health +60 Armor UNIQUE Passive: -20% damage taken from basic attack critical strikes. UNIQUE Passive - Cold Steel: When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 second. UNIQUE Active: Slows the Movement Speed of nearby enemy units by 55% for 2 seconds (60 second cooldown).",
            "effect": {
                "Effect3Amount": "-0.55",
                "Effect1Amount": "2",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0.15",
                "Effect4Amount": "1",
                "Effect7Amount": "0.3",
                "Effect5Amount": "-0.15"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 60,
                "FlatHPPoolMod": 350
            },
            "id": 3143,
            "name": "Randuin's Omen"
        },
        "3144": {
            "from": [
                "1053",
                "1036"
            ],
            "description": "<stats>+25 Attack Damage<br>+10% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
            "gold": {
                "total": 1500,
                "sell": 1050,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Damage",
                "LifeSteal",
                "Slow"
            ],
            "plaintext": "Activate to deal magic damage and slow target champion",
            "image": {
                "full": "3144.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 144
            },
            "sanitizedDescription": "+25 Attack Damage +10% Life Steal UNIQUE Active: Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
            "effect": {
                "Effect1Amount": "-0.25",
                "Effect2Amount": "2",
                "Effect3Amount": "90",
                "Effect4Amount": "100"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "into": [
                "3146",
                "3153"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "PercentLifeStealMod": 0.1
            },
            "id": 3144,
            "name": "Bilgewater Cutlass"
        },
        "3145": {
            "from": [
                "1052",
                "1052"
            ],
            "description": "<stats>+40 Ability Power</stats><br><br><unique>UNIQUE Passive - Magic Bolt:</unique> Damaging an enemy champion with a basic attack shocks them for <scaleLevel>50 - 125</scaleLevel> bonus magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Magic Bolt's cooldown is reduced by Active Item cooldown reduction.<br><br><rules>(Damage scales based on level. Hextech effects can trigger other item spell effects.)</rules>",
            "gold": {
                "total": 1050,
                "sell": 735,
                "base": 180,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Increases Ability Power. Deal bonus magic damage on attack periodically.",
            "image": {
                "full": "3145.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 192
            },
            "sanitizedDescription": "+40 Ability Power UNIQUE Passive - Magic Bolt: Damaging an enemy champion with a basic attack shocks them for 50 - 125 bonus magic damage (40 second cooldown, shared with other Hextech items). Magic Bolt's cooldown is reduced by Active Item cooldown reduction. (Damage scales based on level. Hextech effects can trigger other item spell effects.)",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "50",
                "Effect3Amount": "0",
                "Effect4Amount": "125",
                "Effect5Amount": "40"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3146",
                "3152",
                "3030"
            ],
            "stats": {
                "FlatMagicDamageMod": 40
            },
            "id": 3145,
            "name": "Hextech Revolver"
        },
        "3146": {
            "from": [
                "3144",
                "3145"
            ],
            "description": "<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals <scaleLevel>175 - 250</scaleLevel> (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Damage",
                "LifeSteal",
                "Slow",
                "SpellDamage",
                "SpellVamp"
            ],
            "plaintext": "Increases Attack Damage and Ability Power, activate to slow a target",
            "image": {
                "full": "3146.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 240
            },
            "sanitizedDescription": "+40 Attack Damage +80 Ability Power UNIQUE Passive: Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage. UNIQUE Active - Lightning Bolt: Deals 175 - 250 (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other Hextech items).",
            "effect": {
                "Effect1Amount": "0.15",
                "Effect2Amount": "40",
                "Effect3Amount": "175",
                "Effect4Amount": "250"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 4,
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatMagicDamageMod": 80
            },
            "id": 3146,
            "name": "Hextech Gunblade"
        },
        "3147": {
            "from": [
                "3134",
                "1038"
            ],
            "description": "<stats>+65 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat.<br><unique>UNIQUE Passive - Nightstalker:</unique> After being unseen for at least 1 second, your next Basic Attack against an enemy champion will deal 75 (+200% Lethality) true damage on-hit (lasts for 4 seconds after being seen by an enemy champion).<br><unique>UNIQUE Passive - Blackout:</unique> When spotted by an enemy ward, causes a blackout for 8 seconds, revealing invisible traps and revealing / disabling wards (90 second cooldown).",
            "gold": {
                "total": 3250,
                "sell": 2275,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Deals additional true damage on-hit and provides true sight periodically",
            "image": {
                "full": "3147.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 288
            },
            "sanitizedDescription": "+65 Attack Damage UNIQUE Passive: +15 Lethality UNIQUE Passive: +20 Movement Speed out of Combat. UNIQUE Passive - Nightstalker: After being unseen for at least 1 second, your next Basic Attack against an enemy champion will deal 75 (+200% Lethality) true damage on-hit (lasts for 4 seconds after being seen by an enemy champion). UNIQUE Passive - Blackout: When spotted by an enemy ward, causes a blackout for 8 seconds, revealing invisible traps and revealing / disabling wards (90 second cooldown).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "15",
                "Effect2Amount": "20",
                "Effect6Amount": "2",
                "Effect4Amount": "90",
                "Effect5Amount": "75"
            },
            "colloq": "lethality",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 65
            },
            "id": 3147,
            "name": "Duskblade of Draktharr"
        },
        "3151": {
            "from": [
                "3136",
                "1026"
            ],
            "description": "<stats>+80 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Eyes of Pain:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a><br><unique>UNIQUE Passive:</unique> Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 2% of their current Health per second. Burn damage is doubled against <a href='MovementImpaired'>movement-impaired</a> units.",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Health",
                "MagicPenetration",
                "SpellDamage"
            ],
            "plaintext": "Spell damage burns enemies for a portion of their Health",
            "image": {
                "full": "3151.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 336
            },
            "sanitizedDescription": "+80 Ability Power +300 Health UNIQUE Passive - Eyes of Pain: +15 Magic Penetration UNIQUE Passive: Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 2% of their current Health per second. Burn damage is doubled against movement-impaired units.",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "0.02",
                "Effect3Amount": "3",
                "Effect4Amount": "100",
                "Effect5Amount": "2"
            },
            "stacks": 0,
            "colloq": "mask",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80
            },
            "id": 3151,
            "name": "Liandry's Torment"
        },
        "3152": {
            "from": [
                "3145",
                "3067"
            ],
            "description": "<stats>+300 Health<br>+60 Ability Power<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Fire Bolt:</unique> Dash forward and unleash a nova of fire bolts that deal <scaleLevel>75 - 150</scaleLevel> (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.<br><br><rules>(This dash cannot pass through terrain.)</rules>",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Activate to dash forward and unleash a fiery explosion",
            "image": {
                "full": "3152.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 384
            },
            "sanitizedDescription": "+300 Health +60 Ability Power +10% Cooldown Reduction UNIQUE Active - Fire Bolt: Dash forward and unleash a nova of fire bolts that deal 75 - 150 (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other Hextech items). Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt. (This dash cannot pass through terrain.)",
            "effect": {
                "Effect3Amount": "40",
                "Effect1Amount": "0.12",
                "Effect2Amount": "0.04",
                "Effect6Amount": "0.1",
                "Effect9Amount": "0.5",
                "Effect4Amount": "75",
                "Effect7Amount": "0.25",
                "Effect8Amount": "40",
                "Effect5Amount": "150"
            },
            "colloq": "rocket belt;",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "id": 3152,
            "name": "Hextech Protobelt-01"
        },
        "3153": {
            "from": [
                "3144",
                "1043"
            ],
            "description": "<stats>+40 Attack Damage<br>+25% Attack Speed<br>+12% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health as bonus physical damage on hit.<br><active>UNIQUE Active:</active> Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown).<br><br><font size='14' color='#8c8c8c'>Minimum bonus physical damage dealt is 15.<br>Maximum bonus physical damage dealt to monsters and minions is 60.<br>User's Life Steal is applied to bonus physical damage dealt.</font>",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 900,
                "purchasable": true
            },
            "tags": [
                "Active",
                "AttackSpeed",
                "Damage",
                "LifeSteal",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Deals damage based on target's Health, can steal Movement Speed",
            "image": {
                "full": "3153.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 432
            },
            "sanitizedDescription": "+40 Attack Damage +25% Attack Speed +12% Life Steal UNIQUE Passive: Basic attacks deal 8% of the target's current Health as bonus physical damage on hit. UNIQUE Active: Deals 100 magic damage to target champion and steals 25% of their Movement Speed for 3 seconds (90 second cooldown). Minimum bonus physical damage dealt is 15. Maximum bonus physical damage dealt to monsters and minions is 60. User's Life Steal is applied to bonus physical damage dealt.",
            "effect": {
                "Effect1Amount": "0.08"
            },
            "colloq": "brk;bork;bork;bork;botrk",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 4,
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "PercentAttackSpeedMod": 0.25,
                "PercentLifeStealMod": 0.12
            },
            "id": 3153,
            "name": "Blade of the Ruined King"
        },
        "3155": {
            "from": [
                "1036",
                "1033"
            ],
            "description": "<stats>+20 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "SpellBlock"
            ],
            "plaintext": "Increases Attack Damage and Magic Resist",
            "image": {
                "full": "3155.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 0
            },
            "sanitizedDescription": "+20 Attack Damage +35 Magic Resist UNIQUE Passive - Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "0.3",
                "Effect2Amount": "110",
                "Effect6Amount": "100",
                "Effect4Amount": "90",
                "Effect7Amount": "10",
                "Effect5Amount": "280"
            },
            "stacks": 0,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3156"
            ],
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatPhysicalDamageMod": 20
            },
            "id": 3155,
            "name": "Hexdrinker"
        },
        "3156": {
            "from": [
                "3155",
                "3133"
            ],
            "description": "<stats>+50 Attack Damage<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs magic damage equal to 300 + 1 per bonus Magic Resistance for 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.",
            "gold": {
                "total": 3250,
                "sell": 2275,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "SpellVamp"
            ],
            "plaintext": "Grants bonus Attack Damage when Health is low",
            "image": {
                "full": "3156.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 48
            },
            "sanitizedDescription": "+50 Attack Damage +45 Magic Resist +10% Cooldown Reduction UNIQUE Passive - Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs magic damage equal to 300 + 1 per bonus Magic Resistance for 5 seconds (90 second cooldown). Lifegrip: When Lifeline triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.",
            "effect": {
                "Effect3Amount": "0.3",
                "Effect1Amount": "1",
                "Effect2Amount": "35",
                "Effect6Amount": "90",
                "Effect9Amount": "0.1",
                "Effect4Amount": "300",
                "Effect7Amount": "20",
                "Effect8Amount": "0",
                "Effect10Amount": "0.1",
                "Effect5Amount": "5"
            },
            "stacks": 0,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 45,
                "FlatPhysicalDamageMod": 50
            },
            "id": 3156,
            "name": "Maw of Malmortius"
        },
        "3157": {
            "from": [
                "3191",
                "3108"
            ],
            "description": "<stats>+70 Ability Power<br>+45 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Activate to become invincible but unable to take actions",
            "image": {
                "full": "3157.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 96
            },
            "sanitizedDescription": "+70 Ability Power +45 Armor +10% Cooldown Reduction UNIQUE Active - Stasis: Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            },
            "colloq": "zhg;zonyas",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 45,
                "FlatMagicDamageMod": 70
            },
            "id": 3157,
            "name": "Zhonya's Hourglass"
        },
        "3158": {
            "from": [
                "1001"
            ],
            "description": "<unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive:</unique> Reduces Summoner Spell cooldowns by 10%<br><br><br><rules><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''</font></rules>",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Boots",
                "CooldownReduction"
            ],
            "plaintext": "Increases Movement Speed and Cooldown Reduction",
            "image": {
                "full": "3158.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 144
            },
            "sanitizedDescription": "UNIQUE Passive: +10% Cooldown Reduction UNIQUE Passive - Enhanced Movement: +45 Movement Speed UNIQUE Passive: Reduces Summoner Spell cooldowns by 10% ''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''",
            "effect": {
                "Effect1Amount": "-0.1",
                "Effect2Amount": "0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "id": 3158,
            "name": "Ionian Boots of Lucidity"
        },
        "3165": {
            "from": [
                "3108",
                "1052",
                "3802"
            ],
            "description": "<stats>+100 Ability Power<br><mana>+400 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Dealing magic damage to champions below 35% Health inflicts <a href='GrievousWounds'>Grievous Wounds</a> for 8 seconds.<br><unique>UNIQUE Passive:</unique> Kills and Assists restore 20% of your maximum Mana.",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 665,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Greatly increases Ability Power and Cooldown Reduction",
            "image": {
                "full": "3165.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 192
            },
            "sanitizedDescription": "+100 Ability Power +400 Mana UNIQUE Passive: +20% Cooldown Reduction UNIQUE Passive: Dealing magic damage to champions below 35% Health inflicts Grievous Wounds for 8 seconds. UNIQUE Passive: Kills and Assists restore 20% of your maximum Mana.",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "35",
                "Effect3Amount": "8",
                "Effect4Amount": "0.2"
            },
            "colloq": "nmst;grievous",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatMagicDamageMod": 100
            },
            "id": 3165,
            "name": "Morellonomicon"
        },
        "3170": {
            "from": [
                "3191",
                "1057"
            ],
            "description": "<stats>+50 Ability Power<br>+50 Armor<br>+50 Magic Resist</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 580,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "SpellBlock",
                "SpellDamage",
                "Tenacity"
            ],
            "plaintext": "Improves defense and reduces duration of disabling effects",
            "image": {
                "full": "3170.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 240
            },
            "sanitizedDescription": "+50 Ability Power +50 Armor +50 Magic Resist UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.",
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatArmorMod": 50,
                "FlatMagicDamageMod": 50
            },
            "id": 3170,
            "name": "Moonflair Spellblade"
        },
        "3174": {
            "from": [
                "3108",
                "3028"
            ],
            "description": "<stats>+30 Ability Power<br>+30 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> Gain 25% of the <a href='premitigation'><font color='#6666FF'><u>premitigation</u></font></a> damage dealt to champions as Blood Charges, up to <scaleLevel>100 - 250</scaleLevel>  max. Healing or shielding another ally consumes charges equal to 100% of the heal or shield value, healing the ally for that amount.<br><unique>UNIQUE Passive - Dissonance:</unique> Grants 5 ability power per 25% Base Mana Regen you have. Disables <unique>Harmony</unique> on your other items.<br><br><rules>(Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)</rules>",
            "gold": {
                "total": 2100,
                "sell": 1470,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Deal damage to empower your heals and shields",
            "image": {
                "full": "3174.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 288
            },
            "sanitizedDescription": "+30 Ability Power +30 Magic Resist +10% Cooldown Reduction +100% Base Mana Regen UNIQUE Passive: Gain 25% of the premitigation damage dealt to champions as Blood Charges, up to 100 - 250 max. Healing or shielding another ally consumes charges equal to 100% of the heal or shield value, healing the ally for that amount. UNIQUE Passive - Dissonance: Grants 5 ability power per 25% Base Mana Regen you have. Disables Harmony on your other items. (Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "10",
                "Effect2Amount": "0",
                "Effect14Amount": "90",
                "Effect12Amount": "600",
                "Effect9Amount": "1",
                "Effect11Amount": "0.25",
                "Effect4Amount": "0",
                "Effect6Amount": "0.25",
                "Effect7Amount": "100",
                "Effect8Amount": "250",
                "Effect13Amount": "8",
                "Effect10Amount": "1",
                "Effect5Amount": "5"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 30
            },
            "id": 3174,
            "name": "Athene's Unholy Grail"
        },
        "3175": {
            "stats": {},
            "description": "<unique>UNIQUE Active - Bonetooth Totem:</unique> Places a Stealth Ward that lasts 180 seconds (90 Second cooldown). Limit 3 Stealth Wards on the map per player.<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Rengar gains the movement speed bonus of Thrill of the Hunt while he is stealthed.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3175.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 336
            },
            "sanitizedDescription": "UNIQUE Active - Bonetooth Totem: Places a Stealth Ward that lasts 180 seconds (90 Second cooldown). Limit 3 Stealth Wards on the map per player. UNIQUE Passive - Mementos of the Hunt: Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy. 3 Trophies: Rengar gains 25 Movement Speed whilst out of combat or in brush. 6 Trophies: Increases the range of Rengar's Leap by 125. 12 Trophies: Thrill of the Hunt's duration is increased by 5 seconds. 20 Trophies: Rengar gains the movement speed bonus of Thrill of the Hunt while he is stealthed.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect3Amount": "5",
                "Effect4Amount": "180",
                "Effect5Amount": "90"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3175,
            "name": "Head of Kha'Zix"
        },
        "3181": {
            "from": [
                "1037",
                "1053"
            ],
            "description": "<stats>+45 Attack Damage<br>+10% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 625,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "plaintext": "Greatly increases Attack Damage and Life Steal",
            "image": {
                "full": "3181.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 384
            },
            "sanitizedDescription": "+45 Attack Damage +10% Life Steal UNIQUE Passive: Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "0.01",
                "Effect3Amount": "8",
                "Effect4Amount": "5"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "PercentLifeStealMod": 0.1
            },
            "id": 3181,
            "name": "Sanguine Blade"
        },
        "3184": {
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatHPPoolMod": 150,
                "PercentLifeStealMod": 0.1
            },
            "description": "<stats>+150 Health<br>+20 Attack Damage<br>+10% Life Steal</stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
            "gold": {
                "total": 950,
                "sell": 380,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Lane"
            ],
            "plaintext": "Good starting item for attackers",
            "image": {
                "full": "3184.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 432
            },
            "sanitizedDescription": "+150 Health +20 Attack Damage +10% Life Steal Limited to 1 Guardian's Item.",
            "colloq": "dblade",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3184,
            "name": "Guardian's Hammer"
        },
        "3185": {
            "from": [
                "3122",
                "1018"
            ],
            "description": "<stats>+30 Attack Damage<br>+30% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.<br><unique>UNIQUE Passive - Trap Detection:</unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
            "gold": {
                "total": 2350,
                "sell": 1645,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Active",
                "CriticalStrike",
                "Damage",
                "OnHit",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Critical Strikes cause your target to bleed and be revealed",
            "image": {
                "full": "3185.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 0
            },
            "sanitizedDescription": "+30 Attack Damage +30% Critical Strike Chance UNIQUE Passive: Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration. UNIQUE Passive - Trap Detection: Nearby stealthed enemy traps are revealed. UNIQUE Active - Hunter's Sight: A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0.9",
                "Effect2Amount": "3",
                "Effect6Amount": "60",
                "Effect4Amount": "5",
                "Effect5Amount": "3"
            },
            "colloq": "lb",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatCritChanceMod": 0.3
            },
            "id": 3185,
            "name": "The Lightbringer"
        },
        "3187": {
            "from": [
                "3024",
                "3067"
            ],
            "description": "<stats>+225 Health<br>+250 Mana<br>+25 Armor<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Trap Detection:</unique> Grants <font color='#ee91d7'>True Sight</font>  of nearby enemy traps.<br><active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions in the area for 3 seconds (60 second cooldown).",
            "gold": {
                "total": 2050,
                "sell": 1435,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "CooldownReduction",
                "Health",
                "Mana",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Activate to reveal a nearby area of the map",
            "image": {
                "full": "3187.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 48
            },
            "sanitizedDescription": "+225 Health +250 Mana +25 Armor +20% Cooldown Reduction UNIQUE Passive - Trap Detection: Grants True Sight of nearby enemy traps. UNIQUE Active - Hunter's Sight: An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions in the area for 3 seconds (60 second cooldown).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0",
                "Effect6Amount": "60",
                "Effect4Amount": "5",
                "Effect5Amount": "3"
            },
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 25,
                "FlatHPPoolMod": 225
            },
            "id": 3187,
            "name": "Arcane Sweeper"
        },
        "3190": {
            "from": [
                "3105",
                "1033"
            ],
            "description": "<stats>+30 Armor<br>+60 Magic Resist</stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 38 (+22 per level) <scaleHealth>(+2%~36% of your bonus health)</scaleHealth> damage (90 second cooldown).<br><br><rules>Shield per level uses the higher of your level or the target's level.<br>Shield ratio scales with your level.<br>Shield amount is reduced to 50% if the target has been affected by another Locket of the Iron Solari in the last 8 seconds.</rules>",
            "gold": {
                "total": 2200,
                "sell": 1540,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active"
            ],
            "plaintext": "Activate to shield nearby allies from damage",
            "image": {
                "full": "3190.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 96
            },
            "sanitizedDescription": "+30 Armor +60 Magic Resist UNIQUE Active: Grants a decaying shield to nearby allied champions for 2.5 seconds that absorbs up to 38 (+22 per level) (+2%~36% of your bonus health) damage (90 second cooldown). Shield per level uses the higher of your level or the target's level. Shield ratio scales with your level. Shield amount is reduced to 50% if the target has been affected by another Locket of the Iron Solari in the last 8 seconds.",
            "effect": {
                "Effect3Amount": "2.5",
                "Effect1Amount": "38",
                "Effect2Amount": "22",
                "Effect6Amount": "90",
                "Effect9Amount": "0.36",
                "Effect4Amount": "0.5",
                "Effect7Amount": "0",
                "Effect8Amount": "0.02",
                "Effect5Amount": "8"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatArmorMod": 30
            },
            "id": 3190,
            "name": "Locket of the Iron Solari"
        },
        "3191": {
            "from": [
                "1029",
                "1052",
                "1029"
            ],
            "description": "<stats>+30 Armor<br>+20 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 165,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "SpellDamage"
            ],
            "plaintext": "Increases Armor and Ability Power",
            "image": {
                "full": "3191.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 144
            },
            "sanitizedDescription": "+30 Armor +20 Ability Power UNIQUE Passive: Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "30"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3090",
                "3170",
                "3157"
            ],
            "stats": {
                "FlatArmorMod": 30,
                "FlatMagicDamageMod": 20
            },
            "id": 3191,
            "name": "Seeker's Armguard"
        },
        "3193": {
            "from": [
                "1031",
                "1057"
            ],
            "description": "<stats>+40 Armor<br>+40 Magic Resist</stats></stats><br><br><unique>UNIQUE Passive - Stone Skin:</unique> If 3+ enemy champions are nearby, grants 40 bonus Armor and Magic Resist.<br><active>UNIQUE Active - Metallicize:</active> Increases Health by 40% and increases champion size, but reduces damage dealt by 60% for 4 seconds (90 second cooldown). If Stone Skin is active, the Health increase becomes 100% instead.",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 980,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor"
            ],
            "plaintext": "Greatly increases defense near multiple enemies.",
            "image": {
                "full": "3193.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 192
            },
            "sanitizedDescription": "+40 Armor +40 Magic Resist UNIQUE Passive - Stone Skin: If 3+ enemy champions are nearby, grants 40 bonus Armor and Magic Resist. UNIQUE Active - Metallicize: Increases Health by 40% and increases champion size, but reduces damage dealt by 60% for 4 seconds (90 second cooldown). If Stone Skin is active, the Health increase becomes 100% instead.",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "40",
                "Effect2Amount": "850",
                "Effect6Amount": "0.4",
                "Effect9Amount": "0.25",
                "Effect11Amount": "1",
                "Effect4Amount": "4",
                "Effect7Amount": "0.07",
                "Effect8Amount": "1",
                "Effect10Amount": "90",
                "Effect5Amount": "0.6"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "id": 3193,
            "name": "Gargoyle Stoneplate"
        },
        "3194": {
            "from": [
                "1033",
                "3211",
                "1006"
            ],
            "description": "<stats>+300 Health<br>+55 Magic Resist<br>+100% Base Health Regeneration <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Taking magic damage from a spell or effect reduces all subsequent magic damage from that same spell or effect by 15% for 4 seconds.",
            "gold": {
                "total": 2800,
                "sell": 1960,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "CooldownReduction"
            ],
            "plaintext": "Reduces damage from repeated spells and effects.",
            "image": {
                "full": "3194.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 240
            },
            "sanitizedDescription": "+300 Health +55 Magic Resist +100% Base Health Regeneration +10% Cooldown Reduction UNIQUE Passive: Taking magic damage from a spell or effect reduces all subsequent magic damage from that same spell or effect by 15% for 4 seconds.",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "4",
                "Effect3Amount": "25"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatHPPoolMod": 300
            },
            "id": 3194,
            "name": "Adaptive Helm"
        },
        "3196": {
            "from": [
                "3200"
            ],
            "description": "<stats>+3 Ability Power per level<br>+15 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
            "gold": {
                "total": 1250,
                "sell": 875,
                "base": 1250,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "SpellDamage"
            ],
            "plaintext": "Allows Viktor to improve an ability of his choice",
            "image": {
                "full": "3196.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 288
            },
            "sanitizedDescription": "+3 Ability Power per level +15 Mana per level UNIQUE Passive - Progress: Viktor can upgrade one of his basic spells.",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "15"
            },
            "colloq": "viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "requiredChampion": "Viktor",
            "into": [
                "3197"
            ],
            "stats": {},
            "id": 3196,
            "name": "The Hex Core mk-1"
        },
        "3197": {
            "from": [
                "3196"
            ],
            "description": "<stats>+6 Ability Power per level<br>+20 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
            "gold": {
                "total": 2250,
                "sell": 1575,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "SpellDamage"
            ],
            "plaintext": "Allows Viktor to improve an ability of his choice",
            "image": {
                "full": "3197.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 336
            },
            "sanitizedDescription": "+6 Ability Power per level +20 Mana per level UNIQUE Passive - Progress: Viktor can upgrade one of his basic spells.",
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "20"
            },
            "colloq": "viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "requiredChampion": "Viktor",
            "into": [
                "3198"
            ],
            "stats": {},
            "id": 3197,
            "name": "The Hex Core mk-2"
        },
        "3198": {
            "from": [
                "3197"
            ],
            "description": "<stats>+10 Ability Power per level<br>+25 Mana per level</stats><br><br><unique>UNIQUE Passive - Glorious Evolution:</unique> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "SpellDamage"
            ],
            "plaintext": "Allows Viktor to improve an ability of his choice",
            "image": {
                "full": "3198.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 384
            },
            "sanitizedDescription": "+10 Ability Power per level +25 Mana per level UNIQUE Passive - Glorious Evolution: Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
            "effect": {
                "Effect1Amount": "10",
                "Effect2Amount": "25"
            },
            "colloq": "viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 4,
            "requiredChampion": "Viktor",
            "stats": {},
            "id": 3198,
            "name": "Perfect Hex Core"
        },
        "3200": {
            "stats": {},
            "description": "<stats>+1 Ability Power per level<br>+10 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> This item can be upgraded three times to enhance Viktor's basic abilities.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "plaintext": "Increases Ability Power and can be upgraded to improve Viktor's abilities",
            "image": {
                "full": "3200.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 432
            },
            "sanitizedDescription": "+1 Ability Power per level +10 Mana per level UNIQUE Passive - Progress: This item can be upgraded three times to enhance Viktor's basic abilities.",
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "10"
            },
            "inStore": false,
            "colloq": "viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Viktor",
            "into": [
                "3196"
            ],
            "id": 3200,
            "name": "Prototype Hex Core"
        },
        "3211": {
            "from": [
                "1028",
                "1033"
            ],
            "description": "<stats>+250 Health<br>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellBlock"
            ],
            "plaintext": "Improves defense and grants regeneration upon being damaged",
            "image": {
                "full": "3211.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 0
            },
            "sanitizedDescription": "+250 Health +25 Magic Resist UNIQUE Passive: Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
            "effect": {
                "Effect1Amount": "1.5",
                "Effect2Amount": "10"
            },
            "colloq": "hat",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3065",
                "3001",
                "3194"
            ],
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatHPPoolMod": 250
            },
            "id": 3211,
            "name": "Spectre's Cowl"
        },
        "3222": {
            "from": [
                "3028",
                "3114"
            ],
            "description": "<stats>+40 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Heal and Shield Power<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><active>UNIQUE Active:</active> Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown). <br><br>Cleansing an effect grants the ally 40% movement speed for 2 seconds.",
            "gold": {
                "total": 2100,
                "sell": 1470,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "ManaRegen",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Activate to remove all disabling effects from an allied champion",
            "image": {
                "full": "3222.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 48
            },
            "sanitizedDescription": "+40 Magic Resist +10% Cooldown Reduction +100% Base Mana Regen UNIQUE Passive: +20% Heal and Shield Power UNIQUE Passive - Harmony: Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen. UNIQUE Active: Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown). Cleansing an effect grants the ally 40% movement speed for 2 seconds.",
            "effect": {
                "Effect3Amount": "0.5",
                "Effect1Amount": "2",
                "Effect2Amount": "5",
                "Effect6Amount": "8",
                "Effect12Amount": "2",
                "Effect9Amount": "1",
                "Effect11Amount": "0.2",
                "Effect4Amount": "0.25",
                "Effect7Amount": "90",
                "Effect8Amount": "1",
                "Effect13Amount": "120",
                "Effect10Amount": "0.4",
                "Effect5Amount": "600"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 40
            },
            "id": 3222,
            "name": "Mikael's Crucible"
        },
        "3252": {
            "from": [
                "1036"
            ],
            "description": "<stats>+10 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><unique>UNIQUE Passive:</unique> After poaching 3 large monsters from the enemy jungle (50 second cooldown), transforms into a Serrated Dirk.",
            "gold": {
                "total": 600,
                "sell": 420,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Transforms into a Serrated Dirk after poaching in the enemy jungle.",
            "image": {
                "full": "3252.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 96
            },
            "sanitizedDescription": "+10 Attack Damage UNIQUE Passive: +20 Movement Speed out of Combat UNIQUE Passive: After poaching 3 large monsters from the enemy jungle (50 second cooldown), transforms into a Serrated Dirk.",
            "effect": {
                "Effect1Amount": "100",
                "Effect2Amount": "15",
                "Effect3Amount": "20",
                "Effect4Amount": "50"
            },
            "stacks": 0,
            "colloq": "serrated dirk;lethality",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "id": 3252,
            "name": "Poacher's Dirk"
        },
        "3285": {
            "from": [
                "1058",
                "3113"
            ],
            "description": "<stats>+100 Ability Power<br>+10% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
            "gold": {
                "total": 3200,
                "sell": 2240,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "NonbootsMovement",
                "OnHit",
                "SpellDamage"
            ],
            "plaintext": "Movement and casting builds charges that release chain lightning on next spell hit",
            "image": {
                "full": "3285.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 144
            },
            "sanitizedDescription": "+100 Ability Power +10% Movement Speed UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
            "effect": {
                "Effect3Amount": "4",
                "Effect1Amount": "100",
                "Effect2Amount": "100",
                "Effect6Amount": "10",
                "Effect4Amount": "0.1",
                "Effect5Amount": "35"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.1,
                "FlatMagicDamageMod": 100
            },
            "id": 3285,
            "name": "Luden's Echo"
        },
        "3301": {
            "stats": {},
            "description": "<stats>+5% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Enemy minions killed by your allies sometimes drop coins that give either <font color='#D4AF37'>20</font> gold or <font color='#44DDFF'>8%</font> missing mana (minimum 15). Cannon minions always drop coins.<hr><passive>QUEST:</passive> Earn 650 gold using this item and upgrade to <font color='#CFBF84'>Nomad's Medallion</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Favor</font> is upgraded to <font color='#CFBF84'><a href='coinlinequestreward'>Emperor's Favor</a></font> and you receive an <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir Of Skill</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>",
            "gold": {
                "total": 350,
                "sell": 140,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "ManaRegen",
                "GoldPer",
                "CooldownReduction",
                "Lane"
            ],
            "plaintext": "Grants gold and mana when nearby minions die that you didn't kill",
            "image": {
                "full": "3301.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 192
            },
            "sanitizedDescription": "+5% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Favor: Enemy minions killed by your allies sometimes drop coins that give either 20 gold or 8% missing mana (minimum 15). Cannon minions always drop coins. QUEST: Earn 650 gold using this item and upgrade to Nomad's Medallion. REWARD: Favor is upgraded to Emperor's Favor and you receive an Elixir Of Skill. Limited to 1 Gold Income Item. ''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "20",
                "Effect2Amount": "13",
                "Effect6Amount": "0",
                "Effect12Amount": "0.08",
                "Effect9Amount": "0",
                "Effect11Amount": "30",
                "Effect4Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3096"
            ],
            "id": 3301,
            "name": "Ancient Coin"
        },
        "3302": {
            "stats": {
                "FlatHPPoolMod": 75
            },
            "description": "<stats>+75 Health<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges.<hr><passive>QUEST:</passive> Earn 650 gold using this item and upgrade to <font color='#CFBF84'>Targon's Brace</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 350,
                "sell": 140,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Aura",
                "GoldPer",
                "Health",
                "Lane"
            ],
            "plaintext": "Kill minions periodically to heal and grant gold to a nearby ally",
            "image": {
                "full": "3302.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 240
            },
            "sanitizedDescription": "+75 Health +2 Gold per 10 seconds UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges. QUEST: Earn 650 gold using this item and upgrade to Targon's Brace. REWARD: Shield Battery, a permanent shield that regenerates slowly outside of combat. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "195",
                "Effect2Amount": "15",
                "Effect6Amount": "0",
                "Effect12Amount": "30",
                "Effect9Amount": "0",
                "Effect11Amount": "650",
                "Effect4Amount": "5",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "2",
                "Effect10Amount": "0",
                "Effect5Amount": "40"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3097"
            ],
            "id": 3302,
            "name": "Relic Shield"
        },
        "3303": {
            "stats": {
                "FlatMagicDamageMod": 5
            },
            "description": "<stats>+5 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Damaging spells and attacks against champions or buildings deal 10 additional damage and grant 8 Gold. This can occur up to 3 times every 30 seconds. Killing minions slows Tribute generation.<hr><passive>QUEST:</passive> Earn 650 gold using this item and upgrade to <font color='#CFBF84'>Frostfang</font>.<br><passive>REWARD:</passive> <font color='#CFBF84'>Tribute</font> is upgraded into <font color='#CFBF84'><a href='frostqueenslinequestreward'>Queen's Tribute</a></font>.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 350,
                "sell": 140,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Grants gold when you damage enemies",
            "image": {
                "full": "3303.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 288
            },
            "sanitizedDescription": "+5 Ability Power +2 Gold per 10 seconds +25% Base Mana Regen UNIQUE Passive - Tribute: Damaging spells and attacks against champions or buildings deal 10 additional damage and grant 8 Gold. This can occur up to 3 times every 30 seconds. Killing minions slows Tribute generation. QUEST: Earn 650 gold using this item and upgrade to Frostfang. REWARD: Tribute is upgraded into Queen's Tribute. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "6",
                "Effect16Amount": "0",
                "Effect15Amount": "0",
                "Effect1Amount": "10",
                "Effect2Amount": "8",
                "Effect19Amount": "1",
                "Effect14Amount": "0",
                "Effect17Amount": "650",
                "Effect12Amount": "0",
                "Effect9Amount": "0",
                "Effect11Amount": "0",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "0",
                "Effect10Amount": "0",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3098"
            ],
            "id": 3303,
            "name": "Spellthief's Edge"
        },
        "3340": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>60 - 120</scaleLevel> seconds. <br><br>Stores one charge every <scaleLevel>180 - 90</scaleLevel> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player. Switching to a <font color='#BBFFFF'>Lens</font> type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Periodically place a Stealth Ward",
            "image": {
                "full": "3340.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 336
            },
            "sanitizedDescription": "Limited to 1 Trinket. Active: Consume a charge to place an invisible Stealth Ward which reveals the surrounding area for 60 - 120 seconds. Stores one charge every 180 - 90 seconds, up to 2 maximum charges. Ward duration and recharge time gradually improve with level. (Limit 3 Stealth Wards on the map per player. Switching to a Lens type trinket will disable Trinket use for 120 seconds.)",
            "effect": {
                "Effect3Amount": "120",
                "Effect1Amount": "60",
                "Effect2Amount": "180",
                "Effect6Amount": "9",
                "Effect4Amount": "90",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "2"
            },
            "colloq": "yellow;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3340,
            "name": "Warding Totem (Trinket)"
        },
        "3341": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Scans an area for 6 seconds, warning against hidden hostile units and revealing invisible traps and revealing / disabling wards (90 to 60 second cooldown).<br><br>Cast range and sweep radius gradually improve with level.<br><br><rules>(Switching to a <font color='#BBFFFF'>Totem</font>-type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Jungle",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Detects and disables nearby invisible wards and traps",
            "image": {
                "full": "3341.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 384
            },
            "sanitizedDescription": "Limited to 1 Trinket. Active: Scans an area for 6 seconds, warning against hidden hostile units and revealing invisible traps and revealing / disabling wards (90 to 60 second cooldown). Cast range and sweep radius gradually improve with level. (Switching to a Totem-type trinket will disable Trinket use for 120 seconds.)",
            "effect": {
                "Effect3Amount": "400",
                "Effect1Amount": "6",
                "Effect2Amount": "90",
                "Effect6Amount": "9",
                "Effect9Amount": "60",
                "Effect11Amount": "575",
                "Effect4Amount": "60",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect10Amount": "450",
                "Effect5Amount": "1500"
            },
            "colloq": "red;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3341,
            "name": "Sweeping Lens (Trinket)"
        },
        "3345": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds.<br><br><rules>Additional charges are gained at levels 9 and 14.</rules><br><br><font color='#BBFFFF'>(Max: 2 charges)</font></rules><br><br>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Consumes charge to revive champion.",
            "image": {
                "full": "3345.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 432
            },
            "sanitizedDescription": "Limited to 1 Trinket. Active: Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds. Additional charges are gained at levels 9 and 14. (Max: 2 charges)",
            "inStore": false,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3345,
            "name": "Soul Anchor (Trinket)"
        },
        "3348": {
            "stats": {},
            "description": "<active>UNIQUE Active - Hunter's Sight:</active> An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting <font color='#ee91d7'>True Sight</font> of traps in the area for 3 seconds (90 second cooldown).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Vision",
                "Trinket",
                "Stealth",
                "Active"
            ],
            "plaintext": "Activate to reveal a nearby area of the map",
            "image": {
                "full": "3348.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 0
            },
            "sanitizedDescription": "UNIQUE Active - Hunter's Sight: An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting True Sight of traps in the area for 3 seconds (90 second cooldown).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect6Amount": "90",
                "Effect4Amount": "5",
                "Effect5Amount": "3"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3348,
            "name": "Arcane Sweeper"
        },
        "3361": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds.  Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
            "gold": {
                "total": 250,
                "sell": 175,
                "base": 250,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Periodically place a Stealth Ward",
            "image": {
                "full": "3361.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 48
            },
            "sanitizedDescription": "Limited to 1 Trinket. *Level 9+ required to upgrade. UNIQUE Active: Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds. Stores a charge every 60 seconds, up to 2 total. Limit 3 Stealth Wards on the map per player. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "180",
                "Effect2Amount": "60",
                "Effect6Amount": "9",
                "Effect4Amount": "0",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "0"
            },
            "inStore": false,
            "colloq": "yellow;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3361,
            "name": "Greater Stealth Totem (Trinket)"
        },
        "3362": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
            "gold": {
                "total": 250,
                "sell": 175,
                "base": 250,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Periodically place a Vision Ward",
            "image": {
                "full": "3362.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 96
            },
            "sanitizedDescription": "Limited to 1 Trinket. *Level 9+ required to upgrade. UNIQUE Active: Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 Vision Ward on the map per player. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "120",
                "Effect2Amount": "0",
                "Effect6Amount": "9",
                "Effect4Amount": "0",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "0"
            },
            "inStore": false,
            "colloq": "yellow;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3362,
            "name": "Greater Vision Totem (Trinket)"
        },
        "3363": {
            "stats": {},
            "description": "<levelLimit>* Level 9+ required to upgrade.</levelLimit><br><br>Alters the <font color='#FFFFFF'>Warding Totem</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Massively increased cast range (+650%)<br><font color='#00FF00'>+</font> Infinite duration and does not count towards ward limit<br><font color='#FF0000'>-</font> <font color='#FF6600'>10% increased cooldown</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Ward is visible, fragile, untargetable by allies</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>45% reduced ward vision radius</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Cannot store charges</font></stats>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Grants increased range and reveals the targetted area",
            "image": {
                "full": "3363.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 144
            },
            "sanitizedDescription": "* Level 9+ required to upgrade. Alters the Warding Totem Trinket: + Massively increased cast range (+650%) + Infinite duration and does not count towards ward limit - 10% increased cooldown - Ward is visible, fragile, untargetable by allies - 45% reduced ward vision radius - Cannot store charges",
            "effect": {
                "Effect3Amount": "5",
                "Effect15Amount": "45",
                "Effect1Amount": "4000",
                "Effect2Amount": "2",
                "Effect14Amount": "10",
                "Effect12Amount": "60",
                "Effect9Amount": "6.5",
                "Effect11Amount": "99",
                "Effect4Amount": "198",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect13Amount": "180",
                "Effect10Amount": "198",
                "Effect5Amount": "60"
            },
            "colloq": "blue; totem;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3363,
            "name": "Farsight Alteration"
        },
        "3364": {
            "stats": {},
            "description": "<levelLimit>* Level 9+ required to upgrade.</levelLimit><stats></stats><br><br>Alters the <font color='#FFFFFF'>Sweeping Lens</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Increased detection radius<br><font color='#00FF00'>+</font> Sweeping effect follows you for 10 seconds<br><font color='#FF0000'>-</font> <font color='#FF6600'>Cast range reduced to zero</font></stats>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Disables nearby invisible wards and traps for a duration",
            "image": {
                "full": "3364.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 192
            },
            "sanitizedDescription": "* Level 9+ required to upgrade. Alters the Sweeping Lens Trinket: + Increased detection radius + Sweeping effect follows you for 10 seconds - Cast range reduced to zero",
            "effect": {
                "Effect3Amount": "90",
                "Effect1Amount": "6",
                "Effect2Amount": "10",
                "Effect6Amount": "9",
                "Effect9Amount": "60",
                "Effect4Amount": "60",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "0"
            },
            "colloq": "red; lens;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3364,
            "name": "Oracle Alteration"
        },
        "3401": {
            "from": [
                "3097",
                "3067"
            ],
            "description": "<stats>+450 Health<br>+100% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges.<br><unique>UNIQUE Active:</unique> Grant a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown).  Automatically targets the most wounded ally if cast upon self.<hr><passive>QUEST:</passive> Earn 650 gold using this item.<br><passive>REWARD:</passive> <font color='#CFBF84'>Shield Battery</font>, a permanent shield that regenerates slowly outside of combat.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Shield an ally from damage based on your Health",
            "image": {
                "full": "3401.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 240
            },
            "sanitizedDescription": "+450 Health +100% Base Health Regen +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges. UNIQUE Active: Grant a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown). Automatically targets the most wounded ally if cast upon self. QUEST: Earn 650 gold using this item. REWARD: Shield Battery, a permanent shield that regenerates slowly outside of combat. Limited to 1 Gold Income Item.",
            "effect": {
                "Effect3Amount": "0.1",
                "Effect1Amount": "320",
                "Effect2Amount": "50",
                "Effect6Amount": "2",
                "Effect12Amount": "30",
                "Effect9Amount": "2",
                "Effect11Amount": "650",
                "Effect4Amount": "4",
                "Effect7Amount": "60",
                "Effect8Amount": "120",
                "Effect13Amount": "4",
                "Effect10Amount": "20",
                "Effect5Amount": "-0.4"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 450
            },
            "id": 3401,
            "name": "Face of the Mountain"
        },
        "3410": {
            "stats": {},
            "description": "<unique>UNIQUE Active - Sweeping Lens:</unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of invisible units for 10 seconds (60 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3410.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 288
            },
            "sanitizedDescription": "UNIQUE Active - Sweeping Lens: Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of invisible units for 10 seconds (60 second cooldown). UNIQUE Passive - Mementos of the Hunt: Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy. 3 Trophies: Rengar gains 25 Movement Speed whilst out of combat or in brush. 6 Trophies: Increases the range of Rengar's Leap by 125. 12 Trophies: Thrill of the Hunt's duration is increased by 5 seconds. 20 Trophies: Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect6Amount": "60",
                "Effect4Amount": "6",
                "Effect5Amount": "10"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3410,
            "name": "Head of Kha'Zix"
        },
        "3416": {
            "stats": {},
            "description": "<unique>UNIQUE Active - Scrying:</unique> Reveals a small location within 4000 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown).<br><br><unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3416.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 336
            },
            "sanitizedDescription": "UNIQUE Active - Scrying: Reveals a small location within 4000 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown). UNIQUE Passive - Mementos of the Hunt: Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy. 3 Trophies: Rengar gains 25 Movement Speed whilst out of combat or in brush. 6 Trophies: Increases the range of Rengar's Leap by 125. 12 Trophies: Thrill of the Hunt's duration is increased by 5 seconds. 20 Trophies: Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect6Amount": "5",
                "Effect4Amount": "4000",
                "Effect7Amount": "90",
                "Effect5Amount": "2"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3416,
            "name": "Head of Kha'Zix"
        },
        "3422": {
            "stats": {},
            "description": "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3422.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 384
            },
            "sanitizedDescription": "UNIQUE Passive - Mementos of the Hunt: Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy. 3 Trophies: Rengar gains 25 Movement Speed whilst out of combat or in brush. 6 Trophies: Increases the range of Rengar's Leap by 125. 12 Trophies: Thrill of the Hunt's duration is increased by 5 seconds. 20 Trophies: Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect3Amount": "5"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3422,
            "name": "Head of Kha'Zix"
        },
        "3455": {
            "stats": {},
            "description": "<unique>UNIQUE Passive - Mementos of the Hunt:</unique> Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy.<br><br><passive>3 Trophies:</passive> Rengar gains 25 Movement Speed whilst out of combat or in brush. <br><passive>6 Trophies:</passive> Increases the range of Rengar's Leap by 125.<br><passive>12 Trophies:</passive> Thrill of the Hunt's duration is increased by 5 seconds.<br><passive>20 Trophies:</passive> Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3455.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 432
            },
            "sanitizedDescription": "UNIQUE Passive - Mementos of the Hunt: Rengar collects trophies when killing Champions and gains bonus effects based on how many trophies he has. Kills and assists grant 1 trophy. 3 Trophies: Rengar gains 25 Movement Speed whilst out of combat or in brush. 6 Trophies: Increases the range of Rengar's Leap by 125. 12 Trophies: Thrill of the Hunt's duration is increased by 5 seconds. 20 Trophies: Thrill of the Hunt's Movement Speed while stealthed is doubled.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect3Amount": "5"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3455,
            "name": "Head of Kha'Zix"
        },
        "3460": {
            "stats": {},
            "description": "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket"
            ],
            "image": {
                "full": "3460.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "Active: Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform. ''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''",
            "inStore": false,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3460,
            "name": "Golden Transcendence"
        },
        "3461": {
            "stats": {},
            "description": "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket"
            ],
            "image": {
                "full": "3461.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "sanitizedDescription": "Active: Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform. ''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''",
            "inStore": false,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3461,
            "name": "Golden Transcendence (Disabled)"
        },
        "3462": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>2500</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Briefly reveals a nearby targeted area",
            "image": {
                "full": "3462.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "Limited to 1 Trinket. Active: Reveals a small area within 2500 range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
            "effect": {
                "Effect1Amount": "2500",
                "Effect2Amount": "60",
                "Effect3Amount": "3",
                "Effect4Amount": "5",
                "Effect5Amount": "550"
            },
            "inStore": false,
            "colloq": "blue;",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3462,
            "name": "Seer Stone (Trinket)"
        },
        "3504": {
            "from": [
                "3114",
                "3113"
            ],
            "description": "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><unique>UNIQUE Passive:</unique> +8% Movement Speed<br><unique>UNIQUE Passive:</unique> Your heals and shields on another allied champion grant them 20% - 35% Attack Speed and their attacks drain 20 - 35 health on-hit for 6 seconds.<br><br><rules>(This does not include regeneration effects or effects on yourself. Bonus effects are based on target's level.</rules>)</rules>",
            "gold": {
                "total": 2300,
                "sell": 1610,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "ManaRegen",
                "NonbootsMovement",
                "SpellDamage"
            ],
            "plaintext": "Shield and heal effects on other units grant them Attack Speed and their attacks drain life",
            "image": {
                "full": "3504.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "+60 Ability Power +10% Cooldown Reduction +50% Base Mana Regen UNIQUE Passive: +10% Heal and Shield Power UNIQUE Passive: +8% Movement Speed UNIQUE Passive: Your heals and shields on another allied champion grant them 20% - 35% Attack Speed and their attacks drain 20 - 35 health on-hit for 6 seconds. (This does not include regeneration effects or effects on yourself. Bonus effects are based on target's level.)",
            "effect": {
                "Effect3Amount": "6",
                "Effect1Amount": "0.08",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0.35",
                "Effect4Amount": "20",
                "Effect7Amount": "35",
                "Effect5Amount": "0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "id": 3504,
            "name": "Ardent Censer"
        },
        "3508": {
            "from": [
                "1038",
                "3133",
                "1018"
            ],
            "description": "<stats>+70 Attack Damage<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Gain increasingly more Cooldown Reduction from Critical Strike Chance provided by other sources (maximum +20% additional Cooldown Reduction at 30% Critical Strike Chance).<br><unique>UNIQUE Passive:</unique> Critical strikes restore 3% of your maximum Mana pool.",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 200,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Critical Strike provides Cooldown Reduction and Mana",
            "image": {
                "full": "3508.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "sanitizedDescription": "+70 Attack Damage +20% Critical Strike Chance UNIQUE Passive: +10% Cooldown Reduction UNIQUE Passive: Gain increasingly more Cooldown Reduction from Critical Strike Chance provided by other sources (maximum +20% additional Cooldown Reduction at 30% Critical Strike Chance). UNIQUE Passive: Critical strikes restore 3% of your maximum Mana pool.",
            "effect": {
                "Effect3Amount": "0.2",
                "Effect1Amount": "0.1",
                "Effect2Amount": "0.03",
                "Effect6Amount": "0.1667",
                "Effect4Amount": "0.3",
                "Effect5Amount": "0.0167"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatCritChanceMod": 0.2
            },
            "id": 3508,
            "name": "Essence Reaver"
        },
        "3512": {
            "from": [
                "2053",
                "1057"
            ],
            "description": "<stats>+55 Armor<br>+55 Magic Resist<br>+125% Base Health Regen <br></stats><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><active>UNIQUE Active:</active> Spawns a <a href='VoidGate'>Void Gate</a> for 120 seconds (120 second cooldown).<br><br>Every 4 seconds the gate makes a <a href='Voidspawn'>Voidspawn</a>. The first and every fourth Voidspawn gains 15% of maximum Health as damage.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 1080,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Active",
                "NonbootsMovement"
            ],
            "plaintext": "Makes a Voidspawn generating Void Gate to push a lane with.",
            "image": {
                "full": "3512.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "+55 Armor +55 Magic Resist +125% Base Health Regen UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates. UNIQUE Active: Spawns a Void Gate for 120 seconds (120 second cooldown). Every 4 seconds the gate makes a Voidspawn. The first and every fourth Voidspawn gains 15% of maximum Health as damage.",
            "effect": {
                "Effect3Amount": "50",
                "Effect15Amount": "2",
                "Effect1Amount": "20",
                "Effect2Amount": "4",
                "Effect14Amount": "50",
                "Effect12Amount": "100",
                "Effect9Amount": "3",
                "Effect11Amount": "2",
                "Effect4Amount": "0",
                "Effect6Amount": "120",
                "Effect7Amount": "0.5",
                "Effect8Amount": "0.15",
                "Effect13Amount": "20",
                "Effect10Amount": "20",
                "Effect5Amount": "120"
            },
            "colloq": "Void Gate",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatArmorMod": 55
            },
            "id": 3512,
            "name": "Zz'Rot Portal"
        },
        "3513": {
            "stats": {},
            "description": "<br><unique>UNIQUE Passive - Glimpse of the Void:</unique> The holder of the Eye of the Herald has Empowered Recall.<br><br><active>UNIQUE Active:</active> Channel for 3.5 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets.<br><br>The Eye of the Herald will be lost to the Void if not used within 240 seconds.</font>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Trinket",
                "Active"
            ],
            "plaintext": "Eye of the Herald - a Gift of the Void.",
            "image": {
                "full": "3513.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "UNIQUE Passive - Glimpse of the Void: The holder of the Eye of the Herald has Empowered Recall. UNIQUE Active: Channel for 3.5 seconds to crush the Eye of the Herald, summoning the Rift Herald to siege enemy turrets. The Eye of the Herald will be lost to the Void if not used within 240 seconds.",
            "effect": {
                "Effect1Amount": "240",
                "Effect2Amount": "3.5",
                "Effect3Amount": "40"
            },
            "inStore": false,
            "colloq": "Herald's Eye",
            "consumed": true,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3513,
            "name": "Eye of the Herald"
        },
        "3599": {
            "stats": {},
            "description": "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active"
            ],
            "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
            "image": {
                "full": "3599.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "sanitizedDescription": "Active: Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
            "colloq": "spear",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Kalista",
            "id": 3599,
            "name": "The Black Spear"
        },
        "3630": {
            "stats": {},
            "description": "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
            "gold": {
                "total": 10,
                "sell": 7,
                "base": 10,
                "purchasable": false
            },
            "image": {
                "full": "3630.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "sanitizedDescription": "Active: Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3630,
            "name": "Siege Teleport"
        },
        "3631": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Deploys a ballista that shoots the closest turret.</font><br><br>Places a long range ballista if within 2200 range of an enemy turret. After a 5 second delay, it will begin firing at the nearest enemy turret, dealing heavy damage. If the targeted turret expires, the ballista will as well.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Place a long range anti-turret ballista",
            "image": {
                "full": "3631.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "sanitizedDescription": "Deploys a ballista that shoots the closest turret. Places a long range ballista if within 2200 range of an enemy turret. After a 5 second delay, it will begin firing at the nearest enemy turret, dealing heavy damage. If the targeted turret expires, the ballista will as well.",
            "effect": {
                "Effect3Amount": "20",
                "Effect1Amount": "5",
                "Effect2Amount": "5",
                "Effect6Amount": "2200",
                "Effect9Amount": "0.5",
                "Effect4Amount": "3",
                "Effect7Amount": "10",
                "Effect8Amount": "0",
                "Effect5Amount": "0"
            },
            "consumed": true,
            "id": 3631,
            "name": "Siege Ballista"
        },
        "3632": {
            "stats": {},
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "image": {
                "full": "3632.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "effect": {
                "Effect3Amount": "310",
                "Effect1Amount": "15",
                "Effect2Amount": "1",
                "Effect6Amount": "0",
                "Effect12Amount": "3000",
                "Effect9Amount": "10",
                "Effect11Amount": "15",
                "Effect4Amount": "5000",
                "Effect7Amount": "3",
                "Effect8Amount": "45",
                "Effect10Amount": "1",
                "Effect5Amount": "20"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3632
        },
        "3633": {
            "stats": {},
            "description": "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
            "gold": {
                "total": 10,
                "sell": 7,
                "base": 10,
                "purchasable": false
            },
            "image": {
                "full": "3633.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "Active: Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3633,
            "name": "Siege Teleport"
        },
        "3634": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Attach, then recast to fire a damaging beam from a turret to your cursor.</font><br><br><font color='#FF9900'>First Cast:</font> Attach a Slayer Beam to the target turret that can be fired 3 times.<br></br><font color='#FF9900'>Next Three Casts:</font> Fires the attached beam towards your cursor, dealing 30/level + 30% of the hit target's maximum health (20% damage to minions) in magic damage to all targets in a line.<br></br><br></br>Beam will last 15 seconds, or until it has been fired 3 times.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Attaches a three shot beam to a turret which can then be aimed and fired",
            "image": {
                "full": "3634.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "Attach, then recast to fire a damaging beam from a turret to your cursor. First Cast: Attach a Slayer Beam to the target turret that can be fired 3 times. Next Three Casts: Fires the attached beam towards your cursor, dealing 30/level + 30% of the hit target's maximum health (20% damage to minions) in magic damage to all targets in a line. Beam will last 15 seconds, or until it has been fired 3 times.",
            "effect": {
                "Effect3Amount": "3000",
                "Effect1Amount": "3",
                "Effect2Amount": "1.5",
                "Effect6Amount": "0.2",
                "Effect9Amount": "0",
                "Effect4Amount": "0",
                "Effect7Amount": "15",
                "Effect8Amount": "0.3",
                "Effect10Amount": "76",
                "Effect5Amount": "30"
            },
            "consumed": true,
            "id": 3634,
            "name": "Tower: Beam of Ruination"
        },
        "3635": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Deploy an additional teleport target.</font><br><br>Places a Port Pad at target location. After a 4 second delay, it activates, allowing you or your allies to teleport to it from base.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Creates another point for your team to Teleport to",
            "image": {
                "full": "3635.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "Deploy an additional teleport target. Places a Port Pad at target location. After a 4 second delay, it activates, allowing you or your allies to teleport to it from base.",
            "effect": {
                "Effect1Amount": "4",
                "Effect2Amount": "1000",
                "Effect3Amount": "3",
                "Effect4Amount": "10"
            },
            "consumed": true,
            "id": 3635,
            "name": "Port Pad"
        },
        "3636": {
            "consumeOnFull": true,
            "stats": {
                "FlatCritChanceMod": 3
            },
            "description": "<br><font color='#FF9900'>Makes a turret go invulnerable, then rain fire.</font><br><br>Makes the target turret invulnerable for 6 seconds. Two seconds before expiry, it unleashes a missile volley, dealing 2600 true damage over the remaining time to all nearby enemies.<br><br>Cannot be used on the same turret more than once in 15 seconds.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Make a turret go invulnerable while charging a powerful barrage",
            "image": {
                "full": "3636.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "sanitizedDescription": "Makes a turret go invulnerable, then rain fire. Makes the target turret invulnerable for 6 seconds. Two seconds before expiry, it unleashes a missile volley, dealing 2600 true damage over the remaining time to all nearby enemies. Cannot be used on the same turret more than once in 15 seconds.",
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "15",
                "Effect3Amount": "650",
                "Effect4Amount": "825",
                "Effect5Amount": "1.2"
            },
            "consumed": true,
            "id": 3636,
            "name": "Tower: Storm Bulwark"
        },
        "3637": {
            "stats": {},
            "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",
            "gold": {
                "total": 10,
                "sell": 7,
                "base": 10,
                "purchasable": false
            },
            "image": {
                "full": "3637.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3637,
            "name": "Nexus Siege: Siege Weapon Slot"
        },
        "3640": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Allows team to cast Flash repeatedly in a limited zone.</font><br><br>Creates a magic zone for your team for 5 seconds. While in this zone, you and your allies have your summoner spells replaced by an instant cast blink that moves you to any location in the zone (1 second cooldown).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Allows you and allies to repeatedly flash while in a zone",
            "image": {
                "full": "3640.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "sanitizedDescription": "Allows team to cast Flash repeatedly in a limited zone. Creates a magic zone for your team for 5 seconds. While in this zone, you and your allies have your summoner spells replaced by an instant cast blink that moves you to any location in the zone (1 second cooldown).",
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "5"
            },
            "consumed": true,
            "id": 3640,
            "name": "Flash Zone"
        },
        "3641": {
            "stats": {},
            "description": "<br><font color='#FF9900'>Place a banner that buffs minions.</font><br><br>Place a Vanguard Banner at target location. After a 2 second delay, any nearby minions will be granted a buff, increasing their damage by 50%, and granting them 50 Armor and 100 Magic Resistance while within range.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Strengthens nearby minions",
            "image": {
                "full": "3641.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 336
            },
            "sanitizedDescription": "Place a banner that buffs minions. Place a Vanguard Banner at target location. After a 2 second delay, any nearby minions will be granted a buff, increasing their damage by 50%, and granting them 50 Armor and 100 Magic Resistance while within range.",
            "effect": {
                "Effect3Amount": "50",
                "Effect1Amount": "0",
                "Effect2Amount": "0.5",
                "Effect6Amount": "0.3",
                "Effect9Amount": "1400",
                "Effect4Amount": "100",
                "Effect7Amount": "2",
                "Effect8Amount": "10",
                "Effect5Amount": "5"
            },
            "consumed": true,
            "id": 3641,
            "name": "Vanguard Banner"
        },
        "3642": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Refunds all purchased Siege Weapons for their full price.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Refunds all current Siege Weapons",
            "image": {
                "full": "3642.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 384
            },
            "sanitizedDescription": "Refunds all purchased Siege Weapons for their full price.",
            "effect": {
                "Effect1Amount": "1"
            },
            "consumed": true,
            "id": 3642,
            "name": "Siege Refund"
        },
        "3643": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Stun minions and slow champions in an area.</font><br><br>Places an Entropy Field at target location for 5 seconds.  Enemy minions and Siege Ballistas trapped in the field are unable to move or attack while in the field.  Enemy champions in the field have their Movement Speed reduced by 25%.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Places a field that stuns enemy minions and slows champions",
            "image": {
                "full": "3643.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 432
            },
            "sanitizedDescription": "Stun minions and slow champions in an area. Places an Entropy Field at target location for 5 seconds. Enemy minions and Siege Ballistas trapped in the field are unable to move or attack while in the field. Enemy champions in the field have their Movement Speed reduced by 25%.",
            "effect": {
                "Effect1Amount": "5",
                "Effect2Amount": "600",
                "Effect3Amount": "25"
            },
            "consumed": true,
            "id": 3643,
            "name": "Entropy Field"
        },
        "3645": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>1400</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Briefly reveals a nearby targeted area",
            "image": {
                "full": "3645.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 0
            },
            "sanitizedDescription": "Limited to 1 Trinket. Active: Reveals a small area within 1400 range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
            "effect": {
                "Effect1Amount": "1400",
                "Effect2Amount": "60",
                "Effect3Amount": "3",
                "Effect4Amount": "5",
                "Effect5Amount": "550"
            },
            "inStore": false,
            "colloq": "blue;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3645,
            "name": "Seer Stone (Trinket)"
        },
        "3647": {
            "stats": {},
            "description": "<br><font color='#FF9900'>Place a totem that shields nearby deployables.</font><br><br>Places a Shield Totem at target location. After a 2 second delay, the totem will activate, granting a 2 (+1 per additional Shield Totem) strength shield to all nearby deployables.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Grants bonus health to nearby Siege Weapons",
            "image": {
                "full": "3647.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 48
            },
            "sanitizedDescription": "Place a totem that shields nearby deployables. Places a Shield Totem at target location. After a 2 second delay, the totem will activate, granting a 2 (+1 per additional Shield Totem) strength shield to all nearby deployables.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "2",
                "Effect2Amount": "3",
                "Effect6Amount": "0.25",
                "Effect9Amount": "4",
                "Effect4Amount": "1",
                "Effect7Amount": "10",
                "Effect8Amount": "1",
                "Effect5Amount": "1000"
            },
            "consumed": true,
            "id": 3647,
            "name": "Shield Totem"
        },
        "3648": {
            "stats": {},
            "name": "Siege Teleport (Inactive)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "image": {
                "full": "3648.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 96
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3648
        },
        "3649": {
            "stats": {},
            "description": "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Places a <font color='#FFFFFF'>Stealth Ward</font> that lasts <font color='#FFFFFF'>30</font> seconds (30 second cooldown).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "image": {
                "full": "3649.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 144
            },
            "sanitizedDescription": "Limited to 1 Trinket. Active: Places a Stealth Ward that lasts 30 seconds (30 second cooldown).",
            "effect": {
                "Effect1Amount": "30"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3649,
            "name": "Siege Sight Warder"
        },
        "3671": {
            "from": [
                "3133"
            ],
            "description": "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 525,
                "purchasable": true
            },
            "image": {
                "full": "3671.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 192
            },
            "sanitizedDescription": "+60 Attack Damage +10% Cooldown Reduction",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 3671,
            "name": "Enchantment: Warrior"
        },
        "3672": {
            "from": [
                "3751"
            ],
            "description": "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 525,
                "purchasable": true
            },
            "image": {
                "full": "3672.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 240
            },
            "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 400
            },
            "id": 3672,
            "name": "Enchantment: Cinderhulk"
        },
        "3673": {
            "from": [
                "3113",
                "1052"
            ],
            "description": "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 340,
                "purchasable": true
            },
            "image": {
                "full": "3673.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 288
            },
            "sanitizedDescription": "+60 Ability Power +7% Movement Speed UNIQUE Passive - Echo: Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit. This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 3673,
            "name": "Enchantment: Runic Echoes"
        },
        "3675": {
            "from": [
                "1043"
            ],
            "description": "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 625,
                "purchasable": true
            },
            "image": {
                "full": "3675.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 336
            },
            "sanitizedDescription": "+50% Attack Speed UNIQUE Passive: Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 3675,
            "name": "Enchantment: Bloodrazor"
        },
        "3680": {
            "stats": {},
            "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King lobs many projectiles at far-away enemies, each dealing <scaleLevel>213-775</scaleLevel> magic damage to targets in the center of the impact, scaling down to <scaleLevel>85-310</scaleLevel> on the edge. (120s cooldown)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "King: Fires a barrage of icy artillery",
            "image": {
                "full": "3680.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 384
            },
            "sanitizedDescription": "Active - Feed The King: The King lobs many projectiles at far-away enemies, each dealing 213-775 magic damage to targets in the center of the impact, scaling down to 85-310 on the edge. (120s cooldown)",
            "effect": {
                "Effect3Amount": "40",
                "Effect1Amount": "5",
                "Effect2Amount": "120",
                "Effect6Amount": "213",
                "Effect9Amount": "310",
                "Effect4Amount": "15",
                "Effect7Amount": "775",
                "Effect8Amount": "85",
                "Effect5Amount": "250"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3680,
            "name": "Frosted Snax"
        },
        "3681": {
            "stats": {},
            "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King breathes fire for 4 seconds, dealing <scaleLevel>705-1479</scaleLevel> true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "King: Shoots flames that burn units and Turrets",
            "image": {
                "full": "3681.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 432
            },
            "sanitizedDescription": "Active - Feed The King: The King breathes fire for 4 seconds, dealing 705-1479 true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)",
            "effect": {
                "Effect3Amount": "700",
                "Effect1Amount": "4",
                "Effect2Amount": "120",
                "Effect6Amount": "705",
                "Effect4Amount": "2.35",
                "Effect7Amount": "1479",
                "Effect5Amount": "560"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3681,
            "name": "Super Spicy Snax"
        },
        "3682": {
            "stats": {},
            "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King leaps into the air and crashes down twice, knocking enemies away and dealing <scaleLevel>40-190</scaleLevel> physical damage. He also gains a decaying shield for <font color='#FF3300'>20% of his maximum health</font>, lasting 4 seconds. (30s cooldown)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "King: Knocks back and grants a large shield",
            "image": {
                "full": "3682.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 0
            },
            "sanitizedDescription": "Active - Feed The King: The King leaps into the air and crashes down twice, knocking enemies away and dealing 40-190 physical damage. He also gains a decaying shield for 20% of his maximum health, lasting 4 seconds. (30s cooldown)",
            "effect": {
                "Effect3Amount": "10",
                "Effect1Amount": "1.8",
                "Effect2Amount": "30",
                "Effect6Amount": "4",
                "Effect9Amount": "190",
                "Effect4Amount": "10",
                "Effect7Amount": "600",
                "Effect8Amount": "40",
                "Effect10Amount": "500",
                "Effect5Amount": "20"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3682,
            "name": "Espresso Snax"
        },
        "3683": {
            "stats": {},
            "description": "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt <scaleLevel>230-680</scaleLevel> physical damage. (120s cooldown)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "King: Poros knock enemies towards him",
            "image": {
                "full": "3683.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 48
            },
            "sanitizedDescription": "Active - Feed The King: The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt 230-680 physical damage. (120s cooldown)",
            "effect": {
                "Effect3Amount": "140",
                "Effect1Amount": "6",
                "Effect2Amount": "120",
                "Effect6Amount": "1500",
                "Effect9Amount": "230",
                "Effect11Amount": "2",
                "Effect4Amount": "30",
                "Effect7Amount": "1650",
                "Effect8Amount": "1000",
                "Effect10Amount": "680",
                "Effect5Amount": "1"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3683,
            "name": "Rainbow Snax Party Pack!"
        },
        "3690": {
            "stats": {},
            "description": "<passive>Passive - Cosmic Shackle: </passive>Death Sentence pulls much farther (based on the target's Missing Health), and can be ignited by the Dark Star to do more damage.<br><br><flavorText>''A still more glorious dawn awaits.''</flavorText>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3690.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 96
            },
            "sanitizedDescription": "Passive - Cosmic Shackle: Death Sentence pulls much farther (based on the target's Missing Health), and can be ignited by the Dark Star to do more damage. ''A still more glorious dawn awaits.''",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3690,
            "name": "Cosmic Shackle"
        },
        "3691": {
            "stats": {},
            "description": "<passive>Passive - Singularity Lantern: </passive>Dark Passage automatically saves disabled allies. However, it no longer provides a shield.<br><br><flavorText>''The stars call to us.''</flavorText>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3691.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 144
            },
            "sanitizedDescription": "Passive - Singularity Lantern: Dark Passage automatically saves disabled allies. However, it no longer provides a shield. ''The stars call to us.''",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3691,
            "name": "Singularity Lantern"
        },
        "3692": {
            "stats": {},
            "description": "<passive>Passive - Dark Matter Scythe: </passive>Flay's on-hit passive charges damage very quickly. Flay will throw enemies much farther (based on their Missing Health).<br><br><flavorText>''If you want to make a Singularity from scratch, you must first destroy the universe.''</flavorText>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3692.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 192
            },
            "sanitizedDescription": "Passive - Dark Matter Scythe: Flay's on-hit passive charges damage very quickly. Flay will throw enemies much farther (based on their Missing Health). ''If you want to make a Singularity from scratch, you must first destroy the universe.''",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3692,
            "name": "Dark Matter Scythe"
        },
        "3693": {
            "stats": {
                "FlatMovementSpeedMod": 50
            },
            "description": "<passive>Passive - Mass Conversion: </passive>Thresh's Health represents how far enemy pulls and pushes will send him. At lower Health, he will be thrown farther.<br><br><passive>Passive - Terminus Dwellers: </passive>Abyss Scuttlers emerge periodically, and will scurry towards the Dark Star when attacked. Gravitational disturbances will temporarily attract many of them.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3693.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 240
            },
            "sanitizedDescription": "Passive - Mass Conversion: Thresh's Health represents how far enemy pulls and pushes will send him. At lower Health, he will be thrown farther. Passive - Terminus Dwellers: Abyss Scuttlers emerge periodically, and will scurry towards the Dark Star when attacked. Gravitational disturbances will temporarily attract many of them.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3693,
            "name": "Gravity Boots"
        },
        "3694": {
            "stats": {
                "FlatMovementSpeedMod": 50
            },
            "description": "<passive>Passive - Stellar Spirit: </passive>Upon spawning, Thresh is invulnerable, untargetable, cannot cast, and is able to travel in open space. This is lost when stepping foot on stable ground.<br><br>Being saved by Dark Passage or using Death Sentence on one of the three <font color='#3091ec'>Gravity Anchors</font> will briefly put you into this invulnerable state and break enemy chains on you.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3694.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 288
            },
            "sanitizedDescription": "Passive - Stellar Spirit: Upon spawning, Thresh is invulnerable, untargetable, cannot cast, and is able to travel in open space. This is lost when stepping foot on stable ground. Being saved by Dark Passage or using Death Sentence on one of the three Gravity Anchors will briefly put you into this invulnerable state and break enemy chains on you.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3694,
            "name": "Cloak of Stars"
        },
        "3695": {
            "stats": {
                "FlatMovementSpeedMod": 50
            },
            "description": "<passive>Passive - Stellar Fealty: </passive>Thresh cannot kill units directly - their souls, experience, and gold belong to the Dark Star.<br><br>Pulling or pushing an enemy into the Dark Star will destroy them instantly, scoring points for your team (+5, or +1 for Abyss Scuttlers).<br><br>Winning a round requires 100 points, and the final points must be from a champion kill.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3695.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 336
            },
            "sanitizedDescription": "Passive - Stellar Fealty: Thresh cannot kill units directly - their souls, experience, and gold belong to the Dark Star. Pulling or pushing an enemy into the Dark Star will destroy them instantly, scoring points for your team (+5, or +1 for Abyss Scuttlers). Winning a round requires 100 points, and the final points must be from a champion kill.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3695,
            "name": "Dark Star Sigil"
        },
        "3706": {
            "from": [
                "1039",
                "1041"
            ],
            "description": "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "Slow",
                "OnHit",
                "NonbootsMovement",
                "Jungle"
            ],
            "plaintext": "Lets your Smite slow Champions",
            "image": {
                "full": "3706.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 384
            },
            "sanitizedDescription": "Limited to 1 Jungle item +10% Life Steal vs. Monsters +180% Base Mana Regen while in Jungle UNIQUE Passive - Chilling Smite: Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "colloq": "jungle;Jungle;jangle",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1400",
                "1401",
                "1402",
                "1416"
            ],
            "stats": {},
            "id": 3706,
            "name": "Stalker's Blade"
        },
        "3711": {
            "from": [
                "1039",
                "1041"
            ],
            "description": "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. <br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "Vision",
                "Active",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Provides Stealth Wards over time",
            "image": {
                "full": "3711.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 432
            },
            "sanitizedDescription": "Limited to 1 Jungle item +10% Life Steal vs. Monsters +180% Base Mana Regen while in Jungle UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience. UNIQUE Active - Warding: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. (A player may only have 3 Stealth Wards on the map at one time. Unique Passives with the same name don't stack.)",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "colloq": "jungle;Jungle",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1408",
                "1409",
                "1410",
                "1418"
            ],
            "stats": {},
            "id": 3711,
            "name": "Tracker's Knife"
        },
        "3715": {
            "from": [
                "1039",
                "1041"
            ],
            "description": "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><passive>Passive - Challenging Smite:</passive> Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%.<br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Lets your Smite mark Champions, giving you combat power against them.",
            "image": {
                "full": "3715.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 0
            },
            "sanitizedDescription": "Limited to 1 Jungle item +10% Life Steal vs. Monsters +180% Base Mana Regen while in Jungle Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, the target is revealed, your basic attacks deal bonus true damage over 3 seconds, and their damage to you is reduced by 20%. UNIQUE Passive - Tooth / Nail: Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants special bonus experience.",
            "effect": {
                "Effect3Amount": "1.8",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "colloq": "jungle;Jungle",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1412",
                "1413",
                "1414",
                "1419"
            ],
            "stats": {},
            "id": 3715,
            "name": "Skirmisher's Sabre"
        },
        "3742": {
            "from": [
                "1031",
                "1011"
            ],
            "description": "<stats>+425 Health<br>+60 Armor</stats><br><br><unique>UNIQUE Passive - Dreadnought:</unique> While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum decays while under the effect of a slow, stun, taunt, fear, polymorph, or immobilize effect, as well as when basic attacking.<br><unique>UNIQUE Passive - Crushing Blow:</unique> Basic attacks at 100 stacks deal 100 bonus damage and discharge the stacks. If the attacker is melee, they also slow the target by 50% for 1 second.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText>",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Armor",
                "OnHit",
                "NonbootsMovement",
                "Bilgewater"
            ],
            "plaintext": "Build momentum as you move around then smash into enemies.",
            "image": {
                "full": "3742.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 48
            },
            "sanitizedDescription": "+425 Health +60 Armor UNIQUE Passive - Dreadnought: While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum decays while under the effect of a slow, stun, taunt, fear, polymorph, or immobilize effect, as well as when basic attacking. UNIQUE Passive - Crushing Blow: Basic attacks at 100 stacks deal 100 bonus damage and discharge the stacks. If the attacker is melee, they also slow the target by 50% for 1 second. ''There's only one way you'll get this armor from me...'' - forgotten namesake",
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "100",
                "Effect3Amount": "2",
                "Effect4Amount": "-0.5",
                "Effect5Amount": "1"
            },
            "colloq": "juggernaut;dreadnought",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 60,
                "FlatHPPoolMod": 425
            },
            "id": 3742,
            "name": "Dead Man's Plate"
        },
        "3748": {
            "from": [
                "3077",
                "1028",
                "3052"
            ],
            "description": "<stats>+450 Health<br>+35 Attack Damage<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage  to your target and 40 + 2.5% of your maximum health as physical damage  to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:</active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage  in a larger cone for your next basic attack (20 second cooldown).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "Active",
                "OnHit"
            ],
            "plaintext": "Deals area of effect damage based on owner's health",
            "image": {
                "full": "3748.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 96
            },
            "sanitizedDescription": "+450 Health +35 Attack Damage +100% Base Health Regen UNIQUE Passive - Cleave: Basic attacks deal 5 + 1% of your maximum health as bonus physical damage to your target and 40 + 2.5% of your maximum health as physical damage to other enemies in a cone on hit. UNIQUE Active - Crescent: Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage in a larger cone for your next basic attack (20 second cooldown). (Unique Passives with the same name don't stack.)",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0.025",
                "Effect2Amount": "40",
                "Effect6Amount": "0",
                "Effect9Amount": "0.01",
                "Effect4Amount": "0",
                "Effect7Amount": "20",
                "Effect8Amount": "40",
                "Effect10Amount": "5",
                "Effect5Amount": "0.1"
            },
            "colloq": "juggernaut",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatHPPoolMod": 450
            },
            "id": 3748,
            "name": "Titanic Hydra"
        },
        "3751": {
            "from": [
                "1028"
            ],
            "description": "<stats>+280 Health  </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health"
            ],
            "plaintext": "Grants Health and Immolate Aura",
            "image": {
                "full": "3751.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 144
            },
            "sanitizedDescription": "+280 Health UNIQUE Passive - Immolate: Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
            "effect": {
                "Effect1Amount": "5",
                "Effect2Amount": "1",
                "Effect3Amount": "50"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3068",
                "1401",
                "1409",
                "1413",
                "3672"
            ],
            "stats": {
                "FlatHPPoolMod": 280
            },
            "id": 3751,
            "name": "Bami's Cinder"
        },
        "3800": {
            "from": [
                "3024",
                "3801"
            ],
            "description": "<stats>+400 Health<br><mana>+300 Mana</mana><br>+30 Armor<br>+100% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active:</unique> Grants 75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. Once near an enemy (or after 4 seconds) a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement"
            ],
            "plaintext": "Grants Health, Mana, and Armor. Activate to speed towards enemies and slow them.",
            "image": {
                "full": "3800.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 192
            },
            "sanitizedDescription": "+400 Health +300 Mana +30 Armor +100% Base Health Regen +10% Cooldown Reduction UNIQUE Active: Grants 75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. Once near an enemy (or after 4 seconds) a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).",
            "effect": {
                "Effect3Amount": "-0.75",
                "Effect1Amount": "0.75",
                "Effect2Amount": "4",
                "Effect6Amount": "225",
                "Effect4Amount": "2",
                "Effect7Amount": "450",
                "Effect5Amount": "90"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatArmorMod": 30,
                "FlatHPPoolMod": 400
            },
            "id": 3800,
            "name": "Righteous Glory"
        },
        "3801": {
            "from": [
                "1028",
                "1006"
            ],
            "description": "<stats>+200 Health<br>+50% Base Health Regen </stats>",
            "gold": {
                "total": 650,
                "sell": 455,
                "base": 100,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "plaintext": "Grants Health and Health Regen",
            "image": {
                "full": "3801.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 240
            },
            "sanitizedDescription": "+200 Health +50% Base Health Regen",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3800",
                "3083",
                "3084",
                "3107"
            ],
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3801,
            "name": "Crystalline Bracer"
        },
        "3802": {
            "from": [
                "1052",
                "1027"
            ],
            "description": "<stats>+25 Ability Power<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> Upon levelling up, restores 20% of your maximum Mana over 3 seconds.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 115,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Restores Mana upon levelling up.",
            "image": {
                "full": "3802.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 288
            },
            "sanitizedDescription": "+25 Ability Power +300 Mana UNIQUE Passive: Upon levelling up, restores 20% of your maximum Mana over 3 seconds.",
            "effect": {
                "Effect3Amount": "15",
                "Effect1Amount": "25",
                "Effect2Amount": "-0.1",
                "Effect6Amount": "5",
                "Effect4Amount": "10",
                "Effect7Amount": "0.2",
                "Effect8Amount": "3",
                "Effect5Amount": "20"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3165"
            ],
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatMagicDamageMod": 25
            },
            "id": 3802,
            "name": "Lost Chapter"
        },
        "3812": {
            "from": [
                "1053",
                "1037",
                "3133"
            ],
            "description": "<stats>+80 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage heals for 15% of the damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 625,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction"
            ],
            "plaintext": "Trades incoming damage now for incoming damage later",
            "image": {
                "full": "3812.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 336
            },
            "sanitizedDescription": "+80 Attack Damage +10% Cooldown Reduction UNIQUE Passive: Dealing physical damage heals for 15% of the damage dealt. This is 33% as effective for Area of Effect damage. UNIQUE Passive: 30% of damage taken is dealt as a Bleed effect over 3 seconds instead.",
            "effect": {
                "Effect1Amount": "0.15",
                "Effect2Amount": "0.3",
                "Effect3Amount": "3"
            },
            "stacks": 0,
            "colloq": "Bloodbag",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 80
            },
            "id": 3812,
            "name": "Death's Dance"
        },
        "3814": {
            "from": [
                "1037",
                "3134",
                "1033"
            ],
            "description": "<stats>+55 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><unique>UNIQUE Active - Night's Veil:</unique> Channel for 1.5 second to grant a spell shield that blocks the next enemy ability. Lasts for 5 seconds (45 second cooldown).<br><br><rules>(Can move while channeling, but taking damage breaks the channel.)</rules>",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 675,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Blocks an incoming enemy spell.",
            "image": {
                "full": "3814.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 384
            },
            "sanitizedDescription": "+55 Attack Damage +35 Magic Resist UNIQUE Passive: +15 Lethality UNIQUE Passive: +20 Movement Speed out of Combat UNIQUE Active - Night's Veil: Channel for 1.5 second to grant a spell shield that blocks the next enemy ability. Lasts for 5 seconds (45 second cooldown). (Can move while channeling, but taking damage breaks the channel.)",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "5",
                "Effect3Amount": "20",
                "Effect4Amount": "45",
                "Effect5Amount": "5"
            },
            "stacks": 0,
            "colloq": "lethality",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatPhysicalDamageMod": 55
            },
            "id": 3814,
            "name": "Edge of Night"
        },
        "3901": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "plaintext": "Cannon Barrage gains extra waves",
            "image": {
                "full": "3901.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 432
            },
            "sanitizedDescription": "Requires 500 Silver Serpents. UNIQUE Passive: Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
            "consumed": true,
            "requiredChampion": "Gangplank",
            "id": 3901,
            "name": "Fire at Will"
        },
        "3902": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds. ",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "plaintext": "Cannon Barrage fires a mega-cannonball",
            "image": {
                "full": "3902.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 0
            },
            "sanitizedDescription": "Requires 500 Silver Serpents. UNIQUE Passive: Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds.",
            "consumed": true,
            "requiredChampion": "Gangplank",
            "id": 3902,
            "name": "Death's Daughter"
        },
        "3903": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "plaintext": "Cannon Barrage hastes allies",
            "image": {
                "full": "3903.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 48
            },
            "sanitizedDescription": "Requires 500 Silver Serpents. UNIQUE Passive: Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
            "consumed": true,
            "requiredChampion": "Gangplank",
            "id": 3903,
            "name": "Raise Morale"
        }
    },
    "groups": [
        {
            "MaxGroupOwnable": "-1",
            "key": "Boots"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "BootsOfSpeed"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Consumable"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Default"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "DoransItems"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Elixir"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GangplankRUpgrade01"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GangplankRUpgrade02"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GangplankRUpgrade03"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GoldItems"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GuardianItems"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "JungleItems"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "NonItem"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "Potion"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeEmergencyShieldGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeFlashZoneGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeLaserAffixGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeMissileBarrageGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegePortableBarracksGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeRefundGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeShieldGeneratorGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeSniperCannonGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeTeleportPadGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeTimefieldGroup"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "TheBlackSpear"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Trinket"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "ViktorHexCore"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "WardGreen"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "WardPink"
        }
    ],
    "type": "item"
}

function getItems() {
  return items
}

function getUltimateItems() {
  var ultimateArray = []
  var itemArr = items.data
  for (var i in itemArr) {
    if(itemArr[i].maps[11] === true) {
      if(!itemArr[i].consumed || itemArr[i].consumed === false) {
        if(!itemArr[i].inStore || itemArr[i].inStore === true) {
          if(itemArr[i].tags) {
            if(itemArr[i].tags[0] !== "Boots") {
              if (itemArr[i].colloq !== "dring" && itemArr[i].colloq !== "dblade" && itemArr[i].colloq !== "dshield") {
                if(itemArr[i].id !== 3006 && itemArr[i].id !== 3009 && itemArr[i].id !== 3020 && itemArr[i].id !== 3117 && itemArr[i].id !== 3158 && itemArr[i].id !== 3111 && itemArr[i].id !== 3047) {
                  if (!itemArr[i].into) {
                    ultimateArray.push(itemArr[i].id)
                  } 
                }
              }
            }
          }
        }
      }
    }
  }
  ultimateArray.splice(ultimateArray.indexOf(2050),1)
  ultimateArray.splice(ultimateArray.indexOf(3416),1)
  ultimateArray.splice(ultimateArray.indexOf(3364),1)
  ultimateArray.splice(ultimateArray.indexOf(3362),1)
  ultimateArray.splice(ultimateArray.indexOf(3340),1)
  ultimateArray.splice(ultimateArray.indexOf(3361),1)
  ultimateArray.splice(ultimateArray.indexOf(3363),1)
  ultimateArray.splice(ultimateArray.indexOf(3680),1)
  ultimateArray.splice(ultimateArray.indexOf(3513),1)
  ultimateArray.splice(ultimateArray.indexOf(2032),1)
  ultimateArray.splice(ultimateArray.indexOf(3198),1)
  ultimateArray.splice(ultimateArray.indexOf(3645),1)
  ultimateArray.splice(ultimateArray.indexOf(3341),1)
  ultimateArray.splice(ultimateArray.indexOf(2033),1)
  ultimateArray.splice(ultimateArray.indexOf(3455),1)
  ultimateArray.splice(ultimateArray.indexOf(3410),1)
  ultimateArray.splice(ultimateArray.indexOf(3175),1)
  ultimateArray.splice(ultimateArray.indexOf(3416),1)
  ultimateArray.splice(ultimateArray.indexOf(3422),1)
  ultimateArray.splice(ultimateArray.indexOf(3599),1)
  return ultimateArray;
}

function getBoots() {
  var itemArr = items.data
  var bootsArr = []
  for (var i in itemArr) {
    if(itemArr[i].tags) {
      if(itemArr[i].tags[0] === 'Boots') {
        bootsArr.push(itemArr[i])
      }
    }
  }
  bootsArr.splice(0,1)
  return bootsArr
}

function getSmite() {
  var itemArr = items.data;
  var smiteItems = []
  for (var i in itemArr) {
    var itemName = itemArr[i].name
    if (itemName) {
      if (itemName.includes('Enchantment')) {
        smiteItems.push(itemArr[i])
      }
    }
  }
  smiteItems = smiteItems.slice(0,11)
  return smiteItems;
}

module.exports = {
  getItems: getItems(),
  getUltimateItems: getUltimateItems(),
  getBoots: getBoots(),
  getSmite: getSmite()
}