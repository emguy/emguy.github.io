var bio = {
  "name": "Yu Zhang",
  "role": "Software Developer",
  "contacts": {
  "mobile": "289-244-3998",
  "email": "emguy2000_AT_gmail_DOT_com",
  "githubUsername": "emguy",
   "location": "Greater Toronto Area"
  },
  "welcomeMessage": "In the past, I have done serious development on high-performance electromagnetic simulation engines (C/C++). Now I want to pursue a career as a software developer.",
  "languages": "Java, C++ (with STL)",
  "backend": "Java Servlet, JSP, Tomcat Server, Flask",
  "database": "SQLite, PostgreSQL, Cloud Datastore (NoSQL), JDBC, ORM technologies",
  "frontend": "HTML, CSS, Javascript (beginer), Ajax (beginer)",
  "other": "Unix shell (scripting), GNU toolchain, OpenMP, C++ threads",
  "portrait": "images/y.jpg"
};

var work = {
  "jobs" : [
    {
      "employer": "McMaster University",
      "title" :  "Teaching Assistant / Computer Science Tutor",
      "location": "Hamiton, ON, Canada",
      "dates": "2011 - 2015",
      "URL": "http://www.ece.mcmaster.ca",
      "entries": ["I was the teaching assistant in a number of second-year and forth-year computer engineering courses including <i>Principle of Programming</i>, <i>Data Structure and Algorithms</i>, <i>Logic Design</i>, and <i>Engineering Design</i>.",
                  "As a teaching assistant, I supervised many Java based labs and helped sutudents with the use of available computing resources.",
                  "As a tutor, I aided students with various course works and helped them through their software projects.",
                 ]
    },
    {
      "employer": "McMaster University",
      "title":  "Research Assistant",
      "location": "Hamiton, ON, Canada",
      "dates": "2011 - 2015",
      "URL": "http://www.ece.mcmaster.ca",
      "entries": ["Developed the user-interface a number of parallelized computational engines for high-frequency electromagnetic simulations. Applied technologies include C/C++, openMP, C++11 threads, and HDF5.",
                  "Developed advanced algorithms in areas of sensitivity analysis, nonlinear-optimization, and inverse problems.",
                  "As the lead author, I published 4 articles in ieee journals and presented 5 articles in refereed conferences.",
                 ]
    },
    {
      "employer": "Blackberry Limited",
      "title":  "Research Internship",
      "location": "Waterloo, ON, Canada",
      "dates": "2013 - 2013",
      "URL": "http://blackberry.com",
      "entries": ["Reviewed and documented the technological trends towards modern mobile LTE antennas.",
                  "Innovated the design methodology of Blackberry’s mobile antennas to meet new LTE specifications.",
                 ]
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title": "Restaurant Recommandation Application (Java web application)",
      "date": "2015 - present",
      "URL": "http://emguy.github.io/where-to-eat",
      "description": "This web application generates restaurant recommandations based on the user's location and his previous visiting records. All restaurant data is retrieved from Yelp through the Oauth2 authentication. The final recommendations are determined through a restaurant learning algorithm. The RESTful services are settled on the AWS. All backend logics are implemented using Java servlets, which communicate with MySQL through JDBC. An front-end Android application is currently been developed through the Android Studio. It communicates with the server-side application through JSON objects. A web frontend is also available.",
      "technologies": "Java Servlet, JSON, JDBC, MySQL, RESTful, AWS EC2, Oauth2, and Android studio",
      "images": ["images/p1_01.jpg", "images/p1_02.jpg", "images/p1_03.jpg"]
    },
    {
      "title": "Conference Organizer (Python web application)",
      "date": "2016",
      "URL": "https://emguy-122217.appspot.com",
      "description": "This web application is a cloud-based API server to provide functionalities to organize conferences events for massive amount of participants. All user data are stored in the Google's cloud datastore (NoSQL). I extended the functionality of this web application to support conference sessions, user wishlists, time conflict resolution, and to allow users to query for sessions and conferences.",
      "technologies": "Oauth2, hybrid authentications, Cloud Datastore (NoSQL), Google App Engine, JSON",
      "images": ["images/p2_01.jpg", "images/p2_02.jpg"]
    },
    {
      "title": "Item Catalog (Python web application)",
      "date": "2015",
      "URL": "http://ec2-54-213-143-150.us-west-2.compute.amazonaws.com",
      "description": "This web application provides an interface for its registered users to create and maintain their own online catalogs for storing, viewing, and retrieving items inside them. It authenticates users through their Google Plus acounts. All CRUD operations on the PostgreSQL dabase is enabled through the ORM sqlalchemy.",
      "technologies": "Oauth2, Google plus authenications, FLask, PostgreSQL, SQLAlchemy, AWS EC2, JSON",
      "images": ["images/p3_01.jpg", "images/p3_02.jpg"]
    },
    {
      "title": "Java Console Chating Program (Java desktop application)",
      "date": "2009",
      "URL": "http://emguy.github.io/jchat",
      "description": "It is a client/server console chatting program implemented using Java threads and Java sockets. This program includes a user authentication system, a command handler, and a command-line shell.",

      "technologies": "Java sockets, Java concurrency, thread group",
      "images": ["images/p4_01.jpg"]
    },
    {
      "title": "Tournament Plannar (Python desktop application)",
      "date": "2015",
      "URL": "http://emguy.github.io/Tournament-Planner",
      "description": "This program keeps track of players and matches in a game tournaments through the use of a PostgreSQL database in a python program. The Swiss system and Opponents Match Win (OMW) scheme are used to determine the standing and the pairing in the database. The database is secured from SQL injections and Javascript injections as part of the development process.",
      "technologies": "Python and PostgreSQL",
      "images": []
    },
    {
      "title": "You Name It (Shell utility)",
      "date": "2012",
      "URL": "http://emguy.github.io/you-name-it",
      "description": "This simple command-line utility renames batched files using the editing power of Vim editor according to your specified patterns. To use this program, you might have Vim enabled on your console.",
      "technologies": "Bash and awk",
      "images": ["images/p6_01.jpg", "images/p6_02.jpg"]
    },
    {
      "title": "Movie Trailer Webpage (Web development)",
      "date": "2015",
      "URL": "https://emguy.github.io/fresh_tomatoes.html",
      "description": "This python script generates a static webpage allowing visitors to browse a list of movies and watch the trailers. All movie data is retrived from the Open Movie Database (OMDB) through APIs.",
      "technologies": "Python, HTML5, CSS and Javascript",
      "images": ["images/p7_01.jpg"]
    },
  ]
};

