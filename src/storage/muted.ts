import { readStorage, writeStorage } from 'utils/storage';

const MUTED_KEY = 'nu-pogodi:muted';

export const loadMuted = () => readStorage(MUTED_KEY) === '1';

export const saveMuted = (muted: boolean) => writeStorage(MUTED_KEY, muted ? '1' : '0');
