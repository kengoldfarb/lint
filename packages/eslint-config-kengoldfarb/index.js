module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'prettier'
	],
	plugins: [
		'@typescript-eslint',
		'prettier',
		'kengoldfarb',
		'import',
		'react',
		'react-hooks'
	],
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	},
	settings: {
		react: {
			version: '>=18.0.0'
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				semi: false,
				trailingComma: 'none',
				arrowParens: 'avoid'
			}
		],
		camelcase: ['error', { allow: ['^__webpack'] }],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'.*.js',
					'release.config.js',
					'**/*.test.js',
					'**/*.test.ts'
				]
			}
		],
		semi: 0,
		indent: 0,
		quotes: 0,
		'no-tabs': 0,
		'comma-dangle': ['error', 'never'],
		'jsx-a11y/control-has-associated-label': 0,
		'class-methods-use-this': 0,
		'quote-props': ['error', 'as-needed'],
		'capitalized-comments': [
			'error',
			'always',
			{
				line: {
					ignorePattern: '.*'
				},
				block: {
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true
				}
			}
		],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				'newlines-between': 'never',
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'index',
					'sibling',
					'unknown'
				],
				pathGroups: [],
				pathGroupsExcludedImportTypes: ['builtin']
			}
		],
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'object-shorthand': ['error', 'always'],
		'kengoldfarb/prefer-pascal-case-enums': 'error',
		'no-plusplus': 0,
		'react/require-default-props': 0,
		'react/prop-types': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
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
		'@typescript-eslint/explicit-member-accessibility': ['error'],
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/indent': 0,

		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variableLike',
				format: ['PascalCase', 'UPPER_CASE', 'camelCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'variable',
				types: ['boolean'],
				format: ['PascalCase'],
				leadingUnderscore: 'allow',
				prefix: [
					'is',
					'should',
					'has',
					'can',
					'did',
					'will',
					'was',
					'as',
					'does',
					'are',
					'loading'
				]
			}
		],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-var-requires': 0,
		'import/prefer-default-export': 0,
		'no-console': ['error']
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-var-requires': 'error',
				'import/extensions': 0,
				camelcase: 0
			}
		}
	]
}
