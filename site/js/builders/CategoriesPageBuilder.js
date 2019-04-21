class CategoriesPageBuilder extends PageBuilder{

    static build() {
        super.build(null, Categories, CategoriesPageView, CategoriesController);
    }
}