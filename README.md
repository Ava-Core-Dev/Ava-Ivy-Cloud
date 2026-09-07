# Ava Ivy Cloud

Vercel project for `avaivy.cloud`.

![Ava Ivy banner](media/banner.jpg)

This repository owns the Ava Ivy public web experience, identity pages, status surfaces, and frontend integrations with documented RootRecord APIs.

## Vercel

Import this repository as its own Vercel project. Keep secrets in Vercel environment variables. Vercel builds and serves the web app; long-running processing belongs in RootRecord Core Processor.

Local developers can register `scripts/register-auto-push.ps1` for the
two-minute opt-in auto-push workflow.

## First Run

- Windows: `install.ps1`
- Ubuntu/Debian: `./install.sh`
- Direct boot check: `python core/boot.py`

Boot creates missing runtime/log directories, installs dependencies from the package lockfile, and writes full output to `.runtime/logs/` while also showing it in the terminal.

## Boundary

No license. Public for transparency and Vercel deployment. Ops, Processor, Node, and RootMC remain separate repositories.
