import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignments - Localhost IIIT Pune",
  description:
    "Complete coding assignments and challenges to enhance your programming skills. Practice with real-world projects at Localhost IIIT Pune.",
  openGraph: {
    title: "Assignments - Localhost IIIT Pune",
    description:
      "Complete coding assignments and challenges to enhance your programming skills.",
    images: [{ url: "/assignments/opengraph-image" }],
  },
};

export default function AssignmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
