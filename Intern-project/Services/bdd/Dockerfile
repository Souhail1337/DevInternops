FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD msdapassword
COPY my.cnf /etc/mysql/conf.d

COPY init/ /docker-entrypoint-initdb.d/
RUN chmod -R 755 /docker-entrypoint-initdb.d
