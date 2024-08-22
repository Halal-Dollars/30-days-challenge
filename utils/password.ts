import bcrypt from "bcrypt";

async function hasher(text: string) {
  return await bcrypt.hash(text, 10);
}

async function verifier(text: string, hash: string) {
  return await bcrypt.compare(text, hash);
}

export {
  hasher,
  verifier,
};
