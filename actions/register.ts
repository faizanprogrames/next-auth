"use server";

import { RegisterSchema } from "@schemas";
import { z } from "zod";

export async function register(values: z.infer<typeof RegisterSchema>) {
  console.log(values);
}
