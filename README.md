# 🔒 Dependabot Alternatives Test

An Astro project with **intentionally vulnerable dependencies** for testing and comparing dependency security tools.

## ⚠️ Warning

**DO NOT deploy this project to production.** It contains packages with known vulnerabilities for testing purposes only.

## Purpose

This repository is used to evaluate and compare the following Dependabot alternatives:

| Tool | Type | Website |
|------|------|---------|
| **Dependabot** (baseline) | Native GitHub security | Built-in |
| **Renovate Bot** | Dependency update bot | [renovatebot.com](https://renovatebot.com) |
| **Snyk** | Vulnerability scanner | [snyk.io](https://snyk.io) |
| **Socket** | Supply-chain security | [socket.dev](https://socket.dev) |
| **Depfu** | Dependency updates | [depfu.com](https://depfu.com) |
| **Aikido Security** | AppSec platform | [aikido.dev](https://aikido.dev) |
| **Endor Labs** | SCA + reachability | [endorlabs.com](https://endorlabs.com) |

## Vulnerable Dependencies

| Package | Version | CVE | Type |
|---------|---------|-----|------|
| lodash | 4.17.15 | CVE-2020-28500, CVE-2019-10744 | Prototype Pollution, ReDoS |
| minimist | 1.2.5 | CVE-2021-44906 | Prototype Pollution |
| json5 | 2.2.1 | CVE-2022-46175 | Prototype Pollution |
| semver | 7.3.7 | CVE-2022-25883 | ReDoS |
| tough-cookie | 4.1.2 | CVE-2023-26136 | Prototype Pollution |
| word-wrap | 1.2.3 | CVE-2023-26115 | ReDoS |
| xml2js | 0.4.23 | CVE-2023-0842 | Prototype Pollution |
| node-fetch | 2.6.1 | CVE-2022-0235 | Information Exposure |
| express | 4.17.1 | Multiple CVEs | Path Traversal, ReDoS |
| nth-check | 1.0.2 | CVE-2021-3803 | ReDoS |

**Total: 17 vulnerabilities** (1 critical, 10 high, 3 moderate, 3 low)

## Evaluation Criteria

1. **Automated PRs** — Does the tool automatically open PRs to fix vulnerabilities?
2. **Astro/Node.js/npm Compatibility** — How well does it work with this project?
3. **Speed & Simplicity** — How fast and uncomplicated is the fix process?

## Getting Started

```bash
npm install
npm run dev
npm audit  # See all vulnerabilities
```

## Safety

All vulnerabilities are **library-level bugs** (prototype pollution, ReDoS, information exposure). They:
- Do NOT contain malware
- Do NOT execute arbitrary code on install
- Are safe in `node_modules` — only trigger with attacker-controlled input
