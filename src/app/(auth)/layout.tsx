import { AuthLayout } from "@/components/layout/AuthLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthLayout title="Authentication" subtitle="Sign in or create an account">
      {children}
    </AuthLayout>
  );
}
