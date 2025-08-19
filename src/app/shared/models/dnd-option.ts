import { StringRecord } from './utility'

export interface DndOption<T = string> {
  checked?: boolean
  command?: (event: any) => void
  disabled?: boolean
  hint?: string
  href?: string
  target?: '_self' | '_blank'
  icon?: string
  label: string
  route?: string[]
  style?: StringRecord<string>
  suffix?: string
  value: T
}
