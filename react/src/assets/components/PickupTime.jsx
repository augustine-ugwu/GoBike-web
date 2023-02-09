import { React } from "react";
import {
    Box,
    Input,
    Text,
    FormControl,
    Card,
    Button,
    Heading,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const PickupTime = () => {
    return (
        <>
            <Box pt={6}>
                <Card
                    minH={"85vh"}
                    ml={{ base: "8", md: "40" }}
                    p={2}
                    maxW={"sm"}
                >
                    <Link to="/">
                        <ArrowBackIcon ml={2} mt={2} fontSize={18} />
                    </Link>
                    <Heading fontSize="2em" px={6} pt={2} mb={6}>
                        When do you want to be picked up?
                    </Heading>
                    <Box p={2} px={12}>
                        <FormControl mb={3}>
                            <Input
                                variant={"filled"}
                                placeholder="Enter pickup date"
                                type={"date"}
                            />
                        </FormControl>
                        <FormControl mb={3}>
                            <Input
                                variant={"filled"}
                                placeholder="Enter pickup time"
                                type={"time"}
                            />
                        </FormControl>
                    </Box>
                    <Box p={6}>
                        <ul>
                            <li>
                                <Text mb={3} fontWeight={600}>
                                    Choose your pick-up time up to 30 days in
                                    advance
                                </Text>
                            </li>
                            <li>
                                <Text mb={3} fontWeight={600}>
                                    Extra wait time included to meet your ride
                                </Text>
                            </li>
                            <li>
                                <Text mb={3} fontWeight={600}>
                                    Cancel at no charge up to 60 minutes in
                                    advance
                                </Text>
                            </li>
                        </ul>

                        <Link>
                            <Text fontWeight={600} decoration={"underline"}>
                                See Terms
                            </Text>
                        </Link>
                    </Box>
                    <Button maxW={"sm"} mt={"auto"} bottom={"0"}>
                        Confirm
                    </Button>
                </Card>
            </Box>
        </>
    );
};

export default PickupTime;
