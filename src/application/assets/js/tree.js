var svg = d3.select("#tree")
	.attr("width", 800).attr("height", 800)
	.append("g").attr("transform", "translate(50, 50)");

var data = [
	{"child": "Intro To Computing", "parent": ""},
	{"child": "Algorithm", "parent": "Intro To Computing"},
	{"child": "Science", "parent": "Intro To Computing"},
	{"child": "Math", "parent": "Intro To Computing"},
];

var dataStruc = d3.stratify()
	.id(function(d) {return d.child;})
	.parentId(function(d) {return d.parent;})
	(data);

var treeStruc = d3.tree().size([500, 500]);
var info = treeStruc(dataStruc);
//console.log(info.descendants());
//console.log(info.links());

var circles = svg.append('g').selectAll("circle")
	.data(info.descendants());

circles.enter().append("circle")
	.attr("cx", function(d) {return d.x;})
	.attr("cy", function(d) {return d.y;})
	.attr('r', 5);

var connections = svg.append('g').selectAll("path")
	.data(info.links());

connections.enter().append("path")
	.attr('d', function(d) {
		return 'M' + d.source.x + ',' + d.source.y + " C " +
		d.source.x + ',' + (d.source.y + d.target.y)/2 + ' ' +
		d.target.x + ',' + (d.source.y + d.target.y)/2 + ' ' +
		d.target.x + ',' + d.target.y;
	});


var names = svg.append('g').selectAll("text")
	.data(info.descendants());

names.enter().append("text")
	.text(function(d) {return d.data.child;})
	.attr('x', function(d) {return d.x + 7;})
	.attr('y', function(d) {return d.y + 4;})