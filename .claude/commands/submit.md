# Submit Changes

Commit changes, create a PR, and create a Linear ticket. Follow these steps:

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

## Step 4: Create Linear ticket
After the PR is created, use the Linear MCP tools to:
1. Create a new issue in Linear with:
   - Title matching the PR title
   - Description that includes:
     - What was updated/changed
     - A link to the PR
   - Assign to Ryan (search for Ryan in the team members)
2. Report the Linear ticket URL to the user

## Step 5: Confirm
Tell the user:
- The PR URL
- The Linear ticket URL
- A summary of what was submitted
