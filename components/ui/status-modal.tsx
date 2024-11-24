"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2, XCircle } from "lucide-react";

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  status: "success" | "error";
}

export function StatusModal({
  isOpen,
  onClose,
  message,
  status,
}: StatusModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center gap-4 py-4">
          {status === "success" ? (
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          ) : (
            <XCircle className="h-12 w-12 text-red-500" />
          )}
          <p className="text-center text-lg">{message}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
