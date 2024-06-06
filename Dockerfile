FROM nginx:1.17.1-alpine

COPY dist/frontendcarroapp/browser /usr/share/nginx/html

EXPOSE 80
