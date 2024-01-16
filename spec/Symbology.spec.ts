import { describe, expect, it } from 'bun:test';

import { Symbology } from '../src';

describe('Scryfall', () => {
	describe('Symbology', () => {
		it('all', async () => {
			const symbology = await Symbology.all();
			expect(symbology.length).toBeGreaterThanOrEqual(63);
		});

		it('parse mana cost', async () => {
			const cost = await Symbology.parseMana('2ww');
			expect(cost?.cost).toBe('{2}{W}{W}');
		});
	});
});
