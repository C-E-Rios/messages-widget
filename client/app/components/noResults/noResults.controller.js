class NoResultsController {

    constructor () {
        'ngInject';
        this.name = 'noResults';
    }

    resetFilters () {
        this.home.filter = {
            sender_id: undefined,
            sender: undefined,
            vector: undefined
        };
    }
}

export default NoResultsController;
