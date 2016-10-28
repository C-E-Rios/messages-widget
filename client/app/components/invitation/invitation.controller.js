class InvitationController {

    constructor() {
    }

    $onInit () {
        this.icon = this.mapIcon();
    }

    mapIcon () {
        const vector = this.invitation.vector;
        const iconMap = {
            twitter: 'Twitter',
            call_received: 'Internal',
            email: 'Email'
        };

        let icon;

        Object.entries(iconMap).map((key) => {
            vector === key[1] ? icon = key[0] : null;
        });

        return icon;

    }
}

export default InvitationController;
