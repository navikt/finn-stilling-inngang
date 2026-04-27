FROM gcr.io/distroless/nodejs24-debian13

WORKDIR /app

COPY dist/ dist/
COPY server/ server/

WORKDIR /app/server

EXPOSE 3000
CMD ["server.mjs"]