import Modal from "../../../components/reusable/Modal";
import {Text} from "react-native";
import {useCouchConcertsContext} from "../../../contexts/CouchConcertsContext";

function EventArtistPicker() {
    // TODO: Define the API
    let {search_for_artist_loading, search_for_artist_error, artists, searchForArtistApi} = useCouchConcertsContext();

    return (
        <Modal isLoading={search_for_artist_loading}>
            <Text className={'text-secondary text-5xl'}>Artist Picker</Text>
        </Modal>
    );
}

export default EventArtistPicker;
