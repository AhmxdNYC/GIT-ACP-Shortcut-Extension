(()=>{var e={286:(e,n,t)=>{function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var i=t(398),r=t(857),s=t(896),a=t(928);function c(){var e,n=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,s=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw s}}}}({darwin:[".zshrc",".zprofile",".zshenv",".zlogin",".zlogout","zshenv","zprofile","zlogin","zlogout"],linux:[".bashrc",".zshrc",".zprofile",".zshenv",".zlogin",".zlogout","zshenv","zprofile","zlogin","zlogout"],win32:[".zshrc",".zprofile",".bash_profile",".zshenv",".zlogin",".zlogout","zshenv","zprofile","zlogin","zlogout"]}[r.platform()]);try{for(n.s();!(e=n.n()).done;){var t=e.value,i=a.join(r.homedir(),t);if(s.existsSync(i))return console.log(i,"FOUND SHELL CONFIG FILE"),i}}catch(e){n.e(e)}finally{n.f()}return console.log("No shell config file found for automatic updates."),null}function m(e){return e&&s.existsSync(e)?function(e,n){var t="0.7.5",o=h(t);try{var r=s.readFileSync(e,"utf8"),a=r.match(/# ACP Version: (\d+\.\d+\.\d+)/),c=a?a[1]:"none";if(console.log("Existing version: ",c,", Current version: ",t),c!==t){var m="# BEGIN: ACP Function",l="# END: ACP Function",u=r.indexOf(m),d=r.indexOf(l,u+21);if(-1!==u&&-1!==d){d+=19;var f=r.substring(0,u),g=r.substring(d);r=f+o+g,s.writeFileSync(e,r)}else r+="\n".concat(o),s.writeFileSync(e,r);i.window.showInformationMessage("ACP CMD UPDATED: ".concat(t," in ").concat(e))}}catch(e){i.window.showErrorMessage("ERROR OCCURRED DURING UPDATE ACP: ".concat(e.message))}}(e):(console.log("Unable to find shell config file for updating: ",e),!1)}function h(e){return"\n# BEGIN: ACP Function - Git Add, Commit, Push - ACP Version: ".concat(e," - DO NOT MODIFY THIS BLOCK MANUALLY # \n# ACP Version: ").concat(e,'\nfunction acp() {\n  echo -e "Checking repository status..."\n\n  # Check if inside a git repository\n  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then\n    echo -e "\\n\\x1b[31mError: Not inside a Git repository.\\x1b[0m\\n"\n    echo "Please navigate to a directory that is part of a Git repository or initialize one with \\x1b[33m\'git init\'\\x1b[0m.\\n"\n    return\n  fi\n\n  # Check if in a detached head state\n  if ! git symbolic-ref --quiet --short HEAD; then\n    echo -e "\\n\\x1b[31mError: Repository is in a detached head state.\\x1b[0m"\n    echo "Please check out a branch to make your changes permanent."\n    return\n  fi\n  \n  # Fetch the latest changes from the remote\n\n  git fetch origin\n  local current_branch=$(git rev-parse --abbrev-ref HEAD)\n  \n  # Check if the current branch has an upstream set\n\n  if ! git rev-parse --abbrev-ref --symbolic-full-name @{u} >/dev/null 2>&1; then\n  echo -e "\n[31mError: No upstream set for the current branch \'$current_branch\'.[0m"\n  echo -e "\\nTo push and set the remote as upstream, use:"\n  echo -e "\\n\\x1b[33m\'git push --set-upstream origin $current_branch\'\\x1b[0m\\n"\n    return\n  fi\n\n  # Check if the local branch is behind, ahead, or diverged from the remote branch\n\n  local local_commit=$(git rev-parse @)\n  local remote_commit=$(git rev-parse @{u})\n  local base_commit=$(git merge-base @ @{u})\n\n  if [ "$local_commit" = "$remote_commit" ]; then\n    echo "Up-to-date with remote. No pull needed."\n  elif [ "$local_commit" = "$base_commit" ]; then\n    echo -e "\\n\\x1b[31mYour local branch is behind the remote branch.\\x1b[0m\\n"\n    echo -e "Pull required before push. Please run: \\x1b[33m\'git pull\'\\x1b[0m.\\n"\n    return\n  elif [ "$remote_commit" = "$base_commit" ]; then\n    echo "Local commits can be pushed."\n  else\n    echo -e "\\n\\x1b[33mDiverged from remote. Manual merge required & manual Git commands.\\x1b[0m\\n"\n    echo -e "Please run: \\x1b[33m\'git pull\'\\x1b[0m & \\x1b[33m\'git status\'\\x1b[0m to see conflicts and resolve them manually.\\n"\n    return\n  fi\n\n  # Add all changes, commit, and push to the remote\n\n  echo -e "Adding \\x1b[36mall\\x1b[0m changes..."\n  git add -A\n\n  if [ $# -eq 0 ]; then\n    echo -e "\\n\\x1b[31mError: No commit message provided.\\x1b[0m\\n"\n    return 1\n  fi\n\n  commit_message="$*"\n  echo -e "Committing \\x1b[36mwith\\x1b[0m message: \'$commit_message\'"\n  git commit -m "$commit_message"\n  if [[ $? -eq 0 ]]; then\n    echo "Successfully committed. Pushing \\x1b[36mto\\x1b[0m remote..."\n    git push\n    if [[ $? -eq 0 ]]; then\n      echo -e "\\n\\x1b[36mCommit Message:\\x1b[0m $commit_message\\n"\n      echo -e "\\x1b[32m----\x3e Push Successful <----\\x1b[0m\\n"\n    else\n      echo -e "\\n\\x1b[31m----\x3e Push FAILED <----\\x1b[0m\\n"\n    fi\n  else\n    echo -e "\\n\\x1b[31m----\x3e Commit FAILED <----\\x1b[0m\\n"\n  fi\n}\n\nfunction acm() {\n  # Check if inside a Git repository\n  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then\n    echo -e "\\n[31mError: Not inside a Git repository.\\x1b[0m\\n"\n    return\n  fi\n\n  echo -e "Preparing \\x1b[36mto\\x1b[0m add \\x1b[36mall\\x1b[0m changes and commit..."\n\n  # First, check if a commit message was provided\n  if [ "$#" -eq 0 ]; then\n    echo -e "\\n[31mError: No commit message provided.\\x1b[0m\\n"\n    return 1\n  fi\n\n  local commit_message="$*"\n\n\n  # Check if the HEAD is detached or the branch is valid\n  local current_branch=$(git symbolic-ref --quiet --short HEAD)\n  if [ -z "$current_branch" ]; then\n    echo -e "\\n[31mError: Repository is in a detached head state or the branch is not valid.\\x1b[0m"\n    echo "Please check out a branch to make your changes permanent.\\n"\n    return\n  fi\n\n  # Add all changes\n  git add -A\n  echo -e "\\x1b[36mAll\\x1b[0m changes added."\n\n  # Commit changes\n  echo -e "Committing with message: $commit_message"\n  git commit -m "$commit_message"\n  if [[ $? -eq 0 ]]; then\n    echo -e "\\n\\x1b[36mCommit Message:\\x1b[0m $commit_message\\n"\n    echo -e "\\x1b[32m----\x3e Commit Successful <----\\x1b[0m\\n"\n  else\n    echo -e "\\n[31m----\x3e Commit FAILED <----\\x1b[0m\\n"\n  fi\n}\n\nfunction add() {\n\n  # First, check if inside a Git repository\n  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then\n  echo -e "\\n[31mError: Not inside a Git repository.\\x1b[0m\\n"\n  return\n  fi\n\n  echo -e "\\nPreparing \\x1b[36mto\\x1b[0m add changes."\n\n  # Check if the HEAD is detached or the branch is valid\n  local current_branch=$(git symbolic-ref --quiet --short HEAD)\n  if [ -z "$current_branch" ]; then\n      echo -e "\\n[31mError: Repository is in a detached head state or the branch is not valid.\\x1b[0m"\n      echo "Please check out a branch to make your changes permanent.\\n"\n      return\n  fi\n\n  # Determine what to add based on the argument provided\n  if [ "$#" -eq 0 ]; then\n      echo "No specific files provided. Adding \\x1b[36mall\\x1b[0m changes...\\n"\n      git add -A\n  else\n      echo "Adding specified files...\\n"\n      git add "$@"\n  fi\n\n  # Confirm what has been staged\n  git status --short\n  echo -e "\\n[32mFiles have been staged. Use \\x1b[33m\'cm <message>\'\\x1b[0m to commit these changes.\\x1b[0m\\n"\n  echo -e "\\n[32mGreen = Ready for commit\\x1b[0m, \\x1b[31mRed = Not staged for commit\\x1b[0m\\n"\n}\n\nfunction cm () {\n  # First, check if inside a Git repository\n  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then\n  echo -e "\\n[31mError: Not inside a Git repository.\\x1b[0m\\n"\n  return\n  fi\n\n  # Check if a commit message was provided\n  if [ "$#" -eq 0 ]; then\n  echo -e "\\n[31mError: No commit message provided.\\x1b[0m\\n"\n  return\n  fi\n\n  local commit_message="$*"\n\n  # Check if the HEAD is detached or the branch is valid\n  local current_branch=$(git symbolic-ref --quiet --short HEAD)\n  if [ -z "$current_branch" ]; then\n  echo -e "\\n[31mError: Repository is in a detached head state or the branch is not valid.\\x1b[0m"\n  echo "Please check out a branch to make your changes permanent.\\n"\n  return\n  fi\n\n  # Commit changes\n  echo -e "Committing with message: $commit_message"\n  git commit -m "$commit_message"\n  if [[ $? -eq 0 ]]; then\n  echo -e "\\n[36mCommit Message:\\x1b[0m $commit_message\\n"\n  echo -e "\\x1b[32m----\x3e Commit Successful <----\\x1b[0m\\n"\n  else\n  echo -e "\\n[31m----\x3e Commit FAILED <----\\x1b[0m\\n"\n  fi\n}\n\nfunction cm() {\n  # First, check if inside a Git repository\n  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then\n    echo -e "\\n[31mError: Not inside a Git repository.\\x1b[0m\\n"\n    return\n  fi\n\n  # Check if a commit message was provided\n  if [ "$#" -eq 0 ]; then\n    echo -e "\\n[31mError: No commit message provided.\\x1b[0m\\n"\n    return 1\n  fi\n\n  local commit_message="$*"\n\n  # Check if the HEAD is detached or the branch is valid\n  local current_branch=$(git symbolic-ref --quiet --short HEAD)\n  if [ -z "$current_branch" ]; then\n    echo -e "\\n[31mError: Repository is in a detached head state or the branch is not valid.\\x1b[0m"\n    echo "Please check out a branch to make your changes permanent.\\n"\n    return\n  fi\n\n  # Commit changes\n  echo -e "Committing with message: $commit_message"\n  git commit -m "$commit_message"\n  if [[ $? -eq 0 ]]; then\n    echo -e "\\n[36mCommit Message:\\x1b[0m $commit_message\\n"\n    echo -e "\\x1b[32m----\x3e Commit Successful <----\\x1b[0m\\n"\n  else\n    echo -e "\\n[31m----\x3e Commit FAILED <----\\x1b[0m\\n"\n  fi\n}\n# END: ACP Function \n')}e.exports={activate:function(e){console.log('Congratulations, your extension "ACP-GIT-COMMAND" is now ACTIVE!');var n,t,o=c();o?m(o)&&i.window.showInformationMessage("ACP command was successfully updated."):(n=h("0.7.5"),t="\n\n  !!!CONTACT ME FIRST BEFORE DOING THIS IF YOU CAN AND RUN echo $SHELL.\n  Send Results to me\n\n  # Manual Installation of ACP Command\n  No shell configuration file was found or it's not accessible.\n  Please manually add the following script to your shell configuration file (e.g., .bashrc, .bash_profile, .zshrc):\n\n  ".concat(n,"\n\n  Save the file and source it to apply the changes, e.g., `source ~/.bashrc`\n  "),i.workspace.openTextDocument({content:t,language:"markdown"}).then((function(e){i.window.showTextDocument(e,{preview:!1})})),console.log("Instructions opened in a new VS Code editor tab."),i.window.showWarningMessage("No shell configuration file found. Instructions file created on desktop."));var r=i.commands.registerCommand("acp-git-commands.installACPCommand",(function(){var e=c();e?m(e)&&i.window.showInformationMessage("ACP command was successfully updated."):i.window.showWarningMessage("No shell configuration file found. Please check the instructions on your desktop.")}));e.subscriptions.push(r)},deactivate:function(){}}},398:e=>{"use strict";e.exports=require("vscode")},896:e=>{"use strict";e.exports=require("fs")},857:e=>{"use strict";e.exports=require("os")},928:e=>{"use strict";e.exports=require("path")}},n={},t=function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}(286);module.exports=t})();
//# sourceMappingURL=extension.js.map