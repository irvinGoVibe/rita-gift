import type { Options } from "canvas-confetti";

type ConfettiFn = (options?: Options) => Promise<undefined> | null;

let cached: ConfettiFn | null = null;

async function getConfetti(): Promise<ConfettiFn> {
  if (cached) return cached;
  const mod = (await import("canvas-confetti")) as unknown as {
    default: ConfettiFn;
  };
  cached = mod.default;
  return cached;
}

export async function fireConfetti() {
  const confetti = await getConfetti();
  const colors = ["#ff3b3b", "#ffd166", "#ffffff", "#ff7a00"];
  confetti({
    particleCount: 140,
    spread: 90,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.55 },
    colors,
    scalar: 0.9,
  });
  setTimeout(() => {
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.6 },
      colors,
    });
  }, 220);
}

export async function fireBurst() {
  const confetti = await getConfetti();
  confetti({
    particleCount: 60,
    spread: 70,
    startVelocity: 35,
    origin: { x: 0.5, y: 0.4 },
    colors: ["#ff3b3b", "#ffd166", "#ffffff"],
    scalar: 0.7,
  });
}
