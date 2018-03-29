# Odisee Gastcollege by IDA Mediafoundry

[ida-mediafoundry.be](https://www.ida-mediafoundry.io/)

## Development device setup

Deze workshop vereist een werkende git, node en terminal alsook google chrome
en de React Developer Tools plugin. Voor installatie instructies, ga naar de
relevante link.

*   [Windows](./docs/setup-windows.md)
*   [macOS](./docs/setup-macos.md)

## Editor setup

Je bent vrij om je favoriete editor te gebruiken. Zorg ervoor dat deze de
volgende plugins, ondersteuningen werken:

*   Javascript / React syntax highlighting
*   [Eslint](https://eslint.org) support
*   [Prettier](https://prettier.io) support

Heb je nog geen favoriete editor, of probeer je graag eens iets nieuw. Dan
raden we [VSCode](https://code.visualstudio.com/) aan. Deze lightweight, open
source editor heeft alles in huis om productief aan React.js projecten te
werken. [Hier](./docs/setup-vscode.md) vind je alles om deze te configuren voor
een optimale workflow in dit project.

## Project setup

### Maak een github user account aan en voeg een ssh key toe.

*   Ga naar [github.com](https://github.com)
*   Log in of maak een account aan.
*   Ga naar **Profiel (rechts boven)** en ga naar het tabblad **SSH en GPG keys**
*   Maak een ssh key aan volgens [deze instructies](https://help.github.com/articles/generating-an-ssh-key/)
*   Voeg deze key toe aan je profiel

### Clone de source

Open de **terminal (macOS)** of **git bash (windows)** en ga naar de map waar
je dit project wil opslaan. Voer dan het onderstaand commando uit.

```
git clone git@github.com:ida-mediafoundry/odisee-crypto.git
```

### Installeer de local node environment

In diezelfde command line voer het volgende commando uit:

```
yarn install --pure-lockfile
```

> Info: De `--pure-lockfile` flag zorgt ervoor dat `yarn` geen automatische
> upgrades uitvoert. Zo hebben we allen dezelfde local node environment.

### Start de app server op

De app server start je op via een npm script. Voer hiervoor het onderstaande
commando uit in je command line.

```
yarn run start
```

Een nieuw tabblad wordt ge-opend in Google Chrome. Thats's it :-)
