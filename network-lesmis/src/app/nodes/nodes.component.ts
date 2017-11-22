import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.styl']
})
export class NodesComponent implements OnInit {



  constructor() { }

  ngOnInit() {
d3.json('./assets/miserables.json',function(error,data){

  console.log(data)
  var simulation = d3.forceSimulation(data.nodes)
  .force('link', d3.forceLink(data.links).id(function(d) {return d.id}))
  .force('attraction', d3.forceManyBody().strength(50).distanceMin(150))
  .force('repulse', d3.forceManyBody().strength(-50).distanceMax(150))
  .force('center', d3.forceCenter(960 / 2, 500 / 2))
  .on("tick", ticked);

  var links = d3.select('svg')
  .attr('width', 960)
  .attr('height', 500)
  .selectAll('line')
  .data(data.links).enter().append('line')
    .attr('opacity', 0.5)
    .attr('stroke', '#ccc')
    .attr('stroke-width', function(d) {return Math.ceil(d.value / 3)});

var color = d3.scaleOrdinal(d3.schemeCategory10);

    var circles = 
    d3.select('svg')
    .attr('width', 960)
    .attr('height', 500)
    .selectAll('circle')
    .data(data.nodes).enter().append('circle')
      .attr('r', 5)
      .attr('fill', function(d) {return color(d.group)});

  function ticked() {
    circles.attr('cx', function(d) {return d.x})
      .attr('cy', function(d) {return d.y});

    links.attr('x1', function(d) {return d.source.x})
      .attr('x2', function(d) {return d.target.x})
      .attr('y1', function(d) {return d.source.y})
      .attr('y2', function(d) {return d.target.y});
  }
})


    }}
