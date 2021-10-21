// module.exports = {
// 	root: true,
// 	env: {
// 		node: true,
// 	},
// 	plugins: [
// 		'varspacing',
// 	],
// 	extends: [
// 		'@vue/standard',
// 		'plugin:vue/essential',
// 		'plugin:varspacing/recommended',
// 	],
// 	parserOptions: {
// 		ecmaVersion: 2020,
// 	},
// 	rules: {
// 		'no-console': 'production' === process.env.NODE_ENV ? 'warn' : 'off',
// 		'no-debugger': 'production' === process.env.NODE_ENV ? 'warn' : 'off',
// 		semi: 'off',
// 		indent: ['warn', 4, { VariableDeclarator: 'first' }],
// 		'varspacing/var-spacing': ['warn'],
// 		'comma-dangle': ['warn', 'always-multiline'],
// 		'object-curly-spacing': ['warn', 'always'],
// 		'template-curly-spacing': ['warn', 'always'],
// 		'space-before-function-paren': [
// 			'warn',
// 			{
// 				anonymous: 'always',
// 				named: 'never',
// 				asyncArrow: 'always',
// 			},
// 		],
// 		'no-trailing-spaces': ['warn'],
// 		'no-multiple-empty-lines': ['warn'],
// 		'spaced-comment': ['warn'],
// 		'no-multi-spaces': [
// 			'off',
// 			{
// 				exceptions: {
// 					VariableDeclarator: true,
// 					ImportDeclaration: true,
// 				},
// 			},
// 		],
// 		quotes: ['warn', 'single', { allowTemplateLiterals: true }],
// 		yoda: ['warn', 'always', { onlyEquality: true, exceptRange: true }],
// 		'no-unused-vars': ['warn'],
// 		'vue/no-parsing-error': ['warn'],
// 		'operator-linebreak': ['warn', 'before'],
// 	},
// };
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: 'off',
        "indent": ["error", 4],
    },
}