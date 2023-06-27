FROM mongo:6

ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD password

COPY init-scripts/ /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD ["mongod"]
