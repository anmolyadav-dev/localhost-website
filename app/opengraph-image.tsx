import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Localhost - Dev Community of IIIT Pune";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
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
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            background:
              "radial-gradient(circle at 20% 50%, #4dffdb 0%, transparent 50%), radial-gradient(circle at 80% 80%, #4dffdb 0%, transparent 50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: "bold",
              margin: 0,
              marginBottom: 20,
            }}
          >
            <span style={{ color: "#4dffdb" }}>Local</span>host
          </h1>
          <p
            style={{
              fontSize: 32,
              margin: 0,
              color: "#a0a0a0",
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            Dev Community of IIIT Pune
          </p>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              gap: 30,
              fontSize: 24,
              color: "#4dffdb",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              🚀 Events
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              💻 Projects
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              🎓 Learning
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
