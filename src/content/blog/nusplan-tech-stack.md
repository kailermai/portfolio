---
title: "NUSPlan — Why we chose this tech stack"
description: The reasoning behind choosing Flutter, Firebase, and Python FastAPI for NUSPlan.
tags: [project, flutter, firebase, orbital]
order: 3
---

## General Structure

To build our mobile application, we used Flutter for our frontend, accompanied by Firebase as our backend and database. Deployment was done through APK distribution, as deploying on the app store for both iOS and Android is a paid feature.

We also used Python FastAPI to build a separate backend service to handle API calls to the Google Gemini AI model, mainly for our AI study plan feature. We hosted the backend on Heroku to allow our backend service to be accessible at all times.

We maintained two separate GitHub repositories — one for our main application with Flutter and Firebase, and another for our backend FastAPI service.

*Screenshot of our main repository hosting our mobile application*
![NUSPlan main repository](/assets/default/nusplan-main-repo.png)

*Screenshot of our backend repository for Python FastAPI*
![NUSPlan backend repository](/assets/default/nusplan-backend-repo.png)

## Why Flutter?

Initially, we were deciding between React Native and Flutter. We decided to go with Flutter for various reasons.

### 1. Familiarity with Java

As we had just completed a course (CS2030S) at NUS that uses Java extensively, we felt more comfortable working with programming languages that had syntax similar to Java. Flutter fit the criteria, and we could apply the OOP concepts we learnt from the course while exploring a new programming language.

### 2. New programming language

While we wanted to stick to a language that wasn't too foreign, we also wanted to learn something new. I had worked with React Native while participating in the DSTA BrainHack hackathon previously, so I wanted to try something different. Interestingly, while sourcing for a tech stack, my YouTube algorithm kept recommending Flutter tutorials, which pushed us further towards it.

### 3. Flutter developer features

Flutter provides many features that make development smoother. We could use Android Studio with Flutter to easily emulate the app in real-time. Coupled with Flutter's hot reload feature, any changes to the code are immediately reflected on the emulator, making live UI changes easier to view. Flutter also supports cross-platform development, giving us the option to deploy on iOS in the future.

## Why Firebase?

We debated between a SQL and NoSQL database, but eventually decided on Firebase as it was more flexible for our needs.

### 1. NoSQL database

We settled on a NoSQL database as it handles data with more flexibility. We did not have a very specific plan for our application in the initial stages, and were open to adding and removing features with each milestone. Firebase let us easily add different fields to our database without planning schemas and tables up front — time we could instead spend building the actual application.

### 2. Compatibility with Flutter

Most tutorials available online were based on using Flutter with Firebase, which made our learning process easier. The Firebase package for Flutter provided an easy way to integrate Firebase, meaning we could handle both frontend and backend logic in Dart without maintaining separate services.

## Why Python FastAPI?

We wanted to create a backend service to handle our API calls as quickly as possible, since it was only needed to handle calls for our AI study planner feature and to hide our API keys. We opted for Python's FastAPI as it has very little boilerplate code and is easy to set up. Hosting on Heroku was also very simple, deploying with just a Git CLI command.
