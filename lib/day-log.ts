import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export const CREW_NAMES = ["Worker A", "Worker B", "Worker C"] as const;
export const STATUS_OPTIONS = [
  "Not started",
  "In progress",
  "Done",
  "Blocked",
] as const;

export type CrewName = (typeof CREW_NAMES)[number];
export type LogStatus = (typeof STATUS_OPTIONS)[number];

export type DayLogEntry = {
  worker: CrewName;
  task: string;
  status: LogStatus;
  timestamp: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LOG_FILE = path.join(DATA_DIR, "day-log.json");

async function ensureLogFile() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(LOG_FILE, "utf8");
  } catch (error) {
    if (isNodeError(error) && error.code === "ENOENT") {
      await writeFile(LOG_FILE, "[]\n", "utf8");
      return;
    }

    throw error;
  }
}

export async function readDayLog(): Promise<DayLogEntry[]> {
  await ensureLogFile();

  const rawLog = await readFile(LOG_FILE, "utf8");
  const parsedLog: unknown = JSON.parse(rawLog);

  if (!Array.isArray(parsedLog)) {
    throw new Error("data/day-log.json must contain an array of log entries.");
  }

  return parsedLog.map((entry, index) => {
    if (!isDayLogEntry(entry)) {
      throw new Error(`data/day-log.json has an invalid entry at index ${index}.`);
    }

    return entry;
  });
}

export async function appendDayLogEntry(entry: DayLogEntry) {
  const currentLog = await readDayLog();
  await writeFile(LOG_FILE, `${JSON.stringify([...currentLog, entry], null, 2)}\n`, "utf8");
}

export function isCrewName(value: FormDataEntryValue | null): value is CrewName {
  return typeof value === "string" && CREW_NAMES.includes(value as CrewName);
}

export function isLogStatus(value: FormDataEntryValue | null): value is LogStatus {
  return typeof value === "string" && STATUS_OPTIONS.includes(value as LogStatus);
}

function isDayLogEntry(entry: unknown): entry is DayLogEntry {
  if (!entry || typeof entry !== "object") {
    return false;
  }

  const candidate = entry as Record<string, unknown>;

  return (
    typeof candidate.worker === "string" &&
    CREW_NAMES.includes(candidate.worker as CrewName) &&
    typeof candidate.task === "string" &&
    candidate.task.trim().length > 0 &&
    typeof candidate.status === "string" &&
    STATUS_OPTIONS.includes(candidate.status as LogStatus) &&
    typeof candidate.timestamp === "string" &&
    !Number.isNaN(Date.parse(candidate.timestamp))
  );
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}
