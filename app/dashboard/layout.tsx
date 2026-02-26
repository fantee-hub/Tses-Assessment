import { DashboardWrapper } from "@/src/components/Dashboard/wrappers/DashboardWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardWrapper>
        <div>{children}</div>
      </DashboardWrapper>
    </div>
  );
}
