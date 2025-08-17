export interface Spell {
  name: string;
  level?: string | number;
  text: string;
  school?: string;
  castingTime: string;
  range: string;
  materials?: string;
  components?: string;
  duration: string;
  source?: string;
  nic?: unknown;
  ritual?: unknown;
  needHelp?: unknown;
}

export interface SpellLocalized {
  en: Spell;
  ru: Spell;
}

