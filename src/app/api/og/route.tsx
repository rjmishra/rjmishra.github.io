import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Ranjan R";

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#0B0F1A",
          color: "#F1F5F9",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#14B8A6",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Ranjan R · AI & Decision Intelligence
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#94A3B8",
              fontSize: 30,
            }}
          >
            LLM systems, causal inference, and AI leadership
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #14B8A6",
            color: "#94A3B8",
            fontSize: 24,
            paddingTop: 24,
            width: "100%",
          }}
        >
          ranjan.dev/blog
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
