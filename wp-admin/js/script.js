const welcomeScreen = document.getElementById('welcomeScreen');
const proceedButton = document.getElementById('proceedButton');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');

let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "What are the primary objectives of the Artemis II mission?",
        choices: [
            "a) To land astronauts on the Moon",
            "b) To test the Orion spacecraft's systems in deep space",
            "c) To explore Mars",
            "d) To study asteroids"
        ],
        correctAnswer: 1
    },
    {
        question: "How will Artemis II contribute to NASA's long-term goal of sending astronauts to Mars?",
        choices: [
            "a) By landing astronauts on Mars",
            "b) By testing deep space systems and operations",
            "c) By conducting lunar landings",
            "d) By studying the Earth's atmosphere"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the planned launch vehicle for the Artemis II mission?",
        choices: [
            "a) Falcon 9",
            "b) Space Launch System (SLS)",
            "c) Delta IV",
            "d) Ariane 5"
        ],
        correctAnswer: 1
    },
    {
        question: "How many astronauts are expected to be on board the Artemis II mission?",
        choices: [
            "a) One",
            "b) Two",
            "c) Four",
            "d) Six"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the expected duration of the Artemis II mission, including time in lunar orbit?",
        choices: [
            "a) A few hours",
            "b) Several days",
            "c) Several weeks",
            "d) Several months"
        ],
        correctAnswer: 2
    },
    {
        question: "What will Artemis II primarily test during its mission?",
        choices: [
            "a) Agricultural systems",
            "b) Deep space travel technology",
            "c) Oceanography instruments",
            "d) Communication satellites"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the key purpose of Artemis II's lunar orbit trajectory?",
        choices: [
            "a) To conduct a lunar landing",
            "b) To test Mars rover technology",
            "c) To perform a lunar flyby and gather data",
            "d) To mine lunar resources"
        ],
        correctAnswer: 2
    },
    {
        question: "What safety measure is in place for emergencies during Artemis II?",
        choices: [
            "a) Teleportation technology",
            "b) Abort systems to return the crew to Earth",
            "c) Giant trampolines on the Moon",
            "d) Inflatable lunar shelters"
        ],
        correctAnswer: 1
    },
    {
        question: "Does Artemis II involve any international collaboration?",
        choices: [
            "a) No, it's a solely NASA mission",
            "b) Yes, it includes collaboration with multiple countries",
            "c) Only with Russia",
            "d) Collaboration details are classified"
        ],
        correctAnswer: 1
    },
    {
        question: "How will data and findings from Artemis II be used?",
        choices: [
            "a) To improve weather forecasting",
            "b) To refine and prepare for future Artemis missions, including lunar landings",
            "c) To develop new video games",
            "d) To search for extraterrestrial life"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main goal of Artemis II's lunar flyby?",
        choices: [
            "a) To land on the Moon and conduct experiments",
            "b) To test communication systems",
            "c) To collect lunar surface samples",
            "d) To gain experience in lunar operations"
        ],
        correctAnswer: 3
    },
    {
        question: "Which space agency is responsible for the Artemis program?",
        choices: [
            "a) ESA (European Space Agency)",
            "b) CNSA (China National Space Administration)",
            "c) NASA (National Aeronautics and Space Administration)",
            "d) ISRO (Indian Space Research Organisation)"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary spacecraft used for the Artemis II mission?",
        choices: [
            "a) Dragon",
            "b) Soyuz",
            "c) Orion",
            "d) Starship"
        ],
        correctAnswer: 2
    },
    {
        question: "In what year was the Artemis program officially announced by NASA?",
        choices: [
            "a) 2015",
            "b) 2017",
            "c) 2019",
            "d) 2021"
        ],
        correctAnswer: 2
    },
    {
        question: "Which component of the Space Launch System (SLS) is responsible for carrying the crewed Orion spacecraft?",
        choices: [
            "a) Core Stage",
            "b) Solid Rocket Boosters",
            "c) Launch Abort System",
            "d) Upper Stage"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the name of the planned lunar gateway that Artemis missions will use as a staging point for lunar exploration?",
        choices: [
            "a) Lunar Station Alpha",
            "b) Gateway Station",
            "c) Lunar Orbital Platform-Gateway (LOP-G)",
            "d) Lunar Habitat One"
        ],
        correctAnswer: 2
    },
    {
        question: "Which region of the Moon is the primary target for Artemis lunar landings?",
        choices: [
            "a) North Pole",
            "b) South Pole",
            "c) Equatorial regions",
            "d) Far side of the Moon"
        ],
        correctAnswer: 1
    },
    {
        question: "What type of spacecraft will be used for the lunar landings in the Artemis program?",
        choices: [
            "a) Space Shuttle",
            "b) Orion",
            "c) Lunar Module",
            "d) Mars Rover"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary scientific focus of Artemis missions on the lunar surface?",
        choices: [
            "a) Studying Martian geology",
            "b) Conducting experiments in lunar caves",
            "c) Investigating water ice and lunar resources",
            "d) Collecting meteorites"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the expected duration of Artemis III, the mission following Artemis II, which aims to land astronauts on the Moon?",
        choices: [
            "a) A few hours",
            "b) Several days",
            "c) Several weeks",
            "d) Several months"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the Artemis Accords, which has been associated with the Artemis program?",
        choices: [
            "a) A set of principles for international cooperation in space exploration",
            "b) A lunar currency for trade",
            "c) A series of books about lunar exploration",
            "d) An international space treaty"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT one of the Artemis program's key objectives?",
        choices: [
            "a) To establish a sustainable human presence on the Moon",
            "b) To develop new propulsion technologies",
            "c) To prepare for human missions to Mars",
            "d) To conduct scientific research on the Moon"
        ],
        correctAnswer: 1
    },
    {
        question: "What will Artemis II's astronauts primarily focus on while in lunar orbit?",
        choices: [
            "a) Conducting spacewalks on the lunar surface",
            "b) Studying the lunar soil from orbit",
            "c) Testing lunar habitats",
            "d) Observing Earth from the Moon's orbit"
        ],
        correctAnswer: 3
    },
    {
        question: "Which of the following is NOT a goal of Artemis II's lunar flyby?",
        choices: [
            "a) Testing the spacecraft's life support systems",
            "b) Observing the lunar surface",
            "c) Collecting lunar rocks",
            "d) Conducting experiments in deep space"
        ],
        correctAnswer: 2
    },
    {
        question: "In addition to the Moon, what other celestial body will Artemis II's astronauts have the opportunity to observe from deep space?",
        choices: [
            "a) Mars",
            "b) Venus",
            "c) Jupiter",
            "d) Earth"
        ],
        correctAnswer: 3
    },
    {
        question: "How will data from Artemis II contribute to improving future lunar landings?",
        choices: [
            "a) By designing new spacesuits",
            "b) By helping to select landing sites",
            "c) By improving rocket propulsion technology",
            "d) By developing new lunar rovers"
        ],
        correctAnswer: 1
    },
    {
        question: "What role does the Launch Abort System (LAS) play in Artemis II's safety measures?",
        choices: [
            "a) It provides an emergency exit for astronauts on the lunar surface.",
            "b) It is a communication system.",
            "c) It can return the crew to Earth in case of an emergency during launch.",
            "d) It is used for spacewalks."
        ],
        correctAnswer: 2
    },
    {
        question: "Which international space agency is actively collaborating with NASA on the Artemis program?",
        choices: [
            "a) ESA (European Space Agency)",
            "b) CNSA (China National Space Administration)",
            "c) Roscosmos (Russian Federal Space Agency)",
            "d) ISRO (Indian Space Research Organisation)"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the Artemis program's approach to sustainable lunar exploration?",
        choices: [
            "a) It involves one-time, short-term lunar missions.",
            "b) It aims to establish a long-term human presence on the Moon.",
            "c) It focuses exclusively on scientific research.",
            "d) It aims to send robots to the Moon."
        ],
        correctAnswer: 1
    },
    {
        question: "What is the expected number of Artemis missions that will occur before the first human landing on Mars?",
        choices: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) 4"
        ],
        correctAnswer: 2
    },
  {
        question: "What are the primary objectives of the Artemis II mission?",
        choices: [
            "a) To land astronauts on the Moon",
            "b) To test the Orion spacecraft's systems in deep space",
            "c) To explore Mars",
            "d) To study asteroids"
        ],
        correctAnswer: 1
    },
    {
        question: "How will Artemis II contribute to NASA's long-term goal of sending astronauts to Mars?",
        choices: [
            "a) By landing astronauts on Mars",
            "b) By testing deep space systems and operations",
            "c) By conducting lunar landings",
            "d) By studying the Earth's atmosphere"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the planned launch vehicle for the Artemis II mission?",
        choices: [
            "a) Falcon 9",
            "b) Space Launch System (SLS)",
            "c) Delta IV",
            "d) Ariane 5"
        ],
        correctAnswer: 1
    },
    {
        question: "How many astronauts are expected to be on board the Artemis II mission?",
        choices: [
            "a) One",
            "b) Two",
            "c) Four",
            "d) Six"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the expected duration of the Artemis II mission, including time in lunar orbit?",
        choices: [
            "a) A few hours",
            "b) Several days",
            "c) Several weeks",
            "d) Several months"
        ],
        correctAnswer: 2
    },
    {
        question: "What will Artemis II primarily test during its mission?",
        choices: [
            "a) Agricultural systems",
            "b) Deep space travel technology",
            "c) Oceanography instruments",
            "d) Communication satellites"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the key purpose of Artemis II's lunar orbit trajectory?",
        choices: [
            "a) To conduct a lunar landing",
            "b) To test Mars rover technology",
            "c) To perform a lunar flyby and gather data",
            "d) To mine lunar resources"
        ],
        correctAnswer: 2
    },
    {
        question: "What safety measure is in place for emergencies during Artemis II?",
        choices: [
            "a) Teleportation technology",
            "b) Abort systems to return the crew to Earth",
            "c) Giant trampolines on the Moon",
            "d) Inflatable lunar shelters"
        ],
        correctAnswer: 1
    },
    {
        question: "Does Artemis II involve any international collaboration?",
        choices: [
            "a) No, it's a solely NASA mission",
            "b) Yes, it includes collaboration with multiple countries",
            "c) Only with Russia",
            "d) Collaboration details are classified"
        ],
        correctAnswer: 1
    },
    {
        question: "How will data and findings from Artemis II be used?",
        choices: [
            "a) To improve weather forecasting",
            "b) To refine and prepare for future Artemis missions, including lunar landings",
            "c) To develop new video games",
            "d) To search for extraterrestrial life"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main goal of Artemis II's lunar flyby?",
        choices: [
            "a) To land on the Moon and conduct experiments",
            "b) To test communication systems",
            "c) To collect lunar surface samples",
            "d) To gain experience in lunar operations"
        ],
        correctAnswer: 3
    },
    {
        question: "Which space agency is responsible for the Artemis program?",
        choices: [
            "a) ESA (European Space Agency)",
            "b) CNSA (China National Space Administration)",
            "c) NASA (National Aeronautics and Space Administration)",
            "d) ISRO (Indian Space Research Organisation)"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary spacecraft used for the Artemis II mission?",
        choices: [
            "a) Dragon",
            "b) Soyuz",
            "c) Orion",
            "d) Starship"
        ],
        correctAnswer: 2
    },
    {
        question: "In what year was the Artemis program officially announced by NASA?",
        choices: [
            "a) 2015",
            "b) 2017",
            "c) 2019",
            "d) 2021"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary focus of the Artemis program?",
        choices: [
            "a) Exploring Mars",
            "b) Establishing a permanent lunar base",
            "c) Studying Earth's environment",
            "d) Discovering extraterrestrial life"
        ],
        correctAnswer: 1
    },
    {
        question: "What role does the Artemis II mission play in the Artemis program?",
        choices: [
            "a) A robotic mission to collect lunar samples",
            "b) A crewed mission to test lunar habitats",
            "c) A test flight for the Space Launch System (SLS)",
            "d) A mission to study the effects of microgravity"
        ],
        correctAnswer: 2
    },
    {
        question: "How can the knowledge gained from the Artemis program be applied to space tourism?",
        choices: [
            "a) By developing lunar resorts for tourists",
            "b) By studying lunar wildlife for ecotourism",
            "c) By improving rocket technology for safer space travel",
            "d) By creating space-themed amusement parks on Earth"
        ],
        correctAnswer: 2
    },
    {
        question: "What is one potential benefit of studying the Moon's water ice resources for Earth's communities?",
        choices: [
            "a) Generating electricity from lunar ice",
            "b) Reducing Earth's dependence on fossil fuels",
            "c) Creating lunar agriculture for Earth's food supply",
            "d) Establishing lunar mining operations for Earth's minerals"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the expected job creation impact of the Artemis program by 2025?",
        choices: [
            "a) Over 1 million jobs",
            "b) Over 10,000 jobs",
            "c) Over 100,000 jobs",
            "d) No significant job creation"
        ],
        correctAnswer: 2
    },
    {
        question: "How does the Artemis 2 mission contribute to technological innovation?",
        choices: [
            "a) By developing new mobile phone technologies",
            "b) By testing advanced space travel technologies",
            "c) By creating virtual reality gaming experiences",
            "d) By improving social media platforms"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the term 'STEM' stand for?",
        choices: [
            "a) Science, Technology, Exploration, Mathematics",
            "b) Science, Technology, Engineering, Mathematics",
            "c) Space Travel, Earth Studies, Mathematics",
            "d) Scientific Testing, Environmental Management"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary focus of the SplitShire resource?",
        choices: [
            "a) Space exploration",
            "b) Historical photos",
            "c) High-quality images for personal and commercial use",
            "d) Vintage fashion photography"
        ],
        correctAnswer: 2
    },
    {
        question: "How might the Artemis program benefit communities in need of clean drinking water?",
        choices: [
            "a) By transporting water from the Moon to Earth",
            "b) By developing advanced desalination techniques",
            "c) By studying Earth's oceanography",
            "d) By using lunar water purification technologies"
        ],
        correctAnswer: 3
    },
    {
        question: "What role does the Hubble Space Telescope play in space exploration?",
        choices: [
            "a) Studying the Moon's geology",
            "b) Observing distant galaxies and celestial objects",
            "c) Monitoring Earth's climate",
            "d) Testing advanced space propulsion systems"
        ],
        correctAnswer: 1
    },
    {
        question: "Which mission is considered the first crewed mission of the Artemis program?",
        choices: [
            "a) Artemis 1",
            "b) Artemis 3",
            "c) Artemis 4",
            "d) Artemis 5"
        ],
        correctAnswer: 1
    },
    {
        question: "How might knowledge gained from the Artemis program be applied to improve agriculture on Earth?",
        choices: [
            "a) By developing space-based agriculture on the Moon",
            "b) By creating new types of crops for lunar colonies",
            "c) By improving crop yields and reducing water usage",
            "d) By studying the effects of microgravity on plants"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary source of economic activity generated by the Artemis program?",
        choices: [
            "a) Selling lunar land to private companies",
            "b) Developing space tourism for wealthy travelers",
            "c) Research and development in the space industry",
            "d) Manufacturing lunar habitats for human settlement"
        ],
        correctAnswer: 2
    },
    {
        question: "How might the Artemis program impact the development of medical treatments?",
        choices: [
            "a) By creating new diseases that require treatment",
            "b) By studying lunar wildlife for potential cures",
            "c) By researching the effects of microgravity on the human body",
            "d) By focusing solely on space medicine for astronauts"
        ],
        correctAnswer: 2
    },
    {
        question: "Which organization is responsible for curating Reshot's images?",
        choices: [
            "a) NASA",
            "b) A team of independent photographers",
            "c) The United Nations",
            "d) An international space agency"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary focus of the Burst by Shopify resource?",
        choices: [
            "a) Offering free high-resolution space images",
            "b) Providing resources for e-commerce entrepreneurs",
            "c) Studying lunar geology",
            "d) Developing lunar mining technologies"
        ],
        correctAnswer: 1
    },
    {
        question: "How does studying space exploration contribute to technological advancements on Earth?",
        choices: [
            "a) By decreasing investment in technology research",
            "b) By inspiring fewer people to pursue STEM careers",
            "c) By fostering innovation and developing new technologies",
            "d) By diverting resources away from technological development"
        ],
        correctAnswer: 2
    },
    {
        question: "What might be a potential application of rare minerals extracted from the Moon?",
        choices: [
            "a) Building lunar amusement parks",
            "b) Developing new fashion accessories",
            "c) Enhancing Earth's jewelry industry",
            "d) Creating advanced electronics and materials"
        ],
        correctAnswer: 3
    },
    {
        question: "What impact could the Artemis program have on international space exploration efforts?",
        choices: [
            "a) It may encourage collaboration with other space agencies.",
            "b) It may lead to competition and isolation.",
            "c) It may focus exclusively on national space missions.",
            "d) It may discourage all international space efforts."
        ],
        correctAnswer: 0
    },
    {
        question: "What is the primary benefit of the knowledge gained from studying space environments and technologies for Earth?",
        choices: [
            "a) It leads to immediate solutions to Earth's environmental problems.",
            "b) It creates space-themed amusement parks.",
            "c) It fosters international collaboration on Earth's issues.",
            "d) It drives technological innovation and sustainable practices."
        ],
        correctAnswer: 3
    },
{
    question: "What is the primary objective of the Artemis 2 mission?",
    choices: [
        "a) Scientific exploration",
        "b) Economic growth",
        "c) Inspiration",
        "d) Environmental sustainability"
    ],
    correctAnswer: 0
},
{
    question: "What is the Artemis program's goal in terms of lunar exploration?",
    choices: [
        "a) Establishing a permanent human settlement on the Moon",
        "b) Extracting rare minerals from the Moon",
        "c) Studying the Moon's water ice resources",
        "d) Developing new technologies for Earth's ecosystems"
    ],
    correctAnswer: 0
},
{
    question: "How might the Artemis 2 mission impact STEM education?",
    choices: [
        "a) It could decrease interest in STEM fields.",
        "b) It could have no impact on STEM education.",
        "c) It is likely to inspire interest in STEM fields.",
        "d) It may only impact space-related STEM fields."
    ],
    correctAnswer: 2
},
{
    question: "What is one potential application of the water purification technologies developed for the Artemis mission?",
    choices: [
        "a) Cleaning space debris",
        "b) Providing clean drinking water to communities in need",
        "c) Fueling rockets for space travel",
        "d) Growing food on the Moon"
    ],
    correctAnswer: 1
},
{
    question: "What is the estimated economic impact of the Artemis program?",
    choices: [
        "a) $100 million",
        "b) $1 trillion",
        "c) $10 billion",
        "d) $1 million"
    ],
    correctAnswer: 1
},
{
    question: "Which Apollo mission was the last crewed mission to the Moon before Artemis 2?",
    choices: [
        "a) Apollo 11",
        "b) Apollo 13",
        "c) Apollo 17",
        "d) Apollo 6"
    ],
    correctAnswer: 2
},
{
    question: "What is the significance of studying the effects of microgravity on the human body?",
    choices: [
        "a) It helps in developing better space food.",
        "b) It leads to a better understanding of Earth's gravity.",
        "c) It can lead to new medical treatments for certain conditions.",
        "d) It helps astronauts adapt to lunar gravity."
    ],
    correctAnswer: 2
},
{
    question: "How does the Artemis program impact the aerospace industry?",
    choices: [
        "a) It reduces job opportunities in the industry.",
        "b) It has no effect on the industry.",
        "c) It creates jobs and opportunities in the industry.",
        "d) It focuses exclusively on space tourism."
    ],
    correctAnswer: 2
},
{
    question: "Which space agency is leading the Artemis program?",
    choices: [
        "a) European Space Agency (ESA)",
        "b) Russian Space Agency (Roscosmos)",
        "c) Chinese National Space Administration (CNSA)",
        "d) National Aeronautics and Space Administration (NASA)"
    ],
    correctAnswer: 3
},
{
    question: "What is the primary focus of the New Old Stock resource?",
    choices: [
        "a) Providing space-related images",
        "b) Offering vintage and historical photos",
        "c) Showcasing the Artemis program",
        "d) Sharing current space exploration news"
    ],
    correctAnswer: 1
},
{
    question: "What potential resource on the Moon is of interest to scientists?",
    choices: [
        "a) Rare minerals",
        "b) Water ice",
        "c) Helium-3",
        "d) Gold"
    ],
    correctAnswer: 1
},
{
    question: "What type of economic opportunities can successful lunar missions create?",
    choices: [
        "a) Opportunities in agriculture",
        "b) Opportunities in fashion industry",
        "c) Opportunities in tourism",
        "d) Opportunities in the space industry"
    ],
    correctAnswer: 3
},
{
    question: "How can lessons learned from space missions contribute to sustainability on Earth?",
    choices: [
        "a) By improving space travel efficiency",
        "b) By reducing the need for space exploration",
        "c) By promoting waste reduction and recycling",
        "d) By focusing on space tourism"
    ],
    correctAnswer: 2
},
{
    question: "What impact does the Artemis 2 mission aim to have on the water supply for communities?",
    choices: [
        "a) It aims to extract water from the Moon.",
        "b) It focuses on reducing water usage on Earth.",
        "c) It aims to create artificial lakes on the Moon.",
        "d) It aims to transport water from Earth to the Moon."
    ],
    correctAnswer: 0
},
{
    question: "How might the Artemis program stimulate economic growth?",
    choices: [
        "a) By reducing funding for space exploration",
        "b) By decreasing the number of jobs in the aerospace industry",
        "c) By generating economic activity and job creation",
        "d) By focusing solely on scientific research"
    ],
    correctAnswer: 2
},
{
    question: "What is one potential application of the knowledge gained from studying the Moon's water ice resources?",
    choices: [
        "a) Developing new space tourism destinations",
        "b) Fueling rockets for space travel",
        "c) Growing food in deep space",
        "d) Improving traffic management on Earth"
    ],
    correctAnswer: 1
},
{
    question: "How does the Artemis program impact international cooperation?",
    choices: [
        "a) It discourages collaboration with other space agencies.",
        "b) It solely focuses on national space exploration efforts.",
        "c) It fosters collaboration with multiple international space agencies.",
        "d) It competes with international space agencies."
    ],
    correctAnswer: 2
},
{
    question: "What type of images does Gratisography offer?",
    choices: [
        "a) Space-related images",
        "b) Vintage and historical photos",
        "c) Quirky and creative images",
        "d) Scientific diagrams"
    ],
    correctAnswer: 2
},
{
    question: "How might the Artemis program impact environmental sustainability?",
    choices: [
        "a) By increasing space debris",
        "b) By focusing on resource extraction on Earth",
        "c) By promoting sustainability practices, such as efficient energy use",
        "d) By increasing waste generation"
    ],
    correctAnswer: 2
},
{
    question: "What could the knowledge gained from studying the effects of microgravity lead to?",
    choices: [
        "a) Improved food production on Earth",
        "b) Better understanding of the Moon's surface",
        "c) Enhanced astronaut training programs",
        "d) New medical treatments for certain conditions"
    ],
    correctAnswer: 3
},
{
    question: "What is the primary goal of the Artemis program?",
    choices: [
        "a) To explore Mars",
        "b) To establish a permanent lunar base",
        "c) To study Earth's environment",
        "d) To discover extraterrestrial life"
    ],
    correctAnswer: 1
},
{
    question: "What role does the Artemis 2 mission play in the Artemis program?",
    choices: [
        "a) It is a robotic mission to collect lunar samples.",
        "b) It is a crewed mission to test lunar habitats.",
        "c) It is a test flight for the Space Launch System (SLS).",
        "d) It is a mission to study the effects of microgravity."
    ],
    correctAnswer: 2
},
{
    question: "How can the knowledge gained from the Artemis program be applied to space tourism?",
    choices: [
        "a) By developing lunar resorts for tourists",
        "b) By studying lunar wildlife for ecotourism",
        "c) By improving rocket technology for safer space travel",
        "d) By creating space-themed amusement parks on Earth"
    ],
    correctAnswer: 2
},
{
    question: "What is one potential benefit of studying the Moon's water ice resources for Earth's communities?",
    choices: [
        "a) Generating electricity from lunar ice",
        "b) Reducing Earth's dependence on fossil fuels",
        "c) Creating lunar agriculture for Earth's food supply",
        "d) Establishing lunar mining operations for Earth's minerals"
    ],
    correctAnswer: 1
},
{
    question: "What is the expected job creation impact of the Artemis program by 2025?",
    choices: [
        "a) Over 1 million jobs",
        "b) Over 10,000 jobs",
        "c) Over 100,000 jobs",
        "d) No significant job creation"
    ],
    correctAnswer: 2
},
{
    question: "How does the Artemis 2 mission contribute to technological innovation?",
    choices: [
        "a) By developing new mobile phone technologies",
        "b) By testing advanced space travel technologies",
        "c) By creating virtual reality gaming experiences",
        "d) By improving social media platforms"
    ],
    correctAnswer: 1
},
{
    question: "What does the term 'STEM' stand for?",
    choices: [
        "a) Science, Technology, Exploration, Mathematics",
        "b) Science, Technology, Engineering, Mathematics",
        "c) Space Travel, Earth Studies, Mathematics",
        "d) Scientific Testing, Environmental Management"
    ],
    correctAnswer: 1
},
{
    question: "What is the primary focus of the SplitShire resource?",
    choices: [
        "a) Space exploration",
        "b) Historical photos",
        "c) High-quality images for personal and commercial use",
        "d) Vintage fashion photography"
    ],
    correctAnswer: 2
},
{
    question: "How might the Artemis program benefit communities in need of clean drinking water?",
    choices: [
        "a) By transporting water from the Moon to Earth",
        "b) By developing advanced desalination techniques",
        "c) By studying Earth's oceanography",
        "d) By using lunar water purification technologies"
    ],
    correctAnswer: 3
},
{
    question: "What role does the Hubble Space Telescope play in space exploration?",
    choices: [
        "a) Studying the Moon's geology",
        "b) Observing distant galaxies and celestial objects",
        "c) Monitoring Earth's climate",
        "d) Testing advanced space propulsion systems"
    ],
    correctAnswer: 1
},
{
    question: "Which mission is considered the first crewed mission of the Artemis program?",
    choices: [
        "a) Artemis 1",
        "b) Artemis 3",
        "c) Artemis 4",
        "d) Artemis 5"
    ],
    correctAnswer: 1
},
{
    question: "How might knowledge gained from the Artemis program be applied to improve agriculture on Earth?",
    choices: [
        "a) By developing space-based agriculture on the Moon",
        "b) By creating new types of crops for lunar colonies",
        "c) By improving crop yields and reducing water usage",
        "d) By studying the effects of microgravity on plants"
    ],
    correctAnswer: 2
},
{
    question: "What is the primary source of economic activity generated by the Artemis program?",
    choices: [
        "a) Selling lunar land to private companies",
        "b) Developing space tourism for wealthy travelers",
        "c) Research and development in the space industry",
        "d) Manufacturing lunar habitats for human settlement"
    ],
    correctAnswer: 2
},
{
    question: "How might the Artemis program impact the development of medical treatments?",
    choices: [
        "a) By creating new diseases that require treatment",
        "b) By studying lunar wildlife for potential cures",
        "c) By researching the effects of microgravity on the human body",
        "d) By focusing solely on space medicine for astronauts"
    ],
    correctAnswer: 2
},
{
    question: "Which organization is responsible for curating Reshot's images?",
    choices: [
        "a) NASA",
        "b) A team of independent photographers",
        "c) The United Nations",
        "d) An international space agency"
    ],
    correctAnswer: 1
},
{
    question: "What is the primary focus of the Burst by Shopify resource?",
    choices: [
        "a) Offering free high-resolution space images",
        "b) Providing resources for e-commerce entrepreneurs",
        "c) Studying lunar geology",
        "d) Developing lunar mining technologies"
    ],
    correctAnswer: 1
},
{
    question: "How does studying space exploration contribute to technological advancements on Earth?",
    choices: [
        "a) By decreasing investment in technology research",
        "b) By inspiring fewer people to pursue STEM careers",
        "c) By fostering innovation and developing new technologies",
        "d) By diverting resources away from technological development"
    ],
    correctAnswer: 2
},
{
    question: "What might be a potential application of rare minerals extracted from the Moon?",
    choices: [
        "a) Building lunar amusement parks",
        "b) Developing new fashion accessories",
        "c) Enhancing Earth's jewelry industry",
        "d) Creating advanced electronics and materials"
    ],
    correctAnswer: 3
},
{
    question: "What impact could the Artemis program have on international space exploration efforts?",
    choices: [
        "a) It may encourage collaboration with other space agencies.",
        "b) It may lead to competition and isolation.",
        "c) It may focus exclusively on national space missions.",
        "d) It may discourage all international space efforts."
    ],
    correctAnswer: 0
},
{
    question: "What is the primary benefit of the knowledge gained from studying space environments and technologies for Earth?",
    choices: [
        "a) It leads to immediate solutions to Earth's environmental problems.",
        "b) It creates space-themed amusement parks.",
        "c) It fosters international collaboration on Earth's issues.",
        "d) It drives technological innovation and sustainable practices."
    ],
    correctAnswer: 3
},
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    progressBar.style.width = "0%"; // Reset the progress bar
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    for (let i = 0; i < question.choices.length; i++) {
        const choice = document.createElement("button");
        choice.textContent = question.choices[i];
        choice.classList.add("choice");
        choice.addEventListener("click", () => checkAnswer(i));
        choicesElement.appendChild(choice);
    }
}

function checkAnswer(choiceIndex) {
    if (choiceIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
        scoreElement.textContent = `Current Score: ${score} out of ${questions.length}`;
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            endQuiz();
        }

        const percentComplete = (currentQuestionIndex / questions.length) * 100;
        progressBar.style.width = `${percentComplete}%`; 
    } else {
        endQuizWrong();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    resultElement.style.display = "block";
    restartButton.style.display = "block";
}

function endQuizWrong() {
    questionElement.textContent = "Sorry, You Got it Wrong!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    resultElement.style.display = "block";
    restartButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = "none";
});

restartButton.addEventListener("click", () => {
    startQuiz();
    resultElement.style.display = "none";
});

startQuiz();

proceedButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

function startGame() {
    welcomeScreen.classList.add('hidden');
    quiz.classList.remove('hidden');
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = '';
    showNextQuestion();
}

function showNextQuestion() {
}