FROM node:16.15.0-bullseye

RUN yarn global add @angular/cli
RUN ng config -g cli.packageManager yarn; \
    git config --global init.defaultBranch main; \
    git config --global user.name "KOZAKI Tsuneaki"; \
    git config --global user.email "kozaki.tsuneaki@gmail.com"

COPY ./vscode.extensions ./vscode_extentions_install_batch.sh /tmp/
RUN chmod +x /tmp/vscode_extentions_install_batch.sh

CMD ["node"]