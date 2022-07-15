# Octagon: your favorite source for the UFC

## Overview

Octagon is a website dedicated to those who are fans of the Ultimate Fighting Championship, which an organization that coordinates the most Mixed Martial Arts events within the industry. With this site you can do the following:

- Check who is within the top 15 of the UFC's ranking system currently
- Look at the upcoming Fight Nights and PPV events that are scheduled
- Research fighters and related topics within a built-in search engine

This site was made for the casual fan in mind. There are a variety of MMA organizations out there that are considered just as worthy, but I devoted my project on UFC only since that is what beginners are typically drawn towards.

## Technologies

This website was built using vanilla Javascript, CSS, and HTML.

I also utilized 3 APIs, which were:

1. Wikipedia API - https://www.mediawiki.org/wiki/MediaWiki
2. Sports Data API from Rapid API - https://rapidapi.com/sammeyerson16/api/sports-data3/
3. Current UFC Rankings API from Rapid API - https://rapidapi.com/giolandicho/api/current-ufc-rankings/

## Installation

In order to check out this website, you will have to clone this repo and then obtain an API key from [Rapid API](https://rapidapi.com/hub). Using that API key, go to the rankings.html and schedule.html files and place it on line 1, replacing the "config.RAPID_API_KEY" variable to the right of the equals sign with your key in quotes like so:

`const rapidKey = "12345key"`

## Accredation

In this project I used a photo that was under a Creative Commons Attribution 2.0 license, so I will place the text to credit them below:

By Lee Brimelow - cropped from DSC_0029, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=2690137

## More Information

If you want to find out more about what went behind this whirlwind of a project, check out my DEV article [here](https://dev.to/hargroa2/i-just-created-my-first-frontend-project-29l2).
