import React from "react";

import Card from "./Card";
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container mb-5">
                <div className="row gy-4">
                    <div className="col-md-4 col-10 mx-auto">
                        <Card
                            imgsrc="http://source.unsplash.com/400x300/?apple"
                            title="Card title 1"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, fugiat magni exercitationem dolor quod cumque
                                    perspiciatis debitis voluptate quidem cupiditate praesentium doloribus illum aperiam harum amet deleniti,
                                    reprehenderit dolorum."
                        />
                        <Card
                            imgsrc="http://source.unsplash.com/400x300/?mango"
                            title="Card title 2"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, fugiat magni exercitationem dolor quod cumque
                                    perspiciatis debitis voluptate quidem cupiditate praesentium doloribus illum aperiam harum amet deleniti,
                                    reprehenderit dolorum."
                        />
                        <Card
                            imgsrc="http://source.unsplash.com/400x300/?kiwi"
                            title="Card title 3"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, fugiat magni exercitationem dolor quod cumque
                                    perspiciatis debitis voluptate quidem cupiditate praesentium doloribus illum aperiam harum amet deleniti,
                                    reprehenderit dolorum."
                        />
                        <Card
                            imgsrc="http://source.unsplash.com/400x300/?happy"
                            title="Card title 4"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, fugiat magni exercitationem dolor quod cumque
                                    perspiciatis debitis voluptate quidem cupiditate praesentium doloribus illum aperiam harum amet deleniti,
                                    reprehenderit dolorum."
                        />
                        <Card
                            imgsrc="http://source.unsplash.com/400x300/?family"
                            title="Card title 5"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, fugiat magni exercitationem dolor quod cumque
                                    perspiciatis debitis voluptate quidem cupiditate praesentium doloribus illum aperiam harum amet deleniti,
                                    reprehenderit dolorum."
                        />
                        <Card
                            imgsrc="http://source.unsplash.com/400x300/?Shraddha"
                            title="Card title 6"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est, fugiat magni exercitationem dolor quod cumque
                                    perspiciatis debitis voluptate quidem cupiditate praesentium doloribus illum aperiam harum amet deleniti,
                                    reprehenderit dolorum."
                        />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Service;