"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"
import { SignInButton } from "@clerk/nextjs"

export function LoginForm() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-[#f7f7f8] relative">
      {/* ChatGPT logo in top left */}
      <div className="absolute top-4 left-6">
        <h1 className="text-[22px] font-bold text-black">ChatGPT</h1>
      </div>

      {/* Main content centered */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[340px]">
          {/* Welcome back heading */}
          <h2 className="text-[32px] font-normal text-center text-black mb-8 leading-tight">Welcome back</h2>

          <div className="space-y-6">
            {/* Email input */}
            <div className="relative">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[52px] px-6 border border-[#d1d5db] rounded-[26px] text-[16px] text-black placeholder:text-[#9ca3af] focus:outline-none focus:ring-[#10a37f]"
              />
            </div>

            {/* Continue button */}
            <Button className="w-full h-[54px] bg-black text-white hover:bg-[#1a1a1a] rounded-[26px] text-[16px] font-medium transition-colors">
              Continue
            </Button>
          </div>

          {/* Don't have account text */}
          <div className="text-center mt-6">
            <span className="text-[16px] text-black">{"Don't have an account? "}</span>
            <button className="text-[16px] text-blue-600 hover:underline font-light">Sign up</button>
          </div>

          {/* OR divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5e7eb]" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#f7f7f8] text-[14px] text-black font-medium">OR</span>
            </div>
          </div>

          {/* Social login buttons */}
          <div className="space-y-3">
            <SignInButton mode="redirect">
            <Button
              variant="outline"
              className="w-full h-[52px] bg-transparent text-black border border-[#d1d5db] hover:bg-[#f9fafb] rounded-[26px] text-[16px] font-normal flex items-center justify-start gap-3.5 transition-colors"
            >
              <div className="w-0"></div>
              <Phone className="size-5" />
              Continue with phone
            </Button>
            </SignInButton>

            <SignInButton mode="redirect">
              <Button
                variant="outline"
                className="w-full bg-transparent h-[52px] text-black border border-[#d1d5db] hover:bg-[#f9fafb] rounded-[26px] text-[16px] font-normal flex items-center justify-start gap-3 transition-colors"
              >
                <div className="w-0.5"></div>
                <svg className="size-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </SignInButton>

          <SignInButton mode="redirect">
              <Button
              variant="outline"
              className="w-full bg-transparent h-[52px] text-black border border-[#d1d5db] hover:bg-[#f9fafb] rounded-[26px] text-[16px] font-normal flex items-center justify-start gap-3 transition-colors"
            >
              <div className="w-0"></div>
              <svg className="size-4.5" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z" />
                <path fill="#7fba00" d="M13 1h10v10H13z" />
                <path fill="#00a4ef" d="M1 13h10v10H1z" />
                <path fill="#ffb900" d="M13 13h10v10H13z" />
              </svg>
              Continue with Microsoft Account
            </Button> 
            </SignInButton>

            <SignInButton mode="modal">
              <Button
              variant="outline"
              className="w-full bg-transparent h-[52px] text-black border border-[#d1d5db] hover:bg-[#f9fafb] rounded-[26px] text-[16px] font-normal flex items-center justify-start gap-3 transition-colors"
            >
              <div className="w-0"></div>
              <svg className="size-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Continue with Apple
            </Button>
            </SignInButton>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-4 text-[14px] text-[#6b7280]">
          <button className="hover:underline">Terms of Use</button>
          <span>|</span>
          <button className="hover:underline">Privacy Policy</button>
        </div>
      </div>
    </div>
  )
}