class AccountPageBuilder extends PageBuilder{

    static build(object) {
        super.build(object, Account, AccountPageView, AccountController);
    }
}