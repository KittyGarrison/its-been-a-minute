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
- Contact card, name, photo, phone, birthday, tags, last contacted
- Daily stack, one card at a time, buttons for reach out, snooze, skip, optional swipe as enhancement
- Priority rules, birthdays this week, weeks since last contact, due follow ups
- Message starters library, short and friendly, copy to clipboard, tel link
- Notes, quick prompts, optional follow up date
- Lightweight progress, contacts reached today, this week
- Gentle guardrails, daily cap, no feed, no vanity counts
- Simple import, CSV with name, phone, birthday, tags

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
