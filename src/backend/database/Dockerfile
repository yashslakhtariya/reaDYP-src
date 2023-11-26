FROM mysql:latest

# ENV MYSQL_ROOT_PASSWORD=rdyp

ENV MYSQL_DATABASE=reaDYP_users

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 3308