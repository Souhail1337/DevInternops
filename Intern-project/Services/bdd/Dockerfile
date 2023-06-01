FROM debian:buster

RUN apt update -y
RUN apt upgrade -y
RUN apt install mariadb-server -y
RUN apt install -y ufw  iptables 
RUN ufw allow 3306
COPY srcs/conf conf 
COPY srcs/script.sh /script.sh