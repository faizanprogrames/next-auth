"use server";

import { LoginSchema } from "@schemas";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  console.log(values);
}
