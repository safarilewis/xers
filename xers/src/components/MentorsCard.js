import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function MentorsCard({ name, title, description, cohort }) {
    return (
        <Card color="white" shadow={false} className="group text-center bg-zinc-600 md:bg-opacity-40 inset-0">
            <CardBody className="px-8 text-center">
                <Typography className="text-white font-bold">
                    {name}
                </Typography>
                <Typography className="text-white font-bold">
                    {title}
                </Typography>
                <Typography>
                    {cohort}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
        </Card>
    )
}
