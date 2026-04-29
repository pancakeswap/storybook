# Claude Code — Storybook repo

For all project rules — design system, styling conventions, component patterns, typography, breakpoints, accessibility — see [`AGENTS.md`](./AGENTS.md). Read it first; this file only documents Claude-Code-specific integrations.

---

## Workflow Commands

This project has custom slash commands in `.claude/commands/`:

- **`/new-task`** — Start a new task: asks for name, handles local changes, checks out main, pulls latest, creates a feature branch, starts Storybook.
- **`/switch-task`** — Switch between existing task branches.
- **`/submit`** — Commit + PR + Linear ticket.

### Submit intent detection

When the user says any of the following (or similar phrasing), treat it as a `/submit` command:

- "push the changes", "create a PR", "submit the changes", "send the changes to FE", "save the changes", "send it to review", "ship it"

---

## Storybook MCP

When working on UI components, use the `storybook` MCP tools:

- Query `list-all-documentation` to discover components.
- Query `get-documentation` for props and examples.
- Use `get-storybook-story-instructions` before creating or editing stories.
- Run `run-story-tests` before reporting completion.
- Never assume component props — verify through docs first.
