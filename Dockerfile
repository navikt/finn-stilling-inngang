FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /var

COPY dist/ dist/
COPY server/ server/

WORKDIR /var/server

EXPOSE 3000
CMD ["server.mjs"]