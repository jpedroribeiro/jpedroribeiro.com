---
title: "What's the deal with renaming files in Git?"
date: "2016-06-11"
tags: ["git"]
---

If you try **renaming** a file in your project, you might notice this weird behaviour when checking its **status**: `\$ git status On branch master Your branch is up-to-date with 'origin/master'.

Changes not staged for commit: (use "git add/rm ..." to update what will be committed) (use "git checkout -- ..." to discard changes in working directory)

deleted: README.md

Untracked files: (use "git add ..." to include in what will be committed)

README-NEW.md

no changes added to commit (use "git add" and/or "git commit -a")`

## Why is this happening?

The short answer is: **Git** relies on **names** to know if whether a file is **tracked** or not. When you rename a file, [Git](http://jpedroribeiro.com/tag/git/) believes the original file got deleted and suddenly there's a new file in which it knows nothing about. Hence the _untracked_ status.

## Alternative: rename with Git

If you want to avoid this behaviour, you could simply use the native [Git](http://jpedroribeiro.com/tag/git/) command: _git mv_ `$ git mv README.md README-NEW.md $ git status On branch master Your branch is up-to-date with 'origin/master'.

Changes to be committed: (use "git reset HEAD ..." to unstage)

renamed: README.md -> README-NEW.md`

Nice and easy.
