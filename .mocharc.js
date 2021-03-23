module.exports = {
    spec: ["src/**/*.spec.ts"],
    require: ["ts-node/register/transpile-only", "./src/mochaFixtures.ts"],
    recursive: true,
};
