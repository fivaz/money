<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="">Money</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <a class="nav-item nav-link" href="">Accounts</a>
            <a class="nav-item nav-link" href="categories">Categories</a>
        </div>
    </div>
    <form class="form-inline my-2 my-lg-0" action="logout">
        <div class="px-3"><?= Auth::name() ?></div>
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
            logout <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
    </form>
</nav>

<div class="container">

    <input type="hidden" class="ajax" value="nothing">