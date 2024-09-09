const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Fornece o diretório raiz para as configurações do Next.js
  dir: './',
})

const customJestConfig = {
  // Configurações personalizadas do Jest
  testEnvironment: 'jest-environment-jsdom', // Simula o ambiente de navegador
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js' ], // Arquivo de setup adicional
  moduleNameMapper: {
    // Lida com imports de CSS/SCSS e outros arquivos que o Jest não entende por padrão
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    "^@components/(.*)$": "<rootDir>/components/$1"
  },
  transform: {
    // Use ts-jest para transformar arquivos TypeScript
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

module.exports = createJestConfig(customJestConfig)
