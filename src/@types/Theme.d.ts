import "styled-components";
import { Theme } from "@/Styles/Theme";

type Theme = typeof Theme;

declare module "styled-components" {
  export interface DeafaultTheme extends Theme {}
}
