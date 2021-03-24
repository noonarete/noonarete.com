# noonarete.com

Content for the website noonarete.com

## Building

This site is generated with Hugo. To build and preview the site locally, run the
following command:

```shell
hugo server
```

## Deploying

This site is hosted with Firebase. A GitHub action is setup to deploy the site
when a PR is merged into the `main` branch. To perform a manual deploy, run the
following command:

```shell
hugo && firebase deploy
```
