import argon2 from "argon2";

async function argonHasher(text: string) {
  return await argon2.hash(text);
}

async function argonVerifier(text: string, hash: string) {
  return await argon2.verify(hash, text);
}

export {
  argonHasher,
  argonVerifier,
};
