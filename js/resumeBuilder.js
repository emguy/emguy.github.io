// ************  Resume's bio Object  ****************** \\

var bio = {
	"name" : "Yu Zhang",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "289-244-3998",
		"email" : "emguy2000_AT_gmail_DOT_com",
		"githubUsername" : "emguy",
		"location" : "Greater Toronto Area"
	},
	"welcomeMessage" : "Currently, I am actively looking for new software development positions.",
	"skills" : ["Java", " C++ (with STL)", "SQL", "ORM technologies"],
	"bioPic" : "images/y.png"
};


bio.display = function() {
	
	var formattedHTMLHeaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedHTMLHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
	var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedHTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	var formattedHTMLSkills = HTMLskills.replace("%data%", bio.skills);

	$("#header").prepend(formattedHTMLHeaderName, formattedHTMLHeaderRole);
	$("#topContacts:last").append(formattedHTMLMobile, formattedHTMLEmail, formattedHTMLgithub, formattedHTMLLocation);
	$("#header").append(formattedBioPic, formattedHTMLWelcomeMsg);

	if (bio.skills !== 0) {
		$("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; ++i) {
      var entry = bio.skills[i];
      //$("#skills").append(formattedHTMLSkills);
      $("#skills").append(entry);
    }
	}
}

// Display bio section
bio.display();
















// ************** Resume's work object ******************** \\

var work = {
	"jobs" : [
		{
			"employer" : "McMaster University",
			"title" :  "Teaching Assistant",
			"location" : "Hamiton, ON, Canada",
			"dates" : "2011 - 2015",
			"description" : "Organized, <a href=http://www.google.ca>supervised</a> and delivered exercise stress tests, stress echocardiograms, nuclear stress tests and EKGs in healthy and unhealthy patients, utilizing the Bruce Protocol and Modified Bruce Protocol. Individualized exercise prescriptions to increase physical fitness, strength, endurance, and flexibility. Placed and educated heart monitor devices such as 24-hour holter monitors, event monitors, and telemetry monitors on patients, as well as report the findings to Cardiologists for interpretation and diagnosis. Educate patients on exercise-related and cardiac-related topics. Facilitated hiring and training of additional exercise physiologists. Performed other clinical duties as necessary."
		},
		{
			"employer" : "McMaster University",
			"title" :  "Research Assistant",
			"location" : "Hamiton, ON, Canada",
			"dates" : "2011 - 2015",
			"description" : "Organized, supervised and delivered exercise stress tests, stress echocardiograms, nuclear stress tests and EKGs in healthy and unhealthy patients, utilizing the Bruce Protocol and Modified Bruce Protocol. Individualized exercise prescriptions to increase physical fitness, strength, endurance, and flexibility. Placed and educated heart monitor devices such as 24-hour holter monitors, event monitors, and telemetry monitors on patients, as well as report the findings to Cardiologists for interpretation and diagnosis. Educate patients on exercise-related and cardiac-related topics. Facilitated hiring and training of additional exercise physiologists. Performed other clinical duties as necessary."
		},
		{
			"employer" : "Blackberry Limited",
			"title" :  "Antenner Researcher (Internship)",
			"location" : "Waterloo, ON, Canada",
			"dates" : "2013 - 2013",
			"description" : "Monitored workplace activities to ensure that workers comply with company policies and government safety regulations, such as Occupational Safety & Health Administration (OSHA) and Department of Transportation (DOT). Developed appropriate training programs and delivered training to employees regarding safety in the workplace, hazardous material handling, forklift training, and utilizations of personal protective equipment (PPE). Required workers to comply with the federal OSHA, and DOT by utilizing educational HAZMAT and DOT videos followed by a comprehensive examination. Alerted workers about any changes in governmental policies and monitor worker compliance by requesting DOT log sheets, required by the DOT."
		}
	]
};











work.display = function() {

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDatesWorked, formattedDescription);
	}
}

// Display work section
work.display();



//  ********* Resume's Projects Object *********** \\

var projects = {
	"projects" : [
		{
			"title" : "Intro to HTML and CSS",
			"date" : "May 11, 2015",
			"description" : "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
			"images" : ["images/optimizedportfoliositeproject1.jpg"]
		}
	]
};


projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

// Display projects section
projects.display();



// ************  Resume's education Object  ****************** \\

