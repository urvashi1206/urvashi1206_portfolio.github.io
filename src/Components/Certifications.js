import az_badge from "./images/microsoft-certified-azure-fundamentals.png";
import unity from "./images/unity-essentials-pathway.png";
import aws from "./images/aws.png";
import sf from "./images/snowpro-core-certification.png";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";

const Certifications = () => {
    const items = [
        {
            img: unity,
            cardTitle: "Unity Essentials Pathway",
            cardText: "Issued on: <br/> June 14, 2019",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/32147826-8331-4fdb-adab-88361d2a84e6/public_url",
        },
        {
            img: az_badge,
            cardTitle: "Microsoft Certified: Azure Fundamentals",
            cardText: "Issued on: <br/> May 30, 2022",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/8d52a8d6-b0d4-4ae6-8c4d-b07c2a72d217/public_url",
        },
        {
            img: aws,
            cardTitle: "AWS Certified Cloud Practitioner 2025",
            cardText: "Issued on: <br/> July 25, 2021",
            btnText: "See Credential",
            btnUrl: "https://drive.google.com/file/d/1ZrlQy--6t-jBXbZmPBL1b0MYGPutDTOD/view?usp=drive_link",
        },
        {
            img: sf,
            cardTitle: "SnowPro Core Certification",
            cardText: "Issued on: <br/> February 14, 2022",
            btnText: "See Credential",
            btnUrl: "https://drive.google.com/file/d/1_ANYCKZ7im7iwoCOkkXkWazYVIbvf32P/view?usp=drive_link",
        },
    ];
    return (
        <section id="certifications" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Certifications</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "rgba(52, 64, 60, 0.3)",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 1)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    <br></br>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            sx={{
                                                backgroundColor: "rgb(18, 54, 54)",
                                                "&:hover": {
                                                color: "#a8d49b", // Hover text color
                                              },
                                            }}
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
