# Writing Documentation

This project uses VitePress for documentation writing, with the documents stored in the `/docs` path of the project repository.

## Compiling the Documentation Project

### Installing Yarn
```
npm install -g yarn
```
### Installing VitePress
```
yarn add --dev vitepress
```
### Starting the Project
```
yarn dev
```

### Common Issues

#### The installation of VitePress prompts a Node version error, how to switch Node versions

Visit the [GitHub](https://github.com/coreybutler/nvm-windows) page for nvm-windows.
Download and install nvm-windows.
After installation, open the command line (such as PowerShell or CMD).
View all available Node.js versions:
```
nvm list available
```
Install the Node.js version you want, for example:
```
nvm install 18.18.0
```
Use the version you just installed:
```
nvm use 18.18.0
```
Verify if the switch to the new version was successful:
```
node -v
```