let selectedLevel = null;
let selectedSemester = null;

// Hardcoded curriculum data
const curriculum = {
  1: {
    1: ['End User Computing(BICT 1101)', 'Introduction to Programming in C(BICT 1102)', 'Computer and Communication Technology(BICT1103)', 'Communication Skills I (COMM 1101)', 'Pre-calculus (MATH 1101)'],
    2: ['Calculus(MAT 1201)', 'Communication Skills II(COMM 1201)', 'PC Management and Maintenance(BICT 1201)', 'Computer Architecture and Organisation(BICT 1203)', 'Multimedia(BICT 1202)']
  },
  2: {
    1: ['Introduction to Statistical Analysis', 'Operating Systems(BICT 2301)', 'Computer Networks I', 'Web Design(BICT 2304)', 'Programming in Java (BICT 2302)'],
    2: ['Multivariate Calculus', 'Databases', 'Human-Computer Interaction', 'Systems Analysis and Design (BICT 2403)', 'Group Projects']
  },
  3: {
    1: ['Computer Networks II', 'Research Methods', 'Algorithms and Data Structures with Java', 'Mobile Telecommunication', 'Web Programming'],
    2: ['Object Oriented Analysis and Design', 'Object Oriented Programming (C++)', 'Distributed Systems', 'Mobile Application Development', 'Project Management']
  },
  4: {
    1: ['Software Engineering', 'Modelling and Simulation', 'Network Admin and Information Security', 'Entrepreneurship', 'Information Systems Audit'],
    2: ['Artificial Intelligence', 'Electronic Commerce', 'Business Management', 'Systems Project', 'Industrial Attachment']
  }
};

