//header
var bio = {
    'name': 'Lucas Cheung',
    'role': '',
    'contacts': {
        'mobile': '+852 5171 3601',
        'email': 'lucas20229763@hotmail.com',
        'github': 'yeeie201',
        'location': 'Union Plaza, Fanling, Hong Kong'
    },
    'welcomeMessage': 'Welcome to my profile page',
    'skills': ['HTML', 'css', 'Javascript', 'JQuery', 'Positive', 'Simley Face', 'Photoshop', 'Adobe Illustrator', 'Microsoft Office (Word, Excel, Powerpoint, Outlook)'],
    'biopic': 'images/profile.jpg',
};
bio.display = function() {
    var headerName = HTMLheaderName.replace('%data%', bio.name);
    var role = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(role).prepend(headerName);
    var headerContact = HTMLcontactGeneric.replace('%contact%', 'Contact').replace('%data%', bio.contacts.mobile);
    $('#header ul').append(headerContact);
    var headerMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#header ul').append(headerMobile);
    var headerEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#header ul').append(headerEmail);
    var headerGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#header ul').append(headerGithub);
    var headerMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(headerMsg);
    var profilePic = HTMLbioPic.replace('%data%', 'images/profile.jpg');
    $('#header').append(profilePic);

    //skills
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skills = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(skills);
        }
    }
    //footer
    $('#footerContacts').append(headerContact);
    $('#footerContacts').append(headerMobile);
    $('#footerContacts').append(headerEmail);
    $('#footerContacts').append(headerGithub);
};



bio.display();

var education = {
    'schools': [{
        'name': 'General Assembly',
        'location': 'Central, Hong Kong',
        'dates': 'Aug 2015 - Oct 2015',
        'majors': ['Intensive Front-end Web Development Course'],
        'url': 'http://generalassemb.ly/hong-kong'
    }, {
        'name': 'University of Surrey',
        'location': 'University of Surrey, United Kingdom',
        'dates': '2009 - 2012',
        'majors': ['BSc (Hons) International Hospitality Management'],
        'url': 'http://www.surrey.ac.uk/'
    }],
    'onlineCourses': [{
        'school': 'Udacity',
        'title': 'Front-End Web Developer Nanodegree',
        'date': 'Jan 2016 - current',
        'url': 'http://www.udacity.com/'
    }]
};

education.display = function() {
    //school	
    for (var schoolInfo in education.schools) {
        if (education.schools.hasOwnProperty(schoolInfo)) {
            $('#education').append(HTMLschoolStart);
            var school = HTMLschoolName.replace('%data%', education.schools[schoolInfo].name).replace('#', education.schools[schoolInfo].url);
            $('.education-entry:last').append(school);
            $('.education-entry a').attr('target', '_blank');
            var schoolDate = HTMLschoolDates.replace('%data%', education.schools[schoolInfo].dates);
            $('.education-entry:last').append(schoolDate);
            var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[schoolInfo].location);
            $('.education-entry:last').append(schoolLocation);
            var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[schoolInfo].majors);
            $('.education-entry:last').append(schoolMajor);
        }
    }
    //online course
    for (var onlineInfo in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(onlineInfo)) {
            $('#education').append(HTMLonlineClasses).append(HTMLschoolStart);
            var schoolname = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineInfo].title).replace('#', education.onlineCourses[onlineInfo].url) + HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineInfo].school);
            $('.education-entry:last').append(schoolname);
            var courseDate = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineInfo].date);
            $('.education-entry:last').append(courseDate);
        }
    }
};
education.display();

