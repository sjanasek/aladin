FROM gitpod/workspace-mongodb

# package for downloading the databases from google drive
RUN pip install gdown
RUN npm i -g @vue/cli