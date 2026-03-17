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
};
