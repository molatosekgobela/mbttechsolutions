#backgorund OS for container
FROM node:15.13-alpine 
WORKDIR /mbttechsolutions
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]