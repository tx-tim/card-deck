module.exports = {
    extends: ['prettier'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        jquery: true,
        jest: true,
        es6: true,
    },
    rules: {
        'consistent-return': 0,
    },
    plugins: ['html', 'prettier'],
};
