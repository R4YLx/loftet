/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib//$1',
    '^@store/(.*)$': '<rootDir>/src/store//$1',
    '^@utils/(.*)$': '<rootDir>/src/utils//$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./src/jest.setup.ts']
}

module.exports = createJestConfig(customJestConfig)
