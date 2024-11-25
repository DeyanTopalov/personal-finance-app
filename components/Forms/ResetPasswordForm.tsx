"use client";

import { Label } from "@/components/ui/label";
import { resetPassword } from "@app/actions";
import { useFormState } from "react-dom";
import { PasswordInput } from "./PasswordInput";
import { StatusModal } from "@/components/ui/status-modal";
import { SubmitButton } from "./SubmitButton";
import { useRouter } from "next/navigation";

const initialState: ResetPasswordState = {
  errors: {},
  message: undefined,
  status: undefined,
};
const ResetPasswordForm = () => {
  const [state, formAction] = useFormState(resetPassword, initialState);
  const router = useRouter();

  const handleClose = () => {
    if (state?.status === "success") {
      router.push("/sign-in");
    } else {
      formAction(new FormData());
    }
  };

  return (
    <>
      <form
        action={formAction}
        className="w-full max-w-[35rem] rounded-lg bg-white px-5 py-6 text-left md:px-8 md:py-8"
      >
        <h1 className="text-preset-1 mb-8">Reset Password</h1>

        <Label htmlFor="password" className="text-preset-5-bold">
          New Password
        </Label>
        <PasswordInput
          name="password"
          id="password"
          aria-describedby={
            state.errors?.password ? "password-error" : undefined
          }
          placeholder="your new password"
        />
        <div
          id="password-error"
          aria-live="polite"
          aria-atomic="true"
          className="mt-1 h-4"
        >
          {state.errors?.password && (
            <p className="text-preset-5 text-red-500">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        <Label htmlFor="confirmPassword" className="text-preset-5-bold">
          Confirm Password
        </Label>
        <PasswordInput
          name="confirmPassword"
          id="confirmPassword"
          aria-describedby={
            state.errors?.confirmPassword ? "confirm-password-error" : undefined
          }
          placeholder="confirm your password"
        />
        <div
          id="confirm-password-error"
          aria-live="polite"
          aria-atomic="true"
          className="mt-1 h-4"
        >
          {state.errors?.confirmPassword && (
            <p className="text-preset-5 text-red-500">
              {state.errors.confirmPassword[0]}
            </p>
          )}
        </div>

        <SubmitButton
          defaultText="Update Password"
          pendingText="Updating..."
          className="my-8 w-full"
        />
      </form>

      <StatusModal
        isOpen={Boolean(state?.message)}
        onClose={handleClose}
        message={state?.message || ""}
        status={(state?.status as "success" | "error") || "error"}
      />
    </>
  );
};

export default ResetPasswordForm;
