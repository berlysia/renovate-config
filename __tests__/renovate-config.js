function setup() {
  const pkg = require("../package.json");
  const renovateConfig = pkg["renovate-config"];

  return {
    pkg,
    renovateConfig,
  };
}

test("renovate-config is present", () => {
  const { renovateConfig } = setup();
  expect(renovateConfig).toBeDefined();
});

test("default config is present", () => {
  const { renovateConfig } = setup();
  expect(renovateConfig.default).toBeDefined();
});
