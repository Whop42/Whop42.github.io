---
title: "LinuxConvert Devlog (Part 1)"
description: What's happened so far with LinuxConvert & what's coming next
author: whop42
tags:
    - LinuxConvert
    - Linux
    - Python
    - Go
    - Devlog
---

This is the first post in a (hopefully) long series about LinuxConvert, the project I started just about a year ago.
It's currently undergoing a complete rewrite (from Python to Golang, along with major structural improvements, such
as actual functioning testing procedures.) I hope to have this updated every 2 weeks or so, depending on what pace I actually
write the code.

---

## What is LinuxConvert?

LinuxConvert is a program that I wrote for [CSRSEF](https://centralsoundfair.org)/[WSSEF](https://wssef.org) that aims
to make the migration process for desktop users switching from Windows to Linux as painless as possible.
I've found that, for many distros, the installation process itself isn't a huge difficulty thanks to projects like the
[Calamares](https://calamares.io/) installer. However, many users still give up once they've installed the OS because
none of their familiar workflows are present, and they have to reinstall/configure/learn how to use their computer
again, which is a serious blow to productivity. From personal experience, this causes people to quit and return back
to Windows, even if they like the idea of a more private/secure/customizable OS.

I wrote LinuxConvert to fix these problems by creating an application that scans Windows for applications/settings,
packs them up into a .zip archive, and then extracts/installs them on Linux. I also ran a study on 10 normal users,
and it showed a significant increase in installation speed/ease of installation without reducing familiarity
or productivity with Linux. 

![Study findings with a graph](/images/linuxconvert-results-slide.png)

---

## What is wrong with it? (and how am I fixing it?)

Unfortunately, LinuxConvert had a lot of problems:
1. Unmaintainable code
2. No GUI
3. Only one distro supported
4. Manual testing
5. Limited application support
6. Annoying packaging process

and more...

### 1. Unmaintainable Code

LinuxConvert started its life as a simple Python script, and I never significantly refactored it from there. I, as any
student developer can relate to, wrote some real atrocities. Inconsistencies and redundancy ran rampant in the code,
which became a real problem when I eventually had to deal with adding new features (such as recommending software to
replace closed-source applications) that completely broke everything.

I'm fixing this by rewriting the whole thing from the ground up in [golang](https://go.dev), with lessons I've learned from dealing
with the Python code. Go is also more familiar to me, because I am most familiar with strongly-typed languages (mainly Java), so
leaving behind the horrendous experience of developing a large application in Python felt so, so good.

### 2. No GUI

I was naive. I thought tech-illiterate users (mainly high schoolers and random people on Reddit) could work their way around
a simple command-line application. I was wrong. The single most common complaint I received was that running something
in PowerShell was scary.

Not including a GUI was a risk I knew I was taking, but I was under a time crunch to get the study done by the time CSRSEF
came around. The rewrite is also helping to restructure the installation process into more efficient chunks (ex. bulk installing
packages from every application at once, instead of making each call the package manager) that will allow for a more interactive
experience.

### 3. Limited Distro Support

LinuxConvert only supported [EndeavourOS](https://endeavouros.org), which is a derivative of Arch Linux. I chose it because
I use Arch (btw) on my main machines, and have since I've switched to Linux myself. It also has a powerful and easy package
manager to use, which helped (not to mention the AUR.) However, this caused a few problems for users after installation, especially
if they had to deal with weird hardware or just weren't skilled enough with computers to solve problems from a forum post.

In the rewrite (I haven't gotten to this part yet, though), LinuxConvert will aim to support Debian-based distros. Testing will happen
on Debian, Ubuntu, and MX, which are some of the most popular distributions for desktop users. I could also see myself supporting some
kind of ultra-lightweight distro (Puppy Linux, maybe?) in the future. This will help with both choice of distro for users and increase
the ease of support they can get. It also means I will not have to deal so much with theming the DE to Windows standards, because I can't
support the limitless supply of Debian-based DEs, so I might as well not support any of them.

### 4. Manual Testing

To be honest, I could have fixed this one while I was writing it in the first place. However, I had never really written an application with
test-based practices, so I just ignored it. Eventually, it got out of hand while I was writing scripts for all of the applications that
needed to be installed. Testing every application individually whenever I wanted to release something just wasn't feasible, so I let a few
bugs slip into production.

This will be really complex to solve, and will probably take a lot of time. Because LinuxConvert installs and scrapes applications from
full-blown OSs, this will need to involve some sort of VM infrastructure (and will probably be a blog post or two in itself.) I'll need to
write tests for each application to make sure its settings are being properly transferred, and this will need to be run headlessly for
release purposes. If you have experience with something like this (especially if it's with Golang, please [reach out to me](/#contact), it
would be greatly appreciated.)

### 5. Limited Application Support

This was more of a time-based issue than anything because each application needs to have functions for finding configurations on Windows
and installing them on Linux. I was able to support about 40 applications in my final build, which is a lot, but not enough to catch less
common software. 

I'm currently considering writing some way for unsupported applications to be allowed in LinuxConvert (through Wine or something similar),
which could cut down on some of the work and allow users to install more software. This will likely be added post-release, if ever.

### 6. Annoying Packaging Process

Building/packaging binaries with Python is a mess. It's one of the biggest reasons I switched to go (with its easy, single-binary, cross-platform builds.)

---

## The Timeline for the Rewrite

This is a _very_ loose (and ambitious) timeline. School will probably completely derail this, so don't get your hopes up.

- Mid-late August 2023: Base with testing on Windows/Linux VMs complete
- Early-mid September 2023: GUI complete
- Late September 2023: Package support back up to pre-rewrite levels, merged into the main branch
- October 2023: Wine support?
- December 2023: 200 applications supported
- January 2024: Marketing material (website, social media) up and running, along with a contribution guide
- March 2024: Redo study?
- June 2024: Hopefully have enough other contributors to focus on building userbase

I'll only be working a few hours/week on this during the school year, so expect heavy delays.

---

## Conclusion

I hope to continue development on this project until it becomes actually useful for a lot of people, as I set out
to change Linux use for the better.

I'd like to thank all of the people who helped me on this project, from my teachers, CSRSEF/WSSEF judges, and especially
my mentor (although I will not give their names out of privacy concerns.)

Until next time,

whop42