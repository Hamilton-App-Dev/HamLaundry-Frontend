import { startTransition, useEffect, useState } from "react";
import "./EventCard.css";
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle, IonButtons,IonToolbar, IonButton, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';

interface ContainerProps {}

const testObj = [
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120002",
        name: "Tax Day Destress",
        description: "Taxes stressing you out (I know you don't do taxes)? Classes stressing you out? Come\
        to FYE DESTRESS TABLE! We have everything you need to destress, with treats from Love Bites and other\
        goodies.",
        cover_img: "",
        event_time_start: new Date("2023-04-20T14:30:00"),
        event_time_end: new Date("2023-04-20T16:30:00"),
        location: "Sadove Sun Porch, Map #26",
        food: true,
        cancelled: false
    }, 
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120003",
        name: "First Year Formal",
        description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
        gelato, and a bunch of other goodies!",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Events Barn and Annex, Map #20",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120004",
        name: "Mindfulness Club Meeting",
        description: "Come and meditate at 9PM tonight on the third floor of the chapel. As always newcomers\
        are always welcome!",
        cover_img: "",
        event_time_start: new Date("2023-04-22320:00:00"),
        event_time_end: new Date("2023-04-22T21:00:00"),
        location: "Chapel, Map #18",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120005",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120006",
        name: "Holi Celebration",
        description: "Join ICA and ASU to celebrate Holi! We'll have colors! Pichkaris! Minar! Bring your friends \
        and some clothes you'd be okay to stain with colors!",
        cover_img: "",
        event_time_start: new Date("2023-04-21T14:00:00"),
        event_time_end: new Date("2023-04-22T16:00:00"),
        location: "Bab Pav, Map #15",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120007",
        name: "Star War Pedro Pascal Show",
        description: "Pedro Pascal! Baby Yoda! Jack Black and Lizzo, because WHY NOT? May the Force be with you!",
        cover_img: "",
        event_time_start: new Date("2023-04-20T18:00:00"),
        event_time_end: new Date("2023-04-20T19:00:00"),
        location: "Sadove Basement, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120008",
        name: "First Year Formal",
        description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
        gelato, and a bunch of other goodies!",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Events Barn and Annex, Map #20",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120009",
        name: "First Year Formal",
        description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
        gelato, and a bunch of other goodies!",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Events Barn and Annex, Map #20",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120010",
        name: "First Year Formal",
        description: "Come join our first year formal! We'll be offering a photo booth, chocolate fountain, \
        gelato, and a bunch of other goodies!",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Events Barn and Annex, Map #20",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120011",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120012",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120013",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120014",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120015",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    },
    {
        id: "f2236ece-e14a-11ed-b5ea-0242ac120016",
        name: "Spring Forage",
        description: "If you're looking for something fun to do this morning to celebrate Earth Day, come\
        learn to forage! We're meeting at the Glen House at 11 - bring good walking or hiking shoes, layers, and a basket or bag.",
        cover_img: "",
        event_time_start: new Date("2023-04-22T21:00:00"),
        event_time_end: new Date("2023-04-22T23:30:00"),
        location: "Glen House, Map #10",
        food: true,
        cancelled: false,
    }
];

const card = testObj.map((data) => {
    const startTimeTrim = data.event_time_start.toString().trim().split(/[ ,]+/);
    const endTimeTrim = data.event_time_end.toString().trim().split(/[ ,]+/);
    const startTime = startTimeTrim[0] + ", " + startTimeTrim.slice(1,3).toString().replace(/,/g, ' ') + ", " + startTimeTrim[4];
    var endTime = endTimeTrim[0] + ", " + endTimeTrim.slice(1,3).toString().replace(/,/g, ' ') + ", " + endTimeTrim[4];
    if (endTimeTrim[0] === startTimeTrim[0]){
        endTime = endTimeTrim[4];
    }
    return (
        <IonCard key={data.id} className="card">
            <img alt="Silhouette of mountains" src="https://picsum.photos/400/300"/>
            <IonCardHeader>
                <IonCardTitle>{data.name}</IonCardTitle>
                <IonCardSubtitle>{data.location}</IonCardSubtitle>
                <IonCardSubtitle>{startTime} - {endTime}</IonCardSubtitle>
            </IonCardHeader>
    
            <IonCardContent>
                {data.description}
            </IonCardContent>
            <IonToolbar className="btnGroup">
                <IonButtons slot="start">
                    <IonButton className="btn" color="primary">More</IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton className="btn" color="primary">Attending</IonButton>
                </IonButtons>
            </IonToolbar>
      </IonCard>
    )
})
function EventCard() {
    return(
        <>
        <div className="container">
            {card}
        </div>
        </>
    );
}
export default EventCard;

// const EventCard: React.FC<ContainerProps> = () => {
// 	let [response, setResponse] = useState("");
// 	useEffect(() => {
// 		fetch("http://localhost:3000/")
// 			.then((response) => response.json())
// 			.then((data) => setResponse(data.msg));
// 	});
// 	return (
// 		<div className="container">
// 			<strong>{response}</strong>

// 		</div>
// 	);
// };
// export default EventCard;