import {
    Box,
    Input,
    FormControl,
    Select,
    Card,
    Button,
    Heading,
} from "@chakra-ui/react";
import { React } from "react";
import { Link } from "react-router-dom";

const Pickup = () => {
    return (
        <>
            {/* <Box>Google map</Box> */}
            <Box pt={6}>
                <Card
                    minH={"85vh"}
                    ml={{ base: "8", md: "40" }}
                    p={2}
                    pt={9}
                    maxW={"sm"}
                >
                    <Heading fontSize="2em" px={6} pt={2} mb={6}>
                        Where can we pick you up?
                    </Heading>
                    <Box p={2}>
                        <FormControl mb={3}>
                            <Select
                                variant={"filled"}
                                placeholder="Select pick-up location"
                            >
                                <option>Auditorium</option>
                                <option>University Library</option>
                                <option>Facoms</option>
                                <option>Gymnasium</option>
                                <option>Boys Hostel</option>
                                <option>Girls Hostel</option>
                                <option>Auditorium</option>
                                <option>Twin Theatre</option>
                                <option>Convocation Arena</option>
                                <option>500 Seater</option>
                                <option>Science Education</option>
                                <option>Football Field</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={3}>
                            <Input
                                variant={"filled"}
                                placeholder="Enter your destination"
                            />
                        </FormControl>
                        <Button>
                            <Link to="/confirmbooking">Next</Link>
                        </Button>
                    </Box>
                </Card>
            </Box>
        </>
    );
};

export default Pickup;
