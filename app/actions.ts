"use server";

import { signupSchema, loginSchema } from "@/lib/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function emailLogin(prevState: LoginState, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });

  if (error) {
    if (error.status === 400) {
      return {
        message: "Incorrect email or password",
      };
    }
    return {
      message: "Unable to connect. Please try again later.",
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
export async function signup(prevState: SignupState, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    options: {
      data: {
        name: validatedFields.data.name,
      },
    },
  });

  if (error) {
    return {
      message: "Failed to create account",
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
