# Money

## About
This app is a app for managing your finances, you can control many accounts and transfer money between them, so it can be used for domestical purposes but also for a big institution.

## Design Patterns
In this app I use several design patterns as:

* MVC
* Publisher/Subscriber
* Router
* Proxy
* ORM

## No Frameworks
I created this app to prove to myself I could created a whole app without using any framework, this app contains my own implementation of important features of some frameworks like JQuery and Laravel.

### List of features:

#### JQuery
* $("<tag">) and $("css selector") of JQuery
* node.show() and .hide();
* $.post sending JSON
* etc.

#### Laravel
* Router with path params
* MVC 
* Eloquent ORM
* database config file
* middleware of authetification for some routes

#### Node.js
* EventEmitter 

#### Moment.js
* now
* formatDate in European/South American format or English format
* etc.

***But I do use Bootstrap and FontAwesome***

### Important
I have a .htaccess file in this page but I can't upload it on github. Anyway, the code is right below.

RewriteEngine on
RewriteCond $1 !\.(css|js|gif|jpe?g|png) [NC]
RewriteRule (.*) routes.php [QSA,L]