// Hardcoded course outlines
const courseOutlines = {
  "Operating Systems(BICT 2301)": {
    title: "Operating Systems (BICT 2301)",
    programme: "Bachelor of Science (Hons) in Information and Communication Technology",
    levelOfStudy: "Level 2",
    duration: "16 Weeks",
    lectureHrs: "4 per week",
    tutorialHrs: "1 per week",
    practicalHrs: "1 per week",
    independentLearningHrs: "9 per week",
    totalCredits: "12",
    prerequisites: "None",
    corequisites: "None",
    modeOfDelivery: "Face-to-Face",
    teachingMethods: "Lectures and Tutorials",
    assessmentMethods: "Minimum of two continuous assessments, One end-of-semester examination",
    assessmentWeighting: "40% Continuous, 60% End-of-semester",
    description: "This course introduces students to fundamentals and structures of operating systems (OS). OS is the backhaul basis software for any computing system. Students are exposed to processes, file systems, memory systems, input and output mechanisms of a quintessential OS. CPU scheduling, deadlock detection and avoidance are demonstrated. Windows, Unix, and Linux OS are the case studies discussed.",
    aims: ["To enable students to understand the structure and fundamentals of operating systems design."],
    learningOutcomes: [
      "Outline basic principles and components of an operating system.",
      "Explain the concept of processes.",
      "Demonstrate an understanding of CPU scheduling, deadlock detection, and avoidance.",
      "Demonstrate an understanding of how memory management is handled by the operating system.",
      "Describe how file systems are implemented.",
      "Describe concurrent programming.",
      "Program various operating system components."
    ],
    topics: [
      "Computer architecture introduction and review",
      "Batch, time-sharing, PC systems",
      "Parallel, real and batch processing",
      "Processes",
      "Hardware features",
      "Interrupts",
      "Processes management",
      "Programs and process concepts",
      "Multitasking",
      "The dispatcher",
      "Process scheduling",
      "Scheduling policies",
      "Concurrent processes",
      "Critical section problem",
      "Monitors",
      "Semaphores",
      "Facilities for synchronization",
      "Inter-process communication",
      "Deadlock avoidance, detection, and recovery",
      "Critical sections",
      "I/O management",
      "Organization of input and output hardware",
      "Device independence",
      "Device handlers",
      "Buffering",
      "Memory management",
      "Memory allocation methods",
      "Paging",
      "Virtual memory",
      "Segmentation",
      "Protection",
      "Swapping",
      "Sharing",
      "File management",
      "File concept",
      "Directory structure",
      "Protection",
      "File management techniques",
      "Sharing, security and integrity",
      "Distributed systems structures",
      "Network topologies and types",
      "Distributed operating systems",
      "Remote file access",
      "Protection of distributed systems",
      "Case studies: The UNIX system, The LINUX system, Windows"
    ],
    prescribedTexts: [
      "TANENBAUM (2015), A, Modern Operating Systems, 4th ed, Harlow: Pearson Education."
    ],
    recommendedTexts: [
      "Silberschatz, A., Gagne, G., & Galvin, P. B. (2018). Operating system concepts. Wiley."
    ]
  },
  "Web Design(BICT 2304)": { 
        title: "Web Design (BICT 2304)", 
        programme: "Bachelor of Science in Information and Communication Technology", 
        levelOfStudy: "Level 2",
         duration: "16 Weeks", 
         lectureHrs: "4 per week", 
         tutorialHrs: "2 per week", 
         practicalHrs: "2 per week", 
         independentLearningHrs: "8 per week", 
         totalCredits: "12",
         corequisite: "None", 
         modeOfDelivery: "Face-to-Face", 
         teachingMethods: "Lectures and Tutorials", 
         
         assessmentMethods: "Two continuous tests, One end-of-semester examination", 
         assessmentWeighting: "40% Continuous, 60% End-of-semester", 
         aims: [ "To enable students to design and build dynamic websites." 

         ], 
         learningOutcomes: [ "Explain key design concepts essential to the development of web-enabled applications.", 
            "Build a database-driven website using PHP in combination with HTML, SQL, and JavaScript.", 
            "Install and configure a web server."
         ], 
            topics: [ 
                "Introduction to web programming", 
                "Web Elements: Browser and Web Document, Static, Active and Dynamic pages", 
                "Introduction to web servers", 
                "HTTP protocol", 
                "Standards – W3C and IETF", 
                "Web Development tools", 
                "Introduction to HTML", 
                "The HTML Language", 
                "Tag Syntax", 
                "Web page Structure", 
                "Types of Tags", 
                "Links", 
                "Graphics", 
                "Tables", 
                "HTML Forms", 
                "HTML Frames", 
                "JavaScript for Client-side Web programming", 
                "Introduction to JavaScript", 
                "Variables and operators", 
                "Program control: statements, looping, branching", 
                "Functions, Objects and Arrays", 
                "Databases and Web Programming", 
                "Introduction to Databases and MySQL Database System", 
                "PHP and MySQL: Connecting and Working together", 
                "PHP for Server-Side Web programming", 
                "Language history and characteristics", 
                "Variables", 
                "Control and decision statements", 
                
                "File access", 
                
                "Database access using MySQL", 
                "Form processing", 
                
                "Functions",
                "Writing secure code", 
                "Cookies and sessions", 
                "Apache Web Server", 
                "Theory of web server operation", 
                "CGI", 
                "Installation", 
                "Configuration", 
                "Server-side Web application development", 
                "Validation", 
                "Interface design", 
                "Usability", 
                "Design issues related to server-side development" 
            ], 
                prescribedTexts:[],
                recommendedTexts: [ 
                    "Comer, Douglas E. (2004) Computer Networks and Internets with Internet Applications, 4th ed., Prentice Hall International, Inc.", 
                    "Deitel, Deitel & Nieto (2001) e-Business & e-Commerce – How to Program, Prentice-Hall Inc." 
                ] 
            },
 "Systems Analysis and Design (BICT 2403)": {
  title: "Systems Analysis and Design (BICT 2403)",
  programme: "Bachelor of Science in Information and Communication Technology",
  levelOfStudy: "Level 3",
  duration: "16 Weeks",
  lectureHrs: "4 per week",
  tutorialHrs: "1 per week",
  practicalHrs: "1 per week",
  independentLearningHrs: "9 per week",
  totalCredits: "12",
  prerequisites: "None",
  corequisites: "None",
  modeOfDelivery: "Face-to-Face",
  teachingMethods: "Lectures, Practicals and Tutorials",
  assessmentMethods: "Assignments, Tests and Final Exam",
  assessmentWeighting: "40% Continuous, 60% End-of-semester",
  description: "This course covers the role of a systems analyst in an organization, the process of developing a system, system development life cycle, methodologies, the different approaches of design, system implementation and testing, and project management.",
  aims: [
    "To enable students understand the importance of using structured methods of developing an information system.",
    "To expose students to methods of producing a blue print of an information system from the analysis phase. This will enable students to choose the design types that would solve problems at hand."
  ],
  learningOutcomes: [
    "Describe attributes and skills required of a systems analyst",
    "Gather information using various methodologies",
    "Apply system analysis techniques in analyzing any system",
    "Apply project management principles in a team environment",
    "Make an appropriate choice of the design type that will solve the problem at hand",
    "Implement a highly cohesive and loosely coupled system design"
  ],
  topics: [
    "Role of a systems analyst",
    "- Definition of a systems analyst",
    "- Attributes and skills required of a systems analyst",

    "Information gathering",
    "- Importance of knowing the system fully before implementing a solution",
    "- Examination of the existing business system",
    "- Tools in fact gathering process",
    "- Fact gathering using different techniques",
    "- Interviewing techniques and ethics",
    "- Document analysis",

    "Dataflow diagramming",
    "- Importance of using data flow diagrams (DFDs)",
    "- Rules for data flow diagramming",
    "- Creation of context level diagram to have an overview of the information system",
    "- Exploding level 1 diagram to ensure communicability with users or developers",
    "- Importance of levelling DFDs",

    "Data modeling",
    "- Entity relationship model (attributes, cardinality etc)",
    "- Data stores",
    "- Data dictionary",
    "- Data flows",
    "- Resolving many-to-many relationships to one-to-many",
    "- Creating a requirements catalogue",

    "System development life cycle (SDLC)",
    "- Outline the stages in system development life cycle",
    "- Iteration process of system development",
    "- Reasons for various stages in SDLC",
    "- Approaches to systems development (top-down or bottom-up)",
    "- Reasons for using DFDs and application on the rule of seven",
    "- Methodologies",
    "- Structured Systems Analysis and Design Methodologies",
    "- Waterfall model",

    "Data design",
    "- Follow up from analysis phase",
    "- Change SDLC to Rapid Application Design or Object-oriented approaches",
    "- Reasons for relational data analysis to existing system object",
    "- Data dependence",
    "- Identification of inputs and outputs",

    "Process Design",
    "- Identification of required processes from analysis phase",
    "- Prototyping to ensure feasibility",
    "- Reasons for level 1 and level 2 DFDs",
    "- Qualities of a good design",
    "- Importance of fine-tuning and iterations in the design process",

    "Input and Output Design",
    "- Importance of inputs and outputs to the user",
    "- Qualities of a good input screen",
    "- Qualities of a good output design (screen and hard copy report)",
    "- Use of CASE tools in the generation of interface",

    "Implementation and Testing",
    "- Technical options available",
    "- Implementation types",
    "- Implementation problems and issues",
    "- Test plan and its importance",
    "- Training of users",
    "- Importance of user manual",
    "- Security risks",

    "Project Management",
    "- Need for project management",
    "- Methods of project management (Gantt charts, Critical path analysis)",
    "- Quality assurance",
    "- Tools and techniques of project management"
  ],
  prescribedTexts: [
    "Dennis, A., Wixom, B.H., Roth, R.M. (2014). Systems Analysis and Design. (6th ed.). John Wiley & Sons, Inc.",
    "Kendall, K.E. (2005). Systems Analysis and Design. Armonk, N.Y.; London: Prentice Hall.",
    "Sherry, G.B., & Rosenblatt, H.J. (2013). Systems Analysis and Design (8th ed.). Boston, Course Technology."
  ],
  recommendedTexts: [
    "Wasson, C.S. (2005). System Analysis, Design, and Development: Concepts, Principles, and Practices. Wiley Series in Systems Engineering and Management.",
    "Wang S, W.H. (2012). Information Systems Analysis and Design. USA: Universal Publishers.",
    "Burd, S., et al. (2013). Systems Analysis and Design in a Changing World (5th ed.). Boston, Course Technology.",
    "Stair, R & Reynolds, G. (2011). Principles of Information Systems A Managerial Approach, (9th ed.). Boston, Course Technology.",
    "Bentley L.D. & Whitten J.L. (2007). Systems Analysis and Design Methods (4th ed.). London, McGraw Hill.",
    "Yeates, D, & Wakefield, T. (2004). Systems Analysis and Design (2nd ed.). England, Prentice Hall."
  ]
},
    "Programming in Java (BICT 2302)": {
      title: "Programming in Java (BICT 2302)",
      programme: "Bachelor of Science in Information and Communication Technology",
      levelOfStudy: "Level 2",
      duration: "16 Weeks",
      lectureHrs: "4 per week",
      tutorialHrs: "2 per week",
      practicalHrs: "1 per week",
      independentLearningHrs: "9 per week",
      totalCredits: "13",
      prerequisites: "BICT 1102",
      corequisites: "None",
      modeOfDelivery: "Face-to-Face",
      teachingMethods: "Lectures, Practicals and Tutorials",
      assessmentMethods: "Minimum of two continuous assessments, One end of semester exam",
      assessmentWeighting: "40% Continuous, 60% End-of-semester",
      description: "This course provides extensive experience with computer programming using the Java language with object-oriented programming principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects, classes, and using object-oriented tools such as the class debugger.",
      aims: [
        "To equip students with skills for developing robust applications using Java Programming language and Object-Oriented Programming (OOP) concepts."
      ],
      learningOutcomes: [
        "Understand the fundamentals of Java, including the development and run-time environments.",
        "Understand the syntax and apply OOP concepts in Java.",
        "Understand and use Objects/Classes, as well as Inheritance and Polymorphism in programming.",
        "Develop application Graphical User Interfaces (GUI) using Swing and AWT Library classes.",
        "Develop network applications using Sockets."
      ],
      topics: [
        "Introduction to Java",
        "Java Platform Overview (Java Compiler, JVM, JDK, Garbage collector, JRE)",
        "Java Development Environment (Editors, IDEs, Libraries)",
        "Object-oriented programming (OOP) concepts (objects, classes, methods)",
        "Principles of OOP (Encapsulation, Inheritance, Polymorphism)",
        "Java Programming Style (Program Layout, Naming, Comments, Class/Object Structure)",
        "Basic Java Syntax (Variables and Types, Types and Operators, Variable declarations, assignments, calculations, Text Input and Output)",
        "Control Structures (Selection: If, Else, Comparison, AND, OR, NOT, Boolean, Complex Comparison, Repetition: While, For, Nested Loops, The switch Statement, Exceptions and try … catch Statement)",
        "Using Objects, Classes, and Methods (Designing Classes, Methods parameters and local variables, Method overloading, Objects, Classes and Instantiation, Constructors and Initialization variables)",
        "Inheritance and Polymorphism (Inheritance and Class Hierarchy, Method Overriding, Using Polymorphism and Inheritance, Abstract Classes, Interfaces)",
        "Streams and Files (Character and Byte Streams, Reading and Writing Files)",
        "Introduction to Java GUI Programming (Jframe and Jpanel, Components and Layout, Events and Listeners, Graphics and Painting, Menus and Dialogs)",
        "Complex Types (Arrays, Dynamic Arrays, Array Lists, Multidimensional Arrays, Linked Lists, Binary Trees, Tree Sets and Hash Sets, Enum Sets)",
        "Threads and Multiprocessing (Creating and Running Threads, Mutual Exclusion, Locks and Deadlocks, Synchronization, Parallel Processing)",
        "Introduction to Network Programming (Java Network Programming Concepts, Ports, Sockets, Client/Server, Introduction to Java Remote Method Invocation (RMI))"
      ],
      prescribedTexts: [
        "Liang, Y. Daniel, (2013). Introduction to JAVA programming (10th ed.). Pearson/Prentice Hall",
        "Schildt, H. (2014). Java: the complete reference. McGraw-Hill Education Group."
      ],
      recommendedTexts: [
        "Eckel, B. (2006). Thinking in Java (4th Ed). Boston: Pearson Education, Inc.",
        "Dietel, H.M and Dietel, P.J, (2009). Java: How to Program (7th Ed). US: Prentice Hall.",
        "Liang, Y. D. (2000). Introduction to Java programming with JBuilder 3. Prentice Hall PTR.",
        "Deitel, P. J. (2002). Java how to program. Pearson Education India.",
        "Horstmann, C. S., & Cornell, G. (2013). Core Java: Advanced Features (Vol. 2). Pearson Education.",
        "Joshua, B. (2001). Effective Java programming language guide. Addison Wesley.",
        "Goetz, B. et al. (2006). Java concurrency in practice. Pearson Education."
      ]
    },
    
        "End User Computing(BICT 1101)": {
          title: "End User Computing (BICT 1101)",
          programme: "Bachelor of Science in Information and Communication Technology",
          levelOfStudy: "Level 1",
          duration: "16 Weeks",
          lectureHrs: "4 per week",
          tutorialHrs: "2 per week",
          practicalHrs: "2 per week",
          independentLearningHrs: "8 per week",
          totalCredits: "12",
          prerequisites: "None",
          corequisites: "None",
          modeOfDelivery: "Face-to-Face",
          teachingMethods: "Lectures and tutorials",
          assessmentMethods: "Two continuous tests, One end of semester examination",
          assessmentWeighting: "40% Continuous, 60% End of semester",
          description: "To introduce students to computer skills.",
          aims: [
            "To introduce students to computer skills."
          ],
          learningOutcomes: [
            "Operate a personal computer running MS Windows and/or Linux.",
            "Create documents using a word processing application.",
            "Produce documents using a spreadsheet application.",
            "Create presentations using a presentation application.",
            "Build databases using a database application.",
            "Find information on the web using search engines.",
            "Send and receive electronic mail."
          ],
          topics: [
            "Using the computer and managing files",
            "Getting started with Windows and Linux",
            "Menus, commands and dialogue boxes",
            "The start Menu and Taskbar",
            "Working with folders",
            "Working with files",
            "Windows and Linux applications",
            "Customizing the Desktop",
            "Printing",
            "Word processing",
            "Creating documents",
            "Editing documents",
            "Formatting documents",
            "Proofing tools",
            "Document layout",
            "Tables",
            "Mail merge",
            "Graphics",
            "Working with other applications",
            "The Internet and World Wide Web",
            "Produce documents using a spreadsheet application",
            "Create presentation using a presentation application",
            "Build databases using a database application",
            "Find information on the web using search engines",
            "Send and receive electronic mail",
            "Role of the Internet as a source of information",
            "Getting started with Web browsers",
            "Browsing the World Wide Web",
            "Security on the Web",
            "Searching for information on the Web",
            "Working offline and downloading files",
            "Net-etiquette",
            "Electronic mail",
            "Conventional and web based E-mail systems",
            "Configuration of mail clients",
            "Sending and receiving Emails",
            "Email attachments",
            "Organising an address book",
            "Spreadsheets",
            "Creating workbooks",
            "Entering basic calculations",
            "Formatting the worksheet",
            "Structuring the worksheet",
            "Working with multiple sheets",
            "Charts and graphs",
            "Using spreadsheets with other applications",
            "Presentations",
            "Creating presentations",
            "Formatting presentations",
            "Editing the slide master",
            "Inserting graphics",
            "Organisation chart",
            "Running a slide show",
            "Design Template",
            "Integration with other applications",
            "Databases",
            "Introduction to Databases",
            "Creating tables",
            "Primary and secondary keys",
            "Entering data in a table",
            "Viewing and editing data",
            "Create queries",
            "Create forms and reports"
          ],
          prescribedTexts: [],
          recommendedTexts: [
            "WILLIAMS, B.K., et al (2011) Using Information Technology; a practical introduction to computers and communications, 3rd ed Boston, M.A.: Irwin McGraw-Hill",
            "Andrews Jean (2014) Managing and maintaining your PC, 8th Ed. Thomson Course Technology, Canada.",
            "TANENBAUM, A (2004) Computer Networks, 4th ed US, Prentice Hall, Inc"
          ]
        },
        
            "Computer and Communication Technology(BICT1103)": {
              title: "Computer and Communication Technology (BICT 1103)",
              programme: "Bachelor of Science in Information and Communication Technology",
              levelOfStudy: "Level 1",
              duration: "16 Weeks",
              lectureHrs: "4 per week",
              tutorialHrs: "2 per week",
              practicalHrs: "0",
              independentLearningHrs: "10 per week",
              totalCredits: "12",
              prerequisites: "None",
              corequisites: "None",
              modeOfDelivery: "Face-to-Face",
              teachingMethods: "Lectures and tutorials",
              assessmentMethods: "Two continuous tests, One end of semester examination",
              assessmentWeighting: "40% Continuous, 60% End of semester",
              description: "To introduce practical concepts of computers and electronic communication to students.",
              aims: [
                "To introduce practical concepts of computers and electronic communication to students."
              ],
              learningOutcomes: [
                "Describe various computer hardware components and computer software",
                "Describe types of computer networks",
                "Describe how information is managed in organizations",
                "Describe security, privacy and ethics in ICT"
              ],
              topics: [
                "Introduction to Information and Communication Technology",
                "Basic definitions in ICT",
                "The role of computers in ICT",
                "Hardware and software",
                "History of computers",
                "CPU and main memory",
                "Microcomputer system unit",
                "Input hardware",
                "Output devices",
                "Storage media",
                "Overview of software and applications",
                "Data Representation",
                "Binary Number System",
                "Octal Number System",
                "Hexadecimal Number System",
                "Decimal Number System",
                "Conversion of numbers",
                "ASCII, EBCDIC, UNICODE",
                "Introduction to computer networks",
                "Types and sizes of Networks",
                "Network topologies",
                "Characteristics of data communication",
                "Synchronous and Asynchronous transmission",
                "Direction of transmission flow",
                "Transmission rate and band width",
                "Types of signals and standards",
                "Transmission media",
                "Information systems",
                "Types of Information Systems",
                "Systems development life cycle",
                "Effect of ICT in organizations",
                "Ethics, privacy and security",
                "Computers and privacy",
                "Computer crime",
                "Security threat in ICT and remedies",
                "Safeguarding computers and data",
                "Disaster recovery plans",
                "Introduction to Computer Files and databases",
                "File system vs. Database systems",
                "Types of databases systems"
              ],
              prescribedTexts: [
                "WILLIAMS, B.K., et al (2011) Using Information Technology; a practical introduction to computers and communications, 3rd ed Boston, M.A.: Irwin McGraw-Hill"
              ],
              recommendedTexts: [
                "TANENEBAUM, A (2013) Structured computer organization, 6th ed, Boston : Pearson"
              ]
            },
            
  "Communication Skills I (COMM 1101)": {
    title: "Communication Skills I (COMM 1101)",
    programme: "All Bachelors and Diploma programmes",
    subject: "Communication Studies",
    levelOfStudy: "One",
    duration: "16 Weeks",
    lectureHrs: "4 per week",
    tutorialHrs: "1 per week",
    practicalHrs: "None",
    independentLearningHrs: "",
    totalCredits: "10",
    prerequisites: "None",
    corequisites: "None",
    modeOfDelivery: "Face-to-Face",
    teachingMethods: "",
    assessmentMethods: "Examinations, Assignments, Presentations, Group work evaluations and Portfolios",
    assessmentWeighting: "40% Continuous Assessment, 60% End of Semester Examinations",
    description: "To equip students with appropriate language and communication skills necessary for academic demands.",
    aims: [
      "To equip students with appropriate language and communication skills necessary for academic demands."
    ],
    learningOutcomes: [
      "Read different texts effectively.",
      "Produce effective summaries from lectures and reading tasks.",
      "Effectively manage time and other academic resources.",
      "Write different types of academic papers."
    ],
    topics: [
      "Introduction to Communication",
      "Definition of communication",
      "Process of communication",
      "Basic theories of communication",
      "Listening Skills",
      "Definition of Listening",
      "Rationale for Listening",
      "The process of Listening",
      "Barriers to Listening",
      "Types of listening",
      "Recognizing change of topic",
      "Note taking and note making",
      "Study Skills",
      "Planning work",
      "Organizing study resources",
      "Budgeting study time",
      "Principles of effective studying",
      "Examination skills",
      "Reading Skills",
      "Definition of reading",
      "Reading strategies",
      "Understanding the structure of discourse in reading",
      "Writing Essays",
      "Definition",
      "Planning",
      "Structure of an essay",
      "Types of essays",
      "Referencing",
      "Rationale for referencing",
      "Using and acknowledging other people’s ideas",
      "Reference List and bibliography",
      "Reports Writing",
      "Definition",
      "Rationale for writing reports",
      "The nature of reports",
      "Types of reports"
    ],
    prescribedTexts: [
      "Devito, Joseph A. (2003). Human communication: The basic course. (9th Ed.). New York: Pearson Education.",
      "Pearson Judy, Nelson Paul, Titsworth Scott, Harter Lynn (2013). Human Communication. (5th Ed.). New York: MacGraw Hill."
    ],
    recommendedTexts: [
      "Gibson, James W. & Hanna Michael (1999). Introduction to Human communication. New York:Wm. C. Brown Publishers.",
      "Burns, Tom (2008). Essential Study Skills: The complete guide to success at University. (2nd Ed.). London: Sage Publications.",
      "Smith, Brenda (2007). Breaking through college reading. (8th Ed.). New York: Pearson Education."
    ]
  },
  
  "Pre-calculus (MATH 1101)": {
    title: "Pre-calculus (MATH 1101)",
    programme: "Bachelor of Science",
    subject: "Mathematics",
    levelOfStudy: "1",
    duration: "14 Weeks",
    lectureHrs: "4 per week",
    tutorialHrs: "1 per week",
    practicalHrs: "0",
    independentLearningHrs: "10 per week",
    totalCredits: "12",
    prerequisites: "None",
    corequisites: "None",
    modeOfDelivery: "Face-to-Face and ODL",
    teachingMethods: "Lectures and tutorials",
    assessmentMethods: "Two continuous tests, One end of semester examination",
    assessmentWeighting: "40% Continuous, 60% End of semester",
    description: "To normalize the knowledge that students arriving possess in Mathematics, develop an intuition in and facility in using mathematical models, and prepare students for subsequent courses in Calculus.",
    aims: [
      "To normalize the knowledge that students arriving possess in Mathematics",
      "Develop an intuition in and facility in using mathematical models",
      "Prepare students for subsequent courses in Calculus"
    ],
    learningOutcomes: [
      "Use language of sets to conceptualize mathematical problems",
      "Solve equalities and inequalities",
      "Graph equations and functions",
      "Solve optimization problems without the use of Calculus",
      "Apply methods learnt in the context of logarithmic and exponential functions"
    ],
    topics: [
      "Review",
      "Sets, nth-roots, etc",
      "Fundamentals",
      "Sets of real numbers",
      "Absolute value",
      "Rectangular coordinates",
      "Equation of a circle",
      "Symmetry",
      "Inequalities",
      "Quadratic inequalities",
      "Other types of equations",
      "Functions",
      "The definition of a function",
      "The graph of a function",
      "Shapes of graphs – Average rate of change",
      "Techniques in graphing",
      "Methods of combining functions: Composition",
      "Inverse functions",
      "Polynomial and rational functions",
      "Maximum and minimum problems",
      "Polynomial functions",
      "Rational functions",
      "Exponential and logarithmic functions",
      "Exponential functions",
      "The exponential function y = ex",
      "Logarithmic functions",
      "Properties of logarithms",
      "Equations involving logarithms and exponents",
      "Trigonometry",
      "Algebra and the trigonometric functions",
      "Radian measure",
      "Radian measure and geometry",
      "Trigonometric functions of real numbers",
      "Graphs of sine and cosine functions including  y = Asin(Bx+C) and y = Acos(Bx+C)",
      "Trigonometric identities",
      "The addition formulas",
      "The Double-Angle formulas",
      "Trigonometric equations",
      "The inverse trigonometric functions"
    ],
    prescribedTexts: [
      "Cohen D et al, Precalculus: A problem oriented approach, Brookes/Cole Publishing, 2005"
    ],
    recommendedTexts: [
      "E.W. Swokowski and J.A. Cole, Precalculus: Functions and Graphs, Brookes/Cole Publishing, 1998",
      "E.W. Swokowski and J.A. Cole, Precalculus, Thomson/Cole, 2008",
      "R. Larson, Precalculus: Functions and Graphs, Boston: Houghton Mifflin, 2005"
    ]
  },
  
  "Introduction to Programming in C(BICT 1102)": {
    title: "Programming in C (BICT 1102)",
    programme: "Bachelor of Science",
    subject: "Information and Communication Technology",
    levelOfStudy: "1",
    duration: "16 Weeks",
    lectureHrs: "4 per week",
    tutorialHrs: "2 per week",
    practicalHrs: "3 per week",
    independentLearningHrs: "8 per week",
    totalCredits: "13",
    prerequisites: "BICT 1102",
    corequisites: "None",
    modeOfDelivery: "Face-to-Face",
    teachingMethods: "Lectures and tutorials",
    assessmentMethods: "Two continuous tests, One end of semester examination",
    assessmentWeighting: "40% Continuous, 60% End of semester",
    description: "To help students acquire knowledge and skills in structured programming and apply skills in other programming languages.",
    aims: [
      "To help students acquire knowledge and skills in structured programming",
      "To apply skills in other programming languages"
    ],
    learningOutcomes: [
      "Write a program in C to solve specific problem",
      "Appreciate the modular nature of a computer program"
    ],
    topics: [
      "Introduction",
      "Characteristics of C",
      "Compilers and Interpreters",
      "Lexical conventions",
      "The C Library",
      "#include files",
      "Keywords",
      "Constants",
      "Other useful tools",
      "Basic Data Types (int, float, double, char)",
      "More on floating points",
      "Modifying data types (long, short, signed, unsigned)",
      "Complex Data Types",
      "Union",
      "Struct",
      "Void",
      "Variable declarations/initialisations",
      "Variable definition",
      "Variable declarations",
      "Storage classes and scope of a variable",
      "Variable initialisation",
      "Operators",
      "Operators by category",
      "Operator precedence and associativity",
      "Order of evaluation",
      "Functions",
      "Standards and Programming Style",
      "Modular code design",
      "Writing a C program",
      "Input and Output",
      "EOF",
      "Streams",
      "Input functions",
      "Output functions",
      "Format symbols",
      "Control Flow and Program Loops",
      "The while and do while loops",
      "The if statement",
      "The for statement",
      "Control modifiers",
      "Data Structures",
      "Arrays",
      "Multi-dimensional arrays",
      "Structures",
      "Unions",
      "Declaring a structure",
      "Initialising a structure",
      "Referencing a struct or union member",
      "Pointers",
      "Declaring a pointer",
      "Referencing a pointer",
      "Pointer differences",
      "Arrays as pointers",
      "Pointers in function arguments",
      "Command Line Arguments",
      "Complex Declarations",
      "Reading",
      "Writing",
      "Typedef",
      "Handling File I/O",
      "File pointers and descriptors",
      "Closing an open file",
      "Opening files",
      "String Manipulations",
      "Memory Management",
      "Low level file I/O",
      "The malloc family of functions"
    ],
    prescribedTexts: [],
    recommendedTexts: [
      "Dietel HM and Dietel PJ, C: How to program, New Jersey: Pearson, 2007"
    ]
  }
         
};

