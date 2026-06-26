# Lead Generation Form

A clean, professional lead capture form built with React, connected to an n8n automation workflow for lead processing.

🔗 **Live Demo:** [lead-generation-crm-automation-n8n.vercel.app](https://lead-generation-crm-automation-n8n.vercel.app)

---

## Overview

This project is the **frontend lead capture layer** for an automated CRM pipeline. When a visitor submits the form, their data is sent via a `POST` request to an **n8n Webhook**, which then triggers a workflow to:
- Store the lead (e.g., in a database, Google Sheets, or CRM)
- Send notification/confirmation emails
- Route the lead to a sales pipeline

The form itself is intentionally minimal-dependency — built with plain React + CSS (no UI framework), styled in a professional **black, grey, and white** theme with a split-screen branding layout. 

---

## ✨ Features

- Professional split-screen UI with branding panel
- Fully responsive — works on desktop & mobile
- Loading state and success confirmation screen
- Connected to n8n for automated lead capture
- Easily themeable via CSS variables-style structure in `App.css`

---

## Tech Stack

React (Vite) · n8n · Vercel

---

## Project Structure

Lead Generation Form/

├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.jsx          # Main form component & logic
│   ├── App.css          # All styling (theme: black/grey/white)
│   ├── index.css        # Global resets
│   └── main.jsx          # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

---

### Prerequisites

- **Node.js** (v18 or higher recommended) — [Download here](https://nodejs.org/)
- **npm** (comes bundled with Node.js)
- **Git** installed and configured
- An active **n8n instance** (cloud or self-hosted) with a Webhook node set up

---

### Install Dependencies

```bash
npm install
```

This installs React, Vite, and all dependencies listed in `package.json`, including:

```bash
npm install lucide-react
```
(already included in `package.json`, but listed here for reference — used for form icons)

---

## Environment / Webhook Configuration

The form sends submitted data to an n8n Webhook URL, which is currently set directly inside `src/App.jsx`:

```js
const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/lead-capture';
```

---

### To point this form to your own n8n instance:

1. Open `src/App.jsx`
2. Locate the `N8N_WEBHOOK_URL` constant
3. Replace it with your **n8n Webhook Production URL**, for example:
```js
   const N8N_WEBHOOK_URL = 'https://your-n8n-domain.com/webhook/lead-capture';
```
4. Save the file

> ⚠️ **Important:** A `localhost` webhook URL will only work on your own machine while your local n8n instance is running. For the deployed (live) version of this form to work for real visitors, your n8n instance must be publicly accessible (hosted on a server, n8n Cloud, or exposed via a tunneling service like ngrok).

---

## Run Locally

```bash
git clone https://github.com/RanaBilal69/Lead-Generation-CRM-Automation-n8n.git
cd Lead-Generation-CRM-Automation-n8n
npm install
npm run dev
```

---

## 📋 Form Fields

- **Full Name*** 
- **Email Address***
- **Phone Number***
- Company Name (optional)
- Message (optional)

*required

---

## 📦 Deployment

Hosted on **Vercel**, with automatic redeployment on every push to `main`.


## Author

**Rana Bilal** — [GitHub](https://github.com/RanaBilal69)