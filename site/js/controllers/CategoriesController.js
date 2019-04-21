class CategoriesController extends Controller {

    static get childClass() {
        return Category;
    }

    static get childControllerClass() {
        return CategoryController;
    }

    static get childViewClass() {
        return CategoryRowView;
    }
}