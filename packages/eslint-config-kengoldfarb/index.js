// const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/dist/configs/recommended')
// const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint')
// const importRules = require('eslint-plugin-import/config/errors')

// const defaultFormattingRules = {
// 	curly: 'error',
// 	'kengoldfarb/prefer-pascal-case-enums': 'error',
// 	'comma-dangle': ['error', 'never'],
// 	'react/jsx-no-undef': 'error',
// 	'no-console': 'off',
// 	'no-undef': 'error',
// 	'no-var': 'error',
// 	'no-unreachable': 'error',
// 	'no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
// 	'@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
// 	'object-shorthand': ['error', 'always'],
// 	'react/prop-types': 'off',
// 	'prettier/prettier': [
// 		'error',
// 		{
// 			singleQuote: true,
// 			useTabs: true,
// 			semi: false
// 		}
// 	],
// 	"capitalized-comments": [
// 		"error",
// 		"always",
// 		{
// 			"line": {
// 				"ignorePattern": ".*",
// 			},
// 			"block": {
// 				"ignoreInlineComments": true,
// 				"ignoreConsecutiveComments": true
// 			}
// 		}
// 	],
// 	'import/order': ['error', {
// 		"alphabetize": {
// 			"order": "asc",
// 			"caseInsensitive": true
// 		},
// 		"newlines-between": "never",
// 		"groups": [ "builtin", "external", "internal", "parent", "index", "sibling", "unknown" ],
// 		"pathGroups": [],
// 		"pathGroupsExcludedImportTypes": ["builtin"]
// 	}]
// }

// module.exports = {
// 	overrides: [
// 		{
// 			files: ['*.ts', '*.tsx'],
// 			parser: '@typescript-eslint/parser',
// 			plugins: ['@typescript-eslint'],
// 			rules: {
// 				...typescriptEslintRecommended.rules,
// 				...typescriptEslintPrettier.rules,
// 				'@typescript-eslint/camelcase': [
// 					'error',
// 					{ allow: ['^(can_|skill_can_)'] }
// 				],
// 				'@typescript-eslint/no-empty-interface': 0,
// 				'@typescript-eslint/ban-ts-ignore': 0,
// 				'@typescript-eslint/no-empty-function': 0,
// 				'@typescript-eslint/explicit-function-return-type': 0,
// 				'@typescript-eslint/interface-name-prefix': [2, 'always'],
// 				'@typescript-eslint/no-explicit-any': 0,
// 				'@typescript-eslint/member-delimiter-style': [
// 					'error',
// 					{
// 						multiline: {
// 							delimiter: 'none',
// 							requireLast: false
// 						},
// 						singleline: {
// 							delimiter: 'semi',
// 							requireLast: false
// 						}
// 					}
// 				],
// 				"@typescript-eslint/explicit-member-accessibility": ["error"],
// 				...defaultFormattingRules
// 			}
// 		},
// 		{
// 			files: ['*.js'],
// 			plugins: ['@typescript-eslint'],
// 			rules: Object.assign(importRules.rules)
// 		}
// 	],
// 	extends: [
// 		'plugin:react/recommended',
// 		'eslint:recommended',
// 		'prettier'
// 	],
// 	plugins: ['kengoldfarb', 'import', 'react', 'prettier'],
// 	rules: {
// 		...defaultFormattingRules
// 	},
// 	parserOptions: {
// 		sourceType: 'module',
// 		ecmaVersion: 2018,
// 		ecmaFeatures: {
// 			jsx: true
// 		},
// 		project: './tsconfig.json'
// 	},
// 	env: {
// 		jest: true,
// 		node: true,
// 		es6: true
// 	},
// 	globals: {
// 		log: true,
// 		window: true,
// 		document: true,
// 		navigator: true,
// 		FileReader: true
// 	},
// 	settings: {
// 		flowtype: {},
// 		react: {
// 			version: '16.6',
// 			flowVersion: '0.87'
// 		},
// 		'import/resolver': {
// 			node: {
// 				extensions: ['.js', '.jsx', '.ts', '.tsx']
// 			}
// 		}
// 	}
// }


module.exports = {
	extends: [
		"airbnb-typescript",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
	  ],
	  plugins: [
		"@typescript-eslint",
		"kengoldfarb"
	  ],
	parserOptions: {
	  	project: './tsconfig.json',
	},
	parser: '@typescript-eslint/parser',
	rules: {
		'kengoldfarb/prefer-pascal-case-enums': 'error',
		'@typescript-eslint/camelcase': [
			'error',
			{ allow: ['^(can_|skill_can_)'] }
		],
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/interface-name-prefix': [2, 'always'],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
					requireLast: false
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		"@typescript-eslint/explicit-member-accessibility": ["error"],
		"semi": 0,
		"@typescript-eslint/semi": ["error", "never"],
		"@typescript-eslint/indent": ["error", "tab"],
		"indent": 0,
		"no-tabs": 0,
		'comma-dangle': ['error', 'never'],
		'jsx-a11y/control-has-associated-label': 0,
		'class-methods-use-this': 0
	}
};