var work = {
    'jobs': [{
        'employer': 'Mirum HK (DesignerCity (HK) Ltd)',
        'title': 'Project Executive',
        'location': '128 Wellington Street, Central, Hong Kong',
        'dates': 'Aug 2014 - Current',
        'description': 'Execute various project deliverables and ensue achievement of objectives and assist staff to manage complex projects.',
        'url': 'https://www.mirumagency.com/hong-kong'
    }, {
        'employer': 'Optimum Media Direction (OMD)',
        'title': 'Digital Executive',
        'location': 'Cyberport, Hong Kong',
        'dates': 'Mar 2014 – Jul 2014',
        'description': 'Prepare different report and use different tools to conduct market research.',
        'url': 'http://www.omd.com/asia-pacific/global-media-agency'
    }],
    'display': function() {
        for (var workInfo in work.jobs) {
            if (work.jobs.hasOwnProperty(workInfo)) {
                $('#workExperience').append(HTMLworkStart);
                var works = HTMLworkEmployer.replace('%data%', work.jobs[workInfo].employer).replace('#', work.jobs[workInfo].url) /*+ HTMLworkTitle.replace('%data%', work.jobs[workInfo].title)*/;
                $('.work-entry:last').append(works);
                $('.work-entry a').attr('target', '_blank');
                var date = HTMLworkDates.replace('%data%', work.jobs[workInfo].dates);
                $('.work-entry:last').append(date);
                var locations = HTMLworkLocation.replace('%data%', work.jobs[workInfo].location);
                $('.work-entry:last').append(locations);
                var descriptions = HTMLworkDescription.replace('%data%', work.jobs[workInfo].description);
                $('.work-entry:last').append(descriptions);
            }
        }
    }
};
work.display();

var projects = {
    'projects': [{
        'title': 'Responsive Profile',
        'dates': 'Jan 2016',
        'description': 'A responsive website',
        'images': ['images/udacity-p1.jpg'],
        'display': '',
        'url': 'http://yeeie201.github.io/websites/udacity-p1/'
    }, {
        'title': 'CLP project',
        'dates': 'Oct 2015',
        'description': 'Developing a signle page template follow layout. (Responsive)',
        'images': ['http://yeeie201.github.io/websites/udacity-p1/image/project_icon/project1.jpg'],
        'display': '',
        'url': 'http://yeeie201.github.io/websites/project08/'
    }, {
        'title': 'SS2015 IC Magazine',
        'dates': 'Mar 2015',
        'description': 'Update and create pages following layout and html template',
        'images': ['http://yeeie201.github.io/websites/udacity-p1/image/project_icon/project2.jpg'],
        'display': '',
        'url': 'http://www.ifc.com.hk/ic/en/ss2015/#/home'
    }]
};
projects.display = function() {
    for (var projectInfo in projects.projects) {
        if (projects.projects.hasOwnProperty(projectInfo)) {
            $('#projects').append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace('%data%', projects.projects[projectInfo].title).replace('#', projects.projects[projectInfo].url);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry a').attr('target', '_blank');
            var projectDates = HTMLprojectDates.replace('%data%', projects.projects[projectInfo].dates);
            $('.project-entry:last').append(projectDates);
            var projectDescription = HTMLprojectDescription.replace('%data%', projects.projects[projectInfo].description);
            $('.project-entry:last').append(projectDescription);
            var projectImage = HTMLprojectImage.replace('%data%', projects.projects[projectInfo].images);
            $('.project-entry:last').append(projectImage);
        }
    }
    $('.project-entry img').css('max-width', '300px');
};
projects.display();

//css fine tune
$('#header').css('background', 'rgba(97,10,10,0.9)');
$('#workExperience,#education').css('background-color', 'transparent');
$('body').css({
    'background-image': 'url(http://yeeie201.github.io/profile/image/background/01.jpg)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
});
$('h2,h3,.date-text,.location-text,#header span').css('color', '#fff');
$('.orange-text').css('color', '#f5a623');
$('#projects').css('background', 'rgba(103, 147, 39 ,0.8)');
$('#projects a,#projects h2,#projects .date-text').css('color', 'rgb(47,64,30)');
$('#lets-connect h2').css('color', 'rgb(97,10,10)');
$('a').css('text-decoration', 'underline');

//google Map
$('#mapDiv').append(googleMap);