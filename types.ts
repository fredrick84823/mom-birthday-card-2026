export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface SectionProps {
  id?: string;
}

export enum SectionType {
  PROLOGUE = 'PROLOGUE',
  SISTER = 'SISTER',
  FATHER = 'FATHER',
  COUPLE = 'COUPLE',
  FINALE = 'FINALE',
}
