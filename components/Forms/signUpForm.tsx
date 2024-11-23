"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@app/actions";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { useFormState } from "react-dom";

const SignUpForm = () => {
  const [state, formAction] = useFormState(signup, {
    errors: {},
    message: undefined,
  });

  return (
    <>
      <form
        action={formAction}
        className="w-full max-w-[35rem] rounded-lg bg-white px-5 py-6 text-left md:px-8 md:py-8"
      >
        <h1 className="text-preset-1 mb-8">Sign Up</h1>
        <Label htmlFor="name" className="text-preset-5-bold">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Joey Tribbiani"
          aria-describedby={state.errors?.name ? "name-error" : undefined}
        />
        <div
          id="name-error"
          aria-live="polite"
          aria-atomic="true"
          className="h-4"
        >
          {state.errors?.name && (
            <p className="text-sm text-red-500">{state.errors.name[0]}</p>
          )}
        </div>

        <Label htmlFor="email" className="text-preset-5-bold">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          placeholder="you@example.com"
        />
        <div
          id="email-error"
          aria-live="polite"
          aria-atomic="true"
          className="h-4"
        >
          {state.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email[0]}</p>
          )}
        </div>

        <Label htmlFor="password" className="text-preset-5-bold">
          Password
        </Label>
        <Input
          type="text"
          name="password"
          id="password"
          aria-describedby={
            state.errors?.password ? "password-error" : undefined
          }
          placeholder="your password"
        />
        <div
          id="password-error"
          aria-live="polite"
          aria-atomic="true"
          className="h-4"
        >
          {state.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password[0]}</p>
          )}
        </div>
        <Button type="submit" className="my-8 w-full">
          Create Account
        </Button>
        <p className="text-preset-4 text-center">
          Already have an account?{" "}
          <Link className="text-preset-4-bold hover:underline" href="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};
export default SignUpForm;
