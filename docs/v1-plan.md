# Industry Topic Radar V1

## Goal

Validate that Hangzhou home-improvement agencies will pay for a weekly, evidence-backed topic research service that saves at least three hours of planning per merchant.

V1 succeeds only if two of three paid pilot operators renew at the standard price after four weeks.

## Customer

- **Buyer and user:** a Hangzhou agency managing content for local home-improvement merchants
- **Initial merchant segment:** one narrow home-improvement specialty per Radar Profile, such as old-home renovation
- **Primary promise:** five executable Core Opportunities every week, not guaranteed traffic, leads, or viral performance

## Scope

### Included

- Public research across Douyin, Xiaohongshu, WeChat, and an independent trend source
- Daily keyword collection and twice-weekly competitor collection
- Deduplication, clustering, scoring, and evidence checks
- Five Core Opportunities per merchant
- One Douyin, Xiaohongshu, and WeChat Channel Adaptation for each Core Opportunity
- Human review before delivery
- A read-only web brief delivered by email

### Excluded

- Platform login, customer cookies, or bypassing access controls
- Automatic publishing, commenting, or direct messaging
- Full article or finished video production
- Customer accounts, dashboards, and role management
- Enterprise WeChat integration
- Guarantees for views, engagement, enquiries, or sales

## Merchant Onboarding

Each merchant has one Radar Profile containing:

- One narrow home-improvement specialty
- Hangzhou plus up to three districts
- Five core keywords
- Up to two competitor profile links per platform, six competitors total

Names without profile links are rejected because they cannot identify a competitor reliably.

## Research Cadence

- Search each keyword on Douyin, Xiaohongshu, and WeChat once per day
- Query the trend source once per day for all five keywords
- Refresh competitor activity every Monday and Thursday
- Deduplicate previously collected material by platform content ID where available, otherwise by canonical URL and normalized title

Directory prices observed on 2026-10-20 put keyword searches at roughly USD 1.05 per merchant per week before competitor calls, language-model usage, and retries. This is a planning estimate, not a fixed cost.

## Topic Pipeline

1. Collect Public Evidence within the Radar Profile.
2. Normalize titles, descriptions, timestamps, engagement fields, source, and URL.
3. Remove exact duplicates and cluster materially similar subjects.
4. Turn each cluster into a Topic Candidate.
5. Score each Topic Candidate.
6. Reject candidates without a qualifying Evidence Set.
7. Generate an Editorial Draft from the highest-scoring candidates.
8. Have a human reviewer approve, edit, replace, or reject every proposed Core Opportunity.
9. Deliver the approved Weekly Brief.

## Scoring

Score each Topic Candidate from 0 to 100:

| Dimension | Weight | Question |
| --- | ---: | --- |
| Relevance | 30 | Does it match the merchant's specialty, location, and keywords? |
| Commercial intent | 25 | Does it address a decision that may lead to an enquiry or purchase? |
| Heat | 20 | Is interest or engagement rising recently? |
| Executability | 15 | Can the merchant create credible content with reasonable effort? |
| Competition | 10 | Is there room to add a distinct and useful angle? |

Cross-platform suitability is handled during adaptation and does not change the candidate score.

## Evidence Rule

A Core Opportunity requires an Evidence Set:

- At least two independent pieces of Public Evidence
- At least one item published or observed in the preceding seven days
- A visible source link, date, and supporting signal in the Weekly Brief

Model-generated assertions are never evidence. Candidates that fail this rule remain internal and cannot be delivered.

## Weekly Brief

The brief starts with source coverage and a short summary. Each of its five Core Opportunities contains:

1. A one-sentence opportunity judgment
2. The five scoring dimensions and total score
3. At least two evidence items with links, dates, and relevant signals
4. A merchant-specific angle
5. A Douyin title, three-second hook, and 60-second script outline
6. A Xiaohongshu title, post outline, and suggested tags
7. A WeChat title, article structure, and conversion action
8. Any factual, reputational, or saturation warning

V1 produces outlines, not complete finished content.

## Review And Delivery

- Generate the Editorial Draft by Sunday at 18:00
- Require explicit human approval by Monday at 08:30
- Never send an unapproved draft
- Email the read-only brief link at Monday 09:00
- Keep the original machine proposal and final reviewed version for quality analysis
- Let the operator manually forward the result to Enterprise WeChat

The read-only page requires no customer account. It must not be indexed and should use an unguessable link because it contains merchant strategy.

## Source Failure Policy

- Show source coverage at the top of every Weekly Brief
- Deliver with a declared Coverage Gap when at least two valid sources remain
- Never fabricate missing trends or evidence
- If fewer than two valid sources remain, postpone or credit that week's service

## Paid Pilot

- Recruit three Hangzhou home-improvement agencies
- Enrol one merchant from each agency
- Run for four weeks and deliver twelve Weekly Briefs
- Charge RMB 499 per merchant for the pilot
- After the pilot, charge RMB 699 per merchant per month or RMB 2,499 per month for five merchants

## Validation

Continue product development only when all conditions are met:

- All twelve Weekly Briefs arrive on time
- At least three of five Core Opportunities per brief are usable without major rewriting
- Each merchant publishes at least two recommended topics per week on average
- Each operator reports saving at least three hours per week
- At least two of the three operators renew at the standard price

If renewal fails, do not build Enterprise WeChat integration or a complex backend. First determine whether the failure came from source coverage, topic quality, the offer, or the chosen customer segment.

## Next Validation Step

Before building software, choose one real Hangzhou home-improvement merchant and run a seven-day concierge test manually. Record API cost, collection failures, reviewer time, accepted topics, and published topics. Use that evidence to decide what, if anything, should be automated.
