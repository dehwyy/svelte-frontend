import { describe, it, expect } from 'vitest';
import {get} from "svelte/store"
import {blocks as blocksStore} from "./routes/frontend/store"

describe("stores", () => {
	it("frontend store", () => {
		const grades = get(blocksStore)
		expect(grades).toHaveLength(3)
		expect(grades[0].status).toBeTruthy()
		expect(grades[0].techs.length).toBeGreaterThanOrEqual(1)
	})
});
