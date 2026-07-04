"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  appendDayLogEntry,
  isCrewName,
  isLogStatus,
} from "@/lib/day-log";

export async function saveLogEntry(formData: FormData) {
  const worker = formData.get("worker");
  const task = formData.get("task");
  const status = formData.get("status");

  if (!isCrewName(worker) || !isLogStatus(status)) {
    redirect("/?error=invalid-submission");
  }

  const normalizedTask = typeof task === "string" ? task.trim() : "";

  if (!normalizedTask) {
    redirect(`/?error=empty-task&worker=${encodeURIComponent(worker)}`);
  }

  await appendDayLogEntry({
    worker,
    task: normalizedTask,
    status,
    timestamp: new Date().toISOString(),
  });

  revalidatePath("/");
  redirect("/");
}
