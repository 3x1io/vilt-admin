- [Environment Setup](#)
  - [Install BackBox Linux](#install-backbox-linux)
  - [Install dependencies packages](#install-dependencies-packages)
  - [Install PHP & it's extensions](#install-php--its-extensions)
  - [Install MySql Server](#install-mysql-server)
  - [Install Composer](#install-composer)
  - [Install Valet Linux+](#install-valet-linux)
  - [Install PHPmyadmin](#install-phpmyadmin)

# Environment Setup

These steps make our framework development environment run perfectly and without any errors, thanks to Linux and Laravel Valet for support that

<a name="install-backbox-linux"></a>

## [Install BackBox Linux](#install-backbox-linux)

we are like to use [BackBox](https://www.backbox.org/download/) Linux it's has a lot of tools and supports our environment, so from the link we keep downloading the ISO image and putting it in USB using [Rufus](https://rufus.ie/en/) and then boot your computer into it

<hr>

<a name="install-dependencies-packages"></a>

## [Install dependencies packages](#install-dependencies-packages)

let's start by opening our terminal and updating the system to the last one, and after that install some packages

```bash
sudo add-apt-repository -y ppa:nginx/stable
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
```

```bash
sudo apt-get upgrade
```

after it finished reboot your computer and after that run this command

```bash
sudo apt-get install network-manager libnss3-tools jq xsel
```

<hr>

<a name="install-php--its-extensions"></a>

## [Install PHP & it's extensions](#install-php--its-extensions)

```bash
sudo apt install php8.0-fpm
```

```bash
sudo apt install php8.0-cli php8.0-common php8.0-curl php8.0-mbstring php8.0-opcache php8.0-readline php8.0-xml php8.0-zip php8.0-mysql php8.0-gd
```

<hr>

<a name="install-mysql-server"></a>

## [Install MySql Server](#install-mysql-server)

```bash
sudo apt-get -y install mysql-server
```

```bash
sudo mysql_secure_installation
```

use `0` for the password and use any password something like `12345678`

after the installation is finished, start MySQL server

```bash
sudo mysql
```

and on the MySQL server console use this command

```bash
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
```

```bash
mysql> FLUSH PRIVILEGES;
```

```bash
mysql> exit;
```

<hr>

<a name="install-composer"></a>

## [Install Composer](#install-composer)

```bash
sudo apt install curl
```

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```
<hr>

<a name="install-valet-linux"></a>

## [Install Valet Linux+](#install-valet-linux)

```bash
composer global require genesisweb/valet-linux-plus
```

no, you need to export Valet use

```bash
PATH="$PATH:$HOME/.composer/vendor/bin"
```

Or use the following

```bash
PATH="$PATH:$HOME/.config/composer/vendor/bin"
```

and now it will be easy to start installing valet

```bash
valet install
```

it will ask you for a password input `12345678`

<hr>

<a name="install-phpmyadmin"></a>

## [Install PHPmyadmin](#install-phpmyadmin)

the valet has been installed now, let's go and install PHPMyAdmin and link it with the .test subdomain using valet
first of all, create a folder for your sites on the home directory ~

```bash
cd ~
mkdir Sites
cd Sites
```

now we are on the Sites path, let's park this directory to be the directory of our projects

```bash
valet park
```

now any project on this directory will be auto-linked with subdomain .test, let's download PHPMyAdmin from this [link](https://www.phpmyadmin.net/) and unzip the file inside the Sites directory and rename the folder to PHPMyAdmin, after that go inside the folder and use this command

```bash
cp config.sample.inc.php config.sample.php
nano config.sample.php
```

change the line to

```php
$cfg['blowfish_secret'] = 'YK07LhNSe50vrj,HwBfb.l3gpbv;u8b7',
```

now use CTRL + x and say Y
now we will use valet to link PHPMyAdmin and secure the link with SSL

```bash
valet link
valet secure
valet open
```

now you can see the PHPMyAdmin working and you can use root as user and the password you created to MySQL to login
