//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


var DocApp = angular.module('DocApp',[]);

foodieApp.controller('mainController',function($scope) {
    //$scope is an object to which we can add a list of properties and functions
    // the prop. or function which are present in html file can be accessed though '$scope.property' and $scope can be used inside the controller in which it is defined.
    $scope.doctors = [{
        name: 'Dr Shivam Jar',
        degree: 'BVM',
        experience: '4 Years',
        Specialty: 'Veterinarians',
        location: 'Sitapura',
        cost: '200',
        hours: '10 AM to 8 PM (Mon-Sat)',
        image: 'https://b.zmtcdn.com/data/pictures/3/1401633/f076bdb7e3fda3a87ba182207862632c.jpg',
        id: '1'
    },

    {   name: 'Dr Shivam Jar',
        degree: 'BVM',
        experience: '4 Years',
        Specialty: 'Veterinarians',
        location: 'Sitapura',
        cost: '200',
        hours: '10 AM to 8 PM (Mon-Sat)',
        id: '2'
    }]
})