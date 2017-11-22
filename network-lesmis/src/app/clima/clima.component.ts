import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.styl']
})
export class ClimaComponent implements OnInit {

dataset = [];

  constructor() { }

  ngOnInit() {

    d3.csv('./assets/clima.csv', (error, data) =>{
this.dataset = data;

//ordenar datos por entidad

var nested =
d3.nest()
      .key(function(d){ return d.ENTIDAD})
      .key(function(d){ return d.MEDIA})
      .entries(data);
    
      console.log(nested)

      //definir escalas

var extent = d3.extent(nested, (d,i) => d.key)
console.log(extent)


      //create svg 

      var svg = d3.select('svg');
      
      var rect = svg.selectAll('rect')
      	.data(nested)
      	.enter().append('rect')
      	.attr('width', 2)
      	
       
    })
  }

}
