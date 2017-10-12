FROM node:8.6.0

RUN mkdir -p /opt/app
WORKDIR /opt/app

# custom entrypoint
COPY ./entrypoint.sh /
RUN chmod 777 /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
