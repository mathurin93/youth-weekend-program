# Youth Weekend Program — RYM 2026

**Redeemed Youth Ministry • Unmasked & Unfiltered • October 16–17, 2026**

This is a complete, mobile-friendly digital event program built with **HTML, CSS, Tailwind CDN, and vanilla JavaScript**. It has a full-screen welcome cover, fixed bottom navigation (no hamburger menu), animated tap-friendly buttons, Friday and Saturday schedules, food menu, event information, and a social-sharing preview image. **No React, npm, build, or terminal required.**

## Easiest way to publish on GitHub — no Terminal

1. Create a **new public GitHub repository** named `rym-youth-weekend` at https://github.com/new. Leave **Add a README**, **.gitignore**, and **license** unchecked. (If you already created it with that name, use the existing one.)
2. **Unzip** `youth weekend program.zip` on your Mac.
3. Open the **youth weekend program** folder, **select the files and the `assets` folder inside it**, then drag them into the GitHub repository's **Add file → Upload files** page. Upload the contents, not the enclosing folder.
4. Scroll down and click **Commit changes**.
5. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, then choose **main** and **/(root)**. Click **Save**.
6. After GitHub Pages deploys, your address will be:
   https://mathurin93.github.io/rym-youth-weekend/

**IMPORTANT:** The filename on GitHub must be `/index.html`, not `/youth weekend program/index.html`, or GitHub Pages won't find the home page. There is **no `.git` directory in this package**, avoiding the old local Git history and merge problems.

## What is included

| File | Purpose |
| --- | --- |
| `index.html` | Welcome cover, five-tab layout, metadata for WhatsApp/Facebook and other social links |
| `app.js` | Friday program, Saturday program, food menu, event info, navigation, share button |
| `styles.css` | Mobile app styling, animations, responsive design, accessible reduced-motion support |
| `manifest.webmanifest` | Installable-app metadata |
| `sw.js` | Offline-friendly asset cache, with online-first updates |
| `assets/youth-weekend.jpg` | Original Unmasked & Unfiltered flyer |
| `assets/cupcake-fundraiser.jpg` | Original RYM fundraiser artwork |
| `assets/rym-social-preview.jpg` | 1200 × 630 social sharing image |
| `assets/icon.svg` | Browser/tab and app icon |

## What's in the program

- **Friday, October 16, 2026:** 7:30–8:45 PM, 9 program items.
- **Saturday, October 17, 2026:** 11:00 AM–2:45 PM, 18 program items.
- **Menu:** Jerk chicken, BBQ fried chicken, rice and peas, white rice, macaroni salad, coleslaw.
- **RYM cupcakes:** Cookies & Cream, Biscoff, Carrot, Chocolate, Red Velvet, Vanilla; **$3 each**.
- **Location:** Church of God Sabbath Keeping Ministries, 6 Westwyn Court, Brampton, Ontario.

Schedules are adapted from your supplied planning documents; backstage production instructions were intentionally left out of the visitor-facing website. Meal prices were not provided and are not invented.

## WhatsApp, Facebook, and iMessage previews

The HTML already includes your real GitHub account and project URL:

- Website: https://mathurin93.github.io/rym-youth-weekend/
- Preview image: https://mathurin93.github.io/rym-youth-weekend/assets/rym-social-preview.jpg

**Make sure your new repository is named exactly `rym-youth-weekend`** to keep these links working. Renaming the *local folder* to `youth weekend program` does not change the public website address.

When the site is online, open the preview image URL in a browser. Social services may cache old previews; Meta's Sharing Debugger at https://developers.facebook.com/tools/debug/ can request a new scrape.

## To edit later

Update `index.html`, `styles.css`, or `app.js` directly on GitHub using the pencil (Edit file), then commit the edit. For a revised file from your Mac, use **Add file → Upload files** in the same repo and confirm that the existing filename is being replaced. You do not need to use the Mac terminal.
