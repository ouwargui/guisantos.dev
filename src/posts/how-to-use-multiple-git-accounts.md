---
title: 'How to use multiple git accounts on the same machine'
excerpt: 'In this post I will show you how to use multiple git accounts on the same machine.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2023-06-23T23:32:00.892Z'
timeToRead: 4
author:
  name: 'Guilherme Santos'
  picture: 'https://github.com/ouwargui.png'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

Have you ever had to use multiple git accounts on the same machine? If so, you know how annoying it is to have to change the git config every time you want to push to a different account. In this post I will show you how to use multiple git accounts that will be used automatically depending on the directory you are in.

First let's review the requirements to follow this tutorial

## Requirements

- Git installed on your machine
- UNIX based system (I don't know if this works on Windows, but give it a try and tell me!)

## Step 1 - Create a new SSH key

The first step is to create a new SSH key for each account you want to use. To do this, run the following command in your terminal:

```bash
$ ssh-keygen -t ed25519 -C "<account-email>"
```

You will be asked to enter a file name for the key. You can enter any name you want to, but I strongly recommend that you use a name that you can remember later. For example, if you are creating a key for your personal account, you can use `id_personal` as the file name.

```text
Enter file in which to save the key (/Users/you/.ssh/id_ed25519): id_personal
```

After that, you will be asked to enter a passphrase. You can leave it blank if you want to, but I recommend that you enter a passphrase to make your key more secure.

```text
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

## Step 2 - Add the SSH key to your GitHub account

Now that you have created your SSH key for each account, you need to add it to GitHub. To do this, run the following command in your terminal, this will copy the key to your clipboard.

```bash
# Replace id_personal with the name you used in the previous step
$ pbcopy < ~/.ssh/id_personal.pub
```

Now go to your GitHub account settings and click on the "New SSH key" button. Enter a name for the key and paste the key you copied in the previous step.

## Step 3 - Create a SSH config file

Now that you have created your SSH keys and added them to your GitHub account, you need to create a SSH config file to tell your machine which key to use for each account. To do this, run the following command in your terminal:

If you already have a SSH config file, you can skip this step.

```bash
$ touch ~/.ssh/config
```

Now open the file you just created and add the following content to it:

```text
# Personal account
Host github.com-personal # Replace personal with the name you want to use
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_personal

# Work account
Host github.com-work # Replace work with the name you want to use
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_work
```

Now you can test to see if everything is working properly by running the following command in your terminal:

```bash
$ ssh -T git@github.com-personal # Replace personal with the name you used in the previous step
$ ssh -T git@github.com-work # Replace work with the name you used in the previous step
```

## Step 4 - Create a git config file

Now we just need to create a git config file to tell git which account to use for each directory. To do this, run the following command for each account in your terminal:

```bash
$ touch ~/.config/git/config.personal # Replace personal with the name you want to use
```

Now open the file you just created and add the following content to it:

```text
[user]
  name       = <account-name>
  email      = <account-email>

[hub]
  host = github.com
```

Now we need to tell git to use this config file for the directory we are in. To do this, run the following command in your terminal:

```bash
$ git config --global -e
```

And edit the file to add the following content to it:

```text
# You can add a default account here
[include]
  path = ./.config/git/config.personal # Replace personal with the name you used in the previous step

# You can change the account for a specific directory here
[includeIf "gitdir:**/<replace with the directory>/**/.git"]
  path = ./.config/git/config.work # Replace work with the name you used in the previous step
```

## Step 5 - Test it

Now let's clone a private repository to see if everything is working. To do this, run the following command in your terminal:

```bash
$ git clone git@github.com-personal:<account-name>/<repository-name>.git # Replace personal with the name you used in the previous step
```

Now go to the directory you just cloned and run the following command in your terminal:

```bash
$ git config user.email
```

If everything is working properly, you should see the email you used in the git config file.

## Conclusion

In this post I showed you how to use multiple git accounts on the same machine. I hope you enjoyed it and if you have any questions, feel free to reach out to me on [Twitter](https://twitter.com/eoqguih) or [Email](mailto:me@guisantos.dev)
