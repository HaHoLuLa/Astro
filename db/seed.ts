import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{ name: "하호룰라", password: "1234" },
		{ name: "이주현", password: "2652"}
	])
}
