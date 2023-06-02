FROM debian:buster 
RUN apt update -y
RUN apt upgrade -y
RUN apt -y install php php7.3-fpm 
RUN apt install nginx -y
RUN apt install openssl
RUN mkdir /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/C=MA/ST=SRAGHNA /L=Benguerir /O=UM6P/OU=Cluster/CN=sel-fcht.42.fr/emailAddress=admin@sel-fcht.42.fr.com"
COPY Configuration/default /etc/nginx/sites-available/

CMD ["nginx", "-g", "daemon off;"]