function generateAddress({artist, guest, venue, event, invite, invited = false}) {
    let address = ''
    if (artist) {
        if (artist.city) {
            address = artist.city + ', ';
        }
        if (artist.state) {
            address = address + artist.state;
        }
    } else if (guest) {
        if (guest.city) {
            address = guest.city + ', ';
        }
        if (guest.state) {
            address = address + guest.state;
        }
    } else if (venue) {
        if (venue.city) {
            address = venue.city + ', ';
        }
        if (venue.state) {
            address = address + venue.state;
        }
    } else if (event) {
        if (invited) {
            address = event.displayAddress;
        } else {
            if (event.city) {
                address = event.city + ', ';
            }
            if (event.state) {
                address = address + event.state;
            }
        }
    } else if (invite) {
        if (invite.displayAddress) {
            address = invite.displayAddress;
        }
    }
    return address;
}

export default generateAddress;
