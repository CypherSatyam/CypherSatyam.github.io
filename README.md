First repository

this repositor was built when I was learning vscode from w3 schools
So I am trying to get more out of this course
below are the steps :

 
 first we need to install git 
 
 then open the command shell and check git --version to get the version of the installed git
 
 then tell who you are git config --global user.name "name"
 git config --global user.email "email"
 
 git add --all to push the changes to the staging
 git commit -m "message" to commit the data to local repository
 
 
 git command --help or -help to check what are the possiblities for command
 git help --all to check all the commands
 
 git branch branch-name to create new branch 
 git branch to get the list of branches
 
 
 git checkout -b bracnh name to create and checkout banch in same time
 
 
 
 git merge branch name first we need to go to the main branch then we need to run the command
 
 
 git branch-d branch name to delete the branch
 
 git checkout branch name to go from one branch to another branch
 git branch to see all the branches

then create an folder to initialize git that will result in making a repository
mkdir foldername
git init


git remote add origin URL TO ADD A REMOTE REPOSITORY AS AN ORIGIN TO OUR LOCAL REPO

git push --set-upstream origin branch name  when we have to push any branch to the remote repository


git fetch origin to know what has exactly changed on the github


then git status to know what is the status of the local repository

after that we can voiew the log by git log origin/master to see more details what has exactly changed

we can also compare by seeing the differences git diff origin/master


now we can merge out current branch with origin/master branch
git merge origin/master
