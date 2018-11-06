# Contributing to Volentix

Thank you for wanting to help improve the Volentix community! We know that
you're anxious to get started, but there are a few things that we need to
agree on before getting started. 

Mad props to the [Atom contribution guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
of which much of this was taken.

## Table of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Volentix and Packages](#volentix-and-packages)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript & Vue Styleguide](#javascript-vue-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

## Code of conduct

This project and everyone participating in it is governed by the 
[Volentix Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected
to uphold this code. Please report unacceptable behavior to 
[abuse@volentixlabs.com](abuse@volentixlabs.com).

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question. You'll get faster results by using the resources below.

The best way to get answers to your question is through Telegram. We have a few channels:
* [Volentix](https://t.me/volentix) for anything Volentix related
* [Venue](https://t.me/VenueChat) specifically for Venue

There will also be a developer-centric channel coming soon.

## What should I know before I get started?

### Volentix and Packages

At the moment the set of Volentix repositories is fairly small, but this will grow as more
projects are added. 

* [Venue](https://github.com/Volentix/venue) - Issues with Venue as a whole; if you don't know for sure if the issue is for the client or server, open it here
* [Venue UI](https://github.com/Volentix/venue-client) - The standard webapp for Venue
* [Venue Server](https://github.com/Volentix/venue-server) - The backend services for Venue
* [Volentix.io website](https://github.com/Volentix/volentix.github.io) - [Volentix.io](https://volentix.io)
* [EZEOS](https://github.com/Volentix/ezeos) - A simple UI for testing EOS operations

## How can I contribute

### Reporting bugs

#### Before Submitting A Bug Report

* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Aatom)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

This section guides you through submitting a bug report for Volentix. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#volentix-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Volentix, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Aatom)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Specify the name and version of the browser you're using.**

### Your First Code Contribution

We follow a standard Github-style fork / code review process:

1. Find or create a [bug](#reporting-bugs) or [enhancement](#suggesting-enhancements)
2. Fork the repository
3. Create a branch for the issue
4. Make any changes needed
5. Create and submit a [pull request](#pull-request)
6. Wait for a maintainer to perform a code review
7. Wait for a committer to approve and commit the pull request.

Feel happy about improving the Volentix community!

### Pull Requests

* Clearly describe what the pull request does, what are the beneifts, and drawabacks, if any.
* Describe what testing you did to ensure there were no regressions.
* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [JavaScript & Vue](#javascript-vue-styleguide) styleguides, if appropriate
* Document new code based on the [Documentation Styleguide](#documentation-styleguide)
* End all files with a newline

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Vue Styleguide

We use [Prettier](https://prettier.io) to format code before it is commited to the repository.
At the moment the plugins to automatically run this [seems to be broken](https://github.com/Volentix/venue-client/issues/236), so contributors are encouraged to run
eslint and Prettier manually.

ESLint modules:
```
'eslint:recommended',
'plugin:vue/recommended',
'plugin:prettier/recommended'
```


VS Code users are recommended to use the 
[Visual Studio Code Market Place: Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
with these configuration settings:
```
{
  "standard.enable": false,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [ "javascript", { "language": "vue", "autoFix": true } ],
  "eslint.run": "onType"
}
```

### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).
