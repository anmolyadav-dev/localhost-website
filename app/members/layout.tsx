import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members - Localhost IIIT Pune",
  description:
    "Meet the talented members of Localhost, IIIT Pune's premier development community. Connect with developers, designers, and tech enthusiasts.",
  openGraph: {
    title: "Members - Localhost IIIT Pune",
    description:
      "Meet the talented members of Localhost, IIIT Pune's premier development community.",
    images: [{ url: "/members/opengraph-image" }],
  },
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
