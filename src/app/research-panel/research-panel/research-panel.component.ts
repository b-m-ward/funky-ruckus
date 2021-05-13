import { Component, OnInit } from '@angular/core';
import { SearchSource } from '../models/SearchSource';

@Component({
  selector: 'app-research-panel',
  templateUrl: './research-panel.component.html',
  styleUrls: ['./research-panel.component.less']
})
export class ResearchPanelComponent implements OnInit {

  ticker: string;
  urls: SearchSource[] = [
    { url: `https://finance.yahoo.com/quote/`, isSearchable: true, prettyName: 'yahoo' },
    { url: `https://www.nasdaq.com/market-activity/stocks/`, isSearchable: true, prettyName: 'nasdaq'},
    { url: `https://seekingalpha.com/symbol/`, isSearchable: true, prettyName: 'seeking alpha'},
    { url: `http://openinsider.com/search?q=`, isSearchable: true, prettyName: 'open insider'},
    { url: `https://www.sec.gov/edgar/search/#/entityName=`, isSearchable: true, prettyName: 'sec EDGAR'},
    { url: `https://stockcharts.com/h-sc/ui?s=`, isSearchable: true, prettyName: 'stockcharts'},
    { url: `https://robinhood.com/stocks/`, isSearchable: true, prettyName: 'robinhood'},
    { url: `https://www.moodys.com/search?keyword=`, isSearchable: true, prettyName: 'moodys' },
    { url: `https://finviz.com/quote.ashx?t=`, isSearchable: true, prettyName: 'f i n v i z'},
    { url: `https://stocktwits.com/symbol/`, isSearchable: true, prettyName: 'stocktwits'} 
    
];
  constructor() { }

  ngOnInit(): void {
  }

  search() : void {
    let searchables = this.urls.filter(r => { return r.isSearchable === true });
    for (var i = 0; i < searchables.length; i++) {
        searchables[i].winRef = window.open(searchables[i].url + this.ticker, searchables[i].prettyName, null, false)
    };
  }
}
