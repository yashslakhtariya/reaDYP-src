<div align="center">
  <h1>ReaDYP : For deep readers</h1>
<img src="https://github.com/yashslakhtariya/reaDYP/assets/98678102/2f1ad606-7e6b-411b-8b42-27f95cc32db7">
</div>

## Overview

ReaDYP is a cross-platform book-recommendation system helping users to get ebook reading recommendations.The application is built with the power of latest technologies like angular, nodejs, mongodb to make the inter-communication more stable and reliable. Along with it, powerful containerisation technology using docker here makes ReaDYP platform independent.

## Features
- User Friendly UI
- Genre based book recommendations
- User Account Integration
- Ease of Use
- Personalised user readlist
- Explore trending ebooks
- Google Books Integration
- AuthorVerse for your favourite authors
- Detailed descriptions of ebooks
- Faster responses
- Platform independent containers

## Minimum Hardware Requirements

- Processor - SLAT supported x64 processor
- RAM : 4 GB
- Free Space - 1.2 GB

## Minimum Software Requirements

- OS : Windows 10 / MacOS BigSur / Linux x64 distribution (arm64 may or may not work)
- Virtualization : Windows Hyper-V / LXC / QEMU / libvirt
- Docker Engine : v20.10
- Docker Compose : v2.20
- Docker Desktop : v4.22 (optional)
- Browser : Any Chromium v108 based browser / Firefox 109 / Webkit based browser  

## Installation

1. Clone this repository in your desired directory
```
git clone https://github.com/yashslakhtariya/reaDYP-src.git
cd reaDYP-src
```
2. Ensure docker is running and run (**_docker-compose_** or **_docker compose_** as per docker installation)
```
docker-compose up -d
```
3. To run the application, visit http://localhost:4200/ in your browser.
<br>

> Note : If 4200 port is not available in your system, change it in `ports : <yourport>:4200` in `frontend` section of `docker-compose.yml` file.

## Contact me
For any queries or feedback, contact me : yashlakhtariya@outlook.com
