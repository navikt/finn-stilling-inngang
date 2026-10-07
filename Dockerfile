ARG BASEIMAGE=europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24
FROM ${BASEIMAGE}

WORKDIR /app

COPY dist/ dist/
COPY server/ server/

WORKDIR /app/server

EXPOSE 3000
CMD ["server.mjs"]