import type { MDXComponents } from "mdx/types";
import Math from "@/components/mdx/Math";

const components: MDXComponents = {
  Math,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
