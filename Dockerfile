FROM gcr.io/distroless/nodejs24-debian12

WORKDIR /app

COPY dist/ dist/
COPY server/server.mjs server/
COPY server/package.json server/
COPY server/node_modules/ server/node_modules/

WORKDIR /app/server

EXPOSE 3000
CMD ["server.mjs"]