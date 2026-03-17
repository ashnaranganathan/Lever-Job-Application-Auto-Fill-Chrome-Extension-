# Lever-Job-Application-Auto-Fill-Chrome-Extension

## Overview
This project is a Chrome extension that automates job application form completion on Lever ATS job pages. The extension detects Lever application forms and automatically fills common fields such as name, email, phone number, and other inputs to reduce repetitive manual data entry.

The goal of this project was to explore browser automation in a real browser environment while avoiding human verification issues often triggered by server-side headless automation tools like Playwright.

---

## Problem
When attempting to automate job applications using headless browser frameworks such as Playwright running on cloud servers, many Applicant Tracking Systems (ATS) like Lever trigger **human verification or bot detection mechanisms**.

This occurs because:
- Headless browsers are detectable
- Cloud IP addresses appear suspicious
- Automated clicking behavior can trigger anti-bot systems

As a result, automation workflows often fail when submitting applications.

---

## Solution
Instead of performing automation purely on the server side, this project implements a **Chrome extension that runs directly in the user's browser**.

Running automation inside a real browser environment:
- Avoids headless browser detection
- Maintains normal user interaction behavior
- Prevents triggering human verification systems

The extension automatically fills form fields while leaving the final **submit action manual**, ensuring compliance with website security measures.

---

## Features
- Detects Lever job application pages automatically
- Auto-fills common fields including:
  - Full Name
  - Email
  - Phone Number
- Supports additional form elements:
  - Dropdown menus
  - Text areas
  - Checkboxes
  - Radio buttons
- Triggers resume upload dialog for quick file selection
- Works inside a real Chrome browser environment to reduce bot detection

---

## Technologies Used
- JavaScript
- Chrome Extensions API (Manifest V3)
- DOM Manipulation
- Event Dispatching for React-controlled inputs

---

## How It Works
1. The extension loads on pages matching Lever job application URLs.
2. A content script scans the page for form inputs.
3. Input labels are analyzed to identify matching fields.
4. The extension inserts predefined candidate data into the fields.
5. Input events are dispatched to ensure compatibility with React-based forms.

This allows the form to behave as if the user manually entered the information.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/lever-autoapply-extension.git
