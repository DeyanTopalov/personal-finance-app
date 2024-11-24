"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@app/actions";
import { SubmitButton } from "./SubmitButton";
import Link from "next/link";
import { useFormState } from "react-dom";
import { PasswordInput } from "./PasswordInput";
import { StatusModal } from "@/components/ui/status-modal";

const SignUpForm = () => {
  const [state, formAction] = useFormState(signup, {
    errors: {},
    message: undefined,
    status: undefined,
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
            <p className="text-preset-5 text-red-500">{state.errors.name[0]}</p>
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
        <div
          id="password-error"
          aria-live="polite"
          aria-atomic="true"
          className="h-4"
        >
          {state.errors?.password && (
            <p className="text-preset-5 text-red-500">
              {state.errors.password[0]}
            </p>
          )}
        </div>
        <SubmitButton
          defaultText="Create Account"
          pendingText="Creating Account..."
          className="my-8 w-full"
        />
        <p className="text-preset-4 text-center">
          Already have an account?{" "}
          <Link className="text-preset-4-bold hover:underline" href="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
      <StatusModal
        isOpen={Boolean(state?.message)}
        onClose={() => formAction(new FormData())}
        message={state?.message || ""}
        status={(state?.status as "success" | "error") || "error"}
      />
    </>
  );
};
export default SignUpForm;
