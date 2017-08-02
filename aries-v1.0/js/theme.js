// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function searchItem(){
var i = 0;
var userinput = document.getElementById("item").value;
userinput = userinput.toLowerCase();
var compost = ["egg shells", "coffee", "coffee filter", "tea bag, soy milk", "almond milk", "nutshells", "paper carton", "fish", "dairy", "bread", "bones", "pasta", "rice", "bags", "towels", "hair", "dog hair", "cat hair", "fruits", "napkins", "vegetables", "grass", "food scraps","food", "crackers", "starch", "jelly", "wine", "beer", "manure", "weeds", "fish tank water", "leaves", "sawdust", "straw", "used matches", "sticks", "wood chips", "hamster bedding", "toilet paper", "cotton balls", "kleenex", "dryer lint", "cotton clothing", "wool clothing", "old raw hides", "fish food", "alfalfa", "feathers", "chicken droppings", "shit","banana peel","tomato", "banana", "strawberries","apple","peanut butter", "paper towel", "paper", "fruit", "strawberry", "peach", "grapes", "banana", "pear", "pineapple", "grapefruit", "mango", "lemon", "carrot", "spinach", "potato", "broccoli", "tomato", "onion", "cucumber", "lettuce", "kale", "artichoke", "orange"];
var trash = ["meat","styrofoam", "wax cardboard", "string", "gift wrap", "tissue paper", "wood", "renovation material", "light bulb", "aerosol", "paint cans", "plastic wrap", "cat feces", "dog poop", "cat litter", "printed paper", "walnut", "diapers", "anti freeze", "liquid coolant", "mirrors", "mirror", "light bulbs", "take out container", "table ware", "broken holiday decor", "chip bag", "chip bags","foil balloons", "pizza box", "pizza", "take out container", "cup"];
var recycle = ["plastic bag", "cereal box", "newspaper", "cardboard", "aluminum foil", "glass bottles", "plastic milk bottle", "milk jugs", "magazines", "catalogues", "cd", "posted notes", "water bottle", "soda bottle", "aluminum","paper", "can", "soda can", "juice can", "plastic water bottle", "plastic", "plastic bottle", "steel","steel can", "glass", "glass container", "shampoo container","soap bottle", "body wash container", "conditioner bottle", "tin", "aerosol can", "carton", "bottle", "jar","laundry container", "bath container", "tupperware", "crystal","paper bag", "envelope", "jug", "paper", "wine bottle","beer bottle","milk carton", "straw","computer","glasses", "post it", "glass","post its", "straw", "can", "cans", "foil"];
if( compost.indexOf(userinput) > -1) {
  document.getElementById("results").innerHTML = "Compost";
} else if (recycle.indexOf(userinput) > -1) {
  document.getElementById("results").innerHTML = "Recycle";
} else if(trash.indexOf(userinput) > -1) {
  document.getElementById("results").innerHTML = "Landfill";
} else {
  document.getElementById("results").innerHTML = "Not Valid Input";
}
}
