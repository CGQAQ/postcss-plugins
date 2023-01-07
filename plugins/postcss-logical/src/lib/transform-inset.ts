import type { Declaration } from 'postcss';
import { cloneDeclaration } from './clone-declaration';
import valueParser from 'postcss-value-parser';

export function transformInset(
): (declaration: Declaration) => boolean {
	return (declaration: Declaration) => {
		const valuesAST = valueParser(declaration.value);
		const values = valuesAST.nodes.filter((node) => node.type !== 'space');

		if (values.length > 4) {
			const error = `[postcss-logical] Invalid number of values for ${declaration.prop}. Found ${values.length} values, expected up to 4 values.`;
			throw new Error(error);
		}

		const newRules = {
			'top': '',
			'right': '',
			'bottom': '',
			'left': '',
		};

		if (values.length === 1) {
			newRules.top = valueParser.stringify(values[0]);
			newRules.right = valueParser.stringify(values[0]);
			newRules.bottom = valueParser.stringify(values[0]);
			newRules.left = valueParser.stringify(values[0]);
		}

		if (values.length === 2) {
			newRules.top = valueParser.stringify(values[0]);
			newRules.right = valueParser.stringify(values[1]);
			newRules.bottom = valueParser.stringify(values[0]);
			newRules.left = valueParser.stringify(values[1]);
		}

		if (values.length === 3) {
			newRules.top = valueParser.stringify(values[0]);
			newRules.right = valueParser.stringify(values[1]);
			newRules.left = valueParser.stringify(values[1]);
			newRules.bottom = valueParser.stringify(values[2]);
		}

		if (values.length === 4) {
			newRules.top = valueParser.stringify(values[0]);
			newRules.right = valueParser.stringify(values[1]);
			newRules.bottom = valueParser.stringify(values[2]);
			newRules.left = valueParser.stringify(values[3]);
		}

		Object.keys(newRules).forEach((side) => {
			cloneDeclaration(declaration, newRules[side], side);
		});

		return true;
	};
}