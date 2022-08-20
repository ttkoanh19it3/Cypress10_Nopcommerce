#Cypress
FROM cypress/included:10.4.0
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install --force
RUN npx cypress verify