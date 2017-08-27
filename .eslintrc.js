module.exports = {

    "plugins": [
        "react",
        "react-native"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "spread": true,
            "restParams": true,
            "jsx": true
        }
    },
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "semi": [2, "always"]
    }

};