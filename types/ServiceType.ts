import { ReactNode } from "react";

export interface ServiceNavListType {
  id: number,
  icon: ReactNode | null,
  title: string | null,
  path: string
} 