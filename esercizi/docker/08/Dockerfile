FROM alpine
RUN apk update && apk add nodejs
COPY app/index.js /app/index.js
ENTRYPOINT ["node", "/app/index.js"]
