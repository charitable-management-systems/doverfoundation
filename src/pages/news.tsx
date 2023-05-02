import * as React from "react"
import { HeadFC } from "gatsby"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Anchor } from "../components/Anchor"
import "../styles/reset.css"
import "../styles/index.css"
import Footer from "../components/Footer"
import Section from "../components/Section"

const nameSort = (a: string, b: string): number => {
    const aLastName = a.split(" ")[1];
    const bLastName = b.split(" ")[1];
    return aLastName.localeCompare(bLastName);
}

const majors = [
    "Advertising",
    "International Relations",
    "Aerospace Engineering",
    "Journalism",
    "AgriBusiness",
    "Language and Communication",
    "Allied Health",
    "Marketing",
    "Accounting",
    "Materials Engineering",
    "Mechanical Engineering",
    "Mathematics",
    "Motorsport Engineering",
    "Mechanical Engineering",
    "Biochemical Engineering",
    "Medicine",
    "Biology",
    "Music Theater",
    "Broadcast Journalism",
    "Neuroscience",
    "Business",
    "Nursing",
    "Chemical Engineering",
    "Oceanography",
    "Chemistry",
    "Pharmacy",
    "Computer Engineering / Science",
    "Philosophical Sciences",
    "Economics",
    "Physical Therapy",
    "Education",
    "Physician Assistant",
    "Electrical Engineering",
    "Psychology",
    "English",
    "Sociology",
    "Forensic Science",
    "Sign Language Interpreting",
    "Health Science",
    "Supply Chain Management",
    "Industrial Design",
    "Writing",
]

const schools = [
    "Alma Mater Studiorum",
    "Purdue University",
    "Andrews University",
    "Randolph – Macon College",
    "Bethel University",
    "Rochester Institute of Technology",
    "Brigham Young University",
    "Rose-Hulman Institute of Technology",
    "California Lutheran University",
    "Rutgers University",
    "California State University",
    "Saginaw Valley State University",
    "Cardiff University",
    "Stanford University",
    "Carnegie Mellon University",
    "Syracuse University",
    "Carthage College",
    "Texas A&M University",
    "Christ Deemed to be University",
    "The Ohio State University",
    "Ecole Speciale Des Travaux Publics",
    "The Pennsylvania State University",
    "Elon University",
    "The University of Tennessee",
    "ETH Zurich",
    "Troy University",
    "Florida Institute of Technology",
    "Tufts University",
    "Georgia Institute of Technology",
    "Universita Degli Studi Di Napoli “L’Orientale”",
    "Illinois State University",
    "University Di Bologna",
    "Indianapolis Univ. – Purdue Univ. Indianapolis",
    "University Leiden",
    "INSA Strasbourg",
    "University of Alabama",
    "Iowa State University",
    "University of California",
    "James Madison University",
    "University of Central Arkansas",
    "Johns Hopkins University",
    "University of Central Oklahoma",
    "Longwood University",
    "University of Cincinnati",
    "L’Universite Savoie Mont Blanc",
    "University of Georgia",
    "Maastricht University",
    "University of Houston",
    "Macquarie University",
    "University of Illinois",
    "Marquette University",
    "University of Iowa",
    "Massachusetts Institute of Technology",
    "University of Michigan",
    "McGill University",
    "University of Mobile",
    "Michigan State University",
    "University of Nebraska",
    "Mississippi State University",
    "University of North Carolina",
    "Moravian University",
    "University of Texas",
    "North Carolina State University",
    "University of Utah",
    "Ohio University",
    "University of Vermont",
    "Old Dominion University",
    "University of Virginia",
    "Oral Roberts University",
    "University of Wisconsin",
];

