module.exports = {
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    plugins: ["react", "@typescript-eslint", "jest"],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            parserOptions: {
                project: "./tsconfig.eslint.json",
            },
        },
    ],
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
