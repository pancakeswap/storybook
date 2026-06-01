# Switch Task

Switch to an existing task branch. Follow these steps:

## Step 1: Handle local changes
Run `git status` to check for uncommitted changes.

If there ARE local changes:
- Use AskUserQuestion to ask: "You have uncommitted changes on the current branch. What would you like to do?" with options:
  - **Save changes** — "Commit current changes before switching"
  - **Drop changes** — "Discard all local changes (cannot be undone)"
- If user chooses **Save changes**: stage all changes and create a commit with a message summarizing the changes, then proceed.
- If user chooses **Drop changes**: run `git checkout -- .` and `git clean -fd` to discard changes, then proceed.

## Step 2: Fetch remote and list task branches
First, fetch all remote branches:
```
git fetch --all
```

Then list all non-main branches (both local and remote). Use `git branch -a` to find all branches. Include any `feat/*`, `fix/*`, `chore/*`, or other non-main branches. For remote-only branches, show them without the `remotes/origin/` prefix.

Present the branches to the user using AskUserQuestion: "Which task do you want to switch to?" with each branch as an option. Show the branch name as the label and the last commit message as the description (use `git log -1 --format='%s' <branch>` for each).

## Step 3: Switch to selected branch
Before switching, snapshot the current lockfile hash so we can detect dependency changes:
```
LOCK_BEFORE=$(git rev-parse HEAD:pnpm-lock.yaml 2>/dev/null || echo "none")
```

Then switch:
```
git checkout <selected-branch>
```

## Step 4: Install dependencies if changed
Compare the lockfile hash after checkout:
```
LOCK_AFTER=$(git rev-parse HEAD:pnpm-lock.yaml 2>/dev/null || echo "none")
```

If `LOCK_BEFORE` ≠ `LOCK_AFTER`, run:
```
pnpm install
```

Also run `pnpm install` if `node_modules/` does not exist.

## Step 5: Start Storybook if not running
Check if Storybook is already running:
```
lsof -i :6006
```

If NOT running, start it in the background:
```
pnpm storybook
```

## Step 5: Confirm
Tell the user which branch they switched to and show the recent commits on this branch with `git log --oneline -5`.
