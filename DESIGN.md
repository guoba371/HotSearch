---
name: Industry Topic Radar
description: An evidence-led editorial operations system modeled on a site inspection ledger.
colors:
  paper: "#f3f0e8"
  paper-deep: "#e9e4d9"
  white: "#fbfaf6"
  ink: "#20231f"
  muted: "#6a6c64"
  line: "#cbc6b9"
  line-dark: "#aaa596"
  review-red: "#b43b2f"
  review-red-dark: "#8f2d25"
  confidence-green: "#2f6c50"
  warning-amber: "#8a6220"
typography:
  display:
    fontFamily: "Noto Serif SC, serif"
    fontSize: "clamp(28px, 3.2vw, 48px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "0"
  headline:
    fontFamily: "Noto Serif SC, serif"
    fontSize: "23px"
    fontWeight: 700
    letterSpacing: "0"
  title:
    fontFamily: "Noto Serif SC, serif"
    fontSize: "19px"
    fontWeight: 700
  body:
    fontFamily: "Noto Sans SC, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "normal"
rounded:
  square: "0"
  circle: "50%"
spacing:
  xs: "7px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "34px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "38px"
  button-primary-hover:
    backgroundColor: "{colors.review-red-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "38px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "38px"
  nav-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0 12px"
    height: "42px"
  approval-action:
    backgroundColor: "transparent"
    textColor: "{colors.review-red}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "38px"
  evidence-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "24px"
---

# Design System: Industry Topic Radar

## Overview

**Creative North Star: "The Site Inspection Ledger"**

Industry Topic Radar feels like a field inspector's working ledger translated into a precise digital operations surface. Warm paper, near-black ink, one-pixel rules, numbered evidence photography, and tabular measurements make every recommendation feel checked, recorded, and ready for human judgment.

The system is light, dense, and low-motion. Editorial serif headings establish hierarchy; utilitarian sans-serif copy keeps operations readable; monospaced labels turn scores, evidence counts, and status data into measurements. Review red marks decisions and urgency, while confidence green is reserved for verified coverage and completed states.

**Key Characteristics:**

- Warm paper and off-white working surfaces rather than cool dashboard chrome.
- Flat, rule-led composition with square controls and almost no decorative elevation.
- Evidence appears before recommendation, and review state remains explicit.
- High desktop density that preserves task order and legibility when stacked on mobile.
- Photography is documentary evidence: numbered, labeled, and slightly desaturated.

## Colors

The palette behaves like ink, paper, proofing marks, and field-status notation rather than a conventional software theme.

### Primary

- **Review Red:** The scarce action color for approval controls, pending counts, trend emphasis, focus outlines, and the brand mark.
- **Deep Review Red:** The primary-action hover state, giving committed actions a darker proofing-mark response.

### Secondary

- **Confidence Green:** Verified sources, completed review states, coverage values, and system-health indicators.
- **Warning Amber:** Honest coverage warnings and attention states that do not imply failure.

### Neutral

- **Ledger Paper:** The page ground and default operating canvas.
- **Pressed Paper:** Tracks, inactive timeline nodes, scroll tracks, and quiet hover surfaces.
- **Sheet White:** Fixed navigation and evidence-panel surfaces.
- **Inspection Ink:** Primary text, active navigation, filled actions, and the final delivery band.
- **Muted Graphite:** Secondary copy, captions, and supporting metadata.
- **Ledger Rule / Dark Ledger Rule:** One-pixel divisions, table structure, and stronger section boundaries.

**The Scarce Red Rule.** Review red marks a decision, a live trend, or a pending condition; it is not a general decorative accent.

**The Status Is Semantic Rule.** Green means verified or complete, amber means incomplete coverage, and neither is used for ornament.

## Typography

**Display Font:** Noto Serif SC (with generic serif fallback)  
**Body Font:** Noto Sans SC (with generic sans-serif fallback)  
**Label/Mono Font:** IBM Plex Mono (with generic monospace fallback)

**Character:** The serif face carries editorial judgment and merchant identity; the sans-serif face carries task content; the mono face makes evidence, scores, timestamps, and statuses read as recorded measurements.

### Hierarchy

- **Display** (700, fluid 28-48px, 1.12): The weekly inspection title only.
- **Headline** (700, 23px): Major workflow sections.
- **Title** (700, 19px): Opportunity titles, brand identity, and compact editorial headings.
- **Body** (400, 12px): Operational copy and descriptions; mobile normalizes small supporting copy to this readable floor.
- **Label** (500, 10px): Counts, statuses, timestamps, ranks, source facts, and short tabular annotations.

**The Three Voices Rule.** Serif expresses judgment, sans-serif explains the work, and mono records the evidence. Do not interchange them for novelty.

## Layout

Desktop uses a fixed 68px top bar and a fixed 224px sidebar around a centered workspace capped at 1320px. Sections are broad horizontal bands divided by one-pixel rules rather than independent floating cards. Repeated section padding is 34px, with denser 16-24px internal spacing for rows and evidence panels.

