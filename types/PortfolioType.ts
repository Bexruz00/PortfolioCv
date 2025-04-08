import { ReactNode } from "react";

export interface PortfolioNavListType {
  id: number,
  image: ReactNode | null,
  title: string | null,
  path: string
} 