var education = {
	"schools" : [
		{
			"name" : "McMaster University",
			"location" : "Hamilton, ON",
			"degree" : "Ph.D.",
			"majors" : ["Computational Electromagnetics"],
			"dates" : "2011 - 2015"
		},
		{
			"name" : "McMaster University",
			"location" : "Hamilton, ON",
			"degree" : "M.A.Sc.",
			"majors" : ["Computational Electromagnetics"],
			"dates" : "2008 - 2010"
		},
		{
			"name" : "University of Manitoba",
			"location" : "Winnipeg, MB",
			"degree" : "B.Sc.",
			"majors" : ["Electrical Engineering"],
			"dates" : "2004 - 2008"
		},
	],
	//"onlineCourses" : [
	//	{
	//		"title" : "Intro to HTML and CSS",
	//		"school" : "Udacity",
	//		"dates" : "April 2015",
	//		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	//	}
	//]
};


education.display = function() {
	// Schools...
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
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

// Display education section
education.display();


// googleMap
$("#mapDiv").append(googleMap);


// footerContacts

footerContacts.display = function() {
	var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.githubUsername);
	var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#footerContacts").append(formattedHTMLMobile, formattedHTMLEmail, formattedHTMLgithub, formattedHTMLLocation);
}


// Display footerContacts section
footerContacts.display();


// ************** Internationalize Names ************* \\

// function inName(nameString) {
// 	var finalName = nameString;

// 	var internationalizeName = nameString.split(" ");
// 	internationalizeName[1] = internationalizeName[1].toUpperCase();
// 	internationalizeName[0] = internationalizeName[0].slice(0,1).toUpperCase() + internationalizeName[0].slice(1).toLowerCase();

// 	finalName = internationalizeName.join(" ");
// 	return finalName;
// }

// $("#main").append(internationalizeButton);











































// var education = {
// 	"schools" : [
// 		{
// 			"name1" : "Kennesaw State University",
// 			"city" : "Kennesaw, GA",
// 			"degree" : "Bachelor of Science",
// 			"majors" : ["Exercise and Health Science"],
// 			"dates" : "2002 - 2007",
// 			"url" : "https://www.kennesaw.edu"
// 		}
// 	],
// 	"onlineCourses" : [
// 		{
// 			"title" : "Intro to HTML and CSS",
// 			"school" : "Udacity",
// 			"dates" : "April 2015",
// 			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617/m-2698138588"
// 		}
// 	]
// };


//    ************ Codes from previous quizes ************   \\

// var name = "Jason Cardona";
// var role = "Front-End Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// //  **************************************************  \\

// var mobile = "678-488-0150";
// var email = "jcardona777@msn.com"
// var welcomeMsg = "Pursuing Entry level as a Front-End Web Developer position utilizing front-end web programs knowledge in HTML5 and CSS3, organized coding, problem solving, software debugging using the browser's developer tools, familiarity with bootstrap and Sublime, data management, User Interface Design and familiar with Object-Oriented Programing concepts.";
// var skills = ["C#", " MS Visual Studio C# 2008 & 2013", " .NET framework (3.5 and 4.5)", " MS Visual Studio Web Developer 2010 & 2013, ASP.NET (4.5)", " Microsoft SQL Server Express (SSE), MS Access 2013", " HTML5", " CSS3"]; 
// var bioPic = "images/Me_Optimized.jpg";


// var formattedMoble = HTMLmobile.replace("%data%", mobile);
// var formattedEmail = HTMLemail.replace("%data%", email)
// var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcomeMsg);
// var formattedSkills = HTMLskills.replace("%data%", skills);
// var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);


// var bio = {
// 	"name" : formattedName,
// 	"role" : formattedRole,
// 	"contacts" : {
// 		"mobile" : formattedMoble,
// 		"email" : formattedEmail,
// 	},
// 	"pictureUrl" : formattedBioPic,
// 	"welcome" : formattedWelcomeMsg,
// 	"skills" : formattedSkills
// };

// $("#header").append(bio.contacts.mobile, bio.contacts.email, bio.pictureUrl, bio.welcome, bio.skills);

// //   **************************************************  \\

// var position = "Exercise Physiologist";
// var employer = "WellStar Cardiac Diagnostics";
// var yearsWorked = "2008 - Present";
// var city = "Marietta, GA";
// var jobDescription = "Organized, supervised and delivered exercise stress tests, stress echocardiograms, nuclear stress tests and EKGs in healthy and unhealthy patients, utilizing the Bruce Protocol and Modified Bruce Protocol. Individualized exercise prescriptions to increase physical fitness, strength, endurance, and flexibility. Placed and educated heart monitor devices such as 24-hour holter monitors, event monitors, and telemetry monitors on patients, as well as report the findings to Cardiologists for interpretation and diagnosis. Educate patients on exercise-related and cardiac-related topics. Facilitated hiring and training of additional exercise physiologists. Performed other clinical duties as necessary.";

