// Default plays — baked-in plays that load for all visitors.
// Each key should be a stable slug (e.g. "wall-pass").
// To add a new play: record it in the app, copy the object from the console, paste it here.
//
// Example shape:
// "wall-pass": {
//   name: "Wall Pass",
//   description: "...",
//   age: "u10",
//   notes: "...",
//   players: [...],
//   defenders: [...],
//   cones: [...],
//   frames: [...],
//   created: 0
// }

var DEFAULT_PLAYS = {
  "wall-pass": {
    name: "Wall Pass",
    description:
      'Also known as a "give and go", great foundational pass and move tactic.',
    age: "u10",
    notes:
      'One of the earliest tactics to teach. Builds the foundational concept of "pass and move".',
    players: [
      {
        id: "A",
        x: 401.51171875,
        y: 355.06640625,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 318.953125,
        y: 256.734375,
        color: "#E63946",
        label: "B",
      },
    ],
    defenders: [
      {
        id: "D1",
        x: 318.08984375,
        y: 313.8046875,
        color: "#1D3557",
        label: "D",
      },
    ],
    frames: [
      {
        positions: {
          A: {
            x: 220,
            y: 340,
          },
          B: {
            x: 319,
            y: 257,
          },
          D1: {
            x: 318,
            y: 314,
          },
        },
        ball: {
          x: 220,
          y: 340,
        },
        note: "Setup",
      },
      {
        positions: {
          A: {
            x: 321,
            y: 357,
          },
          B: {
            x: 319,
            y: 257,
          },
          D1: {
            x: 318,
            y: 314,
          },
        },
        ball: {
          x: 319,
          y: 274,
        },
        note: "Pass and Run",
      },
      {
        positions: {
          A: {
            x: 402,
            y: 355,
          },
          B: {
            x: 319,
            y: 257,
          },
          D1: {
            x: 318,
            y: 314,
          },
        },
        ball: {
          x: 391,
          y: 339,
        },
        note: "Pass",
      },
    ],
    created: 1773757767119,
  },
  "through-ball": {
    name: "Through Ball",
    description: "Play the ball through defenders to space.",
    age: "u12",
    notes:
      "A great way to start an attack when defenders are up field and playing flat.",
    players: [
      {
        id: "A",
        x: 312.16015625,
        y: 211.88671875,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 429.80078125,
        y: 270.33984375,
        color: "#E63946",
        label: "B",
      },
    ],
    defenders: [
      {
        id: "D1",
        x: 342.5625,
        y: 321.40234375,
        color: "#1D3557",
        label: "D",
      },
      {
        id: "D2",
        x: 341.57421875,
        y: 232.5625,
        color: "#1D3557",
        label: "D2",
      },
      {
        id: "D3",
        x: 343.23828125,
        y: 156.453125,
        color: "#1D3557",
        label: "D3",
      },
    ],
    cones: [],
    frames: [
      {
        positions: {
          A: {
            x: 259,
            y: 289,
          },
          B: {
            x: 325,
            y: 191,
          },
          D1: {
            x: 343,
            y: 321,
          },
          D2: {
            x: 342,
            y: 233,
          },
          D3: {
            x: 343,
            y: 156,
          },
        },
        ball: {
          x: 260,
          y: 292,
        },
        note: "Setup - Flat Defenders",
      },
      {
        positions: {
          A: {
            x: 259,
            y: 289,
          },
          B: {
            x: 392,
            y: 221,
          },
          D1: {
            x: 343,
            y: 321,
          },
          D2: {
            x: 342,
            y: 233,
          },
          D3: {
            x: 343,
            y: 156,
          },
        },
        ball: {
          x: 382,
          y: 285,
        },
        note: "Pass - Through Defenders to Space",
      },
      {
        positions: {
          A: {
            x: 312,
            y: 212,
          },
          B: {
            x: 430,
            y: 270,
          },
          D1: {
            x: 343,
            y: 321,
          },
          D2: {
            x: 342,
            y: 233,
          },
          D3: {
            x: 343,
            y: 156,
          },
        },
        ball: {
          x: 439,
          y: 284,
        },
        note: "Striker Intercepts",
      },
    ],
    created: 1773758770247,
  },
  "switch-the-field": {
    name: "Switch the Field",
    description:
      "When defenders are loaded and heavy on one side of the field, take the opportunity to play the ball to the opposite side to stretch the defense and play into space.",
    age: "u12",
    notes:
      "Teach players on the attack to stretch the field and use it's width.",
    players: [
      {
        id: "A",
        x: 273.1015625,
        y: 341.28515625,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 276.671875,
        y: 230.63281250000003,
        color: "#E63946",
        label: "B",
      },
      {
        id: "C",
        x: 320.2109375,
        y: 85.36328125,
        color: "#E63946",
        label: "C",
      },
    ],
    defenders: [
      {
        id: "D1",
        x: 310.2265625,
        y: 352.78125,
        color: "#1D3557",
        label: "D",
      },
      {
        id: "D2",
        x: 311.00390625,
        y: 279.35546875,
        color: "#1D3557",
        label: "D2",
      },
      {
        id: "D3",
        x: 310.546875,
        y: 202.49609375,
        color: "#1D3557",
        label: "D3",
      },
    ],
    cones: [],
    frames: [
      {
        positions: {
          A: {
            x: 220,
            y: 340,
          },
          B: {
            x: 248,
            y: 230,
          },
          C: {
            x: 266,
            y: 93,
          },
          D1: {
            x: 310,
            y: 353,
          },
          D2: {
            x: 311,
            y: 279,
          },
          D3: {
            x: 311,
            y: 202,
          },
        },
        ball: {
          x: 220,
          y: 340,
        },
        note: "Setup - Defenders Loaded on One Side",
      },
      {
        positions: {
          A: {
            x: 273,
            y: 341,
          },
          B: {
            x: 277,
            y: 231,
          },
          C: {
            x: 320,
            y: 85,
          },
          D1: {
            x: 310,
            y: 353,
          },
          D2: {
            x: 311,
            y: 279,
          },
          D3: {
            x: 311,
            y: 202,
          },
        },
        ball: {
          x: 343,
          y: 89,
        },
        note: "Wing Plays Ball to Opposite Side of Field, Into Space",
      },
    ],
    created: 1773760777708,
  },
  "kickoff-progression-ball-to-wing": {
    name: "Kickoff Progression - Ball to Wing",
    description:
      "Ideal development of a kickoff with a quick attack from the wing.",
    age: "u16",
    notes:
      "No need to boot the ball down the field to start. Instead you can let the play develop with one of your wings.",
    players: [
      {
        id: "A",
        x: 537.94140625,
        y: 402.0859375,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 544.1796875,
        y: 314.47265625,
        color: "#E63946",
        label: "B",
      },
      {
        id: "C",
        x: 271.71875,
        y: 298.8203125,
        color: "#E63946",
        label: "C",
      },
      {
        id: "D",
        x: 367.078125,
        y: 220.40234375,
        color: "#E63946",
        label: "D",
      },
      {
        id: "E",
        x: 269.41796875,
        y: 221.171875,
        color: "#E63946",
        label: "E",
      },
      {
        id: "F",
        x: 525.74609375,
        y: 110.9921875,
        color: "#E63946",
        label: "F",
      },
      {
        id: "G",
        x: 281.20703125,
        y: 151.4609375,
        color: "#E63946",
        label: "G",
      },
      {
        id: "H",
        x: 44.66796875,
        y: 231.26953125,
        color: "#E63946",
        label: "H",
      },
      {
        id: "I",
        x: 560.27734375,
        y: 188.3203125,
        color: "#E63946",
        label: "I",
      },
      {
        id: "J",
        x: 576.8515625,
        y: 249.734375,
        color: "#E63946",
        label: "J",
      },
      {
        id: "K",
        x: 463.125,
        y: 223.875,
        color: "#E63946",
        label: "K",
      },
    ],
    defenders: [
      {
        id: "D1",
        x: 301.5546875,
        y: 235.24609374999997,
        color: "#1D3557",
        label: "D",
      },
      {
        id: "D2",
        x: 334.96875,
        y: 169.9140625,
        color: "#1D3557",
        label: "D2",
      },
      {
        id: "D3",
        x: 328.390625,
        y: 309.3359375,
        color: "#1D3557",
        label: "D3",
      },
      {
        id: "D4",
        x: 478.18359375,
        y: 109.5234375,
        color: "#1D3557",
        label: "D4",
      },
      {
        id: "D5",
        x: 484.1328125,
        y: 338.203125,
        color: "#1D3557",
        label: "D5",
      },
      {
        id: "D6",
        x: 487.5859375,
        y: 264.61328125,
        color: "#1D3557",
        label: "D6",
      },
      {
        id: "D7",
        x: 557.57421875,
        y: 280.21875,
        color: "#1D3557",
        label: "D7",
      },
      {
        id: "D8",
        x: 565.5078125,
        y: 238.57031250000003,
        color: "#1D3557",
        label: "D8",
      },
      {
        id: "D9",
        x: 578.859375,
        y: 196.34375,
        color: "#1D3557",
        label: "D9",
      },
      {
        id: "D10",
        x: 548.40625,
        y: 348.55078125,
        color: "#1D3557",
        label: "D10",
      },
    ],
    cones: [],
    frames: [
      {
        positions: {
          A: {
            x: 246,
            y: 384,
          },
          B: {
            x: 313,
            y: 341,
          },
          C: {
            x: 139,
            y: 293,
          },
          D: {
            x: 196,
            y: 214,
          },
          E: {
            x: 134,
            y: 223,
          },
          F: {
            x: 236,
            y: 86,
          },
          G: {
            x: 136,
            y: 148,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 304,
            y: 141,
          },
          J: {
            x: 312,
            y: 230,
          },
          K: {
            x: 239,
            y: 216,
          },
          D1: {
            x: 376,
            y: 228,
          },
          D2: {
            x: 350,
            y: 140,
          },
          D3: {
            x: 360,
            y: 288,
          },
          D4: {
            x: 412,
            y: 84,
          },
          D5: {
            x: 404,
            y: 356,
          },
          D6: {
            x: 435,
            y: 217,
          },
          D7: {
            x: 507,
            y: 247,
          },
          D8: {
            x: 511,
            y: 175,
          },
          D9: {
            x: 512,
            y: 104,
          },
          D10: {
            x: 503,
            y: 332,
          },
        },
        ball: {
          x: 317,
          y: 217,
        },
        arrows: [],
        note: "Kickoff Position - 11v11",
        coachNote:
          "3x4x3 for red vs a 4x4x3 for blue.\n\nBall goes back to CM to start.",
      },
      {
        positions: {
          A: {
            x: 246,
            y: 384,
          },
          B: {
            x: 388,
            y: 318,
          },
          C: {
            x: 139,
            y: 293,
          },
          D: {
            x: 196,
            y: 214,
          },
          E: {
            x: 134,
            y: 223,
          },
          F: {
            x: 236,
            y: 86,
          },
          G: {
            x: 136,
            y: 148,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 350,
            y: 98,
          },
          J: {
            x: 374,
            y: 207,
          },
          K: {
            x: 239,
            y: 216,
          },
          D1: {
            x: 323,
            y: 223,
          },
          D2: {
            x: 305,
            y: 130,
          },
          D3: {
            x: 323,
            y: 278,
          },
          D4: {
            x: 412,
            y: 84,
          },
          D5: {
            x: 371,
            y: 349,
          },
          D6: {
            x: 435,
            y: 217,
          },
          D7: {
            x: 507,
            y: 247,
          },
          D8: {
            x: 511,
            y: 175,
          },
          D9: {
            x: 512,
            y: 104,
          },
          D10: {
            x: 503,
            y: 332,
          },
        },
        ball: {
          x: 254,
          y: 216,
        },
        arrows: [],
        note: "Pass Back to Start",
        coachNote: "CM prepares to play outside, strikers move forward.",
      },
      {
        positions: {
          A: {
            x: 246,
            y: 384,
          },
          B: {
            x: 345,
            y: 313,
          },
          C: {
            x: 139,
            y: 293,
          },
          D: {
            x: 196,
            y: 214,
          },
          E: {
            x: 134,
            y: 223,
          },
          F: {
            x: 236,
            y: 86,
          },
          G: {
            x: 136,
            y: 148,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 406,
            y: 133,
          },
          J: {
            x: 403,
            y: 231,
          },
          K: {
            x: 239,
            y: 216,
          },
          D1: {
            x: 279,
            y: 219,
          },
          D2: {
            x: 284,
            y: 155,
          },
          D3: {
            x: 291,
            y: 273,
          },
          D4: {
            x: 397,
            y: 105,
          },
          D5: {
            x: 325,
            y: 372,
          },
          D6: {
            x: 435,
            y: 217,
          },
          D7: {
            x: 507,
            y: 247,
          },
          D8: {
            x: 511,
            y: 175,
          },
          D9: {
            x: 512,
            y: 104,
          },
          D10: {
            x: 503,
            y: 332,
          },
        },
        ball: {
          x: 258,
          y: 373,
        },
        arrows: [],
        note: "Pass Outside to Wing",
        coachNote: "This opens the field and prepares an immediate attack.",
      },
      {
        positions: {
          A: {
            x: 288,
            y: 398,
          },
          B: {
            x: 322,
            y: 311,
          },
          C: {
            x: 194,
            y: 296,
          },
          D: {
            x: 227,
            y: 220,
          },
          E: {
            x: 170,
            y: 222,
          },
          F: {
            x: 339,
            y: 92,
          },
          G: {
            x: 182,
            y: 138,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 447,
            y: 156,
          },
          J: {
            x: 442,
            y: 249,
          },
          K: {
            x: 329,
            y: 224,
          },
          D1: {
            x: 300,
            y: 216,
          },
          D2: {
            x: 317,
            y: 163,
          },
          D3: {
            x: 291,
            y: 273,
          },
          D4: {
            x: 397,
            y: 105,
          },
          D5: {
            x: 325,
            y: 372,
          },
          D6: {
            x: 435,
            y: 217,
          },
          D7: {
            x: 491,
            y: 256,
          },
          D8: {
            x: 511,
            y: 175,
          },
          D9: {
            x: 512,
            y: 104,
          },
          D10: {
            x: 475,
            y: 341,
          },
        },
        ball: {
          x: 324,
          y: 327,
        },
        arrows: [],
        note: "Wall Pass for Wing",
        coachNote:
          "Strikers and wings are looking at the wing, now they can run upfield to prepare a cross.",
      },
      {
        positions: {
          A: {
            x: 388,
            y: 399,
          },
          B: {
            x: 400,
            y: 312,
          },
          C: {
            x: 229,
            y: 298,
          },
          D: {
            x: 268,
            y: 220,
          },
          E: {
            x: 211,
            y: 225,
          },
          F: {
            x: 431,
            y: 100,
          },
          G: {
            x: 235,
            y: 146,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 476,
            y: 171,
          },
          J: {
            x: 461,
            y: 266,
          },
          K: {
            x: 375,
            y: 234,
          },
          D1: {
            x: 302,
            y: 235,
          },
          D2: {
            x: 335,
            y: 170,
          },
          D3: {
            x: 294,
            y: 313,
          },
          D4: {
            x: 401,
            y: 126,
          },
          D5: {
            x: 342,
            y: 378,
          },
          D6: {
            x: 425,
            y: 256,
          },
          D7: {
            x: 493,
            y: 281,
          },
          D8: {
            x: 507,
            y: 214,
          },
          D9: {
            x: 505,
            y: 135,
          },
          D10: {
            x: 446,
            y: 344,
          },
        },
        ball: {
          x: 393,
          y: 385,
        },
        arrows: [],
        note: "Pass Back to Wing",
        coachNote:
          "Striker immediately passes back to wing and prepares to receive a cross.",
      },
      {
        positions: {
          A: {
            x: 538,
            y: 402,
          },
          B: {
            x: 516,
            y: 306,
          },
          C: {
            x: 272,
            y: 299,
          },
          D: {
            x: 367,
            y: 220,
          },
          E: {
            x: 269,
            y: 221,
          },
          F: {
            x: 504,
            y: 98,
          },
          G: {
            x: 281,
            y: 151,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 549,
            y: 189,
          },
          J: {
            x: 546,
            y: 250,
          },
          K: {
            x: 463,
            y: 224,
          },
          D1: {
            x: 302,
            y: 235,
          },
          D2: {
            x: 335,
            y: 170,
          },
          D3: {
            x: 328,
            y: 309,
          },
          D4: {
            x: 401,
            y: 126,
          },
          D5: {
            x: 342,
            y: 378,
          },
          D6: {
            x: 425,
            y: 256,
          },
          D7: {
            x: 539,
            y: 285,
          },
          D8: {
            x: 558,
            y: 226,
          },
          D9: {
            x: 553,
            y: 163,
          },
          D10: {
            x: 506,
            y: 355,
          },
        },
        ball: {
          x: 543,
          y: 379,
        },
        arrows: [],
        note: "Wing Runs Downfield for Cross",
        coachNote: "All strikers and mids are prepped for the ball as well.",
      },
      {
        positions: {
          A: {
            x: 538,
            y: 402,
          },
          B: {
            x: 544,
            y: 314,
          },
          C: {
            x: 272,
            y: 299,
          },
          D: {
            x: 367,
            y: 220,
          },
          E: {
            x: 269,
            y: 221,
          },
          F: {
            x: 526,
            y: 111,
          },
          G: {
            x: 281,
            y: 151,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 560,
            y: 188,
          },
          J: {
            x: 577,
            y: 250,
          },
          K: {
            x: 463,
            y: 224,
          },
          D1: {
            x: 302,
            y: 235,
          },
          D2: {
            x: 335,
            y: 170,
          },
          D3: {
            x: 328,
            y: 309,
          },
          D4: {
            x: 478,
            y: 110,
          },
          D5: {
            x: 460,
            y: 363,
          },
          D6: {
            x: 496,
            y: 275,
          },
          D7: {
            x: 558,
            y: 293,
          },
          D8: {
            x: 578,
            y: 229,
          },
          D9: {
            x: 572,
            y: 175,
          },
          D10: {
            x: 537,
            y: 374,
          },
        },
        ball: {
          x: 569,
          y: 256,
        },
        arrows: [],
        note: "Ball is Crossed into the Box",
        coachNote:
          "If striker can head or shoot, they do. If not they have a pass backwards.",
      },
      {
        positions: {
          A: {
            x: 538,
            y: 402,
          },
          B: {
            x: 544,
            y: 314,
          },
          C: {
            x: 272,
            y: 299,
          },
          D: {
            x: 367,
            y: 220,
          },
          E: {
            x: 269,
            y: 221,
          },
          F: {
            x: 526,
            y: 111,
          },
          G: {
            x: 281,
            y: 151,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 560,
            y: 188,
          },
          J: {
            x: 577,
            y: 250,
          },
          K: {
            x: 463,
            y: 224,
          },
          D1: {
            x: 302,
            y: 235,
          },
          D2: {
            x: 335,
            y: 170,
          },
          D3: {
            x: 328,
            y: 309,
          },
          D4: {
            x: 478,
            y: 110,
          },
          D5: {
            x: 484,
            y: 338,
          },
          D6: {
            x: 488,
            y: 265,
          },
          D7: {
            x: 558,
            y: 280,
          },
          D8: {
            x: 566,
            y: 239,
          },
          D9: {
            x: 579,
            y: 196,
          },
          D10: {
            x: 548,
            y: 349,
          },
        },
        ball: {
          x: 479,
          y: 236,
        },
        arrows: [],
        note: "Pass Back to Mid",
        coachNote: "No shot, so the striker passes back to the CM to shoot.",
      },
      {
        positions: {
          A: {
            x: 538,
            y: 402,
          },
          B: {
            x: 544,
            y: 314,
          },
          C: {
            x: 272,
            y: 299,
          },
          D: {
            x: 367,
            y: 220,
          },
          E: {
            x: 269,
            y: 221,
          },
          F: {
            x: 526,
            y: 111,
          },
          G: {
            x: 281,
            y: 151,
          },
          H: {
            x: 45,
            y: 231,
          },
          I: {
            x: 560,
            y: 188,
          },
          J: {
            x: 577,
            y: 250,
          },
          K: {
            x: 463,
            y: 224,
          },
          D1: {
            x: 302,
            y: 235,
          },
          D2: {
            x: 335,
            y: 170,
          },
          D3: {
            x: 328,
            y: 309,
          },
          D4: {
            x: 478,
            y: 110,
          },
          D5: {
            x: 484,
            y: 338,
          },
          D6: {
            x: 488,
            y: 265,
          },
          D7: {
            x: 558,
            y: 280,
          },
          D8: {
            x: 566,
            y: 239,
          },
          D9: {
            x: 579,
            y: 196,
          },
          D10: {
            x: 548,
            y: 349,
          },
        },
        ball: {
          x: 620,
          y: 215,
        },
        arrows: [],
        note: "Shot",
        coachNote: "",
      },
    ],
    created: 1774460223625,
  },
  "11-v-11-attack-through-the-middle": {
    name: "11v11 - Attack through the middle",
    description: "",
    age: "u16",
    notes: "Use the wing to attack from the outside through the middle.",
    players: [
      {
        id: "A",
        x: 278.67662753468517,
        y: 322.79082177161155,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 458.51654215581647,
        y: 367.10512273212385,
        color: "#E63946",
        label: "B",
      },
      {
        id: "C",
        x: 250.37086446104587,
        y: 149.2102454642476,
        color: "#E63946",
        label: "C",
      },
      {
        id: "D",
        x: 522.58537886873,
        y: 215.71504802561367,
        color: "#E63946",
        label: "D",
      },
      {
        id: "E",
        x: 423.3324439701174,
        y: 218.64727854855923,
        color: "#E63946",
        label: "E",
      },
      {
        id: "F",
        x: 251.8863393810032,
        y: 225.36819637139806,
        color: "#E63946",
        label: "F",
      },
      {
        id: "G",
        x: 456.78228388473855,
        y: 291.0005336179296,
        color: "#E63946",
        label: "G",
      },
      {
        id: "H",
        x: 523.5058697972252,
        y: 107.05176093916755,
        color: "#E63946",
        label: "H",
      },
      {
        id: "I",
        x: 49.90394877267876,
        y: 222.44930629669156,
        color: "#E63946",
        label: "I",
      },
      {
        id: "J",
        x: 527.8014941302027,
        y: 160.05069370330844,
        color: "#E63946",
        label: "J",
      },
      {
        id: "K",
        x: 533.7326574172893,
        y: 301.3607257203842,
        color: "#E63946",
        label: "K",
      },
    ],
    defenders: [
      {
        id: "D1",
        x: 552.2972251867662,
        y: 272.48132337246534,
        color: "#1D3557",
        label: "D",
      },
      {
        id: "D2",
        x: 524.0501600853788,
        y: 323.5005336179296,
        color: "#1D3557",
        label: "D2",
      },
      {
        id: "D3",
        x: 526.8436499466383,
        y: 138.49519743863394,
        color: "#1D3557",
        label: "D3",
      },
      {
        id: "D4",
        x: 498.3858057630737,
        y: 243.6606189967983,
        color: "#1D3557",
        label: "D4",
      },
      {
        id: "D5",
        x: 450.2614727854856,
        y: 135.7470651013874,
        color: "#1D3557",
        label: "D5",
      },
      {
        id: "D6",
        x: 443.8794023479189,
        y: 313.81003201707574,
        color: "#1D3557",
        label: "D6",
      },
      {
        id: "D7",
        x: 598.4765208110992,
        y: 220.72572038420492,
        color: "#1D3557",
        label: "D7",
      },
      {
        id: "D8",
        x: 320.72038420490924,
        y: 220.66702241195304,
        color: "#1D3557",
        label: "D8",
      },
      {
        id: "D9",
        x: 525.2081109925293,
        y: 363.75667022411955,
        color: "#1D3557",
        label: "D9",
      },
      {
        id: "D10",
        x: 324.474386339381,
        y: 322.73479188900745,
        color: "#1D3557",
        label: "D10",
      },
      {
        id: "D11",
        x: 340.7017075773746,
        y: 132.24653148345786,
        color: "#1D3557",
        label: "D11",
      },
    ],
    cones: [],
    frames: [
      {
        positions: {
          A: {
            x: 122,
            y: 309,
          },
          B: {
            x: 184,
            y: 384,
          },
          C: {
            x: 120,
            y: 170,
          },
          D: {
            x: 386,
            y: 220,
          },
          E: {
            x: 172,
            y: 238,
          },
          F: {
            x: 123,
            y: 236,
          },
          G: {
            x: 234,
            y: 221,
          },
          H: {
            x: 208,
            y: 55,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 378,
            y: 97,
          },
          K: {
            x: 346,
            y: 349,
          },
          D1: {
            x: 419,
            y: 189,
          },
          D2: {
            x: 394,
            y: 350,
          },
          D3: {
            x: 416,
            y: 119,
          },
          D4: {
            x: 410,
            y: 265,
          },
          D5: {
            x: 260,
            y: 114,
          },
          D6: {
            x: 249,
            y: 265,
          },
          D7: {
            x: 605,
            y: 232,
          },
          D8: {
            x: 173,
            y: 213,
          },
          D9: {
            x: 249,
            y: 373,
          },
          D10: {
            x: 175,
            y: 308,
          },
          D11: {
            x: 161,
            y: 138,
          },
        },
        ball: {
          x: 137,
          y: 302,
        },
        arrows: [],
        note: "11v11 - Offensive Attack from Center",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 137,
            y: 316,
          },
          B: {
            x: 187,
            y: 383,
          },
          C: {
            x: 144,
            y: 175,
          },
          D: {
            x: 393,
            y: 232,
          },
          E: {
            x: 199,
            y: 234,
          },
          F: {
            x: 143,
            y: 237,
          },
          G: {
            x: 288,
            y: 257,
          },
          H: {
            x: 220,
            y: 72,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 372,
            y: 109,
          },
          K: {
            x: 359,
            y: 368,
          },
          D1: {
            x: 419,
            y: 189,
          },
          D2: {
            x: 394,
            y: 350,
          },
          D3: {
            x: 416,
            y: 119,
          },
          D4: {
            x: 410,
            y: 265,
          },
          D5: {
            x: 260,
            y: 114,
          },
          D6: {
            x: 234,
            y: 289,
          },
          D7: {
            x: 605,
            y: 232,
          },
          D8: {
            x: 173,
            y: 213,
          },
          D9: {
            x: 237,
            y: 376,
          },
          D10: {
            x: 175,
            y: 308,
          },
          D11: {
            x: 161,
            y: 138,
          },
        },
        ball: {
          x: 200,
          y: 367,
        },
        arrows: [],
        note: "Play to wing - safe",
        coachNote:
          "Play to the wing to get out of the back and immediately start opening up a counter-attack.",
      },
      {
        positions: {
          A: {
            x: 181,
            y: 319,
          },
          B: {
            x: 187,
            y: 383,
          },
          C: {
            x: 163,
            y: 161,
          },
          D: {
            x: 416,
            y: 222,
          },
          E: {
            x: 253,
            y: 213,
          },
          F: {
            x: 175,
            y: 229,
          },
          G: {
            x: 297,
            y: 263,
          },
          H: {
            x: 285,
            y: 66,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 401,
            y: 134,
          },
          K: {
            x: 391,
            y: 373,
          },
          D1: {
            x: 419,
            y: 189,
          },
          D2: {
            x: 394,
            y: 350,
          },
          D3: {
            x: 416,
            y: 119,
          },
          D4: {
            x: 410,
            y: 265,
          },
          D5: {
            x: 260,
            y: 114,
          },
          D6: {
            x: 266,
            y: 293,
          },
          D7: {
            x: 605,
            y: 232,
          },
          D8: {
            x: 173,
            y: 213,
          },
          D9: {
            x: 274,
            y: 378,
          },
          D10: {
            x: 196,
            y: 312,
          },
          D11: {
            x: 161,
            y: 138,
          },
        },
        ball: {
          x: 305,
          y: 278,
        },
        arrows: [],
        note: "Immediate pass to middle ",
        coachNote:
          "The center mid runs up to space, intercepting the ball and being ready to continue challenging space.",
      },
      {
        positions: {
          A: {
            x: 218,
            y: 323,
          },
          B: {
            x: 220,
            y: 381,
          },
          C: {
            x: 210,
            y: 152,
          },
          D: {
            x: 416,
            y: 222,
          },
          E: {
            x: 289,
            y: 203,
          },
          F: {
            x: 211,
            y: 229,
          },
          G: {
            x: 327,
            y: 265,
          },
          H: {
            x: 378,
            y: 87,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 422,
            y: 144,
          },
          K: {
            x: 408,
            y: 362,
          },
          D1: {
            x: 432,
            y: 183,
          },
          D2: {
            x: 379,
            y: 333,
          },
          D3: {
            x: 433,
            y: 118,
          },
          D4: {
            x: 373,
            y: 265,
          },
          D5: {
            x: 323,
            y: 118,
          },
          D6: {
            x: 296,
            y: 304,
          },
          D7: {
            x: 605,
            y: 232,
          },
          D8: {
            x: 227,
            y: 208,
          },
          D9: {
            x: 322,
            y: 380,
          },
          D10: {
            x: 223,
            y: 303,
          },
          D11: {
            x: 197,
            y: 124,
          },
        },
        ball: {
          x: 345,
          y: 274,
        },
        arrows: [],
        note: "Defender challenges",
        coachNote:
          "When the defender challenges, there's space behind him for the outside striker to make a challenge.",
      },
      {
        positions: {
          A: {
            x: 218,
            y: 323,
          },
          B: {
            x: 287,
            y: 380,
          },
          C: {
            x: 210,
            y: 152,
          },
          D: {
            x: 451,
            y: 223,
          },
          E: {
            x: 289,
            y: 203,
          },
          F: {
            x: 211,
            y: 229,
          },
          G: {
            x: 327,
            y: 265,
          },
          H: {
            x: 378,
            y: 87,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 422,
            y: 144,
          },
          K: {
            x: 441,
            y: 333,
          },
          D1: {
            x: 472,
            y: 209,
          },
          D2: {
            x: 404,
            y: 332,
          },
          D3: {
            x: 433,
            y: 118,
          },
          D4: {
            x: 373,
            y: 265,
          },
          D5: {
            x: 323,
            y: 118,
          },
          D6: {
            x: 296,
            y: 304,
          },
          D7: {
            x: 605,
            y: 232,
          },
          D8: {
            x: 227,
            y: 208,
          },
          D9: {
            x: 322,
            y: 380,
          },
          D10: {
            x: 223,
            y: 303,
          },
          D11: {
            x: 197,
            y: 124,
          },
        },
        ball: {
          x: 442,
          y: 311,
        },
        arrows: [],
        note: "Throughball to striker",
        coachNote:
          "Striker steps into space to intercept the ball played through, understanding that now there's a 2v2 for the goal.",
      },
      {
        positions: {
          A: {
            x: 261,
            y: 326,
          },
          B: {
            x: 395,
            y: 372,
          },
          C: {
            x: 251,
            y: 147,
          },
          D: {
            x: 491,
            y: 216,
          },
          E: {
            x: 357,
            y: 214,
          },
          F: {
            x: 243,
            y: 234,
          },
          G: {
            x: 406,
            y: 281,
          },
          H: {
            x: 449,
            y: 92,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 488,
            y: 145,
          },
          K: {
            x: 492,
            y: 308,
          },
          D1: {
            x: 528,
            y: 264,
          },
          D2: {
            x: 459,
            y: 327,
          },
          D3: {
            x: 484,
            y: 125,
          },
          D4: {
            x: 440,
            y: 251,
          },
          D5: {
            x: 397,
            y: 126,
          },
          D6: {
            x: 380,
            y: 300,
          },
          D7: {
            x: 605,
            y: 232,
          },
          D8: {
            x: 297,
            y: 208,
          },
          D9: {
            x: 432,
            y: 375,
          },
          D10: {
            x: 286,
            y: 300,
          },
          D11: {
            x: 322,
            y: 122,
          },
        },
        ball: {
          x: 507,
          y: 296,
        },
        arrows: [],
        note: "Striker steps straight to goal",
        coachNote: "This draws the defender to open up their center striker.",
      },
      {
        positions: {
          A: {
            x: 261,
            y: 326,
          },
          B: {
            x: 437,
            y: 371,
          },
          C: {
            x: 251,
            y: 147,
          },
          D: {
            x: 520,
            y: 217,
          },
          E: {
            x: 389,
            y: 213,
          },
          F: {
            x: 243,
            y: 234,
          },
          G: {
            x: 434,
            y: 288,
          },
          H: {
            x: 488,
            y: 113,
          },
          I: {
            x: 37,
            y: 232,
          },
          J: {
            x: 512,
            y: 154,
          },
          K: {
            x: 514,
            y: 298,
          },
          D1: {
            x: 536,
            y: 288,
          },
          D2: {
            x: 505,
            y: 329,
          },
          D3: {
            x: 514,
            y: 131,
          },
          D4: {
            x: 481,
            y: 243,
          },
          D5: {
            x: 431,
            y: 129,
          },
          D6: {
            x: 419,
            y: 308,
          },
          D7: {
            x: 601,
            y: 224,
          },
          D8: {
            x: 312,
            y: 204,
          },
          D9: {
            x: 498,
            y: 369,
          },
          D10: {
            x: 304,
            y: 314,
          },
          D11: {
            x: 338,
            y: 137,
          },
        },
        ball: {
          x: 532,
          y: 223,
        },
        arrows: [],
        note: "Pass to center striker",
        coachNote: "Now one-on-one with the keeper.",
      },
      {
        positions: {
          A: {
            x: 279,
            y: 323,
          },
          B: {
            x: 459,
            y: 367,
          },
          C: {
            x: 250,
            y: 149,
          },
          D: {
            x: 523,
            y: 216,
          },
          E: {
            x: 423,
            y: 219,
          },
          F: {
            x: 252,
            y: 225,
          },
          G: {
            x: 457,
            y: 291,
          },
          H: {
            x: 524,
            y: 107,
          },
          I: {
            x: 50,
            y: 222,
          },
          J: {
            x: 528,
            y: 160,
          },
          K: {
            x: 534,
            y: 301,
          },
          D1: {
            x: 552,
            y: 272,
          },
          D2: {
            x: 524,
            y: 324,
          },
          D3: {
            x: 527,
            y: 138,
          },
          D4: {
            x: 498,
            y: 244,
          },
          D5: {
            x: 450,
            y: 136,
          },
          D6: {
            x: 444,
            y: 314,
          },
          D7: {
            x: 598,
            y: 221,
          },
          D8: {
            x: 321,
            y: 221,
          },
          D9: {
            x: 525,
            y: 364,
          },
          D10: {
            x: 324,
            y: 323,
          },
          D11: {
            x: 341,
            y: 132,
          },
        },
        ball: {
          x: 619,
          y: 241,
        },
        arrows: [],
        note: "Shoot",
        coachNote: "",
      },
    ],
    created: 1774552746058,
  },
  "teaching-wall-pass": {
    name: "Teaching Wall Pass",
    description: "",
    age: "u10",
    notes: "Teach the wall pass with a simple passing drill using a cone.",
    players: [
      {
        id: "A",
        x: 123.33829542670863,
        y: 425.5961775424062,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 150.99738076843354,
        y: 318.70041685237135,
        color: "#E63946",
        label: "B",
      },
    ],
    defenders: [],
    cones: [
      {
        id: "C1",
        x: 146.7221918634231,
        y: 403.88839367642817,
      },
      {
        id: "C2",
        x: 152.73398782716842,
        y: 302.2055160842094,
      },
    ],
    frames: [
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 123,
            y: 432,
          },
        },
        ball: {
          x: 124,
          y: 410,
        },
        arrows: [],
        note: "Setup, Cones and Players",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 123,
            y: 432,
          },
        },
        ball: {
          x: 152,
          y: 338,
        },
        arrows: [],
        note: "Pass One",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 170,
            y: 426,
          },
        },
        ball: {
          x: 170,
          y: 407,
        },
        arrows: [],
        note: "Pass 2",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 151,
            y: 429,
          },
        },
        ball: {
          x: 154,
          y: 338,
        },
        arrows: [],
        note: "Pass 3",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 119,
            y: 422,
          },
        },
        ball: {
          x: 122,
          y: 406,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 144,
            y: 428,
          },
        },
        ball: {
          x: 152,
          y: 337,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 169,
            y: 422,
          },
        },
        ball: {
          x: 168,
          y: 406,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 146,
            y: 427,
          },
        },
        ball: {
          x: 152,
          y: 337,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 153,
            y: 320,
          },
          B: {
            x: 123,
            y: 426,
          },
        },
        ball: {
          x: 127,
          y: 407,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 182,
            y: 360,
          },
          B: {
            x: 102,
            y: 355,
          },
        },
        ball: {
          x: 127,
          y: 407,
        },
        arrows: [],
        note: "Switch",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 124,
            y: 426,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 127,
          y: 407,
        },
        arrows: [],
        note: "Switch",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 147,
            y: 428,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 150,
          y: 336,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 170,
            y: 424,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 167,
          y: 404,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 146,
            y: 430,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 149,
          y: 335,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 123,
            y: 426,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 124,
          y: 405,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 149,
            y: 426,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 151,
          y: 336,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 175,
            y: 423,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 169,
          y: 402,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 146,
            y: 428,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 149,
          y: 336,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 123,
            y: 426,
          },
          B: {
            x: 151,
            y: 319,
          },
        },
        ball: {
          x: 127,
          y: 403,
        },
        arrows: [],
        note: "Pass",
        coachNote: "",
      },
    ],
    created: 1774880132628,
  },
  "wall-pass-up-the-field": {
    name: "Wall passes up the field",
    description: "Learn wall passes up the field.",
    age: "u10",
    notes:
      "Great way to learn how to pass and move and to pass into open space.",
    players: [
      {
        id: "A",
        x: 172.54819197648345,
        y: 36.432897255066464,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 267.1842318491021,
        y: 50.55200167789634,
        color: "#E63946",
        label: "B",
      },
    ],
    defenders: [],
    cones: [
      {
        id: "C1",
        x: 177.03744182102548,
        y: 427.84836011850143,
      },
      {
        id: "C2",
        x: 256.4721400440935,
        y: 428.75888105287993,
      },
      {
        id: "C3",
        x: 219.22553656560328,
        y: 360.59643971370895,
      },
      {
        id: "C4",
        x: 223.37108292977067,
        y: 186.9944681855124,
      },
      {
        id: "C5",
        x: 222.52689894288568,
        y: 267.3162834596125,
      },
      {
        id: "C6",
        x: 223.97105654902109,
        y: 104.46870985501927,
      },
      {
        id: "C7",
        x: 223.86553355066044,
        y: 32.58278058883675,
      },
    ],
    frames: [
      {
        positions: {
          A: {
            x: 176,
            y: 418,
          },
          B: {
            x: 259,
            y: 415,
          },
        },
        ball: {
          x: 176,
          y: 406,
        },
        arrows: [],
        note: "Setup - Cones and Ball",
        coachNote:
          "Have your players split into two lines, with cones going up the field.",
      },
      {
        positions: {
          A: {
            x: 178,
            y: 364,
          },
          B: {
            x: 262,
            y: 377,
          },
        },
        ball: {
          x: 261,
          y: 359,
        },
        arrows: [],
        note: "First pass to second player.",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 173,
            y: 289,
          },
          B: {
            x: 267,
            y: 269,
          },
        },
        ball: {
          x: 177,
          y: 274,
        },
        arrows: [],
        note: "Second pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 172,
            y: 198,
          },
          B: {
            x: 274,
            y: 203,
          },
        },
        ball: {
          x: 272,
          y: 188,
        },
        arrows: [],
        note: "Third pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 169,
            y: 125,
          },
          B: {
            x: 269,
            y: 114,
          },
        },
        ball: {
          x: 172,
          y: 112,
        },
        arrows: [],
        note: "Fourth pass",
        coachNote: "",
      },
      {
        positions: {
          A: {
            x: 173,
            y: 36,
          },
          B: {
            x: 267,
            y: 51,
          },
        },
        ball: {
          x: 268,
          y: 34,
        },
        arrows: [],
        note: "Fifth pass",
        coachNote: "",
      },
    ],
    created: 1774893675767,
  },
  "2x3x1-vs-3x3-in-10u": {
    name: "2x3x1 vs 3x3 on 10U",
    description: "",
    age: "u10",
    notes:
      "What does playing 2x3x1 vs a 3x3 look like on a 10U field where they play 7v7? Take a look.",
    players: [
      {
        id: "A",
        x: 38.94100133788087,
        y: 231.92958078808692,
        color: "#E63946",
        label: "A",
      },
      {
        id: "B",
        x: 476.90365373381826,
        y: 201.58692289541986,
        color: "#E63946",
        label: "B",
      },
      {
        id: "C",
        x: 339.05745350392885,
        y: 234.83601185014288,
        color: "#E63946",
        label: "C",
      },
      {
        id: "D",
        x: 416.41184118788743,
        y: 96.50617413417928,
        color: "#E63946",
        label: "D",
      },
      {
        id: "E",
        x: 197.57523224481335,
        y: 189.25871064153318,
        color: "#E63946",
        label: "E",
      },
      {
        id: "F",
        x: 201.9830786334772,
        y: 293.278189969326,
        color: "#E63946",
        label: "F",
      },
      {
        id: "G",
        x: 349.8720533644877,
        y: 328.0739585244999,
        color: "#E63946",
        label: "G",
      },
    ],
    defenders: [
      {
        id: "D1",
        x: 225.87348546232263,
        y: 206.7937760532732,
        color: "#1D3557",
        label: "D",
      },
      {
        id: "D2",
        x: 373.67201190902415,
        y: 344.1045539155284,
        color: "#1D3557",
        label: "D2",
      },
      {
        id: "D3",
        x: 461.31036951892816,
        y: 164.28571428571428,
        color: "#1D3557",
        label: "D3",
      },
      {
        id: "D4",
        x: 497.251502760557,
        y: 232.91849094198147,
        color: "#1D3557",
        label: "D4",
      },
      {
        id: "D5",
        x: 339.0242891330155,
        y: 103.19337755289307,
        color: "#1D3557",
        label: "D5",
      },
      {
        id: "D6",
        x: 466.6076240366316,
        y: 302.25978554387433,
        color: "#1D3557",
        label: "D6",
      },
      {
        id: "D7",
        x: 604.1824794135936,
        y: 230.63314369609103,
        color: "#1D3557",
        label: "D7",
      },
    ],
    cones: [],
    frames: [
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [],
        note: "Initial Setup, 2x3x1 vs 3x3",
        coachNote:
          "The red team is lined up in a 2x3x1. Two backs on the left and right, three midfielders, and one striker.\n\nBlue is lined up in a 3x3, or three backs and three midfielders.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 142.21183741920896,
            y1: 344.1377185853237,
            x2: 134.14988034445722,
            y2: 291.11645649267234,
          },
        ],
        note: "Right Back",
        coachNote:
          "Stays slightly to the right in the back and doesn't go past midfield.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 122.20769187284478,
            y1: 101.44770993367067,
            x2: 125.14123122727015,
            y2: 165.9047531657185,
          },
        ],
        note: "Left Back",
        coachNote:
          "Stays slightly to the left in the back and doesn't go past midfield.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 122.20769187284478,
            y1: 101.44770993367067,
            x2: 167.30520642936554,
            y2: 109.62732349317044,
          },
        ],
        note: "Left Wing",
        coachNote:
          "The left wing, or left mid is a great place for players who have a lot of endurance. They go all the way up the field to help in the attack and all the way back to help with defense.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 128.89784996890842,
            y1: 348.42500589885435,
            x2: 176.79323145339086,
            y2: 344.1075688855098,
          },
        ],
        note: "Right Wing",
        coachNote:
          "The right wing, or right mid is a great place for players who have a lot of endurance. They go all the way up the field to help in the attack and all the way back to help with defense.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 177.8122821232735,
            y1: 291.3244894213879,
            x2: 189.5102602272513,
            y2: 251.57211021681564,
          },
        ],
        note: "Center Mid",
        coachNote:
          "The center mid is one of the most active players on the field. They are the primary passer on the field, helping with both offense and defense. Pick someone with good soccer smarts.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 227.962840829863,
            y1: 292.1867708360643,
            x2: 249.81213137613295,
            y2: 245.88889180190338,
          },
        ],
        note: "Striker",
        coachNote:
          "Primary goal scorer. Should keep pressure up on defense and be the first defender when losing the ball. Stays up top pressuring the opposing backs.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 427.9198778948162,
            y1: 268.14238523451223,
            x2: 475.3358834724604,
            y2: 238.59266444694964,
          },
        ],
        note: "Sweeper or Center Back",
        coachNote:
          "The center back, or sweeper, is your last line of defense and the captain of the defense. They help coordinate the defense and fill gaps in the middle of the field.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 435.0110233846502,
            y1: 236.96156568701988,
            x2: 450.46562023026627,
            y2: 194.5921925386047,
          },
        ],
        note: "Right Back",
        coachNote:
          "The right back covers the right side of your backfield. They should be level with or in front of the sweeper, but never behind them.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 435.0110233846502,
            y1: 236.96156568701988,
            x2: 453.501667640242,
            y2: 282.5720315654248,
          },
        ],
        note: "Left Back",
        coachNote:
          "The left back covers the left side of your backfield. They should be level with or in front of the sweeper, but never behind them.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 429.894665435565,
            y1: 214.4819495058071,
            x2: 409.4262186964141,
            y2: 160.33911858008022,
          },
        ],
        note: "Right wing, or right striker",
        coachNote:
          "In a 3x3 on a 10U field, the right wing plays more active up top.  Still covers the right side of the field, but is ready to assist on the attack.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 429.2012285891952,
            y1: 266.49621162467554,
            x2: 403.9239480676101,
            y2: 316.73767139448915,
          },
        ],
        note: "Left wing, or striker",
        coachNote:
          "In a 3x3 on a 10U field, the left wing plays more active up top.  Still covers the left side of the field, but is ready to assist on the attack.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 263,
            y: 224,
          },
          C: {
            x: 196,
            y: 226,
          },
          D: {
            x: 194,
            y: 115,
          },
          E: {
            x: 126,
            y: 192,
          },
          F: {
            x: 127,
            y: 267,
          },
          G: {
            x: 201,
            y: 341,
          },
          D1: {
            x: 384,
            y: 232,
          },
          D2: {
            x: 395,
            y: 341,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 396,
            y: 135,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 320,
          y: 228,
        },
        arrows: [
          {
            id: "AR1",
            x1: 416.4208860163184,
            y1: 292.2048606559526,
            x2: 397.4237313685956,
            y2: 256.28450829772174,
          },
        ],
        note: "Center striker",
        coachNote:
          "Leader of the attack. Stays up field pressuring their backs and ready to steal the ball and score.",
      },
      {
        positions: {
          A: {
            x: 39,
            y: 232,
          },
          B: {
            x: 477,
            y: 202,
          },
          C: {
            x: 339,
            y: 235,
          },
          D: {
            x: 416,
            y: 97,
          },
          E: {
            x: 198,
            y: 189,
          },
          F: {
            x: 202,
            y: 293,
          },
          G: {
            x: 350,
            y: 328,
          },
          D1: {
            x: 226,
            y: 207,
          },
          D2: {
            x: 374,
            y: 344,
          },
          D3: {
            x: 461,
            y: 164,
          },
          D4: {
            x: 497,
            y: 233,
          },
          D5: {
            x: 339,
            y: 103,
          },
          D6: {
            x: 467,
            y: 302,
          },
          D7: {
            x: 604,
            y: 231,
          },
        },
        ball: {
          x: 443,
          y: 165,
        },
        arrows: [],
        note: "Real Game Field - Positions Opening Up",
        coachNote: "How the positions may look in a game time scenario.",
      },
    ],
    created: 1774899754677,
  },
};
