# mtchlvr hotel

A local-development hotel reservation management system with a luxury matcha-inspired interface.

## Technology
- Java 21 and Spring Boot
- Maven
- SQLite
- HTML, CSS, and JavaScript
- Thymeleaf templates
- SMTP email for OTP and notifications
- Groq API for the customer-facing hotel chatbot
- Google reCAPTCHA for login protection

## Current development status
This repository is being built in stages. The initial commit establishes the Java 21 / Spring Boot foundation and safe local configuration. Reservation, account, manager, email, and chatbot features will be added and tested in subsequent stages.

## Requirements
- JDK 21
- Maven 3.9+
- Git

## Configure local environment
Copy `.env.example` to `.env` for reference, then set the listed values as environment variables in your terminal or Codespaces Secrets. Never commit real API keys, SMTP passwords, OTPs, or production credentials.

The app uses a local SQLite database file. It is intended for local development and is not configured for public deployment.

## Run
From the repository root, set Java 21 and run:

```bash
mvn spring-boot:run
```

Open http://localhost:8080.

## Security notes
- Do not store real secrets in source files or commit a populated `.env`.
- Manager authentication must be checked on the server, not only hidden in the interface.
- A reservation must be checked for time overlap on the server before it is saved.
- Pending reservations are intended to block overlapping bookings.
- A 30-minute cleaning buffer is required after checkout.
