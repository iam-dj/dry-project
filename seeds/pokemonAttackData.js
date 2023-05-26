const AllGenPokemonMoves = [
  {
    id: 1,
    name: "Pound",
    type: "Normal",
    power: 40,
    description:
      "The target is physically pounded with a long tail or a forelimb, etc.",
    accuracy: 100,
  },
  {
    id: 2,
    name: "Karate Chop",
    type: "Normal",
    power: 50,
    description:
      "The target is attacked with a sharp chop. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 3,
    name: "Double Slap",
    type: "Normal",
    power: 15,
    description:
      "The target is slapped repeatedly, back and forth, two to five times in a row.",
    accuracy: 85,
  },
  {
    id: 4,
    name: "Comet Punch",
    type: "Normal",
    power: 18,
    description:
      "The target is hit with a flurry of punches that strike two to five times in a row.",
    accuracy: 85,
  },
  {
    id: 5,
    name: "Mega Punch",
    type: "Normal",
    power: 80,
    description: "The target is slugged with a punch thrown at maximum power.",
    accuracy: 85,
  },
  {
    id: 6,
    name: "Pay Day",
    type: "Normal",
    power: 40,
    description:
      "Numerous coins are hurled at the target to inflict damage. Money is earned after battle.",
    accuracy: 100,
  },
  {
    id: 7,
    name: "Fire Punch",
    type: "Fire",
    power: 75,
    description:
      "The target is punched with a fiery fist. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 8,
    name: "Ice Punch",
    type: "Ice",
    power: 75,
    description:
      "The target is punched with an icy fist. It may also freeze the target solid.",
    accuracy: 100,
  },
  {
    id: 9,
    name: "Thunder Punch",
    type: "Electric",
    power: 75,
    description:
      "The target is punched with an electrified fist. It may also leave the target with paralysis.",
    accuracy: 100,
  },
  {
    id: 10,
    name: "Scratch",
    type: "Normal",
    power: 40,
    description:
      "Hard, pointed, sharp claws rake the target to inflict damage.",
    accuracy: 100,
  },
  {
    id: 11,
    name: "Vice Grip",
    type: "Normal",
    power: 55,
    description:
      "The target is gripped and squeezed from both sides to inflict damage.",
    accuracy: 100,
  },
  {
    id: 12,
    name: "Guillotine",
    type: "Normal",
    power: 100,
    description:
      "A vicious, tearing attack with big pincers. The target will faint instantly if this attack hits.",
    accuracy: 30,
  },
  {
    id: 13,
    name: "Razor Wind",
    type: "Grass",
    power: 80,
    description:
      "In this two-turn attack, blades of wind hit opposing Pokémon on the second turn. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 14,
    name: "Swords Dance",
    type: "Normal",
    power: null,
    description:
      "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.",
    accuracy: null,
  },
  {
    id: 15,
    name: "Cut",
    type: "Grass",
    power: 50,
    description: "The target is cut with a scythe or claw.",
    accuracy: 95,
  },
  {
    id: 16,
    name: "Gust",
    type: "Flying",
    power: 40,
    description:
      "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
    accuracy: 100,
  },
  {
    id: 17,
    name: "Wing Attack",
    type: "Flying",
    power: 60,
    description:
      "The target is struck with large, imposing wings spread wide to inflict damage.",
    accuracy: 100,
  },
  {
    id: 18,
    name: "Fly",
    type: "Flying",
    power: 90,
    description: "The user soars and then strikes its target on the next turn.",
    accuracy: 95,
  },
  {
    id: 19,
    name: "Bind",
    type: "Normal",
    power: 15,
    description:
      "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.",
    accuracy: 85,
  },
  {
    id: 20,
    name: "Slam",
    type: "Normal",
    power: 80,
    description:
      "The target is slammed with a long tail, vines, or the like to inflict damage.",
    accuracy: 75,
  },
  {
    id: 21,
    name: "Vine Whip",
    type: "Normal",
    power: 45,
    description:
      "The target is struck with slender, whiplike vines to inflict damage.",
    accuracy: 100,
  },
  {
    id: 22,
    name: "Stomp",
    type: "Normal",
    power: 65,
    description:
      "The target is stomped with a big foot. It may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 23,
    name: "Double Kick",
    type: "Fighting",
    power: 30,
    description:
      "The target is quickly kicked twice in succession using both feet.",
    accuracy: 100,
  },
  {
    id: 24,
    name: "Mega Kick",
    type: "Fighting",
    power: 120,
    description:
      "The target is attacked by a kick launched with muscle-packed power.",
    accuracy: 75,
  },
  {
    id: 25,
    name: "Jump Kick",
    type: "Fighting",
    power: 100,
    description:
      "The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself.",
    accuracy: 95,
  },
  {
    id: 26,
    name: "Rolling Kick",
    type: "Fighting",
    power: 60,
    description:
      "The user lashes out with a quick, spinning kick. It may also make the target flinch.",
    accuracy: 85,
  },
  {
    id: 27,
    name: "Sand Attack",
    type: "Ground",
    power: null,
    description: "Sand is hurled in the target's face, reducing its accuracy.",
    accuracy: 100,
  },
  {
    id: 28,
    name: "Headbutt",
    type: "Normal",
    power: 70,
    description:
      "The user sticks out its head and attacks by charging straight into the target. It may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 29,
    name: "Horn Attack",
    type: "Ground",
    power: 65,
    description:
      "The target is jabbed with a sharply pointed horn to inflict damage.",
    accuracy: 100,
  },
  {
    id: 30,
    name: "Fury Attack",
    type: "Normal",
    power: 15,
    description:
      "The target is jabbed repeatedly with a horn or beak two to five times in a row.",
    accuracy: 85,
  },
  {
    id: 31,
    name: "Horn Drill",
    type: "Normal",
    power: null,
    description:
      "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",
    accuracy: 30,
  },
  {
    id: 32,
    name: "Tackle",
    type: "Normal",
    power: 40,
    description:
      "A physical attack in which the user charges and slams into the target with its whole body.",
    accuracy: 100,
  },
  {
    id: 33,
    name: "Body Slam",
    type: "Normal",
    power: 85,
    description:
      "The user drops onto the target with its full body weight. It may also leave the target with paralysis.",
    accuracy: 100,
  },
  {
    id: 34,
    name: "Wrap",
    type: "Normal",
    power: 15,
    description:
      "A long body or vines are used to wrap and squeeze the target for four to five turns.",
    accuracy: 90,
  },
  {
    id: 35,
    name: "Take Down",
    type: "Normal",
    power: 90,
    description: "A reckless charge attack that also hurts the user a little.",
    accuracy: 85,
  },
  {
    id: 36,
    name: "Thrash",
    type: "Normal",
    power: 120,
    description:
      "The user rampages and attacks for two to three turns. It then becomes confused.",
    accuracy: 100,
  },
  {
    id: 37,
    name: "Double-Edge",
    type: "Normal",
    power: 120,
    description:
      "A reckless, life-risking tackle. It also damages the user by a fairly large amount, however.",
    accuracy: 100,
  },
  {
    id: 38,
    name: "Tail Whip",
    type: "Normal",
    power: null,
    description:
      "The user wags its tail cutely, making opposing Pokémon less wary and lowering their Defense stats.",
    accuracy: 100,
  },
  {
    id: 39,
    name: "Poison Sting",
    type: "Poison",
    power: 15,
    description:
      "The user stabs the target with a poisonous stinger. This may also poison the target.",
    accuracy: 100,
  },
  {
    id: 40,
    name: "Twineedle",
    type: "Bug",
    power: 25,
    description:
      "The user damages the target twice in succession by jabbing it with two spikes. It may also poison the target.",
    accuracy: 100,
  },
  {
    id: 41,
    name: "Leer",
    type: "Normal",
    power: null,
    description:
      "The opposing Pokémon are stared at with sharp eyes. This lowers their Defense stat.",
    accuracy: 100,
  },
  {
    id: 42,
    name: "Bite",
    type: "Dark",
    power: 60,
    description:
      "The target is bitten with viciously sharp fangs. It may make the target flinch.",
    accuracy: 100,
  },
  {
    id: 43,
    name: "Growl",
    type: "Normal",
    power: null,
    description:
      "The user growls in an endearing way, making opposing Pokémon less wary and lowering their Attack stats.",
    accuracy: 100,
  },
  {
    id: 44,
    name: "Roar",
    type: "Ground",
    power: null,
    description:
      "The target is scared off and replaced by another Pokémon in its party. In the wild, the battle ends.",
    accuracy: null,
  },
  {
    id: 45,
    name: "Sing",
    type: "Fairy",
    power: null,
    description:
      "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber.",
    accuracy: 55,
  },
  {
    id: 46,
    name: "Supersonic",
    type: "Flying",
    power: null,
    description:
      "The user generates odd sound waves from its body. It may confuse the target.",
    accuracy: 55,
  },
  {
    id: 47,
    name: "Sonic Boom",
    type: "Flying",
    power: null,
    description:
      "The target is hit with a destructive shock wave that always inflicts 20 HP damage.",
    accuracy: 90,
  },
  {
    id: 48,
    name: "Disable",
    type: "Normal",
    power: null,
    description:
      "For four turns, this move prevents the target from using the move it last used.",
    accuracy: 100,
  },
  {
    id: 49,
    name: "Acid",
    type: "Grass",
    power: 40,
    description:
      "The opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 50,
    name: "Ember",
    type: "Fire",
    power: 40,
    description:
      "The target is attacked with small flames. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 51,
    name: "Flamethrower",
    type: "Fire",
    power: 90,
    description:
      "The target is scorched with an intense blast of fire. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 52,
    name: "Mist",
    type: "Water",
    power: null,
    description:
      "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns.",
    accuracy: null,
  },
  {
    id: 53,
    name: "Water Gun",
    type: "Water",
    power: 40,
    description: "The target is blasted with a forceful shot of water.",
    accuracy: 100,
  },
  {
    id: 54,
    name: "Hydro Pump",
    type: "Water",
    power: 110,
    description:
      "The target is blasted with a giant volume of water launched under great pressure.",
    accuracy: 80,
  },
  {
    id: 55,
    name: "Surf",
    type: "Water",
    power: 90,
    description:
      "The user attacks everything around it by swamping its surroundings with a giant wave.",
    accuracy: 100,
  },
  {
    id: 56,
    name: "Ice Beam",
    type: "Ice",
    power: 90,
    description:
      "The target is struck with an icy-cold beam. It may freeze the target solid.",
    accuracy: 100,
  },
  {
    id: 57,
    name: "Blizzard",
    type: "Ice",
    power: 110,
    description:
      "A howling blizzard is summoned to strike opposing Pokémon. It may freeze them solid.",
    accuracy: 70,
  },
  {
    id: 58,
    name: "Psybeam",
    type: "Normal",
    power: 65,
    description:
      "The target is attacked with a peculiar ray. It may also confuse the target.",
    accuracy: 100,
  },
  {
    id: 59,
    name: "Bubble Beam",
    type: "Water",
    power: 65,
    description:
      "A spray of bubbles is forcefully ejected at the target. It may also lower the target's Speed stat.",
    accuracy: 100,
  },
  {
    id: 60,
    name: "Aurora Beam",
    type: "Normal",
    power: 65,
    description:
      "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat.",
    accuracy: 100,
  },
  {
    id: 61,
    name: "Hyper Beam",
    type: "Normal",
    power: 150,
    description:
      "The target is attacked with a powerful beam. The user can't move on the next turn.",
    accuracy: 90,
  },
  {
    id: 62,
    name: "Peck",
    type: "Flying",
    power: 35,
    description: "The target is jabbed with a sharply pointed beak or horn.",
    accuracy: 100,
  },
  {
    id: 63,
    name: "Drill Peck",
    type: "Flying",
    power: 80,
    description:
      "A corkscrewing attack that strikes the target with a sharp beak acting as a drill.",
    accuracy: 100,
  },
  {
    id: 64,
    name: "Submission",
    type: "Fighting",
    power: 80,
    description:
      "The user grabs the target and recklessly dives for the ground. It also hurts the user slightly.",
    accuracy: 80,
  },
  {
    id: 65,
    name: "Low Kick",
    type: "Fighting",
    power: null,
    description:
      "A powerful low kick that makes the target fall over. It inflicts greater damage on heavier targets.",
    accuracy: 100,
  },
  {
    id: 66,
    name: "Counter",
    type: "Fighting",
    power: null,
    description:
      "A retaliation move that counters any physical attack, inflicting double the damage taken.",
    accuracy: 100,
  },
  {
    id: 67,
    name: "Seismic Toss",
    type: "Fighting",
    power: null,
    description:
      "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.",
    accuracy: 100,
  },
  {
    id: 68,
    name: "Strength",
    type: "Ground",
    power: 80,
    description:
      "The target is slugged with a punch thrown at maximum power. It can also be used to move heavy boulders.",
    accuracy: 100,
  },
  {
    id: 69,
    name: "Absorb",
    type: "Grass",
    power: 20,
    description:
      "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
    accuracy: 100,
  },
  {
    id: 70,
    name: "Mega Drain",
    type: "Grass",
    power: 40,
    description:
      "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
    accuracy: 100,
  },
  {
    id: 71,
    name: "Leech Seed",
    type: "Grass",
    power: null,
    description:
      "A seed is planted on the target. It steals some HP from the target every turn.",
    accuracy: 90,
  },
  {
    id: 72,
    name: "Growth",
    type: "Normal",
    power: null,
    description:
      "The user's body grows all at once, raising the Attack and Sp. Atk stats.",
    accuracy: null,
  },
  {
    id: 73,
    name: "Razor Leaf",
    type: "Grass",
    power: 55,
    description:
      "Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily.",
    accuracy: 95,
  },
  {
    id: 74,
    name: "Solar Beam",
    type: "Normal",
    power: 120,
    description:
      "In this two-turn attack, the user gathers energy and blasts a bundled beam on the next turn.",
    accuracy: 100,
  },
  {
    id: 75,
    name: "Poison Powder",
    type: "Poison",
    power: null,
    description:
      "The user scatters a cloud of poisonous dust that poisons the target.",
    accuracy: 75,
  },
  {
    id: 76,
    name: "Stun Spore",
    type: "Grass",
    power: null,
    description:
      "The user scatters a cloud of paralyzing powder. It may leave the target with paralysis.",
    accuracy: 75,
  },
  {
    id: 77,
    name: "Sleep Powder",
    type: "Bug",
    power: null,
    description:
      "The user scatters a big cloud of sleep-inducing dust around the target.",
    accuracy: 75,
  },
  {
    id: 78,
    name: "Petal Dance",
    type: "Grass",
    power: 120,
    description:
      "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.",
    accuracy: 100,
  },
  {
    id: 79,
    name: "String Shot",
    type: "Bug",
    power: null,
    description:
      "The targets are bound with silk blown from the user's mouth. This silk reduces the targets' Speed stat.",
    accuracy: 95,
  },
  {
    id: 80,
    name: "Dragon Rage",
    type: "Dragon",
    power: null,
    description:
      "This attack hits the target with a shock wave of pure rage. This attack always inflicts 40 HP damage.",
    accuracy: 100,
  },
  {
    id: 81,
    name: "Sonic Boom",
    type: "Flying",
    power: null,
    description:
      "The target is hit with a destructive shock wave that always inflicts 20 HP damage.",
    accuracy: 90,
  },
  {
    id: 82,
    name: "Twineedle",
    type: "Bug",
    power: 25,
    description:
      "The user damages the target twice in succession by jabbing it with two spikes. It may also poison the target.",
    accuracy: 100,
  },
  {
    id: 83,
    name: "Pin Missile",
    type: "Bug",
    power: 25,
    description:
      "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
    accuracy: 95,
  },
  {
    id: 84,
    name: "Bug Bite",
    type: "Bug",
    power: 60,
    description:
      "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
    accuracy: 100,
  },
  {
    id: 85,
    name: "Bite",
    type: "Normal",
    power: 60,
    description:
      "The target is bitten with viciously sharp fangs. It may make the target flinch.",
    accuracy: 100,
  },
  {
    id: 86,
    name: "Swords Dance",
    type: "Grass",
    power: null,
    description:
      "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.",
    accuracy: null,
  },
  {
    id: 87,
    name: "Cut",
    type: "Grass",
    power: 50,
    description: "The target is cut with a scythe or claw.",
    accuracy: 95,
  },
  {
    id: 88,
    name: "Gust",
    type: "Flying",
    power: 40,
    description:
      "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
    accuracy: 100,
  },
  {
    id: 89,
    name: "Wing Attack",
    type: "Flying",
    power: 60,
    description:
      "The target is struck with large, imposing wings spread wide to inflict damage.",
    accuracy: 100,
  },
  {
    id: 90,
    name: "Fly",
    type: "Flying",
    power: 90,
    description:
      "The user soars and then strikes its target on the next turn. It can also be used to fly to any familiar town.",
    accuracy: 95,
  },
  {
    id: 91,
    name: "Grass",
    type: "Bug",
    power: 15,
    description:
      "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.",
    accuracy: 85,
  },
  {
    id: 92,
    name: "Slam",
    type: "Normal",
    power: 80,
    description:
      "The target is slammed with a long tail, vines, or the like to inflict damage.",
    accuracy: 75,
  },
  {
    id: 93,
    name: "Vine Whip",
    type: "Grass",
    power: 45,
    description:
      "The target is struck with slender, whiplike vines to inflict damage.",
    accuracy: 100,
  },
  {
    id: 94,
    name: "Stomp",
    type: "Ground",
    power: 65,
    description:
      "The target is stomped with a big foot. It may make the target flinch.",
    accuracy: 100,
  },
  {
    id: 95,
    name: "Double Kick",
    type: "Fighting",
    power: 30,
    description:
      "The target is quickly kicked twice in succession using both feet.",
    accuracy: 100,
  },
  {
    id: 96,
    name: "Mega Kick",
    type: "Fighting",
    power: 120,
    description:
      "The target is attacked by a kick launched with muscle-packed power.",
    accuracy: 75,
  },
  {
    id: 97,
    name: "Jump Kick",
    type: "Fighting",
    power: 100,
    description:
      "The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself.",
    accuracy: 95,
  },
  {
    id: 98,
    name: "Rolling Kick",
    type: "Fighting",
    power: 60,
    description:
      "The user lashes out with a quick, spinning kick. It may also make the target flinch.",
    accuracy: 85,
  },
  {
    id: 99,
    name: "Sand Attack",
    type: "Ground",
    power: null,
    description: "Sand is hurled in the target's face, reducing its accuracy.",
    accuracy: 100,
  },
  {
    id: 100,
    name: "Headbutt",
    type: "Fighting",
    power: 70,
    description:
      "The user sticks out its head and attacks by charging straight into the target. It may make the target flinch.",
    accuracy: 100,
  },
  {
    id: 101,
    name: "Leech Life",
    type: "Bug",
    power: 80,
    description:
      "The user drains the target's blood. The user's HP is restored by half the damage taken by the target.",
    accuracy: 100,
  },
  {
    id: 102,
    name: "Night Shade",
    type: "Ghost",
    power: null,
    description:
      "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.",
    accuracy: 100,
  },
  {
    id: 103,
    name: "Mimic",
    type: "Bug",
    power: null,
    description:
      "The user copies the target's last move. The move can be used during battle until the Pokémon is switched out.",
    accuracy: null,
  },
  {
    id: 104,
    name: "Screech",
    type: "Bug",
    power: null,
    description:
      "An earsplitting screech is emitted to sharply reduce the target's Defense stat.",
    accuracy: 85,
  },
  {
    id: 105,
    name: "Double Team",
    type: "Fighting",
    power: null,
    description:
      "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.",
    accuracy: null,
  },
  {
    id: 106,
    name: "Recover",
    type: "Bug",
    power: null,
    description:
      "Restoring its own cells, the user restores its own HP by half of its max HP.",
    accuracy: null,
  },
  {
    id: 107,
    name: "Harden",
    type: "Bug",
    power: null,
    description:
      "The user stiffens its body's muscles to raise its Defense stat.",
    accuracy: null,
  },
  {
    id: 108,
    name: "Minimize",
    type: "Bug",
    power: null,
    description:
      "The user compresses its body to make itself look smaller, which sharply raises its evasiveness.",
    accuracy: null,
  },
  {
    id: 109,
    name: "Smokescreen",
    type: "Normal",
    power: null,
    description:
      "The user releases an obscuring cloud of smoke or ink. It reduces the target's accuracy.",
    accuracy: 100,
  },
  {
    id: 110,
    name: "Confuse Ray",
    type: "Psychic",
    power: null,
    description:
      "The target is exposed to a sinister ray that triggers confusion.",
    accuracy: 100,
  },
  {
    id: 111,
    name: "Withdraw",
    type: "Water",
    power: null,
    description:
      "The user withdraws its body into its hard shell, raising its Defense stat.",
    accuracy: null,
  },
  {
    id: 112,
    name: "Defense Curl",
    type: "Bug",
    power: null,
    description:
      "The user curls up to conceal weak spots and raise its Defense stat.",
    accuracy: null,
  },
  {
    id: 113,
    name: "Barrier",
    type: "Bug",
    power: null,
    description:
      "The user throws up a sturdy wall that sharply raises its Defense stat.",
    accuracy: null,
  },
  {
    id: 114,
    name: "Light Screen",
    type: "Normal",
    power: null,
    description:
      "A wondrous wall of light is put up to suppress damage from special attacks for five turns.",
    accuracy: null,
  },
  {
    id: 115,
    name: "Haze",
    type: "Grass",
    power: null,
    description:
      "The user creates a haze that eliminates every stat change among all Pokémon engaged in battle.",
    accuracy: null,
  },
  {
    id: 116,
    name: "Reflect",
    type: "Normal",
    power: null,
    description:
      "A wondrous wall of light is put up to suppress damage from physical attacks for five turns.",
    accuracy: null,
  },
  {
    id: 117,
    name: "Focus Energy",
    type: "Fighting",
    power: 50,
    description:
      "The user takes a deep breath and focuses to raise the critical-hit ratio of its attacks.",
    accuracy: null,
  },
  {
    id: 118,
    name: "Bide",
    type: "Bug",
    power: null,
    description:
      "The user endures attacks for two turns, then strikes back to cause double the damage taken.",
    accuracy: null,
  },
  {
    id: 119,
    name: "Metronome",
    type: "Psychic",
    power: 60,
    description:
      "The user waggles its finger, triggering a move. There is no telling what will happen.",
    accuracy: null,
  },
  {
    id: 120,
    name: "Mirror Move",
    type: "Psychic",
    power: null,
    description:
      "The user counters the target by mimicking the target's last move.",
    accuracy: null,
  },
  {
    id: 121,
    name: "Egg Bomb",
    type: "Grass",
    power: 100,
    description:
      "A large egg is hurled at the target with maximum force to inflict damage.",
    accuracy: 75,
  },
  {
    id: 122,
    name: "Lick",
    type: "Ghost",
    power: 30,
    description:
      "The target is licked with a long tongue, causing damage. It may also paralyze the target.",
    accuracy: 100,
  },
  {
    id: 123,
    name: "Smog",
    type: "Poison",
    power: 30,
    description:
      "The target is attacked with a discharge of filthy gases. It may also poison the target.",
    accuracy: 70,
  },
  {
    id: 124,
    name: "Sludge",
    type: "Poison",
    power: 65,
    description:
      "Unsanitary sludge is hurled at the target. It may also poison the target.",
    accuracy: 100,
  },
  {
    id: 125,
    name: "Bone Club",
    type: "Ground",
    power: 65,
    description:
      "The user clubs the target with a bone. It may also make the target flinch.",
    accuracy: 85,
  },
  {
    id: 126,
    name: "Fire Blast",
    type: "Fire",
    power: 110,
    description:
      "The target is attacked with an intense blast of all-consuming fire. It may also leave the target with a burn.",
    accuracy: 85,
  },
  {
    id: 127,
    name: "Waterfall",
    type: "Water",
    power: 80,
    description:
      "The user charges at the target and may make it flinch. It can also be used to climb a waterfall.",
    accuracy: 100,
  },
  {
    id: 128,
    name: "Clamp",
    type: "Normal",
    power: 35,
    description:
      "The target is clamped and squeezed by the user's very thick and sturdy shell for four to five turns.",
    accuracy: 85,
  },
  {
    id: 129,
    name: "Swift",
    type: "Normal",
    power: 60,
    description:
      "Star-shaped rays are shot at the target. This attack never misses.",
    accuracy: null,
  },
  {
    id: 130,
    name: "Skull Bash",
    type: "Rock",
    power: 130,
    description:
      "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn.",
    accuracy: 100,
  },
  {
    id: 131,
    name: "Spike Cannon",
    type: "Rock",
    power: 20,
    description:
      "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
    accuracy: 100,
  },
  {
    id: 132,
    name: "Constrict",
    type: "Normal",
    power: 10,
    description:
      "The target is attacked with long, creeping tentacles or vines. It may also lower the target's Speed stat.",
    accuracy: 100,
  },
  {
    id: 133,
    name: "Amnesia",
    type: "Normal",
    power: null,
    description:
      "The user temporarily empties its mind to forget its concerns. It sharply raises the user's Sp. Def stat.",
    accuracy: null,
  },
  {
    id: 134,
    name: "Kinesis",
    type: "Psychic",
    power: null,
    description:
      "The user distracts the target by bending a spoon. It lowers the target's accuracy.",
    accuracy: 80,
  },
  {
    id: 135,
    name: "Soft-Boiled",
    type: "Normal",
    power: null,
    description: "The user restores its own HP by up to half of its max HP.",
    accuracy: null,
  },
  {
    id: 136,
    name: "High Jump Kick",
    type: "Fighting",
    power: 130,
    description:
      "The target is attacked with a knee kick from a jump. If it misses, the user is hurt instead.",
    accuracy: 90,
  },
  {
    id: 137,
    name: "Glare",
    type: "Fighting",
    power: null,
    description:
      "The user intimidates the target with the pattern on its belly to cause paralysis.",
    accuracy: 100,
  },
  {
    id: 138,
    name: "Dream Eater",
    type: "Ghost",
    power: 100,
    description:
      "The user eats the dreams of a sleeping target. It absorbs half the damage caused to heal the user's HP.",
    accuracy: 100,
  },
  {
    id: 139,
    name: "Poison Gas",
    type: "Psychic",
    power: null,
    description:
      "A cloud of poison gas is sprayed in the face of opposing Pokémon, poisoning those hit.",
    accuracy: 90,
  },
  {
    id: 140,
    name: "Barrage",
    type: "Normal",
    power: 15,
    description:
      "Round objects are hurled at the target to strike two to five times in a row.",
    accuracy: 85,
  },
  {
    id: 141,
    name: "Leech Life",
    type: "Grass",
    power: 80,
    description:
      "The user drains the target's blood. The user's HP is restored by half the damage taken by the target.",
    accuracy: 100,
  },
  {
    id: 142,
    name: "Lovely Kiss",
    type: "Psychic",
    power: 35,
    description:
      "With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.",
    accuracy: 75,
  },
  {
    id: 143,
    name: "Sky Attack",
    type: "Flying",
    power: 140,
    description:
      "A second-turn attack move where critical hits land more easily. It may also make the target flinch.",
    accuracy: 90,
  },
  {
    id: 144,
    name: "Transform",
    type: "Normal",
    power: null,
    description:
      "The user transforms into a copy of the target right down to having the same move set.",
    accuracy: null,
  },
  {
    id: 145,
    name: "Bubble",
    type: "Water",
    power: 40,
    description:
      "A spray of countless bubbles is jetted at the opposing team. It may lower the targets' Speed stats.",
    accuracy: 100,
  },
  {
    id: 146,
    name: "Dizzy Punch",
    type: "Fighting",
    power: 70,
    description:
      "The target is hit with rhythmically launched punches that may also leave it confused.",
    accuracy: 100,
  },
  {
    id: 147,
    name: "Spore",
    type: "Grass",
    power: null,
    description: "The user scatters bursts of spores that induce sleep.",
    accuracy: 100,
  },
  {
    id: 148,
    name: "Flash",
    type: "Electric",
    power: null,
    description:
      "The user flashes a bright light that cuts the target's accuracy.",
    accuracy: 100,
  },
  {
    id: 149,
    name: "Psywave",
    type: "Psychic",
    power: 130,
    description:
      "The target is attacked with an odd psychic wave. The attack varies in intensity.",
    accuracy: 100,
  },
  {
    id: 150,
    name: "Splash",
    type: "Water",
    power: 5,
    description:
      "The user just flops and splashes around to no effect at all...",
    accuracy: null,
  },
  {
    id: 151,
    name: "Acid Armor",
    type: "Poison",
    power: null,
    description:
      "The user alters its cellular structure to liquefy itself and sharply raise its Defense stat.",
    accuracy: null,
  },
  {
    id: 152,
    name: "Crabhammer",
    type: "Water",
    power: 100,
    description:
      "The target is hammered with a large pincer. Critical hits land more easily.",
    accuracy: 90,
  },
  {
    id: 153,
    name: "Explosion",
    type: "Fire",
    power: 250,
    description:
      "The user explodes to inflict damage on all Pokémon in battle. The user faints upon using this move.",
    accuracy: 100,
  },
  {
    id: 154,
    name: "Fury Swipes",
    type: "Normal",
    power: 18,
    description:
      "The target is raked with sharp claws or scythes quickly two to five times in a row.",
    accuracy: 80,
  },
  {
    id: 155,
    name: "Bonemerang",
    type: "Ground",
    power: 50,
    description:
      "The user throws the bone it holds. The bone loops to hit the target twice, coming and going.",
    accuracy: 90,
  },
  {
    id: 156,
    name: "Rest",
    type: "Normal",
    power: null,
    description:
      "The user goes to sleep for two turns. It fully restores the user's HP and heals any status problem.",
    accuracy: null,
  },
  {
    id: 157,
    name: "Rock Slide",
    type: "Rock",
    power: 75,
    description:
      "Large boulders are hurled at the opposing team to inflict damage. It may also make the targets flinch.",
    accuracy: 90,
  },
  {
    id: 158,
    name: "Hyper Fang",
    type: "Normal",
    power: 80,
    description:
      "The user bites hard on the target with its sharp front fangs. It may also make the target flinch.",
    accuracy: 90,
  },
  {
    id: 159,
    name: "Sharpen",
    type: "Normal",
    power: null,
    description:
      "The user reduces its polygon count to make itself more jagged, raising the Attack stat.",
    accuracy: null,
  },
  {
    id: 160,
    name: "Conversion",
    type: "Normal",
    power: null,
    description:
      "The user changes its type to become the same type as one of its moves.",
    accuracy: null,
  },
  {
    id: 161,
    name: "Tri Attack",
    type: "Normal",
    power: 80,
    description:
      "The user strikes with a simultaneous three-beam attack. May also burn, freeze, or paralyze the target.",
    accuracy: 100,
  },
  {
    id: 162,
    name: "Super Fang",
    type: "Normal",
    power: null,
    description:
      "The user chomps hard on the target with its sharp front fangs. The target instantly loses half of its HP.",
    accuracy: 90,
  },
  {
    id: 163,
    name: "Slash",
    type: "Normal",
    power: 70,
    description:
      "The target is attacked with a slash of claws or blades. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 164,
    name: "Substitute",
    type: "Normal",
    power: null,
    description:
      "The user makes a copy of itself using some of its HP. The copy serves as the user's decoy.",
    accuracy: null,
  },
  {
    id: 165,
    name: "Struggle",
    type: "Normal",
    power: 50,
    description:
      "An attack that is used in desperation only if the user has no PP. It also hurts the user slightly.",
    accuracy: 100,
  },
  {
    id: 166,
    name: "Sketch",
    type: "Normal",
    power: null,
    description:
      "It enables the user to permanently learn the move last used by the target. Once used, Sketch disappears.",
    accuracy: null,
  },
  {
    id: 167,
    name: "Triple Kick",
    type: "Fighting",
    power: 10,
    description:
      "A consecutive three-kick attack that becomes more powerful with each successive hit.",
    accuracy: 90,
  },
  {
    id: 168,
    name: "Thief",
    type: "Normal",
    power: 60,
    description:
      "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item.",
    accuracy: 100,
  },
  {
    id: 169,
    name: "Spider Web",
    type: "Normal",
    power: null,
    description:
      "The user ensnares the target with thin, gooey silk so it can't flee from battle.",
    accuracy: null,
  },
  {
    id: 170,
    name: "Mind Reader",
    type: "Psychic",
    power: null,
    description:
      "The user senses the target's movements with its mind to ensure its next attack does not miss the target.",
    accuracy: null,
  },
  {
    id: 171,
    name: "Nightmare",
    type: "Ghost",
    power: 80,
    description:
      "A sleeping target sees a nightmare that inflicts some damage every turn.",
    accuracy: 100,
  },
  {
    id: 172,
    name: "Flame Wheel",
    type: "Fire",
    power: 60,
    description:
      "The user cloaks itself in fire and charges at the target. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 173,
    name: "Snore",
    type: "Normal",
    power: 50,
    description:
      "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 174,
    name: "Curse",
    type: "Ghost",
    power: null,
    description:
      "A move that works differently for the Ghost type than for all other types.",
    accuracy: null,
  },
  {
    id: 175,
    name: "Flail",
    type: "Normal",
    power: 1,
    description:
      "The user flails about aimlessly to attack. It becomes more powerful the less HP the user has.",
    accuracy: 100,
  },
  {
    id: 176,
    name: "Conversion 2",
    type: "Normal",
    power: null,
    description:
      "The user changes its type to make itself resistant to the type of the attack the opponent used last.",
    accuracy: null,
  },
  {
    id: 177,
    name: "Aeroblast",
    type: "Flying",
    power: 100,
    description:
      "A vortex of air is shot at the target to inflict damage. Critical hits land more easily.",
    accuracy: 95,
  },
  {
    id: 178,
    name: "Cotton Spore",
    type: "Poison",
    power: null,
    description:
      "The user releases cotton-like spores that cling to the opposing Pokémon, which harshly lowers their Speed stat.",
    accuracy: 100,
  },
  {
    id: 179,
    name: "Reversal",
    type: "Normal",
    power: null,
    description:
      "An all-out attack that becomes more powerful the less HP the user has.",
    accuracy: 100,
  },
  {
    id: 180,
    name: "Spite",
    type: "Normal",
    power: null,
    description:
      "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.",
    accuracy: 100,
  },
  {
    id: 181,
    name: "Flame Charge",
    type: "Fire",
    power: 50,
    description:
      "The user cloaks itself with flame and charges at the target. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 182,
    name: "Volt Tackle",
    type: "Electric",
    power: 120,
    description:
      "The user electrifies itself and charges at the target. It also damages the user a little.",
    accuracy: 100,
  },
  {
    id: 183,
    name: "Aqua Tail",
    type: "Water",
    power: 90,
    description:
      "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
    accuracy: 90,
  },
  {
    id: 184,
    name: "Leaf Blade",
    type: "Grass",
    power: 90,
    description:
      "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 185,
    name: "Focus Energy",
    type: "Fighting",
    power: null,
    description:
      "The user takes a deep breath and focuses so that critical hits land more easily.",
    accuracy: null,
  },
  {
    id: 186,
    name: "Psycho Cut",
    type: "Psychic",
    power: 70,
    description:
      "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 187,
    name: "Icicle Crash",
    type: "Ice",
    power: 85,
    description:
      "The user attacks by harshly dropping large icicles onto the target. It may also make the target flinch.",
    accuracy: 90,
  },
  {
    id: 188,
    name: "Zap Cannon",
    type: "Electric",
    power: 120,
    description:
      "The user fires an electric blast like a cannon to inflict damage and cause paralysis.",
    accuracy: 50,
  },
  {
    id: 189,
    name: "Stone Edge",
    type: "Rock",
    power: 100,
    description:
      "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
    accuracy: 80,
  },
  {
    id: 190,
    name: "Last Resort",
    type: "Normal",
    power: 140,
    description:
      "This move can be used only after the user has used all the other moves it knows in the battle.",
    accuracy: 100,
  },
  {
    id: 191,
    name: "Zen Headbutt",
    type: "Psychic",
    power: 80,
    description:
      "The user focuses its willpower to its head and attacks the target. It may also make the target flinch.",
    accuracy: 90,
  },
  {
    id: 192,
    name: "Shadow Claw",
    type: "Ghost",
    power: 70,
    description:
      "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 193,
    name: "X-Scissor",
    type: "Bug",
    power: 80,
    description:
      "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
    accuracy: 100,
  },
  {
    id: 194,
    name: "Aqua Jet",
    type: "Water",
    power: 40,
    description:
      "The user lunges at the target at a speed that makes it almost invisible. It is sure to strike first.",
    accuracy: 100,
  },
  {
    id: 195,
    name: "Psyshock",
    type: "Psychic",
    power: 80,
    description:
      "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
    accuracy: 100,
  },
  {
    id: 196,
    name: "Flame Burst",
    type: "Fire",
    power: 70,
    description:
      "The user attacks the target with a bursting flame. The bursting flame damages Pokémon next to the target as well.",
    accuracy: 100,
  },
  {
    id: 197,
    name: "Wild Charge",
    type: "Electric",
    power: 90,
    description:
      "The user shrouds itself in electricity and smashes into its target. It also damages the user a little.",
    accuracy: 100,
  },
  {
    id: 198,
    name: "Play Rough",
    type: "Fairy",
    power: 90,
    description:
      "The user plays rough with the target and attacks it. This may also lower the target's Attack stat.",
    accuracy: 90,
  },
  {
    id: 199,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Sp. Def stats.",
    accuracy: 100,
  },
  {
    id: 200,
    name: "Night Daze",
    type: "Dark",
    power: 85,
    description:
      "The user lets loose a pitch-black shock wave at its target. It may also lower the target's accuracy.",
    accuracy: 95,
  },
  {
    id: 201,
    name: "Future Sight",
    type: "Psychic",
    power: 120,
    description:
      "Two turns after this move is used, a hunk of psychic energy attacks the target.",
    accuracy: 100,
  },
  {
    id: 202,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Special Defense stats.",
    accuracy: 100,
  },
  {
    id: 203,
    name: "Thunder Fang",
    type: "Electric",
    power: 65,
    description:
      "The user bites with electrified fangs. It may also make the target flinch or leave it with paralysis.",
    accuracy: 95,
  },
  {
    id: 204,
    name: "Fire Fang",
    type: "Fire",
    power: 65,
    description:
      "The user bites with flame-cloaked fangs. It may also make the target flinch or leave it with a burn.",
    accuracy: 95,
  },
  {
    id: 205,
    name: "Water Pulse",
    type: "Water",
    power: 60,
    description:
      "The user attacks the target with a pulsing blast of water. It may also confuse the target.",
    accuracy: 100,
  },
  {
    id: 206,
    name: "Rock Slide",
    type: "Rock",
    power: 75,
    description:
      "Large boulders are hurled at the opposing team to inflict damage. It may also make the targets flinch.",
    accuracy: 90,
  },
  {
    id: 207,
    name: "Air Cutter",
    type: "Flying",
    power: 60,
    description:
      "The user launches razor-like wind to slash the opposing team. Critical hits land more easily.",
    accuracy: 95,
  },
  {
    id: 208,
    name: "Discharge",
    type: "Electric",
    power: 80,
    description:
      "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
    accuracy: 100,
  },
  {
    id: 209,
    name: "Hyper Voice",
    type: "Normal",
    power: 90,
    description:
      "The user lets loose a horribly echoing shout with the power to inflict damage.",
    accuracy: 100,
  },
  {
    id: 210,
    name: "Energy Ball",
    type: "Grass",
    power: 90,
    description:
      "The user draws power from nature and fires it at the target. It may also lower the target's Special Defense.",
    accuracy: 100,
  },
  {
    id: 211,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. It may also reduce the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 212,
    name: "Dark Pulse",
    type: "Dark",
    power: 80,
    description:
      "The user releases a horrible aura imbued with dark thoughts. It may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 213,
    name: "Rock Climb",
    type: "Rock",
    power: 90,
    description:
      "The user attacks the target by smashing into it with incredible force. It may also confuse the target.",
    accuracy: 85,
  },
  {
    id: 214,
    name: "Leaf Storm",
    type: "Grass",
    power: 130,
    description:
      "The user whips up a storm of leaves around the target. The attack's recoil harshly lowers the user's Special Attack stat.",
    accuracy: 90,
  },
  {
    id: 215,
    name: "Flash Cannon",
    type: "Steel",
    power: 80,
    description:
      "The user gathers all its light energy and releases it at once. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 216,
    name: "Waterfall",
    type: "Water",
    power: 80,
    description:
      "The user charges at the target and may make it flinch. It can also be used to climb a waterfall.",
    accuracy: 100,
  },
  {
    id: 217,
    name: "Psycho Cut",
    type: "Psychic",
    power: 70,
    description:
      "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 218,
    name: "Draco Meteor",
    type: "Dragon",
    power: 130,
    description:
      "Comets are summoned down from the sky onto the target. The attack's recoil harshly lowers the user's Special Attack stat.",
    accuracy: 90,
  },
  {
    id: 219,
    name: "Iron Head",
    type: "Steel",
    power: 80,
    description:
      "The user slams the target with its steel-hard head. It may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 220,
    name: "Moonblast",
    type: "Fairy",
    power: 95,
    description:
      "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.",
    accuracy: 100,
  },
  {
    id: 221,
    name: "Psychic Fangs",
    type: "Psychic",
    power: 85,
    description:
      "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
    accuracy: 100,
  },
  {
    id: 222,
    name: "Stomping Tantrum",
    type: "Normal",
    power: 75,
    description:
      "Driven by frustration, the user attacks the target. If the user's previous move has failed, the power of this move doubles.",
    accuracy: 100,
  },
  {
    id: 223,
    name: "Shadow Claw",
    type: "Normal",
    power: 70,
    description:
      "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 224,
    name: "Fly",
    type: "Flying",
    power: 90,
    description:
      "The user soars, then strikes its target on the second turn. It can also be used to fly to any familiar town.",
    accuracy: 95,
  },
  {
    id: 225,
    name: "Bulldoze",
    type: "Normal",
    power: 60,
    description:
      "The user strikes everything around it by stomping down on the ground. This lowers the Speed stat of those hit.",
    accuracy: 100,
  },
  {
    id: 226,
    name: "Shadow Bone",
    type: "Ghost",
    power: 85,
    description:
      "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target's Defense stat.",
    accuracy: 100,
  },
  {
    id: 227,
    name: "Zing Zap",
    type: "Electric",
    power: 80,
    description:
      "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 228,
    name: "Wild Charge",
    type: "Electric",
    power: 90,
    description:
      "The user shrouds itself in electricity and smashes into its target. This also damages the user a little.",
    accuracy: 100,
  },
  {
    id: 229,
    name: "Bug Buzz",
    type: "Bug",
    power: 90,
    description:
      "The user generates a damaging sound wave by vibration. This may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 230,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Special Defense stats.",
    accuracy: 100,
  },
  {
    id: 231,
    name: "Avalanche",
    type: "Ice",
    power: 60,
    description:
      "An attack move that inflicts double damage if used on a target that is switching out of battle.",
    accuracy: 100,
  },
  {
    id: 232,
    name: "Low Sweep",
    type: "Fighting",
    power: 65,
    description:
      "The user makes a swift attack on the target's legs, which lowers the target's Speed stat.",
    accuracy: 100,
  },
  {
    id: 233,
    name: "U-turn",
    type: "Bug",
    power: 70,
    description:
      "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
    accuracy: 100,
  },
  {
    id: 234,
    name: "Liquidation",
    type: "Water",
    power: 85,
    description:
      "The user slams into the target using a full-force blast of water. This may also lower the target's Defense stat.",
    accuracy: 100,
  },
  {
    id: 235,
    name: "Throat Chop",
    type: "Dark",
    power: 80,
    description:
      "The user attacks the target's throat, and the resultant suffering prevents the target from using moves that emit sound for two turns.",
    accuracy: 100,
  },
  {
    id: 236,
    name: "Psyshock",
    type: "Psychic",
    power: 80,
    description:
      "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
    accuracy: 100,
  },
  {
    id: 237,
    name: "Volt Switch",
    type: "Electric",
    power: 70,
    description:
      "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
    accuracy: 100,
  },
  {
    id: 238,
    name: "Circle Throw",
    type: "Fighting",
    power: 60,
    description:
      "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
    accuracy: 90,
  },
  {
    id: 239,
    name: "Leaf Tornado",
    type: "Grass",
    power: 65,
    description:
      "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy.",
    accuracy: 90,
  },
  {
    id: 240,
    name: "Gear Grind",
    type: "Steel",
    power: 50,
    description: "The user attacks by throwing two steel gears at its target.",
    accuracy: 85,
  },
  {
    id: 241,
    name: "Hydro Pump",
    type: "Water",
    power: 110,
    description: "The target is blasted with a forceful shot of water.",
    accuracy: 80,
  },
  {
    id: 242,
    name: "Fire Blast",
    type: "Fire",
    power: 110,
    description:
      "The target is blasted with a fierce burst of flames. It may also inflict burns.",
    accuracy: 85,
  },
  {
    id: 243,
    name: "Thunderbolt",
    type: "Electric",
    power: 90,
    description:
      "A strong electric blast is loosed at the target. It may also paralyze the target.",
    accuracy: 100,
  },
  {
    id: 244,
    name: "Solar Beam",
    type: "Grass",
    power: 120,
    description:
      "In this two-turn attack, the user gathers light and fills a blade with the light's energy, attacking the target on the next turn.",
    accuracy: 100,
  },
  {
    id: 245,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 246,
    name: "Ice Beam",
    type: "Ice",
    power: 90,
    description:
      "The target is struck with an icy-cold beam of energy. It may also freeze the target solid.",
    accuracy: 100,
  },
  {
    id: 247,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Special Defense stats.",
    accuracy: 100,
  },
  {
    id: 248,
    name: "Flamethrower",
    type: "Fire",
    power: 90,
    description:
      "The target is scorched with an intense blast of fire. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 249,
    name: "Surf",
    type: "Water",
    power: 90,
    description:
      "The user attacks everything around it by swamping its surroundings with a giant wave. It can also be used for crossing water.",
    accuracy: 100,
  },
  {
    id: 250,
    name: "Hyper Beam",
    type: "Normal",
    power: 150,
    description:
      "The target is attacked with a powerful beam. The user must rest on the next turn to regain its energy.",
    accuracy: 90,
  },
  {
    id: 251,
    name: "Solar Beam",
    type: "Grass",
    power: 120,
    description:
      "In this two-turn attack, the user gathers light and fills a blade with the light's energy, attacking the target on the next turn.",
    accuracy: 100,
  },
  {
    id: 252,
    name: "Thunder",
    type: "Electric",
    power: 110,
    description:
      "A wicked thunderbolt is dropped on the target to inflict damage. It may also leave the target with paralysis.",
    accuracy: 70,
  },
  {
    id: 253,
    name: "Fire Blast",
    type: "Fire",
    power: 110,
    description:
      "The target is blasted with a fierce burst of flames. It may also inflict burns.",
    accuracy: 85,
  },
  {
    id: 254,
    name: "Hydro Pump",
    type: "Water",
    power: 110,
    description: "The target is blasted with a forceful shot of water.",
    accuracy: 80,
  },
  {
    id: 255,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 256,
    name: "Ice Beam",
    type: "Ice",
    power: 90,
    description:
      "The target is struck with an icy-cold beam of energy. It may also freeze the target solid.",
    accuracy: 100,
  },
  {
    id: 257,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Special Defense stats.",
    accuracy: 100,
  },
  {
    id: 258,
    name: "Flamethrower",
    type: "Fire",
    power: 90,
    description:
      "The target is scorched with an intense blast of fire. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 259,
    name: "Surf",
    type: "Water",
    power: 90,
    description:
      "The user attacks everything around it by swamping its surroundings with a giant wave. It can also be used for crossing water.",
    accuracy: 100,
  },
  {
    id: 260,
    name: "Hyper Beam",
    type: "Normal",
    power: 150,
    description:
      "The target is attacked with a powerful beam. The user must rest on the next turn to regain its energy.",
    accuracy: 90,
  },
  {
    id: 261,
    name: "Water Pulse",
    type: "Water",
    power: 60,
    description:
      "The user attacks the target with a pulsing blast of water. It may also confuse the target.",
    accuracy: 100,
  },
  {
    id: 262,
    name: "Thunder Punch",
    type: "Electric",
    power: 75,
    description:
      "The target is punched with an electrified fist. It may also leave the target with paralysis.",
    accuracy: 100,
  },
  {
    id: 263,
    name: "Ice Punch",
    type: "Ice",
    power: 75,
    description:
      "The target is punched with an icy fist. It may also leave the target frozen.",
    accuracy: 100,
  },
  {
    id: 264,
    name: "Fire Punch",
    type: "Fire",
    power: 75,
    description:
      "The target is punched with a fiery fist. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 265,
    name: "Bug Bite",
    type: "Bug",
    power: 60,
    description:
      "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
    accuracy: 100,
  },
  {
    id: 266,
    name: "Feint Attack",
    type: "Dark",
    power: 60,
    description:
      "The user approaches the target disarmingly, then throws a sucker punch. It hits without fail.",
    accuracy: 100,
  },
  {
    id: 267,
    name: "Metal Claw",
    type: "Steel",
    power: 50,
    description:
      "The target is raked with steel claws. It may also raise the user's Attack stat.",
    accuracy: 95,
  },
  {
    id: 268,
    name: "Play Rough",
    type: "Fairy",
    power: 90,
    description:
      "The user plays rough with the target and attacks it. It may also lower the target's Attack stat.",
    accuracy: 90,
  },
  {
    id: 269,
    name: "Discharge",
    type: "Electric",
    power: 80,
    description:
      "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
    accuracy: 100,
  },
  {
    id: 270,
    name: "Aqua Tail",
    type: "Water",
    power: 90,
    description:
      "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
    accuracy: 90,
  },
  {
    id: 271,
    name: "Seed Bomb",
    type: "Grass",
    power: 80,
    description:
      "The user slams a barrage of hard-shelled seeds down on the target from above.",
    accuracy: 100,
  },
  {
    id: 272,
    name: "Flare Blitz",
    type: "Fire",
    power: 120,
    description:
      "The user cloaks itself in fire and charges at the target. The user also takes damage from recoil.",
    accuracy: 100,
  },
  {
    id: 273,
    name: "X-Scissor",
    type: "Bug",
    power: 80,
    description:
      "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
    accuracy: 100,
  },
  {
    id: 274,
    name: "Rock Slide",
    type: "Rock",
    power: 75,
    description:
      "Large boulders are hurled at the opposing Pokémon to inflict damage. It may also make the targets flinch.",
    accuracy: 90,
  },
  {
    id: 275,
    name: "Icicle Crash",
    type: "Ice",
    power: 85,
    description:
      "The user attacks by harshly dropping large icicles onto the target. It may also make the target flinch.",
    accuracy: 90,
  },
  {
    id: 276,
    name: "Wild Charge",
    type: "Electric",
    power: 90,
    description:
      "The user shrouds itself in electricity and smashes into its target. It also damages the user a little.",
    accuracy: 100,
  },
  {
    id: 277,
    name: "Heat Wave",
    type: "Fire",
    power: 95,
    description:
      "The user attacks by exhaling hot breath on the opposing Pokémon. It may also leave targets with a burn.",
    accuracy: 90,
  },
  {
    id: 278,
    name: "Waterfall",
    type: "Water",
    power: 80,
    description:
      "The user charges at the target and may make it flinch. It can also be used to climb a waterfall.",
    accuracy: 100,
  },
  {
    id: 279,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 280,
    name: "Earthquake",
    type: "Ground",
    power: 100,
    description:
      "The user sets off an earthquake that strikes every Pokémon around it.",
    accuracy: 100,
  },
  {
    id: 281,
    name: "Thunderbolt",
    type: "Electric",
    power: 90,
    description:
      "A strong electric blast is loosed at the target. It may also paralyze the target.",
    accuracy: 100,
  },
  {
    id: 282,
    name: "Fury Cutter",
    type: "Bug",
    power: 40,
    description:
      "The target is slashed with scythes or claws. This attack becomes stronger if it hits in succession.",
    accuracy: 95,
  },
  {
    id: 283,
    name: "Iron Head",
    type: "Steel",
    power: 80,
    description:
      "The user slams the target with its steel-hard head. It may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 284,
    name: "Stone Edge",
    type: "Rock",
    power: 100,
    description:
      "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
    accuracy: 80,
  },
  {
    id: 285,
    name: "Hyper Voice",
    type: "Normal",
    power: 90,
    description:
      "The user lets loose a horribly echoing shout with the power to inflict damage.",
    accuracy: 100,
  },
  {
    id: 286,
    name: "Blizzard",
    type: "Ice",
    power: 110,
    description:
      "The user releases a freezing cold blast of air that hits all opposing Pokémon. It may also freeze them solid.",
    accuracy: 70,
  },
  {
    id: 287,
    name: "Surf",
    type: "Water",
    power: 90,
    description:
      "The user attacks everything around it by swamping its surroundings with a giant wave.",
    accuracy: 100,
  },
  {
    id: 288,
    name: "Fire Blast",
    type: "Fire",
    power: 110,
    description:
      "The target is attacked with an intense blast of all-consuming fire. It may also leave the target with a burn.",
    accuracy: 85,
  },
  {
    id: 289,
    name: "Psywave",
    type: "Psychic",
    power: "Varies",
    description:
      "The target is attacked with a peculiar ray. The attack's damage increases the more the target has powered up its stats.",
    accuracy: 100,
  },
  {
    id: 290,
    name: "Shock Wave",
    type: "Electric",
    power: 60,
    description:
      "The user strikes the target with a quick jolt of electricity. This attack cannot be evaded.",
    accuracy: 100,
  },
  {
    id: 291,
    name: "Signal Beam",
    type: "Bug",
    power: 75,
    description:
      "The user attacks with a sinister beam of light. It may also confuse the target.",
    accuracy: 100,
  },
  {
    id: 292,
    name: "Shadow Ball",
    type: "Ghost",
    power: 80,
    description:
      "The user hurls a shadowy blob at the target. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 293,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Special Defense.",
    accuracy: 100,
  },
  {
    id: 294,
    name: "Power Gem",
    type: "Rock",
    power: 80,
    description:
      "The user attacks with a ray of light that sparkles as if it were made of gemstones.",
    accuracy: 100,
  },
  {
    id: 295,
    name: "Hydro Pump",
    type: "Water",
    power: 110,
    description: "The target is blasted with a forceful shot of water.",
    accuracy: 80,
  },
  {
    id: 296,
    name: "Flamethrower",
    type: "Fire",
    power: 90,
    description:
      "The target is scorched with an intense blast of fire. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 297,
    name: "Bug Buzz",
    type: "Bug",
    power: 90,
    description:
      "The user generates a damaging sound wave by vibration. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 298,
    name: "Air Slash",
    type: "Flying",
    power: 75,
    description:
      "The user attacks with a blade of air that slices even the sky. It may also make the target flinch.",
    accuracy: 95,
  },
  {
    id: 299,
    name: "Discharge",
    type: "Electric",
    power: 80,
    description:
      "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
    accuracy: 100,
  },
  {
    id: 300,
    name: "Iron Tail",
    type: "Steel",
    power: 100,
    description:
      "The target is slammed with a steel-hard tail. It may also lower the target's Defense stat.",
    accuracy: 75,
  },
  {
    id: 301,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. It may also reduce the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 302,
    name: "Rock Slide",
    type: "Rock",
    power: 75,
    description:
      "Large boulders are hurled at the opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.",
    accuracy: 90,
  },
  {
    id: 303,
    name: "Cross Chop",
    type: "Fighting",
    power: 100,
    description:
      "The user delivers a double chop with its forearms crossed. Critical hits land more easily.",
    accuracy: 80,
  },
  {
    id: 304,
    name: "Shadow Punch",
    type: "Ghost",
    power: 60,
    description:
      "The user throws a punch from the shadows. This attack never misses.",
    accuracy: "—",
  },
  {
    id: 305,
    name: "Thunderpunch",
    type: "Electric",
    power: 75,
    description:
      "The target is punched with an electrified fist. It may also leave the target with paralysis.",
    accuracy: 100,
  },
  {
    id: 306,
    name: "Giga Impact",
    type: "Normal",
    power: 150,
    description:
      "The user charges at the target using every bit of its power. The user must rest on the next turn.",
    accuracy: 90,
  },
  {
    id: 307,
    name: "Bug Bite",
    type: "Bug",
    power: 60,
    description:
      "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
    accuracy: 100,
  },
  {
    id: 308,
    name: "Dazzling Gleam",
    type: "Fairy",
    power: 80,
    description:
      "The user damages opposing Pokémon by emitting a powerful flash.",
    accuracy: 100,
  },
  {
    id: 309,
    name: "Thunder",
    type: "Electric",
    power: 110,
    description:
      "A wicked thunderbolt is dropped on the target to inflict damage. It may also leave the target with paralysis.",
    accuracy: 70,
  },
  {
    id: 310,
    name: "Ice Beam",
    type: "Ice",
    power: 90,
    description:
      "The target is struck with an icy-cold beam of energy. It may also freeze the target solid.",
    accuracy: 100,
  },
  {
    id: 311,
    name: "Psyshock",
    type: "Psychic",
    power: 80,
    description:
      "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
    accuracy: 100,
  },
  {
    id: 312,
    name: "Flash Cannon",
    type: "Steel",
    power: 80,
    description:
      "The user gathers all its light energy and releases it all at once. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 313,
    name: "Hyper Fang",
    type: "Normal",
    power: 80,
    description:
      "The user bites hard on the target with its sharp front fangs. It may also make the target flinch.",
    accuracy: 90,
  },
  {
    id: 314,
    name: "Fire Punch",
    type: "Fire",
    power: 75,
    description:
      "The target is punched with a fiery fist. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 315,
    name: "Surf",
    type: "Water",
    power: 90,
    description:
      "The user attacks everything around it by swamping its surroundings with a giant wave. It can also be used for crossing water.",
    accuracy: 100,
  },
  {
    id: 316,
    name: "Psychic Fangs",
    type: "Psychic",
    power: 85,
    description:
      "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
    accuracy: 100,
  },
  {
    id: 317,
    name: "Earthquake",
    type: "Ground",
    power: 100,
    description:
      "The user sets off an earthquake that strikes every Pokémon around it.",
    accuracy: 100,
  },
  {
    id: 318,
    name: "Hurricane",
    type: "Flying",
    power: 110,
    description:
      "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. It may also confuse the target.",
    accuracy: 70,
  },
  {
    id: 319,
    name: "Thunderbolt",
    type: "Electric",
    power: 90,
    description:
      "A strong electric blast is loosed at the target. It may also leave the target with paralysis.",
    accuracy: 100,
  },
  {
    id: 320,
    name: "Energy Ball",
    type: "Grass",
    power: 90,
    description:
      "The user draws power from nature and fires it at the target. It may also lower the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 321,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Sp. Def stats.",
    accuracy: 100,
  },
  {
    id: 322,
    name: "Blizzard",
    type: "Ice",
    power: 110,
    description:
      "The user blows a freezing cold breath on the target. This attack always results in a critical hit.",
    accuracy: 70,
  },
  {
    id: 323,
    name: "Iron Head",
    type: "Steel",
    power: 80,
    description:
      "The user slams the target with its steel-hard head. It may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 324,
    name: "Facade",
    type: "Normal",
    power: 70,
    description:
      "This attack move doubles its power if the user is poisoned, burned, or paralyzed.",
    accuracy: 100,
  },
  {
    id: 325,
    name: "Volt Tackle",
    type: "Electric",
    power: 120,
    description:
      "The user electrifies itself and charges at the target. It also damages the user a little.",
    accuracy: 100,
  },
  {
    id: 326,
    name: "Leaf Storm",
    type: "Grass",
    power: 130,
    description:
      "The user whips up a storm of leaves around the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
    accuracy: 90,
  },
  {
    id: 327,
    name: "Earth Power",
    type: "Ground",
    power: 90,
    description:
      "The user makes the ground under the target erupt with power. It may also lower the target's Sp. Def.",
    accuracy: 100,
  },
  {
    id: 328,
    name: "Stone Edge",
    type: "Rock",
    power: 100,
    description:
      "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
    accuracy: 80,
  },
  {
    id: 329,
    name: "Crunch",
    type: "Dark",
    power: 80,
    description:
      "The user crunches up the target with sharp fangs. It may also lower the target's Defense stat.",
    accuracy: 100,
  },
  {
    id: 330,
    name: "Flamethrower",
    type: "Fire",
    power: 90,
    description:
      "The target is scorched with an intense blast of fire. It may also leave the target with a burn.",
    accuracy: 100,
  },
  {
    id: 331,
    name: "Hydro Pump",
    type: "Water",
    power: 110,
    description:
      "The target is blasted with a forceful shot of water. It may also be used to move heavy boulders.",
    accuracy: 80,
  },
  {
    id: 332,
    name: "Thunder",
    type: "Electric",
    power: 110,
    description:
      "A wicked thunderbolt is dropped on the target to inflict damage. It may also leave the target with paralysis.",
    accuracy: 70,
  },
  {
    id: 333,
    name: "Solar Beam",
    type: "Grass",
    power: 120,
    description:
      "In this two-turn attack, the user gathers light and fills a blade with the light's energy, attacking the target on the next turn.",
    accuracy: 100,
  },
  {
    id: 334,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. It may also lower the target's Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 335,
    name: "Shadow Ball",
    type: "Ghost",
    power: 80,
    description:
      "The user hurls a shadowy blob at the target. It may also lower the target's Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 336,
    name: "Ice Beam",
    type: "Ice",
    power: 90,
    description:
      "The target is struck with an icy-cold beam. It may freeze the target solid.",
    accuracy: 100,
  },
  {
    id: 337,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. It also lowers the user's Defense and Sp. Def stats.",
    accuracy: 100,
  },
  {
    id: 338,
    name: "Flare Blitz",
    type: "Fire",
    power: 120,
    description:
      "The user cloaks itself in fire and charges at the target. The user also takes damage from its recoil.",
    accuracy: 100,
  },
  {
    id: 339,
    name: "Leaf Blade",
    type: "Grass",
    power: 90,
    description:
      "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 340,
    name: "X-Scissor",
    type: "Bug",
    power: 80,
    description:
      "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
    accuracy: 100,
  },
  {
    id: 361,
    name: "Shadow Punch",
    type: "Ghost",
    power: 60,
    description:
      "The user throws a punch from the shadows. This attack never misses.",
    accuracy: 100,
  },
  {
    id: 362,
    name: "Grass Knot",
    type: "Grass",
    power: null,
    description:
      "The user snares the target with grass and trips it. The heavier the target, the greater the move's power.",
    accuracy: 100,
  },
  {
    id: 363,
    name: "Discharge",
    type: "Electric",
    power: 80,
    description:
      "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
    accuracy: 100,
  },
  {
    id: 364,
    name: "Psycho Cut",
    type: "Psychic",
    power: 70,
    description:
      "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 365,
    name: "Rock Wrecker",
    type: "Rock",
    power: 150,
    description:
      "The user launches a huge boulder at the target to attack. The user can't move on the next turn.",
    accuracy: 90,
  },
  {
    id: 366,
    name: "Discharge",
    type: "Electric",
    power: 80,
    description:
      "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
    accuracy: 100,
  },
  {
    id: 367,
    name: "Shadow Claw",
    type: "Ghost",
    power: 70,
    description:
      "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 368,
    name: "Focus Blast",
    type: "Fighting",
    power: 120,
    description:
      "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.",
    accuracy: 70,
  },
  {
    id: 369,
    name: "Energy Ball",
    type: "Fighting",
    power: 90,
    description:
      "The user draws power from nature and fires it at the target. This may also lower the target's Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 370,
    name: "Brave Bird",
    type: "Fighting",
    power: 120,
    description:
      "The user tucks in its wings and charges from a low altitude. This also damages the user quite a lot.",
    accuracy: 100,
  },
  {
    id: 371,
    name: "Return",
    type: "Normal",
    power: null,
    description:
      "A full-power attack that grows more powerful the more the user likes its Trainer.",
    accuracy: 100,
  },
  {
    id: 372,
    name: "Water Pulse",
    type: "Water",
    power: 60,
    description:
      "The user attacks the target with a pulsing blast of water. This may also confuse the target.",
    accuracy: 100,
  },
  {
    id: 373,
    name: "Psychic",
    type: "Psychic",
    power: 90,
    description:
      "The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 374,
    name: "Aqua Tail",
    type: "Water",
    power: 90,
    description:
      "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
    accuracy: 90,
  },
  {
    id: 375,
    name: "Bug Buzz",
    type: "Bug",
    power: 90,
    description:
      "The user generates a damaging sound wave by vibration. This may also lower the target's Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 376,
    name: "Hyper Voice",
    type: "Normal",
    power: 90,
    description:
      "The user lets loose a horribly echoing shout with the power to inflict damage.",
    accuracy: 100,
  },
  {
    id: 377,
    name: "Dark Pulse",
    type: "Dark",
    power: 80,
    description:
      "The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch.",
    accuracy: 100,
  },
  {
    id: 378,
    name: "Earth Power",
    type: "Ground",
    power: 90,
    description:
      "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat.",
    accuracy: 100,
  },
  {
    id: 379,
    name: "Stone Edge",
    type: "Rock",
    power: 100,
    description:
      "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
    accuracy: 80,
  },
  {
    id: 380,
    name: "Close Combat",
    type: "Fighting",
    power: 120,
    description:
      "The user fights the target up close without guarding itself. This also lowers the user's Defense and Sp. Def stats.",
    accuracy: 100,
  },
  {
    id: 381,
    name: "Ice Shard",
    type: "Ice",
    power: 40,
    description:
      "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first.",
    accuracy: 100,
  },
  {
    id: 387,
    name: "Outrage",
    type: "Normal",
    power: 120,
    description:
      "The user rampages and attacks for two to three turns. The user then becomes confused.",
    accuracy: 100,
  },
  {
    id: 388,
    name: "Confusion",
    type: "Psychic",
    power: 50,
    description:
      "The target is struck by a peculiar ray. This may also leave the target confused.",
    accuracy: 100,
  },
  {
    id: 389,
    name: "Quick Attack",
    type: "Normal",
    power: 40,
    description:
      "The user lunges at the target with incredible speed. This move always goes first.",
    accuracy: 100,
  },
  {
    id: 390,
    name: "Aerial Ace",
    type: "Flying",
    power: 60,
    description:
      "The user confounds the target with a swift and cutting air current. This attack always strikes first and cannot be evaded.",
    accuracy: 100,
  },
  {
    id: 391,
    name: "Thunder Shock",
    type: "Electric",
    power: 40,
    description:
      "A jolt of electricity is hurled at the target. This may also leave the target with paralysis.",
    accuracy: 100,
  },
  {
    id: 392,
    name: "Dig",
    type: "Ground",
    power: 80,
    description:
      "The user burrows underground on the first turn and attacks on the next turn. It can also be used to exit dungeons.",
    accuracy: 100,
  },
  {
    id: 393,
    name: "Meteor Mash",
    type: "Steel",
    power: 90,
    description:
      "The user launches a meteor-like fist at the target. It may raise the user's Attack stat.",
    accuracy: 90,
  },
  {
    id: 394,
    name: "Disarming Voice",
    type: "Fairy",
    power: 40,
    description:
      "The user emits a charming voice that never misses to damage the target.",
    accuracy: 100,
  },
  {
    id: 395,
    name: "Fire Spin",
    type: "Fire",
    power: 35,
    description:
      "The target becomes trapped within a fierce vortex of fire that continues to burn and deal damage for several turns.",
    accuracy: 85,
  },
  {
    id: 396,
    name: "Poison Fang",
    type: "Poison",
    power: 50,
    description:
      "The user bites the target with toxic fangs. It may also leave the target badly poisoned.",
    accuracy: 100,
  },
  {
    id: 397,
    name: "Giga Drain",
    type: "Grass",
    power: 75,
    description:
      "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
    accuracy: 100,
  },
  {
    id: 398,
    name: "Sludge Bomb",
    type: "Poison",
    power: 90,
    description:
      "The user strikes the target with a sludge bomb. It may also poison the target.",
    accuracy: 100,
  },
  {
    id: 399,
    name: "Cross Poison",
    type: "Poison",
    power: 70,
    description:
      "A slashing attack with a poisonous blade that may also leave the target poisoned. Critical hits land more easily.",
    accuracy: 100,
  },
  {
    id: 400,
    name: "Mud-Slap",
    type: "Ground",
    power: 20,
    description:
      "The user hurls mud in the target's face to inflict damage and lower its accuracy.",
    accuracy: 100,
  },
  {
    id: 401,
    name: "Magnitude",
    type: "Ground",
    power: 100,
    description:
      "The user creates a ground-shaking tremor to deal damage. The power of this move varies.",
    accuracy: 100,
  },
  {
    id: 402,
    name: "Extreme Speed",
    type: "Normal",
    power: 80,
    description:
      "The user charges at the target with blinding speed. This move always goes first.",
    accuracy: 100,
  },
  {
    id: 403,
    name: "Brick Break",
    type: "Fighting",
    power: 75,
    description:
      "The user attacks with a swift chop. It can also break any barrier such as Light Screen and Reflect.",
    accuracy: 100,
  },
  {
    id: 404,
    name: "Dynamic Punch",
    type: "Fighting",
    power: 100,
    description:
      "The user punches the target with full, concentrated power. This confuses the target if it hits.",
    accuracy: 50,
  },
  {
    id: 405,
    name: "Power Whip",
    type: "Grass",
    power: 120,
    description:
      "The user violently whips its vines or tentacles to strike the target. This may also make the target flinch.",
    accuracy: 85,
  },
  {
    id: 406,
    name: "Acid Spray",
    type: "Poison",
    power: 40,
    description:
      "The user spits a harsh acid that lowers the target's Special Defense stat.",
    accuracy: 100,
  },
  {
    id: 407,
    name: "Rock Throw",
    type: "Rock",
    power: 50,
    description: "The user throws rocks at the target to inflict damage.",
    accuracy: 90,
  },
  {
    id: 407,
    name: "Spark",
    type: "Electric",
    power: 65,
    description:
      "The user charges at the target using electrically charged tackles.",
    accuracy: 100,
  },
  {
    id: 408,
    name: "Mud Bomb",
    type: "Ground",
    power: 65,
    description:
      "The user launches a glob of mud at the target. It may also lower the target's accuracy.",
    accuracy: 85,
  },
  {
    id: 409,
    name: "Gunk Shot",
    type: "Poison",
    power: 120,
    description:
      "The user shoots filthy garbage at the target to attack. It may also poison the target.",
    accuracy: 80,
  },
  {
    id: 410,
    name: "Icicle Spear",
    type: "Ice",
    power: 25,
    description:
      "The user launches sharp icicles at the target. It strikes two to five times in a row.",
    accuracy: 100,
  },
  {
    id: 411,
    name: "Self-Destruct",
    type: "Normal",
    power: 100,
    description:
      "The user blows up to inflict massive damage, but also faints in the process.",
    accuracy: 100,
  },
  {
    id: 412,
    type: "Normal",
    name: "Rage",
    power: 20,
    description:
      "The user becomes enraged and attacks continuously for several turns. The power of this move increases each time it is hit in battle.",
    accuracy: 100,
  },
  {
    id: 413,
    type: "Dragon",
    name: "Twister",
    power: 40,
    description:
      "The user whips up a vicious tornado to attack the opposing Pokémon. This may also make them flinch.",
    accuracy: 100,
  },
];

const uniqueMoves = [];
for (const item of AllGenPokemonMoves) {
  const isDuplicate = uniqueMoves.find((obj) => obj.name === item.name);
  if (!isDuplicate) {
    uniqueMoves.push(item);
  }
}
console.log("uniqueArray", uniqueMoves);
