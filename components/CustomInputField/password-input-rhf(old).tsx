"use client";

import { useState, useCallback } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UseFormRegisterReturn } from "react-hook-form";

//* Check the signin-form-rhf.tsx for example usage of this component

interface PasswordInputPropsRHF
  extends React.InputHTMLAttributes<HTMLInputElement> {
  registration?: UseFormRegisterReturn;
}

const usePasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  return { showPassword, togglePasswordVisibility };
};

export default function PasswordInputRHF({
  className,
  registration,
  ...props
}: PasswordInputPropsRHF) {
  const { showPassword, togglePasswordVisibility } = usePasswordInput();

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        {...registration}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <Eye className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeOff className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
}
