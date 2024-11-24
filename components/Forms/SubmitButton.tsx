"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  defaultText: string;
  pendingText: string;
  className?: string;
}

export function SubmitButton({
  defaultText,
  pendingText,
  className = "",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? pendingText : defaultText}
    </Button>
  );
}
