# It’s Been A Minute, hackathon proposal

## Concept
Facilitate connection to loved ones by removing friction, replace attention-stealing feeds with quick, intentional nudges.

## Goals
- Address the object permanence effect, in a world of thousands of connections we forget important people exist
- Build habits with gentle motivation, not pressure
- Reduce decision load for ADHD and busy brains

## Core promise
Open the app, see one person, reach out with a ready starter, capture a quick note, repeat a few times, feel connected.

## Core flow
- Daily batch of 5 cards
- reach out (swipe Right) copies a starter, opens phone link on mobile, marks last contacted
- skip (swipe Left) small cooldown
- snooze,(swipe Up) return on a chosen date
- After five, show a great job screen, small link, keep going

## MVP scope, hackathon
- Contact card: 
    - Info: Name, Birth date, Phone number, Last contact date, Follow-up date, Photo, Notes (FF), Context tags (FF)
    
    - Buttons: Snooze, Contact, Cancel
- Tapping the Connect cta button triggers a flip animation with card flip (thwipp) sound
- The card turns over, the photo shrinks and shows the ctas:
    - copy starter prompt, 
    - open SMS
    - initiate a call – initiate a call (hot link)
    - snooze / skip / done
- Resting spot screen (?)
- "Great Job" Screen. "You reconnected today", "Keep Going" (optional) (after you meet your minimum, a congratualtions (think perfect tile placement in Dorfromantik)
- Contact import from CSV (google has csv export support for all users) 
- Draw from a deck of cards: one chunk at time. number of cards at a time before a resting spot screen
- Contact management: narrow down from many. Multiple skips, remove, suggestion, notification
- Daily stack, one card at a time, buttons for reach out, snooze, skip, optional swipe as enhancement
- Priority rules, birthdays this week, weeks since last contact, due follow ups
- Message starters library, short and friendly, copy to clipboard, tel link
- Notes
- Quick prompts. Easy copy convo prompt ex. "its been a min.. source
- Gentle guardrails, daily cap, no feed, no vanity counts
- Simple import, CSV with name, phone, birthday, tags
- Animation of your deck of contacts being shuffled then presented

## Forward Features Out of MVP Scope:
- Follow up date
- Lightweight progress, contacts reached today, this week, stats and badges page
- Check in streak
- Mini-game: 4 hidden contact cards, choose one to reach out to!
- Every interaction leaves a small thread — a note, memory, or quote — that you can revisit later
- Notes on Person. Title, Content, Reminder(?)
- Calendar integration. when events/birthdays come up on the calendar, have a reminder/notice in the app
- Context Tags: with context view that filter cards. Examples: phone call, text, importance, birthday(?)
- Themes: light mode/dark mode, seasonal, user custom
- Undo Button in Card (brings back last swiped card)

## Feature Notes
- One decision at a time
    - Clear next action, copy, call, or snooze
    - Faster momentum, finish five cards, see progress
    - Narrow user flow

## Edge cases and fairness
- If a card repeats often, add a cooldown and push it back
- If the user skips three in a row, surface a softer card next, birthday proximity, recent notes, easier channel
- Snooze removes the card from today and returns it on the selected date at the top of the batch
- A logic focused teammate can later learn from outcomes to tune these choices

## Motivation design
- Streak counter, visible on home, grace day to prevent all or nothing drop offs
- Badges, celebrate milestones, first 5 days, first 10 contacts, birthday week hero, on time follow ups
- Private by default, progress helps the user, not social comparison

## Privacy and guardrails
- Intentional use window, small daily batch, finish in minutes
- No public timelines, no likes, no public leaderboards
- Clear export path for user data when ready, CSV for contacts and notes, ICS for follow ups

## Success measures
- Daily batch completion rate
- Reach out conversions, copied message or phone tap
- Weekly unique contacts touched
- On time follow ups completed

## Demo plan
- Import a small CSV of sample contacts with birthdays
- Show birthday card first, copy “it’s been a while, how are you” starter, tap phone link
- Add a note, ask about Spain trip, set follow up in two weeks
- Complete five cards, show great job screen, small keep going link

## Roles for the hackathon
- Front end, implements one at a time flow, cards, buttons, notes, streaks and badges UI, accessibility
- Back end, supports contact data, notes, simple prioritization, follow up scheduling, imports
- Logic focused role, tunes priority rules, defines softer card signals, manages cooldown and skip streak behavior
- QA and accessibility, test flows, keyboard paths, copy accuracy, edge cases
- Data wrangler, prepares sample CSVs, realistic birthdays and tags, anonymized examples
- Note keeper, captures decisions, copy for labels and starters, meeting notes, change log
- Presentation writer, condenses the story, slides and talking points, timing for the demo
- Story writer, frames the user problem, before and after narrative, scripts demo flow
- Platform and or CI or CD planning and setup, basic environments, data seeding, deploy steps, demo reset plan
- Timekeeper and facilitator, keeps scope tight, calls trade offs, protects the demo path

## Open questions
- Exact daily cap, is five the right default
- Starter tone, how many to include on day one
- Follow up defaults, date shortcuts, today, next week, two weeks
- Badge names and thresholds, keep uplifting, avoid pressure

## Google contact model
First Name,Middle Name,Last Name,Phonetic First Name,Phonetic Middle Name,Phonetic Last Name,Name Prefix,Name Suffix,Nickname,File As,Organization Name,Organization Title,Organization Department,Birthday,Notes,Photo,Labels,E-mail 1 - Label,E-mail 1 - Value,E-mail 2 - Label,E-mail 2 - Value,E-mail 3 - Label,E-mail 3 - Value,Phone 1 - Label,Phone 1 - Value,Phone 2 - Label,Phone 2 - Value,Address 1 - Label,Address 1 - Formatted,Address 1 - Street,Address 1 - City,Address 1 - PO Box,Address 1 - Region,Address 1 - Postal Code,Address 1 - Country,Address 1 - Extended Address,Address 2 - Label,Address 2 - Formatted,Address 2 - Street,Address 2 - City,Address 2 - PO Box,Address 2 - Region,Address 2 - Postal Code,Address 2 - Country,Address 2 - Extended Address,Relation 1 - Label,Relation 1 - Value,Website 1 - Label,Website 1 - Value

## Tech Stack
Backend
Python
pandas: data manipulation library
Fast API, uvicorn(server)
google-API-python-client
Docker for deployment
Google Contacts API
API link: https://developers.google.com/people/v1/contacts

* What are we building with? 
    * HeroUI: https://www.heroui.com/
        * An established UI framework that'll give us basic components. i.e. buttons, accordions.
        * Focus on accessibility - lots of it is baked in, check the component props.
    * TailwindCSS: https://tailwindcss.com/
        * Enables customization of the Hero components
        * ex site utilizing HeroUI https://myjobquest.io 
    * NextJS: https://nextjs.org/
        * A full stack provider. Made by Vercel and is the React framework. 
        * Will this work with planned backend? @Ciara Williams 
        * React with TS
            * React is the UI framework.
            * TypeScript is a programming language.
        * enables integration with vercel
    * Context API (state management): https://react.dev/reference/react/useContext
    * Vercel: https://vercel.com/