const awardees = [
    {
        year: 2023,
        names: [
            "Aaesha Alkhalili",
            "Selvina Joseph",
            "Ishita Patel",
            "Lauren Ballinger",
            "Aakansha Khosla",
            "Jaden Paterson",
            "Kiara Brown",
            "Erine Kubinowski",
            "Noah Peterson",
            "Jacklyn Corl",
            "Dylan Lee",
            "Benjamin Rees-Inglis",
            "Andrea Simona Diacinti",
            "Natalie LeForge",
            "Lillian Ryan",
            "Timothy Dickinson",
            "Spencer McAdams",
            "Zoe Sackfield",
            "Justin Gao",
            "Gavin McMahon",
            "Yash Singh",
            "Harrison Hall",
            "Katherine Mills",
            "Minh Chan Tran",
            "Tyson Hentges",
            "Andrea Morris",
            "Kris Xiong",
            "Lydia Jang",
            "Anthony Nguyen",
            "Ilina Zavalova",
        ]
    },
    {
        year: 2022,
        names: [
            "Rebecca Basclain",
            "Joshua Grey",
            "Christine Park",
            "Mia Brown",
            "Katie Gunderson",
            "Aurora Ponisio",
            "Abbie Carlton",
            "Madisyn Hill",
            "Allison Rasch",
            "Abdullah Chandasir",
            "Gwyneth Hotaling",
            "Margeaux Rice",
            "Joon Chun",
            "Elizabeth Hutchinson",
            "Lucas Rowden",
            "Natalia Cizmarova",
            "MyTien Huynh",
            "Hailey Smarr",
            "Benjamin Collier",
            "Radhika Kitturkar",
            "Evan Stubblefield",
            "Robert Couch",
            "Nick Kocela",
            "Nikhil Verma",
            "Alice Dondarini",
            "Abigail Lane",
            "Ximena Woodhead",
            "Kendyll Fitzgerald",
            "Benjamin Olenick",
            "Vaviana Young"
        ]
    },
    {
        year: 2021,
        names: [
            "Yanrong Bao",
            "Isabelle Freyer",
            "Isabella Niedzwiecki",
            "David Bass",
            "Megan Graeler",
            "Michelle Pacheco",
            "Logan Bristle",
            "Brandon Hudson",
            "Ian Paterson",
            "Bryce Brown",
            "Caroline Kammerer",
            "Stuart Pearson",
            "Savita Chandarana",
            "Christine Le Forge",
            "Colin Pope",
            "Olivia Clever",
            "Julia Lonks",
            "Rhea Rajesh",
            "Steven Cornelius",
            "Alexandria Maharaj",
            "Matteo Rossi",
            "Auriane Duval",
            "Gregorio Marinez",
            "Thomas Thai",
            "Laura Flores Arambula",
            "Lilou Méline",
            "Brooke Ward",
            "Nicolaz Frei",
            "Halle Mok"
        ]
    },
    {
        year: 2020,
        names: [
            "Trinity Allen",
            "Kyler Gates",
            "Yelizaveta Pivnik",
            "Elsa Ayache",
            "Seth Hazlewood",
            "Carolina Riccone",
            "Kayla Baah",
            "Hariharan Jayakumar",
            "Logan Sandlin",
            "Ashley Barnett",
            "Katlyn Kramer",
            "Brandi Seawood",
            "Derek Benoit",
            "Dhiya Krupashankar",
            "Brianna Seawood",
            "Sophia Castaneda",
            "Bibiana Kudlacova",
            "Juan Serrano",
            "Riley Dunne",
            "Allison Lloyd",
            "Benjamin Slidders",
            "Maya Elhachem",
            "Olaf Lukasiewicz",
            "Alexander Stubblefield",
            "Denise Filippini",
            "Jodie Meng",
            "Cami Sturm",
            "Bethany Galang",
            "Andrew Peters",
            "Tyler Wilkins",
            "April Gao",
            "Marcos Pi Marrero",
            "John Zamborsky"
        ]
    },
    {
        year: 2019,
        names: [
            "Pranav Achanta",
            "Kelly Lindsay",
            "Eleanor Pope",
            "Ansley Bentley",
            "Matthew Lombard",
            "Julianna Potavin",
            "Collin Crimmins",
            "Rachael Longuepee",
            "Prerna Rawat",
            "Alli Essinger",
            "Santiago Lopez",
            "Evan Rose",
            "Sarah Faust",
            "Eoin McMahon",
            "Christopher Shackelford",
            "Julia Feller",
            "Alyssa Morris",
            "Joel Siew",
            "Maria Garcia Bastida",
            "Heidi Nelson",
            "Maxime Talon",
            "Richard Goo",
            "Nang Oo",
            "Gkao Mee Seng Xiong",
            "Khoa Le"
        ]
    },
    {
        year: 2018,
        names: [
            "Ryan Ambrose",
            "Clarissa Henry",
            "Jacob Sandei",
            "Marco Angeli",
            "Cary Hoarty",
            "Brandon Schulz",
            "Ashton Bowles",
            "Najifa Hossain",
            "Shashank Singuri",
            "Olivia Burleigh",
            "Victor Lai",
            "Amber Spalek",
            "Abigail Eget",
            "Logan Lainhart",
            "Vanessa Tang",
            "Léa Fiorenza",
            "Matthew Lee",
            "Alison Taulbee",
            "Rachel Foreman",
            "Ethan Mok",
            "Kylie Uy",
            "Dalton Green",
            "Ashton Rathje",
            "Haley Williams",
            "Lucy Hathaway",
            "Jeremy Victor Reyes",
            "Yi (Kimi) Xie",
            "William Hausfeld",
            "Jarrett Rozzi",
            "Shayan Zargar"
        ]
    },
    {
        year: 2017,
        names: [
            "Ann Allred",
            "Timothée DuBois",
            "Charles Nourse",
            "Jacqueline Brine-Doyle",
            "Elena Extrand",
            "Jeel Patel",
            "Karl Brine-Doyle",
            "Anna Falls",
            "Emilia Pieta",
            "Mariana Bulle",
            "Olivia Fegter",
            "Sabina Sabat",
            "Edoardo Colombari",
            "Jacob Fulmer",
            "Megan Scholz",
            "Haley Cook",
            "Dylan Hamm",
            "Kalleigh Tharp",
            "Haydon Cooper",
            "Nadia Hassan",
            "Anna Tomkinson",
            "Riley Demos",
            "Taylor Hemmesch",
            "Robert Vaughan",
            "Sierra Driver",
            "Satvik Kolluri",
            "Clifton Waters",
            "Sydney Driver",
            "Keith McBrayer",
            "Jessica Zhou",
            "Audrey DuBois",
            "Julio Navarro"
        ]
    },
    {
        year: 2016,
        names: [
            "Theresa Adams",
            "Silvia Juzová",
            "Tanner Pettit",
            "Bryce Atchison",
            "Samuel Lawson",
            "Brigham Pope",
            "Nicole Baah",
            "Erik Loyd",
            "Mason Portales",
            "Katie Clark",
            "Thiri Lwin",
            "Kara Raksin",
            "Victoria Cole",
            "Andrew Mandrell",
            "Poonam Rooprai",
            "Claire Cornell",
            "Gretchen Nelson",
            "Marissa Roseman",
            "Chandler Crimmins",
            "Vivian Nguyen",
            "Jason Taft",
            "Joseph Gray",
            "Maegan O’Brien",
            "Grant Thames",
            "William Hobart",
            "Kendyl Pettit",
            "Carlos Veltel",
            "Tahmeed Hossain",
            "Morgan Pettit"
        ]
    },
    {
        year: 2015,
        names: [
            "Alejandro Angeli Ayello",
            "Matthew Hammond",
            "Benjamin Seiss",
            "Jake Brown",
            "Emily Holland",
            "Catherine Simmons",
            "Kayla Chapman",
            "Diana Kowalski",
            "Eli Soyfer",
            "Destiny Davis",
            "Laura Kressin",
            "Kendall Spiller",
            "Inga Dudley",
            "Emily Luhn",
            "Diamond Wakim",
            "Hayley Flanigan",
            "Elizabeth Nguyen",
            "Alisha Walia",
            "Claire Foxx",
            "Miranda Nutt",
            "Justine Weber",
            "Stephen Fulmer",
            "Ethan Schulz",
            "Evan Wieczorek",
            "Mikayla Hamm",
        ]
    },
    {
        year: 2014,
        names: [
            "Julia Allred",
            "Sarah Kearney",
            "Julia Snider",
            "Evan Atchison",
            "Niti Khambhati",
            "Sydney Sturm",
            "Clare Bornstein",
            "Sang Ma",
            "Erin Sullivan",
            "Sean Card",
            "Adam Mills",
            "Daric Teske",
            "Cory Cook",
            "Anachristina Morino",
            "Annelotte van der Bent",
            "Daniel Delgado Camacho",
            "Hajo Pluess",
            "Kyle VanderHeiden",
            "Edward Gray",
            "Lauren Schwartz",
            "Ashley Williamson",
            "Edward Hathaway",
            "Tong Sha",
            "Edward Zamborsky IV",
            "Jeffrey Hatton",
            "Anna Shields",
            "Qingwan Zhang",
            "Cassie Johnson",
            "Jesse Snelling",
            "YuChen Zhang"
        ]
    },
    {
        year: 2013,
        names: [
            "Carlos Anaya",
            "Vanessa Fleites",
            "Katie McAfee",
            "Anna Anderson",
            "Claudio Galaz",
            "Molly McGarry",
            "Kelsey Boman",
            "Mithul Garg",
            "Paul Nguyen",
            "Erin Brine-Doyle",
            "Irina Gavrilova",
            "Emir Rahislic",
            "Hunter Brunges",
            "Megan Hedgecock",
            "Aaron Rosen",
            "Lauren Buehning",
            "Nicolae Iovanac",
            "Rachel Snelling",
            "Laura Burbach",
            "Kali Johnson",
            "Jeremy Sparks",
            "Christopher Burkett",
            "Reyna Joyce",
            "Jenna Spiller",
            "Katherine Burkett",
            "Judith Kindsvater",
            "Ana Sucaldito",
            "Reece Cairns",
            "Er Wynn Kok",
            "Christian Valenzuela",
            "Michaela Chandler",
            "Lexi Lane",
            "Joshua Wakefield",
            "Brendon Clough",
            "Jessica Larson",
            "Ziyu Zhang",
            "Michelle Dew",
            "Susan Leung",
            "Ivan Zlatanov",
            "James Evans",
            "Meghan Lowey"
        ]
    },
    {
        year: 2012,
        names: [
            "Sarah Ahmed",
            "Daniela Krueger",
            "Roberto Samaniego",
            "Colin Anderson",
            "Stephanie Lamb",
            "Derek Scadova",
            "Amrita Ayer",
            "Claudia Langowski",
            "Rachel Selby",
            "Shruti Barahpuria",
            "Stephanie Larson",
            "Dhwani Shah",
            "Gabriel Belluscio",
            "Natalya Leacock",
            "Justin Shields",
            "Elena Blair",
            "Angeli Ledesma",
            "Jeffrey Siwik",
            "Nicholas Brinza",
            "Janice Lee",
            "Logan Smith",
            "Kraig Brittain",
            "Joshua Makinen",
            "Katherine Stein",
            "Howard Chang",
            "Halie Marksberry",
            "Matthew Tauzer",
            "Vincent Chiang",
            "Colin Mason",
            "Katherine Taylor",
            "Clinton Cox",
            "Megan McGurn",
            "Sergio Torres",
            "Brendan DeLorenzo",
            "Gabrielle Moritz",
            "Gurinder Walia",
            "Antoinette Garcia",
            "Logan Murphy",
            "Marissa Wanee",
            "Cassandra Geniesse",
            "Derek Nelson",
            "Christopher Warren",
            "Ian Gielar",
            "John Nguyen",
            "Alexandra Weber",
            "Grace Hellweg",
            "Brian Perry",
            "Dannette Williams",
            "Stephen Hensley",
            "Krystian Pieta",
            "Sally Witt",
            "Eugene Itskovich",
            "Kelli Pittcock",
            "Lakota Wolfe",
            "Craig Jackson",
            "Katherine Price",
            "Xinling Yu",
            "Cyra Jones",
            "Ryan Ratliff",
            "Dean Zaitsoff",
            "Shikha Kahlon",
            "Joseph Restein",
            "Xiaotong Zhong",
            "Haneul Kim",
            "Kyle Rogers",
            "Jesus Zuniga",
            "Cynthia Koenigsberg",
            "Megan Ruhlach",
        ]
    },
];

