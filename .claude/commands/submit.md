# Submit Changes

Commit changes and create a PR. Follow these steps:

## Step 1: Review changes
Run `git status` and `git diff` to understand what changed. Also run `git log --oneline main..HEAD` to see all commits on this branch.

## Step 2: Commit any uncommitted changes
If there are uncommitted changes:
- Stage all relevant files (avoid .env or credential files)
- Create a commit with a clear message describing the changes

## Step 3: Push and create PR
Push the branch to origin and create a pull request to main:

```
git push -u origin HEAD
```

Then create the PR using `gh pr create`. Write a clear title and description summarizing ALL changes on this branch (not just the latest commit). Use this format:

```
gh pr create --title "<short title>" --body "$(cat <<'EOF'
## Summary
<bullet points of what changed>

## Test plan
<how to verify the changes>
EOF
)"
```

## Step 4: Confirm
Tell the user:
- The PR URL
- A summary of what was submitted
