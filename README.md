# Welcome to my personal website, chenguanhua.com!

Setup development dependencies locally:

Optional:

- To use the command `npm run test`:
  - `npx playwright install`
- To run GitHub action locally:
  - `brew install act`

Trigger CI check locally:
`act pull_request -r`

Trigger CD deployment locally:
`act push -j deploy --secret-file .env -r`
