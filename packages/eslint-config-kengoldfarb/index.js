module.exports = {
	extends: [
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint'
	],
	plugins: ['@typescript-eslint', 'prettier', 'kengoldfarb'],
	parserOptions: {
		project: './tsconfig.json'
	},
	parser: '@typescript-eslint/parser',
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				semi: false,
				trailingComma: 'none'
			}
		],
		camelcase: ['error', { allow: ['^__webpack'] }],
		'no-tabs': 0,
		'comma-dangle': ['error', 'never'],
		'jsx-a11y/control-has-associated-label': 0,
		'class-methods-use-this': 0,
		quotes: ['error', 'single'],
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
		'object-shorthand': ['error', 'always']
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'kengoldfarb/prefer-pascal-case-enums': 'error',
				'@typescript-eslint/explicit-module-boundary-types': ['error'],
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

				// Defer to prettier
				semi: 0,
				'@typescript-eslint/semi': ['error', 'never'],
				indent: 0,
				'@typescript-eslint/indent': 0,

				'@typescript-eslint/naming-convention': [
					'error',
					{ selector: 'variableLike', format: ['camelCase'] },
					{
						selector: 'variable',
						types: ['boolean'],
						format: ['PascalCase'],
						prefix: ['is', 'should', 'has', 'can', 'did', 'will']
					}
				],
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_' }
				],
				'@typescript-eslint/ban-ts-comment': 0
			}
		}
	]
}
