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

## Step 2: List task branches
Run `git branch --list 'feat/*'` and also `git branch --list 'fix/*'` to get all task branches. Also include any other non-main branches from `git branch`.

Present the branches to the user using AskUserQuestion: "Which task do you want to switch to?" with each branch as an option. Show the branch name as the label and the last commit message as the description (use `git log -1 --format='%s' <branch>` for each).

## Step 3: Switch to selected branch
```
git checkout <selected-branch>
```

## Step 4: Start Storybook if not running
Check if Storybook is already running:
```
lsof -i :6006
```

If NOT running, start it in the background:
```
npm run storybook
```

## Step 5: Confirm
Tell the user which branch they switched to and show the recent commits on this branch with `git log --oneline -5`.
