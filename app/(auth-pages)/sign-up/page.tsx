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
        <h1 className="text-preset-1 mb-8">Sign Up</h1>
        <Label htmlFor="name" className="text-preset-5-bold">
          Name
        </Label>
        <Input type="text" name="name" placeholder="Joey Tribbiani" required />
        <div className="h-4"></div>
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
          type="text"
          name="password"
          placeholder="your password"
          required
        />
        <div className="text-preset-5 h-4 text-right">
          <p>Password must be at least 8 characters</p>
        </div>
        <Button className="my-8 w-full">Create Account</Button>
        <p className="text-preset-4 text-center">
          Already have an account?{" "}
          <Link className="text-preset-4-bold hover:underline" href="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
}
