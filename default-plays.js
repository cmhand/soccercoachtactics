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
};