function showSemesterOptions(level) {
  selectedLevel = level;
  document.getElementById('level-buttons').style.display = 'none';
  document.getElementById('semester-options').style.display = 'block';

  document.getElementById('sem1-btn').setAttribute('onclick', `showCurriculum(${level}, 1)`);
  document.getElementById('sem2-btn').setAttribute('onclick', `showCurriculum(${level}, 2)`);
}

function showCurriculum(level, semester) {
  selectedSemester = semester;
  const curriculumContent = document.getElementById('curriculum-content');
  curriculumContent.innerHTML = '';

  let curriculumData = `<h2>Level ${selectedLevel} - Semester ${selectedSemester} Courses:</h2>`;

  const courses = curriculum[selectedLevel][selectedSemester];

  curriculumData += '<select id="course-dropdown">';
  curriculumData += '<option value="" disabled selected>Select a course</option>';

  courses.forEach(course => {
    curriculumData += `<option value="${course}">${course}</option>`;
  });

  curriculumData += '</select>';
  curriculumData += `<button onclick="viewCourseOutline()" class="viewbtn">View Outline</button>`;
  curriculumData += `<button onclick="goBackToSemester()" class="back">Back</button>`;

  curriculumContent.innerHTML = curriculumData;
  document.getElementById('semester-options').style.display = 'none';
}

