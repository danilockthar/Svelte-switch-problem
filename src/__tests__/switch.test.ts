/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import page from '../routes/+page.svelte';
import { render } from '@testing-library/svelte';

describe('It should show the indicated text in screen', () => {
	test('Text: Enciende una bombilla a la vez', () => {
		const { getByText } = render(page);
		expect(getByText('Enciende una bombilla a la vez')).toBeInTheDocument();
	});
});
