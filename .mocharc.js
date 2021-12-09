module.exports = {
    spec: ["src/**/*.spec.ts"],
    require: ["ts-node/register/transpile-only", "./src/spec/mochaGlobalSetup.ts"],
    recursive: true,
};
