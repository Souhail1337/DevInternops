FROM debian:buster 
RUN apt update -y
RUN apt update -y
RUN Apt install redis-server -y
COPY tools/setup.sh .
RUN chmod +x setup.sh
EXPOSE 6379
CMD sh setup.sh