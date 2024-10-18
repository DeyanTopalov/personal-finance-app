"use client";

import { useState, useCallback } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

//* Check the signin-form-default.tsx for example usage of this component

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const usePasswordInputDefault = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  return { showPassword, togglePasswordVisibility };
};

export default function PasswordInputDefault({
  className,
  ...props
}: PasswordInputProps) {
  const { showPassword, togglePasswordVisibility } = usePasswordInputDefault();

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
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
