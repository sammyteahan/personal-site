import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

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
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: "sammyteahan.com",
          domainAlias: "www.sammyteahan.com",
        },
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
