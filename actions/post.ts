"use server";

import { db } from "@/db";
import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(title:string) {
  let post: Post;

  try {
    post = await db.post.create({
      data: {
        title: title,
      },
    });
  } catch (error: unknown) {}

  revalidatePath("/");
  redirect("/");
}

export async function updatePost(id: string, title:string) {
  let post: Post;
  try {
    post = await db.post.update({
      where: { id },
      data: {
        title: title,
      },
    });
  } catch (error: unknown) {}

  revalidatePath("/");
  redirect("/");
}

export async function deletePost(id: string) {
  let post: Post;
  try {
    post = await db.post.delete({
      where: { id },
    });
  } catch (error: unknown) {}

  revalidatePath("/");
  redirect("/");
}
