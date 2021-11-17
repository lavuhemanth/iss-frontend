import { Icon } from '@iconify/react';
import circleSmall from '@iconify/icons-mdi/circle-small';

function LocationMarker({ lat, lng }) {
    return (
        <div className="location-mark">
            <Icon icon={circleSmall} className="location-icon"></Icon>
        </div>
    )
}

export default LocationMarker
