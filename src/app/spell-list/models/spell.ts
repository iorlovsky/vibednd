import { DndTranslatable } from '@core/models'

export interface Spell {
  name: DndTranslatable;
  level?: string | number;
  text: DndTranslatable;
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

