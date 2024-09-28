import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="grid h-full w-full place-items-center px-4">
      <form
        action=""
        className="w-full max-w-[35rem] rounded-lg bg-white px-5 py-6 text-left md:px-8 md:py-8"
      >
        <h1 className="text-preset-1 mb-8">Sign In</h1>
        <Label htmlFor="email" className="text-preset-5-bold">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <div className="h-4"></div>
        <Label htmlFor="password" className="text-preset-5-bold">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          placeholder="your password"
          required
        />
        <div className="text-preset-5 h-4 text-right"></div>
        <Button className="my-8 w-full">Sign In</Button>
        <p className="text-preset-4 text-center">
          Need to create an account?{" "}
          <Link className="text-preset-4-bold hover:underline" href="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
}

//! show/hide password
// ("use client");

// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

// interface PasswordInputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// export default function PasswordInput({
//   className,
//   ...props
// }: PasswordInputProps) {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="relative">
//       <Input
//         type={showPassword ? "text" : "password"}
//         className={cn("pr-10", className)}
//         {...props}
//       />
//       <button
//         type="button"
//         onMouseDown={() => setShowPassword(true)}
//         onMouseUp={() => setShowPassword(false)}
//         onMouseLeave={() => setShowPassword(false)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//       >
//         {showPassword ? (
//           <Eye className="h-4 w-4" aria-hidden="true" />
//         ) : (
//           <EyeOff className="h-4 w-4" aria-hidden="true" />
//         )}
//         <span className="sr-only">
//           {showPassword ? "Hide password" : "Show password"}
//         </span>
//       </button>
//     </div>
//   );
// }

//! usage in sign-in/page.tsx
// import PasswordInput from "./password-input";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function SignInPage() {
//   return (
//     <div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md">
//       <h1 className="mb-6 text-2xl font-bold">Sign In</h1>
//       <form className="space-y-4">
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" placeholder="Enter your email" />
//         </div>
//         <div>
//           <Label htmlFor="password">Password</Label>
//           <PasswordInput id="password" placeholder="Enter your password" />
//         </div>
//         <Button type="submit" className="w-full">
//           Sign In
//         </Button>
//       </form>
//     </div>
//   );
// }
