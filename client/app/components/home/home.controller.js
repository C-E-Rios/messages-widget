class HomeController {

    constructor ($timeout, invitationService) {
        'ngInject';
        this.name = 'home';
        this.$timeout = $timeout;
        this.invitationService = invitationService;
        this.filter = {
            sender_id: undefined,
            sender: undefined,
            vector: undefined
        };
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
                this.filter = {
                    sender_id: undefined,
                    sender: undefined,
                    vector: undefined
                };
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

}

export default HomeController;
