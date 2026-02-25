---
description: 'Automated PR workflow: creates branch, commits with proper message, pushes, opens PR, merges, cleans up. Follows project commit and PR rules.'
---

# PR Command Automation Prompt

When the user says just "PR", execute the following workflow using Github's MCP:

1. Create a new branch with a simple, descriptive name related to the uncommitted changes and check it out.
2. Add all changed files.
3. Commit the changes, following the commit message rules:
   - Start with a summary title
   - Use a bulleted list of changes (with emojis)
   - Reference file names and specific modifications
4. Push the branch to the remote repository.
5. Create a Pull Request (PR) with that branch.
6. Merge the PR (if any conflict is found, the process will stop and you will be notified).
7. Delete the branch from both remote and local repositories.
8. Check out the main branch again and pull the latest changes.
9. Show closed PR link

This workflow ensures consistent, clear, and traceable contributions. Always follow this process when the user requests a "PR".
