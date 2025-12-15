# Personal Site

Astro site for sammyteahan.com

[![forthebadge](/badges/approved-by-george-costanza.svg)](https://forthebadge.com)

#### 🏎 Setup

Install dependencies

```bash
pnpm i
```

Spin up local SST environment

```bash
pnpx sst dev
```

Cleanup of local resources (optional)

```bash
pnpx sst remove --stage sam
```

#### 🚀 Deployment

Deploy using the serverless flavor of Astro to AWS using SST

```bash
pnpx sst deploy --stage production
```

#### ☠️ Tear Down

If you'd like to remove a stage, it's pretty simple with SST. Note, that there is currently some protection in place for the production stage.

```bash
pnpx sst remove --stage production
```