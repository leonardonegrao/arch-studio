# Tooling
---
Várias ferramentas foram utilizadas para garantir padrões de código e de versionamento no projeto.

**TL;DR**: As ferramentas utilizadas foram:
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
O padrão de código é garantido pelo **ESLint**, junto de plugins extendidos e regras personalizadas. A configuração completa pode ser encontrada em `.eslintrc`.

- **"eslint"**: Ferramenta principal de linting

  - **"eslint-config-next"**: Configuração base do Next.js, não utilizada porque é extendido o plugin (para evitar conflito de outros plugins)
  
  - **"@next/eslint-plugin-next"**: O plugin com regras específicas para projetos com Next.js

    - **"plugin:react/recommended"**: Acessível via plugin do Next.js

    - **"plugin:react-hooks/recommended"**: Acessível via plugin do Next.js

    - **"plugin:jsx-a11y/recommended"**: Acessível via plugin do Next.js

  - **"eslint-plugin-import-helpers"**: Plugin para regras de `import`, como ordenação.
  - **"@typescript-eslint/parser"**: Parser necessário para usar o plugin de `import-helpers` com o TypeScript
  
- **Editor Config**: Usado pelo arquivo `.editorconfig`, garante que o editor de texto mantenha compatibilidade com os padrões do projeto.

Para criar essa configuração do zero, é preciso primeiro rodar o comando:

```bash
yarn add -D eslint eslint-config-next @next/eslint-plugin-next
# npm install --save-dev eslint eslint-config-next @next/eslint-plugin-next
```

Depois disso, é necessário rodar `yarn lint` para criar o arquivo de configuração pelo próprio script fornecido pelo Next.

As configurações adicionais, são:

- Adicionar os ambientes de desenvolvimento. No caso do Next.js, as APIs do browser, do React e do Node são todas acessíveis.

```json
"env": {
  "browser": true,
  "es2021": true,
  "node": true
},
```

- Para alterar as regras de plugins que a própria configuração do Next.js importa, a documentação recomenda extendê-los, como também extender o `"plugin:@next/next/recommended"`. Assim, o plugin é da configuração é usado no lugar da própria configuração. Segundo a documentação, isso é feito para não gerar conflitos.

```json
"extends": [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:@next/next/recommended"
],
```

- Nos plugins, o `eslint-plugin-import-helpers` é usado para ajudar a organizar os imports.

```json
"plugins": [
  "eslint-plugin-import-helpers"
],
```

- O parser ajuda o `eslint-plugin-import-helpers` a trabalhar com o TypeScript.

```json
"parser": "@typescript-eslint/parser",
```

### Regras
---
As seguintes regras foram incluídas no projeto:

- **"react/react-in-jsx-scope"**: Desligada, já que por padrão o Next.js não exige a importação do React.

```json
"react/react-in-jsx-scope": "off",
```

- **"jsx-quotes"**: Definido como aspas duplas para seguir o padrão comum com HTML.

```json
"jsx-quotes": [
  "error",
  "prefer-double"
],
```

- **"indent"**: Definido como 2 espaços, para seguir o padrão também definido no `.editorconfig`.

```json
"indent": [
  "error",
  2
],
```

- **"no-console"**: Consoles de erro e alerta são permitidos para identificar erros, e outros são `warns` para que seja possível usar como ferramenta de debug.

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

- **"semi"**: Exige `;` sempre que possível.

```json
"semi": [
  "error",
  "always"
],
```

- **"quotes"**: As aspas definidas são as simples (`'`) para strings.

```json
"quotes": [
  "error",
  "single"
],
```

- **"import-helpers/order-imports"**: Essa regra define a estrutura de importações. Os grupos definem como serão agrupadas as importações, dependendo do seu caminho.

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

- **"no-undef"**: Desabilitada pois o TypeScript possui sua própria verificação.

```json
"no-undef": "off"
```

## Husky, Commitlint e Commitizen
---

Para configuração de commits, foi usado o Husky para usar o conceito de _hooks_, com ele é possível capturar eventos do projeto como `pre-push` e `commit`.

Nesses cenários, o Husky pode executar comandos. Os comandos aqui servem para garantir a integridade do projeto, e do seu versionamento.

### Husky
---

O primeiro passo é instalar o Husky:

```bash
yarn add --dev husky
# npm install --save-dev husky
```

Com isso feito, e o processo de _linting_ já configurado, é possível adicionar um _hook_ para o cenário `pre-push` (antes de executar um `git push`). É necessário adicionar o seguinte conteúdo no `package.json`:

```json
// package.json

"husky": {
  "pre-push": "yarn lint"
},
```

O que significa que quando o _hook_ de `pre-push` for acionado, será executado `yarn lint`, para garantir que não está sendo subido nenhum código com problemas de _linting_.

### Padrão de commit
---

O padrão de commit é configurado usando várias ferramentas, sendo elas:

- Husky
- Commitlint
- Commitizen
- Padrão Conventional Commits

É necessário ter o Commitizen instalado globalmente na máquina:

```bash
npm install -g commitizen
```

O Commitizen espera que o repositório defina seu padrão de commit, permitidindo flexibilidade. Para configurar o padrão Conventional Commits, é preciso rodar:

```bash
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Uma vez isso feito, uma configuração adicional será criada no `package.json`.

Para facilitar o fluxo de desenvolvimento, é indicado criar um `script`:

```json
"commit": "cz"
```

Por fim, é necessário configurar o _linting_ dos commits. É preciso instalar os pacotes `@commitlint/cli` e `@commitlint/config-conventional`:

```bash
yarn add --dev @commitlint/cli @commitlint/config-conventional
# npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

O comando abaixo cria um arquivo de configuração:

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

E com o lado do Commitlint configurado, é necessário apenas configurar o _hook_ no Husky:

```bash
"husky": {
  "pre-push": "yarn lint",
  "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" # linha adicionada
},
```













