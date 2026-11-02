# 🏛️ Sparta — Habit Tracker

> Turn your habits into daily achievements with the Sparta Challenge.

![Preview](./preview.png)

**Status:** 🚧 in development — the app runs end to end in the browser; persistence is the current milestone.

## 📌 About the Project

**Sparta** is a habit tracking web application inspired by Spartan discipline: create habits, mark the days you kept them, and watch consistency build up.

Everything runs in the browser. There is no backend yet: state lives in a single React Context, and the persistence layer is being written behind a small service (`src/services`), so it can later be swapped for an HTTP API without touching the screens.

### Features

- ✅ Create and delete habits
- ✅ Deleting a habit also removes its day marks
- ✅ Mark today straight from the habit list (controlled checkbox)
- ✅ Mark any past day in the calendar, per selected habit
- ✅ Choose which habit the calendar is tracking
- ✅ Honest empty state: calendar disabled until a habit exists
- 💬 Daily motivational quote (rotates by day of the year)

## 🚀 Technologies

| Layer | Stack |
|---|---|
| UI | React 19 · TypeScript 5.9 (`strict`) |
| Tooling | Create React App 5 (`react-scripts`) · ESLint (CRA config) |
| Routing | `react-router-dom` 7 — `HashRouter` (static hosting friendly) |
| Calendar | `react-calendar` 6 |
| Icons | `@phosphor-icons/react` |
| Styling | CSS Modules + design tokens in `src/global.css` |
| Tests | Jest + React Testing Library (set up, suite not written yet) |

## 🧠 How it is organized

```
src/
├─ index.tsx              # mounts React: <StrictMode><HabitsProvider><App/>
├─ App.tsx                # HashRouter + <Navbar> + routes
├─ context/
│  └─ HabitsContext.tsx   # single source of truth: habits, marks + 4 actions
├─ services/              # data access (localStorage) — in progress
├─ pages/                 # one folder per route: Home, Evolution, Ranking
├─ layout/                # app shell (Navbar)
├─ components/            # features: AddHabits, HabitCalendar, DailyQuote
├─ @types/                # data contracts: Habit, HabitMark, Quote
├─ utils/                 # pure functions: toKey() → 'YYYY-MM-DD'
├─ assets/
├─ global.css             # CSS variables + reset
└─ react-app-env.d.ts     # CRA type references
```

**Data model** — a habit is `{ id, name }` and a mark is `{ habitId, day }`. There is no `done` boolean: “done” is the **presence of a mark**, so there is nothing to get out of sync.

**State** — `HabitsProvider` is mounted once, above the router, so navigating between routes does not reset the data. Screens never touch storage directly: they read and write through the `useHabits()` hook.

**Why the calendar needs a habit** — a mark only means something attached to a habit (`habitId` + `day`), which is why the calendar has a habit selector and stays disabled while the list is empty.

## 💻 Running Locally

Prerequisites: **Node 22+** and **Yarn 1.x**.

```bash
# Clone the repository
git clone https://github.com/guiborgesw/Sparta.git

# Enter the folder
cd Sparta

# Install dependencies
yarn install

# Start the development server
yarn start
```

Access at `http://localhost:3000`

> The repo uses **Yarn only** — one lockfile, one dependency tree. Avoid `npm install` here.

## 🧪 Scripts

| Script | What it does |
|---|---|
| `yarn start` | Dev server on `:3000` with hot reload |
| `yarn build` | Optimized production build into `build/` |
| `yarn typecheck` | `tsc --noEmit` — the type ruler |
| `yarn lint` | ESLint over `src/**/*.ts(x)` |
| `yarn lint:fix` | Same as `lint`, fixing what is safe to fix |
| `yarn test` | Jest in watch mode |
| `yarn test:ci` | Single run, no watch (passes with zero tests) |
| `yarn test:coverage` | Single run with a coverage report |
| `yarn verify` | **The gate:** `typecheck` → `lint` → `test:ci` → `build` |
| `yarn verify:ci` | Same gate, but ESLint **warnings count as errors** (`--max-warnings=0`) — what CI would say |
| `yarn clean` | Deletes `build/` |
| `yarn deploy` | Builds and publishes `build/` to the `gh-pages` branch |

### The gate

Before committing or merging anything structural, run:

```bash
yarn verify
```

It must end green. The production build also treats ESLint **warnings** as errors when `CI=true` is set (that is what CI runners do). To reproduce it locally in PowerShell:

```powershell
$env:CI = "true"
yarn build
Remove-Item Env:CI
```

## 📦 Deploy

Live at **https://guiborgesw.github.io/Sparta/**

Production is the `gh-pages` branch, which only ever receives the build output — never merge it back into `master`.

```bash
yarn deploy
```

`predeploy` runs the build first, so a broken typecheck or lint error stops the deploy before anything goes live.

## 👨‍💻 Author

**Guilherme Borges**

- LinkedIn: [linkedin.com/in/guiborgesw](https://www.linkedin.com/in/guiborgesw)
