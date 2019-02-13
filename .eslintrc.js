module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "prettier/prettier": [
            "error"
        ],
        "no console": 0
    },
    "plugins": [
        "prettier"
    ]
};