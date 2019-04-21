class CategoryController extends Controller {

    edit(elements) {
        this.model.name = elements[0];
        this.model.save();
    }
}