// var formattedworkStart = HTMLworkStart.replace("%data%", yearsWorked);
// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", employer);
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", position);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", city);
// var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobDescription); 

// var work = {};
// 	work.position = formattedWorkTitle;
// 	work.employer = formattedWorkEmployer;
// 	work.yearsWorked = formattedworkStart;
// 	work.city = formattedWorkLocation;
// 	work.job_description = formattedWorkDescription;

// $("#workExperience").append(work.employer, work.yearsWorked, work.position, work.city, work.job_description);


// var yearsAttended1 = "2002 - 2007";
// var schoolName1 = "Kennesaw State University";
// var schoolDegree1 = "Bachelor of Science";
// var schoolCity1 = "Kennesaw, GA";
// var major1 = "Exercise and Health Science";

// var formattedSchoolStart1 = HTMLschoolStart.replace("%data%", yearsAttended1);
// var formattedSchoolName1 = HTMLschoolName.replace("%data%", schoolName1);
// var formattedSchoolDegree1 = HTMLschoolDegree.replace("%data%", schoolDegree1);
// var formattedSchoolLocation1 = HTMLschoolLocation.replace("%data%", schoolCity1);
// var formattedSchoolMajor1 = HTMLschoolMajor.replace("%data%", major1);

// var education = {};
// education["yearsAttended1"] = formattedSchoolStart1;
// education["name1"] = formattedSchoolName1;
// education["degree1"] = formattedSchoolDegree1;
// education["schoolLocation1"] = formattedSchoolLocation1;
// education["major1"] = formattedSchoolMajor1;

// $("#education").append(education["name1"], education["yearsAttended1"], education["schoolLocation1"], education["major1"], education["degree1"]);

// //   ***********************************************   \\

// var yearsAttended2 = "2012 - 2014";
// var schoolName2 = "Ashworth College";
// var schoolDegree2 = "Career Diploma";
// var schoolCity2 = "Norcross, GA";
// var major2 = "Computer Programming";

// var formattedSchoolStart2 = HTMLschoolStart.replace("%data%", yearsAttended2);
// var formattedSchoolName2 = HTMLschoolName.replace("%data%", schoolName2);
// var formattedSchoolDegree2 = HTMLschoolDegree.replace("%data%", schoolDegree2);
// var formattedSchoolLocation2 = HTMLschoolLocation.replace("%data%", schoolCity2);
// var formattedSchoolMajor2 = HTMLschoolMajor.replace("%data%", major2);


// var yearsAttended3 = "2015 - Present";
// var schoolName3 = "Udacity";
// var schoolDegree3 = "Nanodegree";
// var schoolCity3 = "Norcross, GA";
// var major3 = "Front-End Web Developer";

// var formattedSchoolStart3 = HTMLschoolStart.replace("%data%", yearsAttended3);
// var formattedSchoolName3 = HTMLschoolName.replace("%data%", schoolName3);
// var formattedSchoolDegree3 = HTMLschoolDegree.replace("%data%", schoolDegree3);
// var formattedSchoolLocation3 = HTMLschoolLocation.replace("%data%", schoolCity3);
// var formattedSchoolMajor3 = HTMLschoolMajor.replace("%data%", major3);

// var education = {
// 	"schools" : [
// 		{
// 			"yearsAttended2" : formattedSchoolStart2,
// 			"name2" : formattedSchoolName2,
// 			"degree2" : formattedSchoolDegree2,
// 			"schoolLocation2" : formattedSchoolLocation2,
// 			"major2" : formattedSchoolMajor2
// 		},
// 		{
// 			"yearsAttended3" : formattedSchoolStart3,
// 			"name3" : formattedSchoolName3,
// 			"degree3" : formattedSchoolDegree3,
// 			"schoolLocation3" : formattedSchoolLocation3,
// 			"major3" : formattedSchoolMajor3
// 		}
// 	]
// };


// $("#education").append(education.schools.name2, education["yearsAttended2"], education["schoolLocation2"], education["major2"], education["degree2"]);
// $("#education").append(education["name3"], education["yearsAttended3"], education["schoolLocation3"], education["major3"], education["degree3"]);
