"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          admin: true,
        }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Login failed");
      }
      return res.json();
    },
    onSuccess: () => {
      const params = new URLSearchParams(window.location.search);
      const from = params.get("from") ?? "/admin/dashboard";
      router.push(from);
      router.refresh();
    },
    onError: (err: Error) => {
      setError("root", { message: err.message });
    },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block text-xl font-semibold">
            MSL Financial Services
          </Link>
          <h1 className="mt-6 text-2xl font-bold tracking-tight">Admin sign in</h1>
          <p className="mt-2 text-muted-foreground text-sm">
            Sign in with an admin account.
          </p>
        </div>
        <form
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-destructive text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-destructive text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {errors.root && (
              <p className="text-destructive text-sm">{errors.root.message}</p>
            )}
            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>
        <p className="text-center text-muted-foreground text-sm">
          <Link href="/login" className="text-primary underline">
            Customer sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
