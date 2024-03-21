/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        indent: ['warn', 4],
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 0,
                switchCase: 0,
                ignores: []
            }
        ],
        'vue/html-indent': ['warn', 4],
        "vue/multi-word-component-names": "off",
        'vue/max-attributes-per-line': [
            'warn',
            {
                singleline: 3,
                multiline: 1
            }
        ],
    }
}
