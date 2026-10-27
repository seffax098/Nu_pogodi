type AudioContextCtor = new () => AudioContext;

export function createAudioContext(): AudioContext | null {
  const Ctor: AudioContextCtor | undefined = window.AudioContext ?? (window as any).webkitAudioContext;

  return Ctor ? new Ctor() : null;
}
