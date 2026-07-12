# Deployment note

The repository includes an automatic GitHub Pages workflow at:

`.github/workflows/deploy-pages.yml`

The workflow listens to every push, but deploys only when the push targets the repository's current default branch. It can also be started manually from the Actions tab.

GitHub Pages must use **GitHub Actions** as its publishing source. Repository Actions must also be enabled.
