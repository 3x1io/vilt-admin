- [CI/CD](#cicd)

# CI/CD

it's time to add your project to the github, so after you finish every edit, please go on this step.

first, create a branch with your name.

```bash
git checkout -b YOUR_NAME
```

add a new updates

```bash
git add .
git commit -m "YOUR TASK"
git push origin YOUR_NAME
```

after you are ready to merge the task to the main use

```bash
git checkout main
git merge YOUR_NAME
```
