import { saveLogEntry } from "./actions";
import { CREW_NAMES, STATUS_OPTIONS, readDayLog } from "@/lib/day-log";

export const dynamic = "force-dynamic";

type HomePageProps = {
  searchParams?: Promise<{
    error?: string;
    worker?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const currentDate = new Date();
  const [allLogEntries, params] = await Promise.all([readDayLog(), searchParams]);
  const logEntries = allLogEntries.filter((entry) =>
    isSameCalendarDate(new Date(entry.timestamp), currentDate),
  );
  const today = formatToday(currentDate);
  const error = params?.error;
  const errorWorker = params?.worker;

  return (
    <main className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Feltlog T-001</p>
          <h1>Field log</h1>
          <p className="lede">
            Placeholder crew check-in for today. Entries are saved to the local
            JSON log and rendered back below.
          </p>
        </div>
        <div className="date-pill" aria-label={`Today's date is ${today}`}>
          <span>Today</span>
          <strong>{today}</strong>
        </div>
      </header>

      <div className="workspace">
        <section className="panel" aria-labelledby="crew-heading">
          <div className="panel-header">
            <h2 id="crew-heading">Placeholder crew</h2>
            <p>Worker names are fictional for this approved local slice.</p>
          </div>

          {error === "invalid-submission" ? (
            <p className="form-alert" role="alert">
              The saved row did not match the approved worker or status options.
            </p>
          ) : null}

          <ul className="crew-list">
            {CREW_NAMES.map((worker) => (
              <li className="crew-row" key={worker}>
                <form action={saveLogEntry} className="entry-form">
                  <input name="worker" type="hidden" value={worker} />
                  <div className="worker-name">
                    <strong>{worker}</strong>
                    <span>Fictional placeholder</span>
                  </div>
                  <div className="field">
                    <label htmlFor={`${worker}-task`}>Task</label>
                    <input
                      aria-describedby={
                        error === "empty-task" && errorWorker === worker
                          ? `${worker}-error`
                          : undefined
                      }
                      id={`${worker}-task`}
                      name="task"
                      placeholder="Install bay labels"
                      required
                      type="text"
                    />
                    {error === "empty-task" && errorWorker === worker ? (
                      <span className="field-error" id={`${worker}-error`} role="alert">
                        Enter a task before saving this row.
                      </span>
                    ) : null}
                  </div>
                  <div className="field">
                    <label htmlFor={`${worker}-status`}>Status</label>
                    <select id={`${worker}-status`} name="status" defaultValue="In progress">
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="save-button" type="submit">
                    Save
                  </button>
                </form>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel" aria-labelledby="log-heading">
          <div className="panel-header">
            <h2 id="log-heading">Today&apos;s Log</h2>
            <p>{logEntries.length} saved {logEntries.length === 1 ? "entry" : "entries"}</p>
          </div>

          {logEntries.length > 0 ? (
            <ol className="log-list">
              {logEntries
                .slice()
                .reverse()
                .map((entry) => (
                  <li key={`${entry.timestamp}-${entry.worker}-${entry.task}`}>
                    <div className="log-meta">
                      <strong>{entry.worker}</strong>
                      <span className="status" data-status={entry.status}>
                        {entry.status}
                      </span>
                    </div>
                    <p className="task-text">{entry.task}</p>
                    <p className="timestamp">{formatLogTime(entry.timestamp)}</p>
                  </li>
                ))}
            </ol>
          ) : (
            <p className="empty-state">No entries saved yet.</p>
          )}
        </section>
      </div>
    </main>
  );
}

function formatToday(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function formatLogTime(timestamp: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function isSameCalendarDate(entryDate: Date, currentDate: Date) {
  return (
    entryDate.getFullYear() === currentDate.getFullYear() &&
    entryDate.getMonth() === currentDate.getMonth() &&
    entryDate.getDate() === currentDate.getDate()
  );
}
