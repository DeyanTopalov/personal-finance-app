"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./SubmitButton";
import Link from "next/link";
import { useFormState } from "react-dom";
import { PasswordInput } from "./PasswordInput";
import { emailLogin } from "@app/actions";

const SignInForm = () => {
  const [state, formAction] = useFormState(emailLogin, {
    errors: {},
    message: undefined,
  });
  return (
    <>
      <form
        action={formAction}
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
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
        <div
          id="email-error"
          aria-live="polite"
          aria-atomic="true"
          className="mt-1 h-4"
        >
          {state.errors?.email && (
            <p className="text-preset-5 text-red-500">
              {state.errors.email[0]}
            </p>
          )}
        </div>
        <Label htmlFor="password" className="text-preset-5-bold">
          Password
        </Label>
        <PasswordInput
          name="password"
          id="password"
          aria-describedby={
            state.errors?.password ? "password-error" : undefined
          }
          placeholder="your password"
        />
        <div className="mt-1">
          <p className="text-preset-4 text-right">
            Forgot Password?{" "}
            <Link
              className="text-preset-4-bold hover:underline"
              href="/forgot-password"
            >
              Reset
            </Link>
          </p>
        </div>
        <div className="mt-1 h-4">
          {state.errors?.password && (
            <p className="text-preset-5 text-red-500">
              {state.errors.password[0]}
            </p>
          )}
        </div>
        <SubmitButton
          defaultText="Sign in"
          pendingText="Signing in..."
          className="my-8 w-full"
        />
        <div
          role="alert"
          aria-live="polite"
          aria-atomic="true"
          className={`my-2 flex h-10 items-center justify-center rounded-md ${
            state?.message ? "bg-red-50" : "bg-white"
          }`}
        >
          {state?.message && (
            <p className="text-preset-4-bold text-center text-red-500">
              {state.message}
            </p>
          )}
        </div>
        <p className="text-preset-4 text-center">
          Need to create an account?{" "}
          <Link className="text-preset-4-bold hover:underline" href="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignInForm;
