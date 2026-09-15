FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24

WORKDIR /app

COPY dist/ dist/
COPY server/ server/

WORKDIR /app/server

EXPOSE 3000
CMD ["server.mjs"]