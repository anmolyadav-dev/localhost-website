import { ImageResponse } from "next/og";

export const alt = "Localhost Assignments - Coding Challenges";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: "bold",
            margin: 0,
            marginBottom: 20,
          }}
        >
          <span style={{ color: "#4dffdb" }}>Assignments</span>
        </h1>
        <p
          style={{
            fontSize: 28,
            margin: 0,
            color: "#a0a0a0",
          }}
        >
          Enhance your coding skills with challenges
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
