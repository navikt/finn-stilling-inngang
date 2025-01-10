FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /var

COPY dist/ dist/
COPY server/ server/

WORKDIR /var/server

EXPOSE 3000
CMD ["server.mjs"]