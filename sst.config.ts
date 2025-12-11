import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "sammyteahan",
      region: "us-west-2",
    };
  },
  /**
   * stage: prod
   */
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
        customDomain:
          app.stage === "production"
            ? {
                domainName: "sammyteahan.com",
                domainAlias: "www.sammyteahan.com",
              }
            : undefined,
        });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
