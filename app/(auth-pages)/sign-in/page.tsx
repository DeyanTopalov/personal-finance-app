import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@components/ui/button";
import Link from "next/link";
import SignInForm from "@components/Forms/SignInForm";

export default function SignIn() {
  return (
    <section className="grid h-full w-full place-items-center px-4">
      <SignInForm />
    </section>
  );
}
