import { GAME_OVER_DELAY_MS, MELODIES, SOUND_VOLUME, STEP_TONE_MS, STEP_TONES } from 'config/sound';
import type { GameEvent } from 'types/game';
import type { Note } from 'types/sound';

import { createAudioContext } from './createAudioContext';

export class PiezoSound {
  private ctx: AudioContext | null = null;

  muted = false;

  volume = SOUND_VOLUME;

  unlock() {
    this.ctx ??= createAudioContext();
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume().catch(() => undefined);
    }
  }

  play(event: GameEvent) {
    switch (event.type) {
      case 'step':
        this.tone(STEP_TONES[event.chute], STEP_TONE_MS);
        break;
      case 'gameOver':
        this.melody(MELODIES.gameOver, GAME_OVER_DELAY_MS);
        break;
      default:
        this.melody(MELODIES[event.type]);
        break;
    }
  }

  playStart() {
    this.melody(MELODIES.start);
  }

  private melody(notes: Note[], delayMs = 0) {
    let offset = delayMs;
    notes.forEach(([frequency, duration]) => {
      if (frequency > 0) {
        this.tone(frequency, duration, offset);
      }
      offset += duration;
    });
  }

  private tone(frequency: number, durationMs: number, delayMs = 0) {
    if (this.muted || !this.ctx || this.ctx.state !== 'running') {
      return;
    }

    const { ctx } = this;
    const start = ctx.currentTime + delayMs / 1000;
    const end = start + durationMs / 1000;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(this.volume, start + 0.004);
    gain.gain.setValueAtTime(this.volume, Math.max(start + 0.004, end - 0.01));
    gain.gain.linearRampToValueAtTime(0, end);

    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(end + 0.02);
  }
}
