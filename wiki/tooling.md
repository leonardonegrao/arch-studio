# Tooling
---
Several tools were used to guarantee code style and versioning patterns on this project.

**TL;DR**: The used tools were:
- [ESLint](https://github.com/eslint/eslint)
  - [eslint-config-next](https://github.com/vercel/next.js)
  - [@next/eslint-plugin-next](https://github.com/vercel/next.js)
  - [eslint-react-plugin](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-react-hooks-plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [eslint-a11y-jsx-plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)
  - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitizen](https://github.com/commitizen/cz-cli)

## ESLint
---
The code style pattern is guaranteed by **ESLint**, together with several extended plugins and personalized rules. The complete configuration can be found in the `.eslintrc` file.

- **"eslint"**: Main linting tool;
  - **"eslint-config-next"**: Next.js base config, it's not being used because it's extended by the plugin (to avoid conflicts related to other plugins);

  - **"@next/eslint-plugin-next"**: The plugin with the specific rules for Next.js projects;

    - **"plugin:react/recommended"**: Accessible via the Next.js plugin;

    - **"plugin:react-hooks/recommended"**: Accessible via the Next.js plugin;

    - **"plugin:jsx-a11y/recommended"**: Accessible via the Next.js plugin;

  - **"eslint-plugin-import-helpers"**: Plugin with `import` rules, like order of imports;

  - **"@typescript-eslint/parser"**: Necessary parser to use the `import-helpers` plugin alongside TypeScript;

- **Editor Config**: Used by the `.editorconfig` file, guarantees that the text editor in which the project is open mantains compatibility with the code style patterns.

To create these settings, first it's required to run:

```bash
yarn add -D eslint eslint-config-next @next/eslint-plugin-next
# npm install --save-dev eslint eslint-config-next @next/eslint-plugin-next
```

After that, it's needed to run `yarn lint` to create the configuration file using Next's own script.

The additional configurations are:

- Add the development environments. In Next's case, the APIs from the browsers, React and Node are all accessible.

```json
"env": {
  "browser": true,
  "es2021": true,
  "node": true
},
```

- To change the rules from plugins that Next's very own package uses, the docs recommend to extend them, as well as extend the `"plugin:@next/next/recommended"`. Doing so, the plugin is used insted of the default package. As explained in the docs, this is done to avoid conflicts.

```json
"extends": [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:@next/next/recommended"
],
```

- In the `plugins`, the `eslint-plugin-import-helpers` is used to help organize the imports.

```json
"plugins": [
  "eslint-plugin-import-helpers"
],
```

- The parser helps `eslint-plugin-import-helpers` to work with TypeScript.

```json
"parser": "@typescript-eslint/parser",
```

### Rules
---
The following rules were included for this project:

- **"react/react-in-jsx-scope"**: Off, following how Next works by default.

```json
"react/react-in-jsx-scope": "off",
```

- **"jsx-quotes"**: Defined to require double quotes to follow the HTML common use.

```json
"jsx-quotes": [
  "error",
  "prefer-double"
],
```

- **"indent"**: Defined as 2 spaces, following the standard that was also defined in `.editorconfig`.

```json
"indent": [
  "error",
  2
],
```

- **"no-console"**: Error and warning logs are allowed, to identify errors and other `warns`. Doing so facilitate the debbuging process while on development.

```json
"no-console": [
  "warn",
  {
    "allow": [
      "warn",
      "error"
    ]
  }
],
```

- **"semi"**: Requires `;` as much as possible.

```json
"semi": [
  "error",
  "always"
],
```

- **"quotes"**: The single quotes (`'`) are defined to encapsulate strings.

```json
"quotes": [
  "error",
  "single"
],
```

- **"import-helpers/order-imports"**: This rule defines the imports structure. The groups define how the imports are going to be grouped, depending on the relative path or absolute path.

```json
"import-helpers/order-imports": [
  "warn",
  {
    "newlinesBetween": "always",
    "groups": [
      "module",
      [
        "parent",
        "sibling",
        "index"
      ],
      "/^@components/",
      "/^@utils/",
      "/^@theme/",
      "/^@public/"
    ],
    "alphabetize": {
      "order": "asc",
      "ignoreCase": true
    }
  }
],
```

- **"no-undef"**: Disabled because TypeScript has this behavior already.

```json
"no-undef": "off"
```

## Husky, Commitlint and Commitizen
---

Husky is used to lint commits. With Husky it's possible to take advantage of the _hooks_ concept and capture events such as `push` and `commit`.

In these scenarios, Husky can execute commands. The purpose of the commands being used here is to ensure the project's intregrity and the integrity of its versioning.

### Husky
---

The first step is to install Husky:

```bash
yarn add --dev husky
# npm install --save-dev husky
```

With that done, and the process of _linting_ correctly configured, it's possible to add a _hook_ to the `pre-push` event (before the execution of a `git push`). It is necessary to add the following code on `package.json`:

```json
// package.json

"husky": {
  "pre-push": "yarn lint"
},
```

That means that when the `pre-push` _hook_ be triggered, `yarn lint` will be executed to ensure that no code that's not following the linting rules is being pushed.

### Commit pattern
---

The commit pattern is configured using a couple of tools:

- Husky
- Commitlint
- Commitizen
- Conventional Commits pattern

It's required to have Commitizen installed globally on the machine:

```bash
npm install -g commitizen
```

Commitizen expects the repository to define its own commit pattern, that allows flexibility between projects. To setup the Conventional Commits pattern, it's needed to run:

```bash
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Once that's done, an additional property will be created inside the `package.json` file.

To facilitate the development flow, it's indicated to create a `script`:

```json
"commit": "cz"
```

Finally, it's time to setup the linting of the commits, with the installation of the packages `@commitlint/cli` and `@commitlint/config-conventional`:

```bash
yarn add --dev @commitlint/cli @commitlint/config-conventional
# npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

The following command creates an configuration file:

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

And with Commitlint setup, the only thing left is to configure the hook from Husky:

```json
"husky": {
  "pre-push": "yarn lint",
  "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" # new line
},
```













