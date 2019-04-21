class TransactionController extends Controller {

    edit(elements) {
        this.model.type = elements[0];
        this.model.description = elements[1];
        this.model.value = elements[2];
        this.model.date = elements[3];
        this.model.account_origin_id = elements[4];
        this.model.account_destiny_id = elements[5];
        this.model.category_id = elements[6];

        this.model.save();
    }
}