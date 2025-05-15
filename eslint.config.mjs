// @ts-check
import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        files: ['**/*.{js,ts,vue}'],
        plugins: { '@stylistic': stylistic },
        rules: {
            // Regras personalizadas de estilo
            'semi': ['error', 'never'],
            'indent': ['error', 2],
            'comma-dangle': ['error', 'never'],
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/template-curly-spacing': ['error', 'always'],
            'vue/html-indent': ['error', 2],
            // Regras de arrow functions
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            'arrow-body-style': ['error', 'as-needed'],
            // Espaçamento em objetos e arrays
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            // Espaçamento em funções e parâmetros
            '@stylistic/space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/space-in-parens': ['error', 'never'],
            // Quebras de linha
            '@stylistic/operator-linebreak': ['error', 'before'],
            '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
            // Outras regras comuns
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/space-infix-ops': 'error',
            // Regras do Vue
            'vue/multi-word-component-names': ['error', {
                ignores: ['Index', 'Error'],
            }],
            'vue/no-multiple-template-root': 'error',
            'vue/no-v-html': 'error',
            'vue/require-default-prop': 'error',
            'vue/require-prop-types': 'error',
            'vue/valid-v-bind': 'error',
            'vue/valid-v-else-if': 'error',
            'vue/valid-v-else': 'error',
            'vue/valid-v-for': 'error',
            'vue/valid-v-if': 'error',
            'vue/valid-v-model': 'error',
            'vue/valid-v-on': 'error',
            'vue/valid-v-show': 'error',
            'vue/valid-v-slot': 'error',
            // Regras adicionais do Vue
            'vue/attributes-order': ['error', {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
            }],
            'vue/block-order': ['error', {
                order: ['template', 'script', 'style'],
            }],
            'vue/component-definition-name-casing': ['error', 'PascalCase'],
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/html-closing-bracket-newline': ['error', {
                singleline: 'never',
                multiline: 'always',
            }],
            'vue/html-closing-bracket-spacing': ['error', {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            }],
            'vue/html-self-closing': ['error', {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
            }],
            'vue/max-attributes-per-line': ['error', {
                singleline: 3,
                multiline: 1,
            }],
            'vue/no-mutating-props': 'error',
            'vue/require-valid-default-prop': 'error',
            'vue/return-in-computed-property': 'error',
            'vue/script-indent': ['error', 2],
            'vue/this-in-template': 'error',
            // Regras de TypeScript
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/prefer-as-const': 'error',
            '@typescript-eslint/unified-signatures': 'error',
            // Regras gerais
            'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
            'no-unused-vars': 'off', // Desativada em favor da regra do TypeScript
            'prefer-const': 'error',
            'no-var': 'error',
            'eqeqeq': ['error', 'always'],
            // Regras adicionais
            'camelcase': ['error', { properties: 'never' }],
            'comma-spacing': ['error', { before: false, after: true }],
            'computed-property-spacing': ['error', 'never'],
            'curly': ['error', 'all'],
            'dot-notation': 'error',
            'eol-last': ['error', 'always'],
            'func-call-spacing': ['error', 'never'],
            'generator-star-spacing': ['error', { before: true, after: false }],
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'new-cap': ['error', { newIsCap: true, capIsNew: false }],
            'new-parens': 'error',
            'no-mixed-operators': 'error',
            'no-multi-spaces': 'error',
            'no-whitespace-before-property': 'error',
            'one-var': ['error', 'never'],
            'padded-blocks': ['error', 'never'],
            'quote-props': ['error', 'as-needed'],
            'semi-spacing': ['error', { before: false, after: true }],
            'space-unary-ops': ['error', { words: true, nonwords: false }],
            'spaced-comment': ['error', 'always'],
            'yield-star-spacing': ['error', { before: true, after: false }],
        },
    },
)
