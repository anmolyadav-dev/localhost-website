import { ImageResponse } from "next/og";

export const alt = "Localhost Members - Dev Community of IIIT Pune";
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
          Our <span style={{ color: "#4dffdb" }}>Members</span>
        </h1>
        <p
          style={{
            fontSize: 28,
            margin: 0,
            color: "#a0a0a0",
          }}
        >
          Meet the innovators at Localhost IIIT Pune
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
