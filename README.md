
# kengoldfarb/lint
A sensible ESLint configuration for Typescript and (optionally) React


## How To

### Usage
---


### Setup a local Development Environment
---
Get your local system

```shell
# Install packages
$ npm i

# Run the Lerna bootstrap command to link local packages together
$ npx lerna bootstrap


# yarn link to create a global symlink for each package
$ cd packages/eslint-config-kengoldfarb
$ npm link

# yarn link to create a global symlink for each package
$ cd packages/eslint-plugin-kengoldfarb
$ npm link

```

### Link to local repos

```shell
$ cd path/to/other-repo
$ npm link eslint-config-kengoldfarb
$ npm link eslint-plugin-kengoldfarb
```

### Unlink to local repos

```shell
$ cd path/to/other-repo
$ npm unlink eslint-config-kengoldfarb
$ npm unlink eslint-plugin-kengoldfarb
```

### Unlink package locally
```shell
$ cd packages/eslint-config-kengoldfarb
$ npm unlink

$ cd packages/eslint-plugin-kengoldfarb
$ npm unlink
```

---
#### Credit
Based on [spruce-lint-workspace](https://github.com/sprucelabsai/spruce-lint-workspace)
