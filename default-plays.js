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
};
