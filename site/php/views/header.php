<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 19/02/2019
 * Time: 23:25
 */
?>

<html lang="EN">

<head>

    <meta charset="UTF-8">
    <title>Money</title>
    <base href="/money/">

    <script src="site/js/builders/PageBuilder.js"></script>
    <script src="site/js/builders/HomePageBuilder.js"></script>
    <script src="site/js/builders/AccountPageBuilder.js"></script>
    <script src="site/js/builders/CategoriesPageBuilder.js"></script>

    <script src="site/js/helpers/dateHelper.js"></script>
    <script src="site/js/helpers/myJQuery.js"></script>
    <script src="site/js/services/DataSync.js"></script>
    <script src="site/js/services/EventEmitter.js"></script>

    <script src="site/js/controllers/Controller.js"></script>
    <script src="site/js/controllers/HomeController.js"></script>
    <script src="site/js/controllers/AccountController.js"></script>
    <script src="site/js/controllers/TransactionController.js"></script>
    <script src="site/js/controllers/CategoriesController.js"></script>
    <script src="site/js/controllers/CategoryController.js"></script>

    <script src="site/js/views/View.js"></script>
    <script src="site/js/views/PageView.js"></script>
    <script src="site/js/views/RowView.js"></script>
    <script src="site/js/views/HomePageView.js"></script>
    <script src="site/js/views/Account/AccountForm.js"></script>
    <script src="site/js/views/Account/AccountPageView.js"></script>
    <script src="site/js/views/Account/AccountRowView.js"></script>
    <script src="site/js/views/Transaction/TransactionForm.js"></script>
    <script src="site/js/views/Transaction/TransactionView.js"></script>
    <script src="site/js/views/Category/CategoryForm.js"></script>
    <script src="site/js/views/Category/CategoryRowView.js"></script>
    <script src="site/js/views/CategoriesPageView.js"></script>

    <script src="site/js/models/Model.js"></script>
    <script src="site/js/models/Parent.js"></script>
    <script src="site/js/models/Home.js"></script>
    <script src="site/js/models/Account.js"></script>
    <script src="site/js/models/Transaction.js"></script>
    <script src="site/js/models/Categories.js"></script>
    <script src="site/js/models/Category.js"></script>

    <link rel="stylesheet" href="site/css/all.css" type="text/css">
    <link rel="stylesheet" href="site/css/row.css" type="text/css">
    <link rel="stylesheet" href="site/css/home.css" type="text/css">
    <link rel="stylesheet" href="site/css/account.css" type="text/css">
    <link rel="stylesheet" href="site/css/transaction.css" type="text/css">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>

</head>

<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="">Money</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <a class="nav-item nav-link" href="">Accounts</a>
            <a class="nav-item nav-link" href="/money/categories">Categories</a>
        </div>
    </div>
</nav>

<div class="container">

    <input type="hidden" class="ajax" value="nothing">