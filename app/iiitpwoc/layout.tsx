import SnowProvider from "./provider/SnowProvider";

export default function IIITPWOCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <SnowProvider>
        <div className="">{children}</div>
      </SnowProvider>
    </section>
  );
}
