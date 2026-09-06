# Nekko Technologies Website — Agent Instructions

## Source of Truth

The primary project specification is:

`docs/NEKKO_TECH_WEBSITE_MASTER_SPEC.md`

Read and follow this document before making architectural, design, content, or implementation decisions.

## Project Identity

Nekko Technologies Company is a **Technology & Systems Engineering** company.

Nekko Tech is not positioned as:

* a web-development agency
* a generic IT support company
* a cheap VPS reseller
* a SaaS startup
* a consumer electronics retailer
* a generic AI consultancy

## Core Offerings

1. Cloud Infrastructure
2. Embedded & Control Systems
3. IoT & Automation
4. Robotics System Design

## Engineering Principles

* Sell engineering outcomes, not components.
* Keep claims technically credible and evidence-based.
* Avoid unnecessary buzzwords.
* Prefer practical engineering language.
* Do not invent statistics, clients, testimonials, certifications, or capabilities.
* Keep the design modern, industrial, technical, precise, and engineering-led.
* Do not use generic SaaS, cyberpunk, or excessive futuristic AI aesthetics.

## Development Strategy

Do not attempt to build the entire website blindly in one pass.

Follow the project stages defined in the master specification:

1. Foundation
2. Design System
3. Visual Prototype
4. Public Website MVP
5. Cloud Product Layer
6. Client Portal
7. Integration

Before expanding the website, validate the visual direction using the Visual Prototype stage.

## Technical Stack

Use the stack defined in the master specification:

* Next.js
* TypeScript
* Tailwind CSS
* Strapi
* PostgreSQL
* Docker

## Security

* Never hardcode secrets.
* Use environment variables for credentials and API keys.
* Never commit `.env` files.
* Follow secure production practices.
* Do not expose credentials in source code, documentation, or client-side code.

## Code Quality

* Keep components reusable.
* Keep architecture understandable.
* Avoid unnecessary dependencies.
* Prefer simple solutions over unnecessary complexity.
* Maintain responsive behavior.
* Respect accessibility.
* Respect `prefers-reduced-motion`.
* Ensure production builds remain clean.

## Important

When a requirement is unclear, consult the master specification first.

Do not introduce major architectural or branding changes without considering the master specification.
