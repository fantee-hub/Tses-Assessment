"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "@/src/state/slices/userSlice";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const localPart = email.split("@")[0];
      const derivedName = localPart
        .replace(/[._-]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();

      dispatch(
        login({
          id: "1",
          name: derivedName,
          email,
        })
      );

      router.push("/dashboard");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex font-sans bg-white">
      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-12 bg-white">
        <div className="mb-10">
          <Image
            src="/assets/soludesks.svg"
            alt="Soludesk"
            width={136}
            height={36}
          />
        </div>

        <div className="w-full max-w-100 shadow-md p-6 rounded-xl">
          <div className="mb-8">
            <h1 className="text-[#202020] text-3xl font-bold tracking-tight mb-1.5">
              Welcome back
            </h1>
            <p className="text-[#636363] text-sm">
              Sign in to continue to your dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-[#202020] uppercase tracking-wider"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 w-full rounded-xl border border-[#E8E8E8] bg-[#FDFDFD] px-4 text-sm text-[#202020] placeholder:text-[#BDBDBD] outline-none transition-all focus:border-[#0A60E1] focus:ring-2 focus:ring-[#0A60E1]/10"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-[#202020] uppercase tracking-wider"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#E8E8E8] bg-[#FDFDFD] px-4 pr-12 text-sm text-[#202020] placeholder:text-[#BDBDBD] outline-none transition-all focus:border-[#0A60E1] focus:ring-2 focus:ring-[#0A60E1]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E] hover:text-[#202020] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 h-12 w-full flex items-center justify-center gap-2 rounded-xl cursor-pointer bg-[#0A60E1] text-white text-sm font-semibold tracking-wide hover:bg-[#0052CC] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(10,96,225,0.35)]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  Log in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
