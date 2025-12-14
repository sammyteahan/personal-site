/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sammyteahan",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-west-2",
        },
      },
    };
  },
  async run() {
    new sst.aws.Astro("Web", {
      domain:
        $app.stage === "production"
          ? {
              name: "sammyteahan.com",
              aliases: ["www.sammyteahan.com"],
            }
          : undefined,
    });
  },
});
