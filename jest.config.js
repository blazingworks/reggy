/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
