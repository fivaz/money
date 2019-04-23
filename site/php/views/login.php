<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/04/2019
 * Time: 18:32
 */
?>

<?php require("header.php") ?>

<div class="container">

    <input type="hidden" class="ajax" value="nothing">

    <div class="container login-container">
        <div class="row justify-content-center">
            <div class="col-md-6 login-form-2">
                <h3>Login to Money</h3>
                <form>
                    <div class="form-group">
                        <input id="email" type="text" class="form-control" placeholder="Your Email *"
                               value=""/>
                    </div>
                    <div class="form-group">
                        <input id="password" type="password" class="form-control" placeholder="Your Password *"
                               value=""/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Login"/>
                    </div>
                    <div class="form-group">
                        <a href="register" class="ForgetPwd">Don't have an account? Register </a>
                    </div>
                    <div id="error-msg" class="p-3 bg-danger text-white">Your username or/and your password was/were incorrect.</div>
                </form>
            </div>
        </div>
    </div>

    <script src="site/js/services/loginPerformer.js"></script>

    <?php require("footer.php") ?>


