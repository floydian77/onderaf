FROM php:7.2-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev zlib1g-dev mysql-client libpng-dev gnupg \
    --no-install-recommends \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-install zip \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo_mysql \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && curl -o- -L https://yarnpkg.com/install.sh | bash