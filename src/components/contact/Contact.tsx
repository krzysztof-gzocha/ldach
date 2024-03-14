'use client'
import {Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import React from "react";
import Image from 'next/image'

const Contact = () => {
    return (
        <div className="h-full pt-12 bg-[#F5F5F5] px-4 xl:px-96 lg:px-16 pb-12" id="kontakt">
            <div className="font-bold text-xl lg:text-3xl sm:text-xl py-3">Masz pytania ? Skontaktuj się z nami!</div> {/* Corrected "sie" to "się" */}
            <div className="flex flex-col lg:flex-row md:flex-row gap-2">
                <div>
                    <Card className="mt-6 w-full md:w-96  lg:w-96 h-96 items-center justify-center bg-[#031533] relative">
                        <CardBody className="text-white">

                                <img src="/contact.svg" width={50} height={50} className="top-5 left-5 absolute" />

                            <Typography variant="h5" className="mb-2">
                                Adres
                            </Typography>

                            <Typography>
                                Śląsk ul.Ks.Szwedy 6b
                            </Typography>
                            <Typography>
                                Rybnik
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <div>
                    <Card className="mt-6 w-full md:w-96  lg:w-96  h-96 items-center bg-[#031533] justify-center relative text-white">
                        <CardBody>
                            <img src="/email.svg" width={50} height={50} className="top-5 left-5 absolute" />
                            <Typography variant="h5" className="mb-2">
                                Email adress
                            </Typography>
                            <Typography>
                                bzykubaczek@op.pl
                            </Typography>

                        </CardBody>
                    </Card>
                </div>

                <div>
                    <Card className="mt-6 w-full md:w-96 text-white lg:w-96  bg-[#031533] h-96 items-center justify-center">
                        <CardBody>
                            <img src="/dane-firmy.svg" width={50} height={50} className="top-5 left-5 absolute" />
                            <Typography variant="h5"  className="mb-2">
                                Dane firmy
                            </Typography>
                            <Typography>
                               NIP:4021I412
                            </Typography>
                            <Typography>
                                Number telefonu: 49324242
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Contact
