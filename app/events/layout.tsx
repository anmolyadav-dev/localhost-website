import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Localhost IIIT Pune",
  description:
    "Discover upcoming hackathons, workshops, tech talks, and coding competitions organized by Localhost at IIIT Pune. Join us to learn and grow!",
  openGraph: {
    title: "Events - Localhost IIIT Pune",
    description:
      "Discover upcoming hackathons, workshops, tech talks, and coding competitions at IIIT Pune.",
    images: [{ url: "/events/opengraph-image" }],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
