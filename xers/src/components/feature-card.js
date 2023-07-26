//import PropTypes from "prop-types";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import '../App.css'


export function TeamCard({ image, name, title, location, techStacks,description }) {

  return (
        <Card color="white" shadow={false} className="group text-center bg-amber-500 md:bg-opacity-40 inset-0">
          <CardBody className="px-8 text-center">
              <Avatar
                src={image}
                alt={name}
                size="xxl"
                className="h-24 w-24 shadow-lg shadow-gray-500/25 object-cover"
              />
              <Typography className="text-white font-bold">
                {name}
              </Typography>
              <Typography className="text-white font-bold">
                {title + ',' + location}
              </Typography>
              <Typography className="text-white">
                {description}
              </Typography>
          </CardBody>
        </Card>
  );
}

export default TeamCard;
