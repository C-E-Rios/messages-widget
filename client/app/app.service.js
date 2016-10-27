class Invitations {

    constructor ($http) {
        'ngInject';
        this.$http = $http;
    }

    getInvitations() {
        return this.$http.get('invitations.json')
            .then(getInvitationsComplete)
            .catch(getInvitationsFailed);

        function getInvitationsComplete(response) {
            return response.data;
        }

        function getInvitationsFailed(error) {
            console.error('XHR Failed for getInvitations.' + error.data);
        }
    }

    updateInvitations() {
        return this.$http.get('invitations_update.json')
            .then(updateInvitationsComplete)
            .catch(updateInvitationsFailed);

        function updateInvitationsComplete(response) {
            return response.data;
        }

        function updateInvitationsFailed(error) {
            console.error('XHR Failed for updateInvitations.' + error.data);
        }
    }

}

export default Invitations;
