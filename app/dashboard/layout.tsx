import { DashboardWrapper } from "@/src/components/Dashboard/wrappers/DashboardWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardWrapper>
        <div className="overflow-hidden">{children}</div>
      </DashboardWrapper>
    </div>
  );
}
