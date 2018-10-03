# Docker

Setup development environment.

```
$ cd docker
$ cp .env.example .env

$ sudo docker-compose up -d [--build]
```

Laravel.

```
$ composer install
$ yarn install
$ cp .env.example .env
$ php artisan key:generate
```

Import SQL dump.

```
$ mysql -h 127.0.0.1 -u <user> -p <database-name> < onderaf.sql
```