function viewCourseOutline() {
  const courseDropdown = document.getElementById('course-dropdown');
  const selectedCourse = courseDropdown.value;

  if (selectedCourse && courseOutlines[selectedCourse]) {
    displayOutline(courseOutlines[selectedCourse]);
  } else {
    alert("Outline for this course is not available.");
  }
}

function displayOutline(course) {
  const curriculumContent = document.getElementById("curriculum-content");

  curriculumContent.innerHTML = `
   
    <h2>${course.title}</h2>
    <button class="back" onclick="goBack()">Back</button>
 <div class="contai">
   <div class= "part1"> <p><strong>Programme:</strong> ${course.programme}</p>
    <p><strong>Level of Study:</strong> ${course.levelOfStudy}</p>
    <p><strong>Duration:</strong> ${course.duration}</p>
    <p><strong>Lecture Hours:</strong> ${course.lectureHrs}</p></div>
   <div class="part2"> <p><strong>Description:</strong> ${course.description}</p></div>

   <div class="part3"> <h3>Learning Outcomes:</h3>
    <ul>${course.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}</ul></div>
  
    <div class="part4"> <h3>Topics of Study:</h3>
     <ul>${course.topics.map(topic => `<li>${topic}</li>`).join('')}</ul></div>
   
    <div class="part5">
    <h3>Prescribed Texts:</h3>
    <ul>${course.prescribedTexts.map(text => `<li>${text}</li>`).join('')}</ul>
    <h3>Recommended Texts:</h3>
    <ul>${course.recommendedTexts.map(text => `<li>${text}</li>`).join('')}</ul>
    </div>
    </div>
     
  `;
}

function goBackToLevel() {
  document.getElementById('level-buttons').style.display = 'block';
  document.getElementById('semester-options').style.display = 'none';
  document.getElementById('curriculum-content').innerHTML = '';
}

function goBackToSemester() {
  document.getElementById('semester-options').style.display = 'block';
  document.getElementById('curriculum-content').innerHTML = '';
}
function goBack(){
    showCurriculum(selectedLevel,selectedSemester);
}