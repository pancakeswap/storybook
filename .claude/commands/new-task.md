# New Task

Start a new task by following these steps in order:

## Step 1: Ask for the task name
Use AskUserQuestion to ask: "What's the name of the new task?" with a free-text input. The user will type a name like "add-order-panel" or "fix-navbar-bug".

## Step 2: Handle local changes
Run `git status` to check for uncommitted changes (staged, unstaged, or untracked files).

If there ARE local changes:
- Use AskUserQuestion to ask: "You have uncommitted changes on the current branch. What would you like to do?" with options:
  - **Save changes** — "Commit current changes before switching"
  - **Drop changes** — "Discard all local changes (cannot be undone)"
- If user chooses **Save changes**: stage all changes and create a commit with a message summarizing the changes, then proceed.
- If user chooses **Drop changes**: run `git checkout -- .` and `git clean -fd` to discard changes, then proceed.

If there are NO local changes, skip to Step 3.

## Step 3: Switch to main and pull latest
```
git checkout main
git pull origin main
```

## Step 4: Create a new branch
Convert the task name to a branch name by lowercasing and replacing spaces with hyphens. Prefix with `feat/` if not already prefixed.

For example: "Add Order Panel" becomes `feat/add-order-panel`.

```
git checkout -b <branch-name>
```

## Step 5: Start Storybook if not running
Check if Storybook is already running by checking if port 6006 is in use:
```
lsof -i :6006
```

If Storybook is NOT running, start it in the background:
```
npm run storybook
```
Run this in the background so it doesn't block the conversation.

## Step 6: Confirm
Tell the user:
- The new branch name
- That they're on the latest main
- Whether Storybook was started or was already running
