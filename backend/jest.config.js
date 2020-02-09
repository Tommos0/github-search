module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "testMatch": [
        "**/tests/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "globals": {
        "__DEV__": true,
        "rootDir": __dirname,
    }
    // "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"]
};
