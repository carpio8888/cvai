# CVAI: Automated CV/Resume Improvement

This repository provides a workflow and prompt system for generating improved, job-ready CVs (resumes) for software developers.

## What is this repo?

CVAI is designed to help users transform their existing CVs into two optimized formats:
- **short-resume.md**: A concise, recruiter-friendly version for quick screening.
- **long-resume.md**: A detailed, comprehensive version for in-depth review.

All improvements follow strict global rules (see .github/copilot-instructions.md) and specific guidelines for short and detailed CVs (see .github/prompts/create-CVs.md).


## How to use



1. **Paste your current CV** in markdown (.md) format into the repository as `resume.md` (in the root folder).
   - If your CV is not in .md format (e.g., PDF or DOCX), you can use Google Drive: upload your file, open it with Google Docs, then go to File > Download > Markdown (.md) to export it as markdown.

2. *(Recommended)* **Add job offers and "not interested" info**:
   - To help the AI tailor your CV, add job offers you are interested in as `.md` files in `docs/job-offers/` (see `docs/job-offers/info.md` for details).
   - To specify skills, technologies, or roles you want to avoid, add `.md` files in `docs/not-interested/` (see `docs/not-interested/info.md`).
   - These steps are optional but recommended for best results.

3. **Run the agent command**: In agent mode, type `/cv-generation` to trigger the AI prompt for CV review and generation.
   - This will review your CV for compliance with global and individual rules, and generate `short-resume.md` and `long-resume.md` files, improving clarity, impact, and formatting.

4. Use the generated files for your job applications.
   - For better presentation, you can convert the generated `.md` files to PDF using [apitemplate.io PDF Tools](https://apitemplate.io/pdf-tools/convert-markdown-to-pdf/).

### Rules
- See [.github/copilot-instructions.md](.github/copilot-instructions.md) for global rules.
- See [.github/prompts/create-CVs.md](.github/prompts/create-CVs.md) for specific instructions on short and detailed CVs.

**No agents or manual editing required—just paste your CV and get two optimized versions ready for use!**