The first viewport prioritizes the active merchant, weekly title, opportunity status, evidence totals, source coverage, and a direct route into review. Dense grids make comparisons fast: metric strips use four equal tracks, opportunity rows reserve stable columns for rank, image, summary, score, and action, and split operational areas use proportionate columns.

At 1050px, wide metric and profile grids reflow without changing task order. At 760px, navigation becomes a drawer, split layouts stack, controls reach a 44px minimum touch height, and supporting text rises to a 12px readable floor. The evidence hierarchy remains rank, image, recommendation, score, then action.

**The Bands, Not Cards Rule.** Organize the workspace with full-width sections and ruled rows; reserve bordered surfaces for real evidence groups and controls.

## Elevation & Depth

The system is flat by default. Depth comes from tonal paper changes, one-pixel borders, fixed chrome, and overlapping drawer behavior rather than stacked shadows. The only structural shadow belongs to the open mobile navigation drawer; the only glow is the restrained pulse around a live status dot.

### Shadow Vocabulary

- **Drawer Separation** (`14px 0 30px rgba(32,35,31,.14)`): Separates the open mobile navigation from the workspace.
- **Live Status Pulse** (`0 0 0 5px rgba(47,108,80,.12)` at its peak): Signals active collection without moving layout.

**The Flat Ledger Rule.** Resting content surfaces do not float. Use rules and tonal contrast before considering shadow.

## Shapes

The form language is square, measured, and architectural. Buttons, navigation states, panels, segmented controls, images, and avatars use hard corners. Circles are reserved for status dots and timeline nodes, where their compact geometry communicates state rather than softness.

Borders are one pixel and functional. Documentary images are tightly clipped into fixed rectangles, with dark evidence labels pinned over the lower edge.

**The Circle Means State Rule.** Circular geometry belongs to statuses and sequence markers, never to general containers or action buttons.

## Components

### Buttons

- **Shape:** Square and compact, with a one-pixel border and 38px minimum desktop height; key mobile actions rise to 44px.
- **Primary:** Inspection Ink fill with Sheet White text and 15px horizontal padding.
- **Hover / Focus:** Primary hover shifts to Deep Review Red; keyboard focus uses a two-pixel Review Red outline with a three-pixel offset.
- **Secondary:** Transparent fill with Inspection Ink border; hover introduces a Sheet White surface.
- **Approval:** Transparent with Review Red border and text; hover reverses to a solid Review Red proofing mark. Approved state switches to a non-button Confidence Green stamp.
- **Disabled:** Opacity falls to 46%, interaction uses a not-allowed cursor, and disabled controls do not acquire an enabled hover state.

### Segmented Controls

- **Style:** A two-pixel inset frame inside a Dark Ledger Rule border.
- **State:** Unselected options remain transparent; the selected option is filled with Inspection Ink and Sheet White text.

### Cards / Containers

- **Corner Style:** Square throughout.
- **Background:** Sheet White only when a grouped evidence or metric surface requires contrast from Ledger Paper.
- **Shadow Strategy:** None at rest; use the flat ledger depth rules.
- **Border:** One-pixel Ledger Rule, strengthened to Dark Ledger Rule for list starts and control frames.
- **Internal Padding:** 16-24px depending on row density; major section rhythm remains 34px.

### Navigation

Navigation is quiet and text-led. Default items use Muted Graphite; hover introduces Ledger Paper and Inspection Ink; the active item becomes an Inspection Ink bar with Sheet White text. Counts are monospaced. On mobile, the sidebar becomes a left drawer with a 44px close target.

### Opportunity Rows

The opportunity row is the signature inspection record. It combines a monospaced rank, fixed evidence photograph, platform and trend metadata, serif recommendation title, evidence trail, large mono score, and an explicit approval action. Approval updates in place so the row, queue, and delivery lock communicate one shared state transition.

### Status Timeline

Timeline nodes are circular because they encode progress. Completed nodes use Confidence Green, the active review node uses Review Red, and future nodes remain Pressed Paper with a Ledger Rule outline. A one-pixel vertical rule preserves sequence without ornamental illustration.

## Do's and Don'ts

### Do:

- **Do** put evidence, coverage, and source status before recommendations.
- **Do** use one-pixel rules, tonal paper shifts, and stable columns to structure dense information.
- **Do** keep approval, pending, complete, warning, and disabled states explicit in text as well as color.
- **Do** preserve the task sequence and evidence hierarchy when responsive layouts stack.
- **Do** use documentary images as labeled evidence, with restrained saturation and fixed crops.

### Don't:

- **Don't** introduce gradients, glass effects, decorative shadows, or floating section cards.
- **Don't** round buttons, panels, images, or navigation items; circles are reserved for status and sequence.
- **Don't** turn Review Red or Confidence Green into broad decorative themes.
- **Don't** use marketing-page heroes, feature pitches, or oversized display type inside this operating surface.
- **Don't** imply approval, source completeness, or delivery readiness through color alone.
