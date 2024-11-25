"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPassword } from "@app/actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import { StatusModal } from "@/components/ui/status-modal";
import { SubmitButton } from "./SubmitButton";

const initialState: ForgotPasswordState = {
  errors: {},
  message: undefined,
  status: undefined,
};

const ForgotPasswordForm = () => {
  const [state, formAction] = useFormState(forgotPassword, initialState);

  return (
    <>
      <form
        action={formAction}
        className="w-full max-w-[35rem] rounded-lg bg-white px-5 py-6 text-left md:px-8 md:py-8"
      >
        <h1 className="text-preset-1 mb-8">Reset Password</h1>
        <Label htmlFor="email" className="text-preset-5-bold">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
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
            <p id="email-error" className="text-preset-5 text-red-500">
              {state.errors.email[0]}
            </p>
          )}
        </div>
        <SubmitButton
          defaultText="Send Reset Link"
          pendingText="Sending..."
          className="my-8 w-full"
        />
        <p className="text-preset-4 text-center">
          Remember your password?{" "}
          <Link className="text-preset-4-bold hover:underline" href="/sign-in">
            Sign In
          </Link>
        </p>
      </form>

      <StatusModal
        isOpen={Boolean(state?.message)}
        onClose={() => formAction(new FormData())}
        message={state?.message || ""}
        status={state?.status || "error"}
      />
    </>
  );
};

export default ForgotPasswordForm;
