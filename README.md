## Breakpoints

### sm: 375px

Padrão nos arquivos de estilo, não devem ser declarados via media query.

Para dispositivos móveis, menores do que `375px`.

### md: 660px

Para dispositivos móveis com telas grandes, maiores que `660px`, como tablets. Deve ser declarado nos arquivos de estilo como media query.

### lg: 1200px

Para dispositivos com telas grandes, de notebooks à monitores ultrawide. Deve ser definido com media query.

## API Reference

## Tooling

- "eslint": Ferramenta principal de linting
  - "eslint-config-next": Configuração base do Next.js, não utilizada porque é extendido o plugin (para evitar conflito de outros plugins)
  - "@next/eslint-plugin-next": O plugin com regras específicas para projetos com Next.js
    - "plugin:react/recommended": Acessível via plugin do Next.js
    - "plugin:react-hooks/recommended": Acessível via plugin do Next.js
    - "plugin:jsx-a11y/recommended": Acessível via plugin do Next.js

  - "eslint-plugin-import-helpers": Plugin para regras de `import`, como ordenação.
  - "@typescript-eslint/parser": Parser necessário para usar o plugin de `import-helpers`
- Editor Config: Usado pelo arquivo `.editorconfig`, garante que o editor de texto mantenha compatibilidade com os padrões do projeto.
