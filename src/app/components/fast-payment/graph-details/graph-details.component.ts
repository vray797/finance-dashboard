import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-graph-details',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule
  ],
  templateUrl: './graph-details.component.html',
  styleUrl: './graph-details.component.css'
})

export class GraphDetailsComponent {
  chartOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Monthly Expenditure Chart"
		},
		axisX: {
			valueFormatString: "MMM",
			intervalType: "month",
			interval: 1
		},
		axisY: {
			title: "Cost",
		  suffix: ""
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function(e: any){
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else{
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			type:"line",
			name: "Minimum",
			showInLegend: true,
			yValueFormatString: "",
			dataPoints: [		
				{ x: new Date(2021, 0, 1), y: 10 },
				{ x: new Date(2021, 1, 1), y: 128 },
				{ x: new Date(2021, 2, 1), y: 25 },
				{ x: new Date(2021, 3, 1), y: 15 },
				{ x: new Date(2021, 4, 1), y: 34 },
				{ x: new Date(2021, 5, 1), y: 44 },
				{ x: new Date(2021, 6, 1), y: 26 },
				{ x: new Date(2021, 7, 1), y: 8 },
				{ x: new Date(2021, 8, 1), y: 21 },
				{ x: new Date(2021, 9, 1), y: 50 },
				{ x: new Date(2021, 10, 1), y: 41 },
				{ x: new Date(2021, 11, 1), y: 33 }
			]
		},
		{
			type: "line",
			name: "Maximum",
			showInLegend: true,
			yValueFormatString: "",
			dataPoints: [
				{ x: new Date(2021, 0, 1), y: 430 },
				{ x: new Date(2021, 1, 1), y: 432 },
				{ x: new Date(2021, 2, 1), y: 540 },
				{ x: new Date(2021, 3, 1), y: 632 },
				{ x: new Date(2021, 4, 1), y: 752 },
				{ x: new Date(2021, 5, 1), y: 820 },
				{ x: new Date(2021, 6, 1), y: 815 },
				{ x: new Date(2021, 7, 1), y: 834 },
				{ x: new Date(2021, 8, 1), y: 756 },
				{ x: new Date(2021, 9, 1), y: 664 },
				{ x: new Date(2021, 10, 1), y: 24 },
				{ x: new Date(2021, 11, 1), y: 404 }
			]
		}]
	}
}
