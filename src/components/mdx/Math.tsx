import katex from "katex";
import "katex/dist/katex.min.css";

interface MathProps {
  math?: string;
  children?: string | string[];
  block?: boolean;
}

export default function Math({ math, children, block = false }: MathProps) {
  let mathString = math || "";
  if (!mathString && children) {
    if (typeof children === "string") {
      mathString = children;
    } else if (Array.isArray(children)) {
      mathString = children.join("");
    }
  }

  mathString = mathString.trim();
  if (mathString.startsWith("$$") && mathString.endsWith("$$")) {
    mathString = mathString.slice(2, -2);
    block = true;
  } else if (mathString.startsWith("$") && mathString.endsWith("$")) {
    mathString = mathString.slice(1, -1);
  }

  const html = katex.renderToString(mathString, {
    displayMode: block,
    throwOnError: false,
  });

  if (block) {
    return (
      <div
        className="my-4 overflow-x-auto py-2 text-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className="inline-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
