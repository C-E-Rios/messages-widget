class HomeController {

    constructor ($timeout, invitationService) {
        'ngInject';
        this.$timeout = $timeout;
        this.invitationService = invitationService;
    }

    $onInit () {
        this.getInvitations();

        // Simulate updating the list from BE.
        this.$timeout(() => {
            this.loading = true;
        }, 10000)
        .then(() => {
            return this.$timeout(() => {
                this.updateInvitations();
                this.filter = {};
                this.loading = false;
            }, 2000)
        });
    }

    getInvitations () {
        return this.invitationService.getInvitations()
            .then((data) => {
                this.invitations = data.invites;
                return this.invitations;
            });
    }

    updateInvitations () {
        return this.invitationService.updateInvitations()
            .then((data) => {
                this.invitations = data.invites;
                return this.invitations;
            });
    }

    onSelect (filter) {
        for (var prop in filter) {
            if (angular.isArray(filter[prop]) && !filter[prop].length) {
                filter[prop] = undefined;
            }
        }
    }

    strictFilter (expected, actual){
      return actual.indexOf(expected) > -1;
    };

}

export default HomeController;
