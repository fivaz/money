class HomeController extends Controller {

    static get childClass() {
        return Account;
    }

    static get childControllerClass() {
        return AccountController;
    }

    static get childViewClass() {
        return AccountRowView;
    }
}