const HeroText = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  right: 10px;
  padding:  8px;
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
  border: 1px solid rgba(155,155,155,0.22);
  @media (max-width: 768px) {
    position: relative;
    max-width: 100%;
    right: 0;
    bottom: 0;
  }
`

const Hero = styled.div`
  position: relative;
`

const Grid = styled.div<{total: number}>`
    display: grid;
	grid-auto-flow: column;
	grid-gap: 1px;
    grid-row-gap: 16px;
	grid-template-rows: repeat(${props => Math.ceil(props.total / 2)}, 1fr); 
    @media (min-width: 768px) {
        grid-template-rows: repeat(${props => Math.ceil(props.total / 3)}, 1fr); 
    }
`

const MarginedHeader = styled.h3`
    margin-top: 56px;
`

const renewalProcess = () => {
    return (
        <BreakpointProvider value={'large'}>
            <Header />
            <Main>
                <Hero>
                    <StaticImage
                        src="../images/scholarshipNews.jpeg"
                        alt="hero"
                        layout="fullWidth"
                    />
                </Hero>
                <Anchor id="pressReleases"/>
                <Section>
                    <h3>Press Releases</h3>
                    <p>
                        <a href="https://www.prnewswire.com/news-releases/dover-announces-the-2022-dover-scholarship-winners-and-expands-program-301535718.html?tc=eml_cleartime" target="_blank">
                            Dover announces 2022 winners and expands the scholarship program.
                        </a>
                    </p>
                </Section>
                <Anchor id="collegesAttended"/>
                <Section>
                    <h2>Scholarship recipients are pursuing many different areas of study at a variety of schools around the world.</h2>
                    <MarginedHeader>Recent Schools</MarginedHeader>
                    <Grid total={schools.length}>
                        {schools.sort().map(school => (
                            <div>{school}</div>
                        ))}
                    </Grid>
                    <Anchor id="recentMajors"/>
                    <MarginedHeader>Recent Majors</MarginedHeader>
                    <Grid total={majors.length}>                    
                        {
                            majors.sort().map(major => (
                                <div>{major}</div>
                            ))
                        }
                    </Grid>
                    <Anchor id="awardees"/>
                    <MarginedHeader>Recent Awardees</MarginedHeader>
                    {
                        awardees.map(({year, names}) => (
                            <>
                                <h4>The {names.length} recipients from the spring of {year}</h4>
                                <Grid total={names.length}>
                                    {names.sort(nameSort).map(name => (
                                        <div>{name}</div>
                                    ))}
                                </Grid>
                            </>
                        ))
                    }
                </Section>
            </Main>
            <Footer />
        </BreakpointProvider>
    )
}

export default renewalProcess

export const Head: HeadFC = () => <title>News</title>