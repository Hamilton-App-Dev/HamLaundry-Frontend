import React from "react";
import { IonBadge } from "@ionic/react";
interface EventCardProps {
    startTime: Date;
    endTime: Date;
}

const EventCard: React.FC<EventCardProps> = ({ startTime, endTime }) => {
    const currentTime = new Date();
    const startTimeDate = new Date(startTime);
    const endTimeDate = new Date(endTime);
    const isHappening =
        currentTime >= startTimeDate && currentTime <= endTimeDate;
    //use the color "primary" for happening today.
    return (
        <div className="happening">
            {isHappening && (
                <IonBadge color="secondary">Happening Now</IonBadge>
            )}
        </div>
    );
};
export default EventCard;
