var spells = {
    "type": "summoner",
    "version": "7.12.1",
    "data": {
        "SummonerSiegeChampSelect2": {
            "cooldownBurn": "0",
            "key": "SummonerSiegeChampSelect2",
            "name": "Nexus Siege: Siege Weapon Slot",
            "image": {
                "full": "SummonerSiegeChampSelect2.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",
            "effect": [
                null,
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "modes": [
                "SIEGE"
            ],
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "2500",
            "range": [
                2500
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "id": 34,
            "cooldown": [
                0
            ],
            "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!"
        },
        "SummonerTeleport": {
            "vars": [
                {
                    "coeff": [
                        4
                    ],
                    "link": "@text",
                    "key": "f1"
                }
            ],
            "image": {
                "full": "SummonerTeleport.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "4.5",
                "200",
                "300",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 12,
            "cooldownBurn": "0",
            "tooltip": "After channeling for {{ f1 }} seconds, your champion teleports to target allied structure, minion, or ward.<br><br>You may reactivate Teleport to cancel it, placing it on a {{ f3 }} second cooldown.",
            "maxrank": 1,
            "rangeBurn": "25000",
            "description": "After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward.",
            "effect": [
                null,
                [
                    4.5
                ],
                [
                    200
                ],
                [
                    300
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerTeleport",
            "modes": [
                "CLASSIC",
                "TUTORIAL",
                "ASSASSINATE",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "resource": "No Cost",
            "name": "Teleport",
            "costType": "No Cost",
            "sanitizedDescription": "After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward.",
            "sanitizedTooltip": "After channeling for {{ f1 }} seconds, your champion teleports to target allied structure, minion, or ward. You may reactivate Teleport to cancel it, placing it on a {{ f3 }} second cooldown.",
            "range": [
                25000
            ],
            "cooldown": [
                0
            ],
            "summonerLevel": 6
        },
        "SummonerSiegeChampSelect1": {
            "cooldownBurn": "0",
            "key": "SummonerSiegeChampSelect1",
            "name": "Nexus Siege: Siege Weapon Slot",
            "image": {
                "full": "SummonerSiegeChampSelect1.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",
            "effect": [
                null,
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "modes": [
                "SIEGE"
            ],
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "2500",
            "range": [
                2500
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "id": 33,
            "cooldown": [
                0
            ],
            "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!"
        },
        "SummonerExhaust": {
            "cooldownBurn": "210",
            "key": "SummonerExhaust",
            "resource": "No Cost",
            "name": "Exhaust",
            "costType": "No Cost",
            "image": {
                "full": "SummonerExhaust.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds.",
            "sanitizedTooltip": "Exhausts target enemy champion, reducing their Movement Speed by {{ f3 }}%, and their damage dealt by {{ f2 }}% for 2.5 seconds.",
            "effect": [
                null,
                [
                    2.5
                ],
                [
                    40
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    30
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "tooltip": "Exhausts target enemy champion, reducing their Movement Speed by {{ f3 }}%, and their damage dealt by {{ f2 }}% for 2.5 seconds.",
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "650",
            "range": [
                650
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "2.5",
                "40",
                "0",
                "0",
                "30",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 4,
            "modes": [
                "CLASSIC",
                "ODIN",
                "TUTORIAL",
                "ARAM",
                "ASCENSION",
                "FIRSTBLOOD",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "id": 3,
            "cooldown": [
                210
            ],
            "description": "Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds."
        },
        "SummonerBarrier": {
            "cooldownBurn": "180",
            "key": "SummonerBarrier",
            "resource": "No Cost",
            "name": "Barrier",
            "costType": "No Cost",
            "image": {
                "full": "SummonerBarrier.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "Shields your champion from 115-455 damage (depending on champion level) for 2 seconds.",
            "sanitizedTooltip": "Temporarily shields {{ f1 }} damage from your champion for 2 seconds.",
            "effect": [
                null,
                [
                    95
                ],
                [
                    20
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "tooltip": "Temporarily shields {{ f1 }} damage from your champion for 2 seconds.",
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "1200",
            "range": [
                1200
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "95",
                "20",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 4,
            "modes": [
                "ARAM",
                "CLASSIC",
                "TUTORIAL",
                "ODIN",
                "ASCENSION",
                "FIRSTBLOOD",
                "ASSASSINATE",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "id": 21,
            "cooldown": [
                180
            ],
            "description": "Shields your champion from 115-455 damage (depending on champion level) for 2 seconds."
        },
        "SummonerMana": {
            "vars": [
                {
                    "coeff": [
                        190,
                        220,
                        250,
                        280,
                        310,
                        340,
                        370,
                        400,
                        430,
                        460,
                        490,
                        520,
                        550,
                        580,
                        610,
                        640,
                        670,
                        700
                    ],
                    "link": "@player.level",
                    "key": "f1"
                },
                {
                    "coeff": [
                        95,
                        110,
                        125,
                        140,
                        155,
                        170,
                        185,
                        200,
                        215,
                        230,
                        245,
                        260,
                        275,
                        290,
                        305,
                        320,
                        335,
                        350
                    ],
                    "link": "@player.level",
                    "key": "f2"
                }
            ],
            "image": {
                "full": "SummonerMana.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "50",
                "25",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 13,
            "cooldownBurn": "240",
            "tooltip": "Restores {{ f1 }}% maximum Mana to your Champion and {{ f2 }}% to nearby allies.",
            "maxrank": 1,
            "rangeBurn": "600",
            "description": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",
            "effect": [
                null,
                [
                    50
                ],
                [
                    25
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerMana",
            "modes": [
                "ODIN",
                "ARAM",
                "ASCENSION"
            ],
            "resource": "No Cost",
            "name": "Clarity",
            "costType": "No Cost",
            "sanitizedDescription": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",
            "sanitizedTooltip": "Restores {{ f1 }}% maximum Mana to your Champion and {{ f2 }}% to nearby allies.",
            "range": [
                600
            ],
            "cooldown": [
                240
            ],
            "summonerLevel": 1
        },
        "SummonerSmite": {
            "vars": [
                {
                    "coeff": [
                        390,
                        410,
                        430,
                        450,
                        480,
                        510,
                        540,
                        570,
                        600,
                        640,
                        680,
                        720,
                        760,
                        800,
                        850,
                        900,
                        950,
                        1000
                    ],
                    "link": "@player.level",
                    "key": "f1"
                }
            ],
            "image": {
                "full": "SummonerSmite.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "15",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 11,
            "cooldownBurn": "75",
            "tooltip": "Deals <span class=\"colorFEFCFF\">{{ f1 }}</span> true damage to target epic or large monster or enemy minion.  Against monsters, additionally restores <span class=\"colorFFFFFF\">{{ f6 }}</span> <span class=\"colorFF6666\">(+{{ f7 }})</span> Health.<br><br>Smite regains a charge every {{ f3 }} seconds, up to a maximum of 2 charges.",
            "maxrank": 1,
            "rangeBurn": "500",
            "description": "Deals 390-1000 true damage (depending on champion level) to target epic or large monster or enemy minion. Restores Health based on your maximum life when used against monsters.",
            "effect": [
                null,
                [
                    15
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerSmite",
            "modes": [
                "CLASSIC",
                "TUTORIAL",
                "FIRSTBLOOD",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "resource": "No Cost",
            "name": "Smite",
            "costType": "No Cost",
            "sanitizedDescription": "Deals 390-1000 true damage (depending on champion level) to target epic or large monster or enemy minion. Restores Health based on your maximum life when used against monsters.",
            "sanitizedTooltip": "Deals {{ f1 }} true damage to target epic or large monster or enemy minion. Against monsters, additionally restores {{ f6 }} (+{{ f7 }}) Health. Smite regains a charge every {{ f3 }} seconds, up to a maximum of 2 charges.",
            "range": [
                500
            ],
            "cooldown": [
                75
            ],
            "summonerLevel": 10
        },
        "SummonerFlash": {
            "cooldownBurn": "300",
            "key": "SummonerFlash",
            "resource": "No Cost",
            "name": "Flash",
            "costType": "No Cost",
            "image": {
                "full": "SummonerFlash.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "Teleports your champion a short distance toward your cursor's location.",
            "sanitizedTooltip": "Teleports your champion a short distance toward your cursor's location.",
            "effect": [
                null,
                [
                    400
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "tooltip": "Teleports your champion a short distance toward your cursor's location.",
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "425",
            "range": [
                425
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "400",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 8,
            "modes": [
                "CLASSIC",
                "ODIN",
                "TUTORIAL",
                "ARAM",
                "ASCENSION",
                "FIRSTBLOOD",
                "ASSASSINATE",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "id": 4,
            "cooldown": [
                300
            ],
            "description": "Teleports your champion a short distance toward your cursor's location."
        },
        "SummonerSnowball": {
            "cooldownBurn": "80",
            "key": "SummonerSnowball",
            "resource": "No Cost",
            "name": "Mark",
            "costType": "No Cost",
            "image": {
                "full": "SummonerSnowball.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
            "sanitizedTooltip": "Throw a snowball a long distance, dealing {{ f1 }} true damage to the first enemy unit hit and granting True Sight of the target. If it hits an enemy, this ability can be recast for {{ f2 }} seconds to Dash to the tagged unit, dealing an additional {{ f5 }} true damage. Dashing to the target will reduce the cooldown of Mark by {{ f3 }}%. Mark projectiles are not stopped by spell shields or projectile mitigation.",
            "effect": [
                null,
                [
                    1200
                ],
                [
                    20
                ],
                [
                    10
                ],
                [
                    0.5
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "tooltip": "Throw a snowball a long distance, dealing {{ f1 }} true damage to the first enemy unit hit and granting <span class=\"coloree91d7\">True Sight</span> of the target. If it hits an enemy, this ability can be recast for {{ f2 }} seconds to Dash to the tagged unit, dealing an additional {{ f5 }} true damage. Dashing to the target will reduce the cooldown of Mark by {{ f3 }}%.<br><br><span class=\"colorFFFF00\">Mark projectiles are not stopped by spell shields or projectile mitigation.</span>",
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "1600",
            "range": [
                1600
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "1200",
                "20",
                "10",
                "0.5",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "modes": [
                "ARAM",
                "FIRSTBLOOD"
            ],
            "id": 32,
            "cooldown": [
                80
            ],
            "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up."
        },
        "SummonerDot": {
            "vars": [
                {
                    "coeff": [
                        70,
                        90,
                        110,
                        130,
                        150,
                        170,
                        190,
                        210,
                        230,
                        250,
                        270,
                        290,
                        310,
                        330,
                        350,
                        370,
                        390,
                        410
                    ],
                    "link": "@player.level",
                    "key": "f1"
                }
            ],
            "image": {
                "full": "SummonerDot.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "5",
                "10",
                "4",
                "100",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 14,
            "cooldownBurn": "210",
            "tooltip": "Ignite deals <span class=\"colorFEFCFF\">{{ f1 }}</span> true damage to target enemy champion over 5 seconds, grants you vision of the target and applies Grievous Wounds for the duration.<br><br><rules>(Grievous Wounds reduces healing effects by 40%. This vision does not reveal stealthed enemies.)</rules>",
            "maxrank": 1,
            "rangeBurn": "600",
            "description": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",
            "effect": [
                null,
                [
                    5
                ],
                [
                    10
                ],
                [
                    4
                ],
                [
                    100
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerDot",
            "modes": [
                "CLASSIC",
                "ODIN",
                "TUTORIAL",
                "ARAM",
                "ASCENSION",
                "FIRSTBLOOD",
                "ASSASSINATE",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "resource": "No Cost",
            "name": "Ignite",
            "costType": "No Cost",
            "sanitizedDescription": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",
            "sanitizedTooltip": "Ignite deals {{ f1 }} true damage to target enemy champion over 5 seconds, grants you vision of the target and applies Grievous Wounds for the duration. (Grievous Wounds reduces healing effects by 40%. This vision does not reveal stealthed enemies.)",
            "range": [
                600
            ],
            "cooldown": [
                210
            ],
            "summonerLevel": 10
        },
        "SummonerDarkStarChampSelect2": {
            "cooldownBurn": "0",
            "key": "SummonerDarkStarChampSelect2",
            "name": "Disabled Summoner Spells",
            "image": {
                "full": "SummonerDarkStarChampSelect2.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "Summoner spells are disabled in this mode.",
            "effect": [
                null,
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "modes": [
                "DARKSTAR"
            ],
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "2500",
            "range": [
                2500
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "id": 36,
            "cooldown": [
                0
            ],
            "description": "Summoner spells are disabled in this mode."
        },
        "SummonerDarkStarChampSelect1": {
            "cooldownBurn": "0",
            "key": "SummonerDarkStarChampSelect1",
            "name": "Disabled Summoner Spells",
            "image": {
                "full": "SummonerDarkStarChampSelect1.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "Summoner spells are disabled in this mode.",
            "effect": [
                null,
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "modes": [
                "DARKSTAR"
            ],
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "2500",
            "range": [
                2500
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "id": 35,
            "cooldown": [
                0
            ],
            "description": "Summoner spells are disabled in this mode."
        },
        "SummonerPoroRecall": {
            "cooldownBurn": "10",
            "key": "SummonerPoroRecall",
            "resource": "No Cost",
            "name": "To the King!",
            "costType": "No Cost",
            "image": {
                "full": "SummonerPoroRecall.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "sanitizedDescription": "Quickly travel to the Poro King's side.",
            "sanitizedTooltip": "Passive: Hitting an enemy champion with a Poro gives your team a Poro Mark. Upon reaching 10 Poro Marks, your team summons the Poro King to fight alongside them. While the Poro King is active, no Poro Marks can be scored by either team. Active: Quickly dash to King Poro's side. Can only be cast while the Poro King is summoned for your team. ''Poros tug the heartstrings. The rest of you just comes along for the ride.''",
            "effect": [
                null,
                [
                    3000
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "tooltip": "<span class=\"colorFFE076\">Passive:</span> Hitting an enemy champion with a Poro gives your team a Poro Mark. Upon reaching 10 Poro Marks, your team summons the Poro King to fight alongside them. While the Poro King is active, no Poro Marks can be scored by either team.<br><br><span class=\"colorFFE076\">Active:</span> Quickly dash to King Poro's side. Can only be cast while the Poro King is summoned for your team. <br><br><i><span class=\"colorFDD017\">''Poros tug the heartstrings. The rest of you just comes along for the ride.''</span></i>",
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "200",
            "range": [
                200
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "3000",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "modes": [
                "KINGPORO"
            ],
            "id": 30,
            "cooldown": [
                10
            ],
            "description": "Quickly travel to the Poro King's side."
        },
        "SummonerHaste": {
            "vars": [
                {
                    "coeff": [
                        27
                    ],
                    "link": "@text",
                    "key": "f1"
                }
            ],
            "image": {
                "full": "SummonerHaste.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "27",
                "0",
                "2",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 6,
            "cooldownBurn": "180",
            "tooltip": "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of {{ f1 }}% Movement Speed after accelerating for 2 seconds.",
            "maxrank": 1,
            "rangeBurn": "200",
            "description": "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds.",
            "effect": [
                null,
                [
                    27
                ],
                [
                    0
                ],
                [
                    2
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerHaste",
            "modes": [
                "CLASSIC",
                "ODIN",
                "TUTORIAL",
                "ARAM",
                "ASCENSION",
                "FIRSTBLOOD",
                "ASSASSINATE",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "resource": "No Cost",
            "name": "Ghost",
            "costType": "No Cost",
            "sanitizedDescription": "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds.",
            "sanitizedTooltip": "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of {{ f1 }}% Movement Speed after accelerating for 2 seconds.",
            "range": [
                200
            ],
            "cooldown": [
                180
            ],
            "summonerLevel": 1
        },
        "SummonerHeal": {
            "vars": [
                {
                    "coeff": [
                        90,
                        105,
                        120,
                        135,
                        150,
                        165,
                        180,
                        195,
                        210,
                        225,
                        240,
                        255,
                        270,
                        285,
                        300,
                        315,
                        330,
                        345
                    ],
                    "link": "@player.level",
                    "key": "f1"
                }
            ],
            "image": {
                "full": "SummonerHeal.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "0.3",
                "75",
                "15",
                "0.5",
                "826",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 7,
            "cooldownBurn": "240",
            "tooltip": "Restores {{ f1 }} Health and grants 30% Movement Speed for 1 second to your champion and target allied champion. This healing is halved for units recently affected by Summoner Heal.<br><br><span class=\"colorFFFF00\">If this spell cannot find a target, it will cast on the most wounded allied champion in range.</span>",
            "maxrank": 1,
            "rangeBurn": "850",
            "description": "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
            "effect": [
                null,
                [
                    0.3
                ],
                [
                    75
                ],
                [
                    15
                ],
                [
                    0.5
                ],
                [
                    826
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerHeal",
            "modes": [
                "CLASSIC",
                "ODIN",
                "TUTORIAL",
                "ARAM",
                "ASCENSION",
                "FIRSTBLOOD",
                "ASSASSINATE",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "resource": "No Cost",
            "name": "Heal",
            "costType": "No Cost",
            "sanitizedDescription": "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
            "sanitizedTooltip": "Restores {{ f1 }} Health and grants 30% Movement Speed for 1 second to your champion and target allied champion. This healing is halved for units recently affected by Summoner Heal. If this spell cannot find a target, it will cast on the most wounded allied champion in range.",
            "range": [
                850
            ],
            "cooldown": [
                240
            ],
            "summonerLevel": 1
        },
        "SummonerPoroThrow": {
            "cooldownBurn": "20",
            "key": "SummonerPoroThrow",
            "resource": "No Cost",
            "name": "Poro Toss",
            "costType": "No Cost",
            "image": {
                "full": "SummonerPoroThrow.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.",
            "sanitizedTooltip": "Toss a Poro a long distance, dealing {{ f2 }} true damage to the first enemy unit hit, granting True Sight of the target. This ability can be recast for 3 seconds if it hits an enemy to dash to the target hit. Dashing to the target will reduce the cooldown of Poro Toss by 5 seconds. Poros are not blocked by spell shields or wind walls because they are animals, not spells! ''Poros are a model for Runeterran aerodynamics.''",
            "effect": [
                null,
                [
                    20
                ],
                [
                    10
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "tooltip": "Toss a Poro a long distance, dealing {{ f2 }} true damage to the first enemy unit hit, granting <span class=\"coloree91d7\">True Sight</span> of the target. This ability can be recast for 3 seconds if it hits an enemy to dash to the target hit. Dashing to the target will reduce the cooldown of Poro Toss by 5 seconds.<br><br>Poros are not blocked by spell shields or wind walls because they are animals, not spells!<br><br><i><span class=\"colorFDD017\">''Poros are a model for Runeterran aerodynamics.''</span></i>",
            "maxrank": 1,
            "costBurn": "0",
            "rangeBurn": "2500",
            "range": [
                2500
            ],
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "20",
                "10",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "summonerLevel": 1,
            "modes": [
                "KINGPORO"
            ],
            "id": 31,
            "cooldown": [
                20
            ],
            "description": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up."
        },
        "SummonerBoost": {
            "vars": [
                {
                    "coeff": [
                        3
                    ],
                    "link": "@text",
                    "key": "f1"
                }
            ],
            "image": {
                "full": "SummonerBoost.png",
                "group": "spell",
                "sprite": "spell0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "costBurn": "0",
            "cost": [
                0
            ],
            "effectBurn": [
                "",
                "0.65",
                "3",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "id": 1,
            "cooldownBurn": "210",
            "tooltip": "Removes all disables (excluding suppression) and summoner spell debuffs affecting your champion and reduces the duration of disables by 65% for the next {{ f1 }} seconds.",
            "maxrank": 1,
            "rangeBurn": "200",
            "description": "Removes all disables (excluding suppression) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",
            "effect": [
                null,
                [
                    0.65
                ],
                [
                    3
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ],
                [
                    0
                ]
            ],
            "key": "SummonerBoost",
            "modes": [
                "CLASSIC",
                "ODIN",
                "TUTORIAL",
                "ARAM",
                "ASCENSION",
                "FIRSTBLOOD",
                "URF",
                "ARSR",
                "DOOMBOTSTEEMO"
            ],
            "resource": "No Cost",
            "name": "Cleanse",
            "costType": "No Cost",
            "sanitizedDescription": "Removes all disables (excluding suppression) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",
            "sanitizedTooltip": "Removes all disables (excluding suppression) and summoner spell debuffs affecting your champion and reduces the duration of disables by 65% for the next {{ f1 }} seconds.",
            "range": [
                200
            ],
            "cooldown": [
                210
            ],
            "summonerLevel": 6
        }
    }
}

function getSumData() {
  return spells
}

function ultimateSpells() {
    var sums = spells
    var sumArray = [];
    for (var s in sums.data) {
        if(!sums.data[s].key.includes("Dark") && !sums.data[s].key.includes("Siege") && !sums.data[s].key.includes("Poro") && !sums.data[s].key.includes("Snowball") && !sums.data[s].key.includes("Mana") && !sums.data[s].key.includes("Smite")) {
            sumArray.push(sums.data[s])
        }
    }
    return sumArray;
}

function getTwo() {
    var sums = ultimateSpells()
    var sumArr = [];
    sumArr.push(sums.splice(Math.floor(Math.random()*sums.length), 1));
    sumArr.push(sums.splice(Math.floor(Math.random()*sums.length), 1));
    return sumArr;
}

module.exports = {
  spells: getSumData(),
  ultimateSpells: ultimateSpells(),
  getTwo: getTwo()
}