var prog = function(thing) {

        var a = new Date(2014,8,18);
        var b = new Date();
        var diff = (b.getTime() - a.getTime())/(24*3600*1000); //2

        var perc = (diff/274)*100;

        thing.css("width", perc);

}