var education = {
  "schools" : [
    {
      "name": "McMaster University",
      "URL": "http://en.wikipedia.org/wiki/McMaster_University",
      "location": "Hamilton, ON",
      "degree": "Ph.D.",
      "majors": ["Computational Electromagnetics"],
      "dates": "2011 - 2015"
    },
    {
      "name": "McMaster University",
      "URL": "http://en.wikipedia.org/wiki/McMaster_University",
      "location": "Hamilton, ON",
      "degree": "M.A.Sc.",
      "majors": ["Computational Electromagnetics"],
      "dates": "2008 - 2010"
    },
    {
      "name": "University of Manitoba",
      "URL": "http://en.wikipedia.org/wiki/University_of_Manitoba",
      "location": "Winnipeg, MB",
      "degree": "B.Sc.",
      "majors": ["Electrical Engineering"],
      "dates": "2004 - 2008"
    },
  ],
};













bio.display = function() {
  var formattedHTMLHeaderName = HTMLheaderName.replace("%data%", bio.name);
  var formattedHTMLHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
  var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedHTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.portrait);
  var formattedHTMLLanguages = HTMLSkillLanguages.replace("%data%", bio.languages);
  var formattedHTMLBackend = HTMLSkillBackend.replace("%data%", bio.backend);
  var formattedHTMLFrontend = HTMLSkillFrontend.replace("%data%", bio.frontend);
  var formattedHTMLDatabase = HTMLSkillDatabase.replace("%data%", bio.database);
  var formattedHTMLOther = HTMLSkillOther.replace("%data%", bio.other);

  $("#header").prepend(formattedHTMLHeaderName, formattedHTMLHeaderRole);
  $("#topContacts:last").append(formattedHTMLMobile, formattedHTMLEmail, formattedHTMLgithub, formattedHTMLLocation);
  $("#header").append(formattedBioPic, formattedHTMLWelcomeMsg);
  $("#header").append(HTMLSkillsStart);
  $("#skills").append(formattedHTMLLanguages);
  $("#skills").append(formattedHTMLBackend);
  $("#skills").append(formattedHTMLDatabase);
  $("#skills").append(formattedHTMLFrontend);
  $("#skills").append(formattedHTMLOther);
  $("#header").append(HTMLSkillsStop);
}

work.display = function() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    formattedEmployer = formattedEmployer.replace("%url%", work.jobs[job].URL);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDatesWorked);
    $(".work-entry:last").append(HTMLEntriesStart);
    for (entry in work.jobs[job].entries) {
      var formattedEntry = HTMLEntry.replace("%data%", work.jobs[job].entries[entry]);
      $(".work-entry:last").append(formattedEntry);
    }
    $(".work-entry:last").append(HTMLEntriesStop);
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedTitle = formattedTitle.replace("%url%", projects.projects[project].URL);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedTechologies = HTMLprojectTech.replace("%data%", projects.projects[project].technologies);
    $(".project-entry:last").append(formattedTechologies);
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        formattedImage = formattedImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

education.display = function() {
  // Schools...
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedschoolName = formattedschoolName.replace("%url%", education.schools[school].URL);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedNameDegree = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedNameDegree, formattedschoolDates,formattedschoolLocation, formattedschoolMajor);
  }
  // Online Courses...
  for (course in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
    $(".education-entry:last").append(formattedTitleSchool,formattedonlineDates, formattedonlineURL);
  }
}

footerContacts.display = function() {
  var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
  var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#footerContacts").append(formattedHTMLMobile, formattedHTMLEmail, formattedHTMLgithub, formattedHTMLLocation);
}



bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
footerContacts.display();

// ************** Internationalize Names ************* \\

// function inName(nameString) {
//   var finalName = nameString;

//   var internationalizeName = nameString.split(" ");
//   internationalizeName[1] = internationalizeName[1].toUpperCase();
//   internationalizeName[0] = internationalizeName[0].slice(0,1).toUpperCase() + internationalizeName[0].slice(1).toLowerCase();

//   finalName = internationalizeName.join(" ");
//   return finalName;
// }

// $("#main").append(internationalizeButton);

